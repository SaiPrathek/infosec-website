import { streamChatResponse, SYSTEM_PROMPTS } from "@/lib/claude";
import { createLead } from "@/lib/zoho";

// Detect if the user's message contains an email address
function extractEmail(text) {
  const match = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  return match ? match[0] : null;
}

// Detect if the user's message contains a company name (simple heuristic)
function extractCompany(messages) {
  const allText = messages.map((m) => m.content).join(" ");
  const match = allText.match(/(?:at|from|with|work(?:ing)? (?:at|for))\s+([A-Z][a-zA-Z\s&]+?)(?:\.|,|\s+and|\s+we|\s*$)/);
  return match ? match[1].trim() : "";
}

export async function POST(request) {
  try {
    const { messages, systemPrompt } = await request.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: "messages required" }, { status: 400 });
    }

    // Check if the latest user message contains an email — fire CRM lead in background
    const latestUserMessage = [...messages].reverse().find((m) => m.role === "user");
    if (latestUserMessage) {
      const email = extractEmail(latestUserMessage.content);
      if (email) {
        const company = extractCompany(messages);
        const allText = messages.map((m) => m.content).join(" ");
        createLead({
          name: "Website Chat Lead",
          company: company || "Unknown",
          email,
          role: "",
          source: "Website - AI Chat",
          description: `Chat conversation:\n\n${allText.slice(0, 1000)}`,
        }).catch(() => {}); // fire-and-forget
      }
    }

    const activeSystemPrompt = systemPrompt || SYSTEM_PROMPTS.chatWidget;
    const stream = await streamChatResponse(messages, activeSystemPrompt);

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    console.error("AI chat error:", err);
    return Response.json({ error: "Chat unavailable" }, { status: 500 });
  }
}
