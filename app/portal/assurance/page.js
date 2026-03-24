"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle, MinusCircle, XCircle, Download } from "lucide-react";

const controls = [
  { id: "AC-001", framework: "ISO 27001", controlRef: "A.9.2.1", title: "User registration and de-registration", status: "Evidence Provided", evidenceCount: 3, lastUpdated: "10 Mar 2026", owner: "IT Security" },
  { id: "AC-002", framework: "ISO 27001", controlRef: "A.9.2.3", title: "Management of privileged access rights", status: "Partial", evidenceCount: 1, lastUpdated: "15 Mar 2026", owner: "IT Security" },
  { id: "AC-003", framework: "ISO 27001", controlRef: "A.9.4.2", title: "Secure log-on procedures", status: "Evidence Provided", evidenceCount: 4, lastUpdated: "12 Mar 2026", owner: "IT Operations" },
  { id: "AC-004", framework: "SWIFT CSP", controlRef: "2.2", title: "Security updates", status: "Evidence Provided", evidenceCount: 2, lastUpdated: "8 Mar 2026", owner: "IT Operations" },
  { id: "AC-005", framework: "SWIFT CSP", controlRef: "4.1", title: "Password policy", status: "Gap", evidenceCount: 0, lastUpdated: "—", owner: "IT Security" },
  { id: "AC-006", framework: "SWIFT CSP", controlRef: "5.1", title: "Logical access controls", status: "Partial", evidenceCount: 1, lastUpdated: "18 Mar 2026", owner: "IT Security" },
  { id: "AC-007", framework: "Cyber Essentials", controlRef: "CE-3", title: "User access control", status: "Evidence Provided", evidenceCount: 3, lastUpdated: "14 Mar 2026", owner: "IT Security" },
  { id: "AC-008", framework: "Cyber Essentials", controlRef: "CE-4", title: "Malware protection", status: "Evidence Provided", evidenceCount: 2, lastUpdated: "11 Mar 2026", owner: "IT Operations" },
  { id: "AC-009", framework: "DORA", controlRef: "Art.9", title: "ICT-related incident management", status: "Gap", evidenceCount: 0, lastUpdated: "—", owner: "Risk & Compliance" },
  { id: "AC-010", framework: "DORA", controlRef: "Art.11", title: "Business continuity", status: "Partial", evidenceCount: 1, lastUpdated: "20 Mar 2026", owner: "Risk & Compliance" },
];

const statusConfig = {
  "Evidence Provided": { color: "#5cdda2", bg: "rgba(92,221,162,0.1)", icon: CheckCircle },
  "Partial":           { color: "#eab308", bg: "rgba(234,179,8,0.1)",   icon: MinusCircle },
  "Gap":               { color: "#ef4444", bg: "rgba(239,68,68,0.1)",   icon: XCircle },
  "Not Applicable":    { color: "#64748b", bg: "rgba(100,116,139,0.1)", icon: AlertCircle },
};

const frameworks = ["All", "ISO 27001", "SWIFT CSP", "Cyber Essentials", "DORA"];

function progressFor(fw, ctls) {
  const set = fw === "All" ? ctls : ctls.filter(c => c.framework === fw);
  if (!set.length) return 0;
  const done = set.filter(c => c.status === "Evidence Provided").length;
  return Math.round((done / set.length) * 100);
}

export default function AssurancePage() {
  const [activeFramework, setActiveFramework] = useState("All");

  const filtered = activeFramework === "All" ? controls : controls.filter(c => c.framework === activeFramework);
  const progress = progressFor(activeFramework, controls);
  const gaps = filtered.filter(c => c.status === "Gap");

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight mb-1" style={{ color: "var(--foreground)" }}>Assurance Workspace</h1>
          <p className="text-sm" style={{ color: "var(--muted)" }}>Evidence tracking, control status and compliance pack progress.</p>
        </div>
        <button disabled className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold opacity-40 cursor-not-allowed border"
          style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
          <Download size={14} /> Download Pack
        </button>
      </div>

      {/* Progress summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {frameworks.slice(1).map((fw) => {
          const pct = progressFor(fw, controls);
          return (
            <div key={fw} className="rounded-xl p-4 border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
              <p className="text-xs font-semibold mb-2" style={{ color: "var(--muted)" }}>{fw}</p>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-2xl font-black" style={{ color: "var(--foreground)" }}>{pct}%</span>
                <span className="text-xs mb-1" style={{ color: "var(--muted)" }}>complete</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--surface-high)" }}>
                <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: "var(--k2k-gradient)" }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Framework filter tabs */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {frameworks.map((fw) => (
          <button key={fw} onClick={() => setActiveFramework(fw)}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
            style={{
              background: activeFramework === fw ? "rgba(92,221,162,0.15)" : "var(--surface-high)",
              color: activeFramework === fw ? "#5cdda2" : "var(--muted)",
            }}>
            {fw}
          </button>
        ))}
      </div>

      {/* Controls table */}
      <div className="rounded-xl border overflow-hidden mb-6" style={{ borderColor: "var(--border)" }}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "var(--surface-high)" }}>
                {["Ref", "Control", "Framework", "Status", "Evidence", "Last Updated", "Owner"].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((c, i) => {
                const cfg = statusConfig[c.status] || statusConfig["Partial"];
                const Icon = cfg.icon;
                return (
                  <tr key={c.id} className="border-t" style={{ borderColor: "var(--border)", background: i % 2 === 0 ? "var(--card-bg)" : "var(--surface-lowest)" }}>
                    <td className="px-4 py-3 font-mono text-xs" style={{ color: "var(--muted)" }}>{c.controlRef}</td>
                    <td className="px-4 py-3 max-w-xs">
                      <p className="font-medium text-sm" style={{ color: "var(--foreground)" }}>{c.title}</p>
                    </td>
                    <td className="px-4 py-3 text-xs" style={{ color: "var(--muted)" }}>{c.framework}</td>
                    <td className="px-4 py-3">
                      <span className="flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full w-fit"
                        style={{ background: cfg.bg, color: cfg.color }}>
                        <Icon size={11} /> {c.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-center" style={{ color: c.evidenceCount ? "var(--foreground)" : "var(--muted)" }}>
                      {c.evidenceCount || "—"}
                    </td>
                    <td className="px-4 py-3 text-xs" style={{ color: "var(--muted)" }}>{c.lastUpdated}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: "var(--muted)" }}>{c.owner}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Gap tracker */}
      {gaps.length > 0 && (
        <div>
          <h2 className="text-base font-bold mb-3" style={{ color: "var(--foreground)" }}>
            Gap Tracker <span className="text-sm font-normal ml-1" style={{ color: "var(--muted)" }}>({gaps.length} gaps requiring evidence)</span>
          </h2>
          <div className="space-y-3">
            {gaps.map((g) => (
              <div key={g.id} className="rounded-xl border p-4 flex items-start gap-4" style={{ background: "var(--card-bg)", borderColor: "rgba(239,68,68,0.2)" }}>
                <XCircle size={18} color="#ef4444" className="flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono" style={{ color: "var(--muted)" }}>{g.framework} {g.controlRef}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(239,68,68,0.1)", color: "#ef4444" }}>No evidence</span>
                  </div>
                  <p className="font-semibold text-sm mt-1" style={{ color: "var(--foreground)" }}>{g.title}</p>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>Owner: {g.owner} · Upload evidence to close this gap</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
