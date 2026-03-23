"use client";

import { Shield, AlertTriangle, Clock, CheckCircle } from "lucide-react";

const raidItems = [
  { id: "R-001", type: "Risk", title: "Client AD export delayed beyond kick-off", severity: "High", status: "Open", owner: "Jane Smith", date: "15 Mar 2025" },
  { id: "R-002", type: "Risk", title: "Key stakeholder availability during assessment window", severity: "Medium", status: "Mitigated", owner: "K2K PM", date: "12 Mar 2025" },
  { id: "A-001", type: "Assumption", title: "Cloud SSO is Entra ID (Azure AD)", severity: "Medium", status: "Open", owner: "K2K", date: "10 Mar 2025" },
  { id: "I-001", type: "Issue", title: "VPN access not yet provisioned for K2K consultants", severity: "High", status: "Open", owner: "IT Team", date: "18 Mar 2025" },
  { id: "D-001", type: "Dependency", title: "Pentest results from third party due before roadmap phase", severity: "Low", status: "Tracking", owner: "Client", date: "10 Mar 2025" },
  { id: "I-002", type: "Issue", title: "Conflicting documentation on MFA rollout status", severity: "Medium", status: "Resolved", owner: "K2K", date: "14 Mar 2025" },
];

const typeColors = {
  Risk: { color: "#ef4444", bg: "rgba(239,68,68,0.1)" },
  Assumption: { color: "#3b82f6", bg: "rgba(59,130,246,0.1)" },
  Issue: { color: "#f97316", bg: "rgba(249,115,22,0.1)" },
  Dependency: { color: "#a78bfa", bg: "rgba(167,139,250,0.1)" },
};

const severityColors = {
  High: { color: "#ef4444", bg: "rgba(239,68,68,0.1)" },
  Medium: { color: "#f97316", bg: "rgba(249,115,22,0.1)" },
  Low: { color: "#22c55e", bg: "rgba(34,197,94,0.1)" },
};

const statusIcons = {
  Open: { icon: AlertTriangle, color: "#f97316" },
  Mitigated: { icon: Shield, color: "#3b82f6" },
  Tracking: { icon: Clock, color: "#94a3b8" },
  Resolved: { icon: CheckCircle, color: "#22c55e" },
};

export default function RaidPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--foreground)" }}>RAID Log</h1>
        <p className="text-sm" style={{ color: "var(--muted)" }}>Risks, Assumptions, Issues, and Dependencies tracked across the engagement</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {Object.entries(typeColors).map(([type, tc]) => {
          const count = raidItems.filter((i) => i.type === type).length;
          return (
            <div key={type} className="rounded-xl p-4 border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
              <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>{type}s</p>
              <p className="font-bold text-xl" style={{ color: tc.color }}>{count}</p>
            </div>
          );
        })}
      </div>

      {/* Table */}
      <div className="rounded-xl border overflow-hidden" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
        <div className="px-5 py-3 border-b grid grid-cols-12 gap-3 text-xs font-semibold uppercase tracking-wider"
          style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
          <span className="col-span-1">ID</span>
          <span className="col-span-1">Type</span>
          <span className="col-span-4">Title</span>
          <span className="col-span-1">Severity</span>
          <span className="col-span-2">Status</span>
          <span className="col-span-2">Owner</span>
          <span className="col-span-1">Date</span>
        </div>
        {raidItems.map((item) => {
          const tc = typeColors[item.type];
          const sc = severityColors[item.severity];
          const si = statusIcons[item.status];
          const StatusIcon = si.icon;
          return (
            <div key={item.id} className="px-5 py-3.5 border-b grid grid-cols-12 gap-3 items-center"
              style={{ borderColor: "var(--border)" }}>
              <span className="col-span-1 text-xs font-mono" style={{ color: "var(--muted)" }}>{item.id}</span>
              <div className="col-span-1">
                <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: tc.bg, color: tc.color }}>
                  {item.type}
                </span>
              </div>
              <span className="col-span-4 text-sm font-medium" style={{ color: "var(--foreground)" }}>{item.title}</span>
              <div className="col-span-1">
                <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: sc.bg, color: sc.color }}>
                  {item.severity}
                </span>
              </div>
              <div className="col-span-2 flex items-center gap-1.5">
                <StatusIcon size={13} style={{ color: si.color }} />
                <span className="text-xs font-medium" style={{ color: si.color }}>{item.status}</span>
              </div>
              <span className="col-span-2 text-xs" style={{ color: "var(--muted)" }}>{item.owner}</span>
              <span className="col-span-1 text-xs" style={{ color: "var(--muted)" }}>{item.date.replace(" 2025", "")}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
