"use client";

import { useState } from "react";
import { Sparkles, Flame, TrendingUp, Minus, Copy, Check, Lock, BarChart3, Users, Star, Clock } from "lucide-react";

const DEMO_LEADS = [
  {
    id: 1,
    name: "Sarah Mitchell",
    company: "Hartley & Partners LLP",
    role: "Head of Information Security",
    sector: "Financial Services",
    score: 31,
    band: "Initial",
    bandColor: "#ef4444",
    gaps: ["Privileged Access Management", "Authentication Coverage", "Identity Governance"],
    source: "IAM Assessment",
    submittedAt: "Today, 09:14",
  },
  {
    id: 2,
    name: "James Okafor",
    company: "Northbridge NHS Trust",
    role: "IT Director",
    sector: "Public Sector",
    score: 48,
    band: "Developing",
    bandColor: "#f97316",
    gaps: ["Endpoints & Secrets", "Operations & Assurance"],
    source: "IAM Assessment",
    submittedAt: "Today, 11:32",
  },
  {
    id: 3,
    name: "Elena Vasquez",
    company: "Meridian Capital Group",
    role: "CISO",
    sector: "Financial Services",
    score: 62,
    band: "Defined",
    bandColor: "#eab308",
    gaps: ["Privileged Access Management", "Operations & Assurance"],
    source: "IAM Assessment + Expert Booking",
    submittedAt: "Yesterday, 16:45",
  },
  {
    id: 4,
    name: "Tom Brewster",
    company: "Axiom Manufacturing GmbH",
    role: "Group IT Manager",
    sector: "Regulated Industry",
    score: 29,
    band: "Initial",
    bandColor: "#ef4444",
    gaps: ["Identity Governance", "Authentication Coverage", "Privileged Access Management"],
    source: "IAM Assessment",
    submittedAt: "Yesterday, 08:21",
  },
];

const PIN = "k2k2024";

function PriorityBadge({ priority }) {
  const config = {
    Hot: { color: "#ef4444", bg: "#ef444415", icon: Flame },
    Warm: { color: "#f97316", bg: "#f9731615", icon: TrendingUp },
    Cold: { color: "#64748b", bg: "#64748b15", icon: Minus },
  };
  const { color, bg, icon: Icon } = config[priority] || config.Cold;
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold"
      style={{ color, background: bg }}>
      <Icon size={11} />
      {priority}
    </span>
  );
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy}
      className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg transition-colors"
      style={{ color: "var(--muted)", background: "var(--background)", border: "1px solid var(--border)" }}>
      {copied ? <><Check size={11} /> Copied</> : <><Copy size={11} /> Copy</>}
    </button>
  );
}

function LeadCard({ lead }) {
  const [intel, setIntel] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generate = async () => {
    setLoading(true);
    setIntel(null);
    setError(null);
    try {
      const res = await fetch("/api/ai/lead-intel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lead }),
      });
      const data = await res.json();
      if (data.intel) setIntel(data.intel);
      else setError("Could not generate intel. Try again.");
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border overflow-hidden" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
      {/* Lead header */}
      <div className="p-5 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
              style={{ background: "var(--k2k-gradient)" }}>
              {lead.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>{lead.name}</p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>{lead.role} · {lead.company}</p>
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-lg font-bold" style={{ color: lead.bandColor }}>{lead.score}%</div>
            <div className="text-xs" style={{ color: "var(--muted)" }}>{lead.band}</div>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="text-xs px-2 py-0.5 rounded-full border" style={{ color: "var(--muted)", borderColor: "var(--border)" }}>
            {lead.sector}
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full border" style={{ color: "var(--muted)", borderColor: "var(--border)" }}>
            {lead.source}
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full border" style={{ color: "var(--muted)", borderColor: "var(--border)" }}>
            <Clock size={9} className="inline mr-1" />{lead.submittedAt}
          </span>
        </div>

        <div className="mt-3">
          <p className="text-xs font-medium mb-1.5" style={{ color: "var(--muted)" }}>Top gaps</p>
          <div className="flex flex-wrap gap-1.5">
            {lead.gaps.map((g) => (
              <span key={g} className="text-xs px-2 py-0.5 rounded-md" style={{ background: "#ef444412", color: "#ef4444" }}>{g}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Generate button / results */}
      <div className="p-5">
        {!intel && !loading && (
          <button onClick={generate}
            className="w-full py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)", color: "white" }}>
            <Sparkles size={14} />
            Generate Sales Intel
          </button>
        )}

        {loading && (
          <div className="space-y-2.5">
            {[100, 85, 70].map((w, i) => (
              <div key={i} className="h-2.5 rounded-full animate-pulse" style={{ background: "var(--border)", width: `${w}%` }} />
            ))}
            <p className="text-xs text-center mt-3" style={{ color: "var(--muted)" }}>Claude is analysing this lead…</p>
          </div>
        )}

        {error && <p className="text-xs text-red-500 text-center">{error}</p>}

        {intel && (
          <div className="space-y-5">
            {/* Priority */}
            <div className="flex items-start gap-3">
              <PriorityBadge priority={intel.priority} />
              <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--muted)" }}>{intel.reasoning}</p>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>Follow-up Email</p>
                <CopyButton text={`Subject: ${intel.emailSubject}\n\n${intel.email}`} />
              </div>
              <div className="rounded-xl p-4 text-xs leading-relaxed" style={{ background: "var(--background)", border: "1px solid var(--border)", color: "var(--foreground)" }}>
                <p className="font-semibold mb-2" style={{ color: "var(--muted)" }}>Subject: {intel.emailSubject}</p>
                <p style={{ whiteSpace: "pre-wrap" }}>{intel.email}</p>
              </div>
            </div>

            {/* Pre-call brief */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>Pre-call Brief</p>
                <CopyButton text={(intel.brief || []).map((b, i) => `${i + 1}. ${b}`).join("\n")} />
              </div>
              <ul className="space-y-2">
                {(intel.brief || []).map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed" style={{ color: "var(--foreground)" }}>
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5"
                      style={{ background: "var(--k2k-gradient)", fontSize: 9 }}>{i + 1}</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Regenerate */}
            <button onClick={generate}
              className="text-xs flex items-center gap-1.5 hover:opacity-70 transition-opacity"
              style={{ color: "var(--muted)" }}>
              <Sparkles size={11} /> Regenerate
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function InternalDashboardPage() {
  const [pin, setPin] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [pinError, setPinError] = useState(false);

  const tryUnlock = () => {
    if (pin === PIN) {
      setUnlocked(true);
    } else {
      setPinError(true);
      setTimeout(() => setPinError(false), 1500);
    }
  };

  if (!unlocked) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center" style={{ background: "var(--background)" }}>
        <div className="w-full max-w-sm px-4">
          <div className="rounded-2xl border p-8 shadow-xl" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 mx-auto"
              style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>
              <Lock size={20} color="white" />
            </div>
            <h1 className="text-xl font-bold text-center mb-1" style={{ color: "var(--foreground)" }}>Sales Intelligence Hub</h1>
            <p className="text-sm text-center mb-6" style={{ color: "var(--muted)" }}>Internal access only</p>
            <input
              type="password"
              placeholder="Enter PIN"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && tryUnlock()}
              className="w-full px-4 py-3 rounded-xl border text-sm text-center tracking-widest mb-3 focus:outline-none transition-colors"
              style={{
                background: "var(--background)",
                borderColor: pinError ? "#ef4444" : "var(--border)",
                color: "var(--foreground)",
              }}
            />
            {pinError && <p className="text-xs text-red-500 text-center mb-3">Incorrect PIN</p>}
            <button onClick={tryUnlock}
              className="w-full py-3 rounded-xl font-semibold text-sm text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>
              Access Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  const hotCount = 2;
  const avgScore = Math.round(DEMO_LEADS.reduce((a, l) => a + l.score, 0) / DEMO_LEADS.length);

  return (
    <div className="pt-16 min-h-screen" style={{ background: "var(--background)" }}>
      {/* Header */}
      <div className="border-b py-2 text-center text-xs font-medium"
        style={{ background: "rgba(124,58,237,0.08)", borderColor: "rgba(124,58,237,0.2)", color: "#7c3aed" }}>
        Internal view · Powered by Claude AI · Not visible to clients
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Page header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={18} style={{ color: "#7c3aed" }} />
            <h1 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>Sales Intelligence Hub</h1>
          </div>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Claude AI analyses every inbound lead and generates personalised follow-up emails and pre-call briefs — automating 30–60 minutes of sales prep per lead.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Leads this week", value: DEMO_LEADS.length, icon: Users },
            { label: "Hot leads", value: hotCount, icon: Flame, color: "#ef4444" },
            { label: "Avg maturity score", value: `${avgScore}%`, icon: BarChart3 },
            { label: "AI briefs generated", value: "12", icon: Star, color: "#7c3aed" },
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="rounded-xl border p-4" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
              <div className="flex items-center gap-2 mb-2">
                <Icon size={14} style={{ color: color || "var(--muted)" }} />
                <span className="text-xs" style={{ color: "var(--muted)" }}>{label}</span>
              </div>
              <p className="text-2xl font-bold" style={{ color: color || "var(--foreground)" }}>{value}</p>
            </div>
          ))}
        </div>

        {/* Lead cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {DEMO_LEADS.map((lead) => (
            <LeadCard key={lead.id} lead={lead} />
          ))}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: "var(--muted)" }}>
          Demo data only · In production, leads populate automatically from CRM in real time
        </p>
      </div>
    </div>
  );
}
