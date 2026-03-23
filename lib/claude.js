import Anthropic from "@anthropic-ai/sdk";
export { SYSTEM_PROMPTS } from "./prompts.js";

const DEMO_MODE = !process.env.ANTHROPIC_API_KEY;

let client = null;
function getClient() {
  if (!client) client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  return client;
}

// ─── Demo mode canned responses ────────────────────────────────────────────────

const DEMO_RESPONSES = {
  chat: "Thanks for reaching out. I'm the K2K AI assistant — I help organisations understand their IAM security posture. Could you tell me a bit about your company and the identity security challenges you're facing? I'd love to point you in the right direction.",

  report: `Based on your assessment results, your organisation shows a developing identity security posture with meaningful gaps in several high-risk areas. While foundational controls are in place, the current maturity level leaves your business exposed to credential-based attacks and compliance shortfalls that are increasingly scrutinised by regulators and cyber insurers alike.

Your two most critical gaps are in privileged access management and authentication coverage. Without vaulted credentials and consistent MFA enforcement, a single compromised account — particularly a service account or admin — can escalate across your entire estate. This is the attack vector behind the majority of significant breaches in your sector.

The most impactful next step is a structured IAM roadmap engagement. This would prioritise your gaps by risk, map them to your existing tooling, and give your team a clear 12-month delivery plan. Given your current posture, acting before your next compliance review or audit cycle will significantly reduce remediation pressure.`,

  leadIntel: {
    priority: "Hot",
    reasoning: "Score of 34% with critical gaps in PAM and MFA indicates immediate risk exposure and active budget pressure typical of pre-audit engagements.",
    emailSubject: "Your IAM Assessment Results — Recommended Next Steps",
    email: `I wanted to follow up personally on your IAM maturity assessment completed earlier today.

Your results highlight some specific gaps in privileged access and authentication coverage that we see frequently in financial services organisations preparing for regulatory review. These are areas where targeted action delivers fast, measurable risk reduction.

I'd love to set up a 30-minute call to walk through what we're seeing and what a practical next step looks like for your environment — no obligation, just a focused conversation.

Would any time this week or next work for you?`,
    brief: [
      "Financial services firm, likely under FCA/PRA scrutiny — compliance timeline is probably the real driver behind the assessment",
      "PAM and MFA gaps suggest manual or inconsistent privileged access controls — probe for number of admin accounts and current vaulting approach",
      "Ask about upcoming audits, cyber insurance renewal dates, and whether they've had any recent identity-related incidents",
      "Likely objection: 'We already have tools in place' — counter by focusing on configuration gaps and governance maturity, not just tool presence",
      "Lead with IAM Assessment & Roadmap — they need a prioritised plan before implementation makes sense"
    ]
  },

  insight: "Your responses suggest identity lifecycle processes are largely manual, which typically creates orphaned accounts and delayed access revocations — a common audit finding in regulated environments.",
};

// ─── Streaming chat ────────────────────────────────────────────────────────────

export async function streamChatResponse(messages, systemPrompt) {
  if (DEMO_MODE) {
    // Return a fake stream that emits the demo response word by word
    const words = DEMO_RESPONSES.chat.split(" ");
    const encoder = new TextEncoder();
    return new ReadableStream({
      async start(controller) {
        for (const word of words) {
          await new Promise((r) => setTimeout(r, 40));
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text: word + " " })}\n\n`));
        }
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
      },
    });
  }

  const anthropic = getClient();
  const stream = await anthropic.messages.stream({
    model: "claude-sonnet-4-6",
    max_tokens: 400,
    system: systemPrompt || SYSTEM_PROMPTS.chatWidget,
    messages,
  });

  const encoder = new TextEncoder();
  return new ReadableStream({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (event.type === "content_block_delta" && event.delta?.type === "text_delta") {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`));
          }
        }
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      } catch (err) {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: "Stream error" })}\n\n`));
      } finally {
        controller.close();
      }
    },
  });
}

// ─── Generate text (assessment narrative) ─────────────────────────────────────

export async function generateText(prompt, systemPrompt) {
  if (DEMO_MODE) {
    await new Promise((r) => setTimeout(r, 800));
    return DEMO_RESPONSES.report;
  }
  const anthropic = getClient();
  const msg = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 400,
    system: systemPrompt || SYSTEM_PROMPTS.assessmentReport,
    messages: [{ role: "user", content: prompt }],
  });
  return msg.content[0]?.text ?? "";
}

// ─── Generate JSON (lead intel) ────────────────────────────────────────────────

export async function generateJSON(prompt, systemPrompt) {
  if (DEMO_MODE) {
    await new Promise((r) => setTimeout(r, 1000));
    return DEMO_RESPONSES.leadIntel;
  }
  const anthropic = getClient();
  const msg = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 800,
    system: systemPrompt || SYSTEM_PROMPTS.leadIntel,
    messages: [{ role: "user", content: prompt }],
  });
  const raw = msg.content[0]?.text ?? "{}";
  try {
    return JSON.parse(raw);
  } catch {
    // Try to extract JSON from the response
    const match = raw.match(/\{[\s\S]*\}/);
    if (match) return JSON.parse(match[0]);
    return DEMO_RESPONSES.leadIntel;
  }
}

// ─── Generate short insight ────────────────────────────────────────────────────

export async function generateInsight(prompt) {
  if (DEMO_MODE) {
    await new Promise((r) => setTimeout(r, 600));
    return DEMO_RESPONSES.insight;
  }
  const anthropic = getClient();
  const msg = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 100,
    system: SYSTEM_PROMPTS.sectionInsight,
    messages: [{ role: "user", content: prompt }],
  });
  return msg.content[0]?.text ?? "";
}
