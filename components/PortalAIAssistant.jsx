"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Loader2, ChevronDown } from "lucide-react";
import { SYSTEM_PROMPTS } from "@/lib/prompts";

const INITIAL_MESSAGE = {
  role: "assistant",
  content: "Hi! I'm your K2K project assistant. I have full context on your IAM engagement — tasks, milestones, and current risks. What can I help you with?",
};

export default function PortalAIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || streaming) return;

    const userMessage = { role: "user", content: text };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setStreaming(true);
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
          systemPrompt: SYSTEM_PROMPTS.portalAssistant,
        }),
      });

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const lines = decoder.decode(value, { stream: true }).split("\n");
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6).trim();
          if (data === "[DONE]") break;
          try {
            const parsed = JSON.parse(data);
            if (parsed.text) {
              accumulated += parsed.text;
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = { role: "assistant", content: accumulated };
                return updated;
              });
            }
          } catch {}
        }
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: "assistant", content: "Sorry, I'm having trouble right now. Contact your consultant James directly for urgent queries." };
        return updated;
      });
    } finally {
      setStreaming(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {/* Chat panel */}
      {open && (
        <div
          className="absolute bottom-14 right-0 w-80 rounded-2xl border shadow-2xl flex flex-col overflow-hidden mb-2"
          style={{
            background: "var(--card-bg)",
            borderColor: "var(--border)",
            height: 380,
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-2.5 px-4 py-3 border-b flex-shrink-0"
            style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
            <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "var(--k2k-gradient)" }}>
              <Bot size={13} color="white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold leading-none" style={{ color: "var(--foreground)" }}>K2K Project AI</p>
              <p className="text-xs mt-0.5" style={{ color: "var(--k2k-teal)" }}>● Online</p>
            </div>
            <button onClick={() => setOpen(false)} style={{ color: "var(--muted)" }}>
              <ChevronDown size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                {msg.role === "assistant" && (
                  <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "var(--k2k-gradient)" }}>
                    <Bot size={11} color="white" />
                  </div>
                )}
                <div
                  className="max-w-[85%] px-3 py-2 rounded-xl text-xs leading-relaxed"
                  style={{
                    background: msg.role === "user" ? "var(--k2k-gradient)" : "var(--background)",
                    color: msg.role === "user" ? "white" : "var(--foreground)",
                    border: msg.role === "assistant" ? "1px solid var(--border)" : "none",
                    borderRadius: msg.role === "user" ? "12px 12px 2px 12px" : "2px 12px 12px 12px",
                  }}
                >
                  {msg.content || (
                    <span className="inline-flex gap-1">
                      {[0, 150, 300].map((d) => (
                        <span key={d} className="w-1 h-1 rounded-full animate-bounce"
                          style={{ background: "var(--muted)", animationDelay: `${d}ms` }} />
                      ))}
                    </span>
                  )}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-2.5 border-t flex gap-2 items-center flex-shrink-0" style={{ borderColor: "var(--border)" }}>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about your project…"
              disabled={streaming}
              className="flex-1 px-3 py-1.5 rounded-lg text-xs focus:outline-none disabled:opacity-50"
              style={{ background: "var(--background)", border: "1px solid var(--border)", color: "var(--foreground)" }}
            />
            <button onClick={sendMessage} disabled={!input.trim() || streaming}
              className="w-7 h-7 rounded-lg flex items-center justify-center disabled:opacity-40 flex-shrink-0"
              style={{ background: "var(--k2k-gradient)" }}>
              {streaming
                ? <Loader2 size={12} color="white" className="animate-spin" />
                : <Send size={12} color="white" />
              }
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-lg text-white text-xs font-semibold transition-transform hover:scale-105"
        style={{ background: "var(--k2k-gradient)" }}
      >
        <Bot size={14} />
        Ask K2K AI
        {open && <X size={12} />}
      </button>
    </div>
  );
}
