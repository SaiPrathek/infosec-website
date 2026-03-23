import { generateText, SYSTEM_PROMPTS } from "@/lib/claude";

export async function POST(request) {
  try {
    const { contact, scores } = await request.json();

    const { overallScore, band, themeScores, gaps } = scores;

    const gapNames = (gaps || []).slice(0, 2).map((g) => g.title).join(" and ");
    const domainSummary = Object.entries(themeScores || {})
      .map(([id, score]) => `${id}: ${score}%`)
      .join(", ");

    const prompt = `Generate an executive IAM maturity assessment brief for the following prospect:

Name: ${contact?.name || "the client"}
Company: ${contact?.company || "their organisation"}
Role: ${contact?.role || "security professional"}
Overall IAM maturity score: ${overallScore}% (${band?.label} band)
Top gaps: ${gapNames || "multiple domains"}
Domain scores: ${domainSummary}

Write 3 paragraphs following the instructions in your system prompt.`;

    const narrative = await generateText(prompt, SYSTEM_PROMPTS.assessmentReport);

    return Response.json({ narrative });
  } catch (err) {
    console.error("AI report error:", err);
    return Response.json({ narrative: null, error: "Report generation unavailable" }, { status: 200 });
  }
}
