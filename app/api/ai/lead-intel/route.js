import { generateJSON, SYSTEM_PROMPTS } from "@/lib/claude";

export async function POST(request) {
  try {
    const { lead } = await request.json();

    const prompt = `New inbound lead from the IAM assessment tool:

Name: ${lead.name}
Company: ${lead.company}
Role: ${lead.role}
Sector: ${lead.sector}
Overall maturity score: ${lead.score}% (${lead.band})
Top gaps: ${(lead.gaps || []).join(", ")}
Source: ${lead.source || "IAM Assessment"}

Generate the sales intelligence JSON following your system prompt instructions exactly.`;

    const intel = await generateJSON(prompt, SYSTEM_PROMPTS.leadIntel);

    return Response.json({ intel });
  } catch (err) {
    console.error("Lead intel error:", err);
    return Response.json({ intel: null, error: "Intel generation unavailable" }, { status: 200 });
  }
}
