"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle, Clock, RefreshCw, X, Send } from "lucide-react";

const findings = [
  { id: "F-001", title: "Unrestricted lateral movement via Kerberoastable service accounts", severity: "Critical", status: "Open", category: "Privileged Access", owner: "IT Security", dueDate: "15 Apr 2026", source: "IAM Assessment Q1 2026", description: "17 service accounts with SPNs registered have weak passwords and no MSA/gMSA migration planned. Exploitation could enable full domain compromise." },
  { id: "F-002", title: "Admin accounts used for day-to-day user activity", severity: "High", status: "In Remediation", category: "Identity Governance", owner: "IT Operations", dueDate: "30 Apr 2026", source: "IAM Assessment Q1 2026", description: "14 tier-0 administrators have no separate standard-use account. MFA fatigue and credential theft risk is elevated." },
  { id: "F-003", title: "Orphaned privileged accounts not removed within policy SLA", severity: "High", status: "In Remediation", category: "Identity Governance", owner: "IT Security", dueDate: "20 Apr 2026", source: "IAM Assessment Q1 2026", description: "Quarterly access review identified 43 privileged accounts not linked to active employees. Joiner/mover/leaver process has no automated deprovisioning trigger." },
  { id: "F-004", title: "No MFA enforced for legacy VPN access", severity: "Medium", status: "Resolved", category: "Authentication", owner: "Network Team", dueDate: "10 Apr 2026", source: "IAM Assessment Q1 2026", description: "Legacy IPSEC VPN gateway does not support RADIUS MFA integration. Users authenticate with password only." },
  { id: "F-005", title: "PAM vault credentials not rotated after vendor engagement", severity: "Medium", status: "Open", category: "Privileged Access", owner: "IT Security", dueDate: "22 Apr 2026", source: "IAM Assessment Q1 2026", description: "Third-party vendors are granted temporary PAM access during maintenance windows but shared credentials are not rotated post-session in 6 of 9 documented cases." },
  { id: "F-006", title: "SIEM alert fidelity low — 78% of identity alerts auto-closed without review", severity: "Low", status: "Risk Accepted", category: "Operations", owner: "SOC", dueDate: "—", source: "IAM Assessment Q1 2026", description: "High false-positive rate in identity correlation rules means analyst fatigue is suppressing genuine detections. Alert tuning exercise required." },
];

const severityConfig = {
  Critical: { color: "#ef4444", bg: "rgba(239,68,68,0.1)" },
  High:     { color: "#f97316", bg: "rgba(249,115,22,0.1)" },
  Medium:   { color: "#eab308", bg: "rgba(234,179,8,0.1)" },
  Low:      { color: "#3b82f6", bg: "rgba(59,130,246,0.1)" },
  Informational: { color: "#8b5cf6", bg: "rgba(139,92,246,0.1)" },
};

const statusConfig = {
  "Open":           { color: "#ef4444", icon: AlertTriangle },
  "In Remediation": { color: "#eab308", icon: Clock },
  "Resolved":       { color: "#5cdda2", icon: CheckCircle },
  "Risk Accepted":  { color: "#8b5cf6", icon: RefreshCw },
};

export default function FindingsPage() {
  const [filter, setFilter] = useState("All");
  const [retestModal, setRetestModal] = useState(null);
  const [retestSent, setRetestSent] = useState(false);

  const statuses = ["All", "Open", "In Remediation", "Resolved", "Risk Accepted"];
  const filtered = filter === "All" ? findings : findings.filter(f => f.status === filter);

  const critical = findings.filter(f => f.severity === "Critical" || f.severity === "High").filter(f => f.status === "Open").length;
  const inRemediation = findings.filter(f => f.status === "In Remediation").length;
  const resolved = findings.filter(f => f.status === "Resolved").length;

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-black tracking-tight mb-1" style={{ color: "var(--foreground)" }}>Findings & Remediation</h1>
        <p className="text-sm" style={{ color: "var(--muted)" }}>Track and manage security findings from assessments and testing engagements.</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Findings", value: findings.length, sub: "This engagement" },
          { label: "Open Critical / High", value: critical, sub: "Require immediate action", accent: critical > 0 },
          { label: "In Remediation", value: inRemediation, sub: "Being addressed" },
          { label: "Resolved", value: resolved, sub: "Closed this period" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl p-4 border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
            <p className="text-xs font-medium mb-1" style={{ color: "var(--muted)" }}>{s.label}</p>
            <p className="text-2xl font-black" style={{ color: s.accent ? "#ef4444" : "var(--foreground)" }}>{s.value}</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {statuses.map((s) => (
          <button key={s} onClick={() => setFilter(s)}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
            style={{
              background: filter === s ? "rgba(92,221,162,0.15)" : "var(--surface-high)",
              color: filter === s ? "#5cdda2" : "var(--muted)",
            }}>
            {s}
          </button>
        ))}
      </div>

      {/* Findings table */}
      <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "var(--surface-high)" }}>
                {["ID", "Finding", "Severity", "Status", "Category", "Due Date", ""].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--muted)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((f, i) => {
                const sev = severityConfig[f.severity] || severityConfig.Low;
                const StatusIcon = statusConfig[f.status]?.icon || Clock;
                return (
                  <tr key={f.id} className="border-t" style={{ borderColor: "var(--border)", background: i % 2 === 0 ? "var(--card-bg)" : "var(--surface-lowest)" }}>
                    <td className="px-4 py-3 font-mono text-xs" style={{ color: "var(--muted)" }}>{f.id}</td>
                    <td className="px-4 py-3 max-w-xs">
                      <p className="font-medium text-sm" style={{ color: "var(--foreground)" }}>{f.title}</p>
                      <p className="text-xs mt-0.5 line-clamp-1" style={{ color: "var(--muted)" }}>{f.description}</p>
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold"
                        style={{ background: sev.bg, color: sev.color }}>{f.severity}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="flex items-center gap-1.5 text-xs font-medium"
                        style={{ color: statusConfig[f.status]?.color || "var(--muted)" }}>
                        <StatusIcon size={12} /> {f.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs" style={{ color: "var(--muted)" }}>{f.category}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: "var(--muted)" }}>{f.dueDate}</td>
                    <td className="px-4 py-3">
                      {f.status === "Resolved" && (
                        <button onClick={() => { setRetestModal(f); setRetestSent(false); }}
                          className="text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors"
                          style={{ background: "rgba(92,221,162,0.12)", color: "#5cdda2" }}>
                          Request Retest
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Retest modal */}
      {retestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.6)" }}>
          <div className="w-full max-w-md rounded-2xl p-6 border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-lg" style={{ color: "var(--foreground)" }}>Request Retest</h3>
                <p className="text-sm mt-0.5" style={{ color: "var(--muted)" }}>{retestModal.id} — {retestModal.title}</p>
              </div>
              <button onClick={() => setRetestModal(null)} style={{ color: "var(--muted)" }}><X size={18} /></button>
            </div>
            {retestSent ? (
              <div className="flex flex-col items-center py-6 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: "rgba(92,221,162,0.15)" }}>
                  <CheckCircle size={24} color="#5cdda2" />
                </div>
                <p className="font-semibold" style={{ color: "var(--foreground)" }}>Retest request sent</p>
                <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>Your Infosec K2K consultant will be in touch to schedule the retest engagement.</p>
                <button onClick={() => setRetestModal(null)} className="mt-4 text-sm font-semibold px-4 py-2 rounded-lg" style={{ background: "rgba(92,221,162,0.15)", color: "#5cdda2" }}>Close</button>
              </div>
            ) : (
              <>
                <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>Confirm you'd like to request a retest for this finding. Your consultant will contact you to schedule the engagement.</p>
                <div className="rounded-lg p-3 mb-4 border text-sm" style={{ background: "var(--surface-high)", borderColor: "var(--border)", color: "var(--muted)" }}>
                  <strong style={{ color: "var(--foreground)" }}>Finding:</strong> {retestModal.id}<br />
                  <strong style={{ color: "var(--foreground)" }}>Status:</strong> Resolved (awaiting validation)
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setRetestModal(null)} className="flex-1 py-2 rounded-lg text-sm font-medium border transition-colors" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>Cancel</button>
                  <button onClick={() => setRetestSent(true)}
                    className="flex-1 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                    style={{ background: "var(--k2k-gradient)", color: "#003823" }}>
                    <Send size={14} /> Confirm Request
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
