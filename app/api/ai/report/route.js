import { generateText } from "@/lib/claude";
import { reportPromptBuilders } from "@/lib/prompts";

export async function POST(request) {
  try {
    const { contact, scores, assessmentType } = await request.json();

    const typeId = assessmentType || "iam";
    const builder = reportPromptBuilders[typeId] || reportPromptBuilders.iam;

    const { systemPrompt, userPrompt } = builder({ contact, scores });

    const narrative = await generateText(userPrompt, systemPrompt);

    return Response.json({ narrative });
  } catch (err) {
    console.error("AI report error:", err);
    return Response.json({ narrative: null, error: "Report generation unavailable" }, { status: 200 });
  }
}
