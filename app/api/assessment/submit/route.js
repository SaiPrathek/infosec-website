import { createLead, addNote } from "@/lib/zoho";
import { notifyAssessmentComplete } from "@/lib/email";

export async function POST(request) {
  try {
    const body = await request.json();
    const { contact, scores, assessmentType } = body;

    if (!contact?.email || !contact?.name) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Build assessment note content
    const domainSummary = scores.themeScores
      ? Object.entries(scores.themeScores).map(([id, score]) => `${id}: ${score}%`).join("\n")
      : "";

    const gapSummary = (scores.gaps || [])
      .map((g) => `- ${g.title} (${g.score}%)`)
      .join("\n");

    const typeLabel = assessmentType || "iam";
    const description = `${typeLabel.toUpperCase()} Assessment completed via website.\n\nOverall Score: ${scores.overallScore}%\nMaturity Band: ${scores.band?.label}\n\nDomain Scores:\n${domainSummary}\n\nTop Gaps:\n${gapSummary}\n\nRecommended Service: ${scores.band?.recommendation}`;

    // Create or update Zoho CRM lead
    const lead = await createLead({
      name: contact.name,
      company: contact.company,
      email: contact.email,
      role: contact.role,
      source: `Website - ${typeLabel.toUpperCase()} Assessment`,
      description,
    });

    // Attach detailed note with scores
    if (lead.id && !lead.demo) {
      await addNote(lead.id, {
        title: `${typeLabel.toUpperCase()} Assessment Results — ${scores.band?.label} (${scores.overallScore}%)`,
        content: description,
      });
    }

    // Notify the team
    await notifyAssessmentComplete({ contact, scores });

    return Response.json({ success: true, leadId: lead.id });
  } catch (error) {
    console.error("[API /assessment/submit]", error);
    // Return success anyway — don't block user from seeing results
    return Response.json({ success: true, error: "Notification pending" });
  }
}
