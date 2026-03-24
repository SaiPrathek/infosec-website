"use client";

import { Activity, CheckCircle, AlertTriangle, Clock, TrendingUp, Shield } from "lucide-react";

const metrics = [
  { label: "Service Health", value: "99.8%", sub: "Last 30 days", icon: Activity, accent: true },
  { label: "Open Incidents", value: "2", sub: "P3 & P4 only", icon: AlertTriangle },
  { label: "SLA Adherence", value: "98.2%", sub: "This quarter", icon: CheckCircle, accent: true },
  { label: "Last Full Scan", value: "Today", sub: "08:42 BST", icon: Shield },
];

const incidents = [
  { id: "INC-041", title: "Elevated failed login attempts on IAM portal", priority: "P3", status: "Investigating", raised: "24 Mar 2026", owner: "SOC Team" },
  { id: "INC-038", title: "PAM session recording service restart — no data loss", priority: "P4", status: "Resolved", raised: "20 Mar 2026", owner: "Platform Team" },
];

const monthlyItems = [
  { label: "Privileged accounts reviewed", value: "142 / 142", pct: 100, good: true },
  { label: "Policies reviewed and approved", value: "8 / 10", pct: 80, good: false },
  { label: "Vulnerability patches applied (critical)", value: "12 / 12", pct: 100, good: true },
  { label: "SOC alert review completeness", value: "94%", pct: 94, good: true },
  { label: "User access certifications completed", value: "87%", pct: 87, good: false },
];

export default function HealthPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-black tracking-tight mb-1" style={{ color: "var(--foreground)" }}>Service Health</h1>
        <p className="text-sm" style={{ color: "var(--muted)" }}>Monthly managed service summary, open incidents and SLA performance.</p>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-xl p-4 border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-medium" style={{ color: "var(--muted)" }}>{m.label}</p>
              <m.icon size={14} color={m.accent ? "#5cdda2" : "var(--muted)"} />
            </div>
            <p className="text-2xl font-black" style={{ color: m.accent ? "#5cdda2" : "var(--foreground)" }}>{m.value}</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{m.sub}</p>
          </div>
        ))}
      </div>

      {/* Monthly report */}
      <div className="rounded-xl border p-5 mb-6" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={16} color="#5cdda2" />
          <h2 className="font-bold text-base" style={{ color: "var(--foreground)" }}>March 2026 — Monthly Summary</h2>
        </div>
        <div className="space-y-3">
          {monthlyItems.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm" style={{ color: "var(--foreground)" }}>{item.label}</span>
                <span className="text-sm font-semibold" style={{ color: item.good ? "#5cdda2" : "#eab308" }}>{item.value}</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--surface-high)" }}>
                <div className="h-full rounded-full transition-all" style={{ width: `${item.pct}%`, background: item.good ? "var(--k2k-gradient)" : "linear-gradient(135deg,#eab308,#f59e0b)" }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Open incidents */}
      <div>
        <h2 className="font-bold text-base mb-3" style={{ color: "var(--foreground)" }}>
          Open Incidents <span className="text-sm font-normal ml-1" style={{ color: "var(--muted)" }}>({incidents.filter(i => i.status !== "Resolved").length} active)</span>
        </h2>
        <div className="space-y-3">
          {incidents.map((inc) => (
            <div key={inc.id} className="rounded-xl border p-4 flex items-center gap-4" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: inc.status === "Resolved" ? "rgba(92,221,162,0.1)" : "rgba(234,179,8,0.1)" }}>
                {inc.status === "Resolved"
                  ? <CheckCircle size={18} color="#5cdda2" />
                  : <AlertTriangle size={18} color="#eab308" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono" style={{ color: "var(--muted)" }}>{inc.id}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{ background: "rgba(234,179,8,0.1)", color: "#eab308" }}>{inc.priority}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{ background: inc.status === "Resolved" ? "rgba(92,221,162,0.1)" : "rgba(239,68,68,0.1)", color: inc.status === "Resolved" ? "#5cdda2" : "#ef4444" }}>
                    {inc.status}
                  </span>
                </div>
                <p className="font-semibold text-sm mt-1" style={{ color: "var(--foreground)" }}>{inc.title}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>Raised: {inc.raised} · Owner: {inc.owner}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
