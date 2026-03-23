import { generateInsight } from "@/lib/claude";

export async function POST(request) {
  try {
    const { sectionTitle, answers } = await request.json();

    const answerSummary = Object.entries(answers || {})
      .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
      .join("; ");

    const prompt = `Section: ${sectionTitle}
Answers: ${answerSummary}

Write a 1-2 sentence expert insight about this section's results.`;

    const insight = await generateInsight(prompt);

    return Response.json({ insight });
  } catch (err) {
    console.error("Insight error:", err);
    return Response.json({ insight: null }, { status: 200 });
  }
}
