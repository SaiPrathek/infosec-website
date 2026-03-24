"use client";

import { useState } from "react";

const vulns = [
  { id: "V-001", title: "Critical path traversal in customer portal API", severity: "Critical", cvss: 9.8, status: "Open", asset: "portal.demo-client.co.uk", firstSeen: "15 Mar 2026", ageDays: 9, category: "Web Application" },
  { id: "V-002", title: "Outdated OpenSSL on internal web servers (CVE-2024-1234)", severity: "High", cvss: 7.5, status: "In Progress", asset: "web-srv-01, web-srv-02", firstSeen: "10 Mar 2026", ageDays: 14, category: "Infrastructure" },
  { id: "V-003", title: "Default credentials on network management interface", severity: "High", cvss: 8.1, status: "In Progress", asset: "mgmt.internal", firstSeen: "12 Mar 2026", ageDays: 12, category: "Infrastructure" },
  { id: "V-004", title: "Missing HTTP security headers on public web properties", severity: "Medium", cvss: 5.3, status: "Remediated", asset: "www.demo-client.co.uk", firstSeen: "1 Mar 2026", ageDays: 23, category: "Web Application" },
  { id: "V-005", title: "SMBv1 enabled on legacy file servers", severity: "Medium", cvss: 5.9, status: "Accepted", asset: "fileserver-legacy-01", firstSeen: "20 Feb 2026", ageDays: 32, category: "Infrastructure" },
  { id: "V-006", title: "Excessive Active Directory permissions on service accounts", severity: "High", cvss: 7.2, status: "Open", asset: "AD — demo-client.local", firstSeen: "8 Mar 2026", ageDays: 16, category: "IAM" },
  { id: "V-007", title: "TLS 1.0/1.1 still supported on payment gateway", severity: "Medium", cvss: 5.4, status: "In Progress", asset: "pay.demo-client.co.uk", firstSeen: "5 Mar 2026", ageDays: 19, category: "Web Application" },
  { id: "V-008", title: "Unpatched Windows Server 2019 — 3 critical KBs missing", severity: "Critical", cvss: 9.0, status: "Open", asset: "app-srv-04, app-srv-07", firstSeen: "18 Mar 2026", ageDays: 6, category: "Infrastructure" },
];

const sevConfig = {
  Critical: { color: "#ef4444", bg: "rgba(239,68,68,0.1)" },
  High:     { color: "#f97316", bg: "rgba(249,115,22,0.1)" },
  Medium:   { color: "#eab308", bg: "rgba(234,179,8,0.1)" },
  Low:      { color: "#3b82f6", bg: "rgba(59,130,246,0.1)" },
};

const statuses = ["All", "Open", "In Progress", "Remediated", "Accepted"];

export default function VulnsPage() {
  const [sevFilter, setSevFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const severities = ["All", "Critical", "High", "Medium", "Low"];
  const filtered = vulns.filter(v =>
    (sevFilter === "All" || v.severity === sevFilter) &&
    (statusFilter === "All" || v.status === statusFilter)
  );

  const bySev = (sev) => vulns.filter(v => v.severity === sev).length;
  const open = vulns.filter(v => v.status === "Open" || v.status === "In Progress").length;

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-black tracking-tight mb-1" style={{ color: "var(--foreground)" }}>Vulnerability Management</h1>
        <p className="text-sm" style={{ color: "var(--muted)" }}>Open vulnerabilities, severity distribution, ageing and remediation status.</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total", value: vulns.length },
          { label: "Open / In Progress", value: open, accent: open > 0 },
          { label: "Critical", value: bySev("Critical"), accent: bySev("Critical") > 0 },
          { label: "Remediated", value: vulns.filter(v => v.status === "Remediated").length },
        ].map(s => (
          <div key={s.label} className="rounded-xl p-4 border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
            <p className="text-xs font-medium mb-1" style={{ color: "var(--muted)" }}>{s.label}</p>
            <p className="text-2xl font-black" style={{ color: s.accent ? "#ef4444" : "var(--foreground)" }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Severity bar */}
      <div className="rounded-xl border p-4 mb-6" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--muted)" }}>Severity Distribution</p>
        <div className="space-y-2">
          {["Critical","High","Medium","Low"].map(sev => {
            const count = bySev(sev);
            const pct = Math.round((count / vulns.length) * 100);
            const cfg = sevConfig[sev];
            return (
              <div key={sev} className="flex items-center gap-3">
                <span className="text-xs font-semibold w-16" style={{ color: cfg.color }}>{sev}</span>
                <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "var(--surface-high)" }}>
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, background: cfg.color }} />
                </div>
                <span className="text-xs w-4 text-right" style={{ color: "var(--muted)" }}>{count}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="flex gap-1.5 flex-wrap">
          {severities.map(s => (
            <button key={s} onClick={() => setSevFilter(s)}
              className="px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors"
              style={{ background: sevFilter === s ? "rgba(92,221,162,0.15)" : "var(--surface-high)", color: sevFilter === s ? "#5cdda2" : "var(--muted)" }}>
              {s}
            </button>
          ))}
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {statuses.map(s => (
            <button key={s} onClick={() => setStatusFilter(s)}
              className="px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors"
              style={{ background: statusFilter === s ? "rgba(195,192,255,0.15)" : "var(--surface-high)", color: statusFilter === s ? "#c3c0ff" : "var(--muted)" }}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "var(--surface-high)" }}>
                {["ID", "Vulnerability", "Severity", "CVSS", "Status", "Asset", "Age (days)", "Category"].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((v, i) => {
                const cfg = sevConfig[v.severity] || sevConfig.Low;
                return (
                  <tr key={v.id} className="border-t" style={{ borderColor: "var(--border)", background: i % 2 === 0 ? "var(--card-bg)" : "var(--surface-lowest)" }}>
                    <td className="px-4 py-3 font-mono text-xs" style={{ color: "var(--muted)" }}>{v.id}</td>
                    <td className="px-4 py-3 max-w-xs">
                      <p className="font-medium text-sm" style={{ color: "var(--foreground)" }}>{v.title}</p>
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold"
                        style={{ background: cfg.bg, color: cfg.color }}>{v.severity}</span>
                    </td>
                    <td className="px-4 py-3 text-xs font-mono" style={{ color: cfg.color }}>{v.cvss}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: "var(--muted)" }}>{v.status}</td>
                    <td className="px-4 py-3 text-xs font-mono max-w-[140px] truncate" style={{ color: "var(--muted)" }}>{v.asset}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: v.ageDays > 30 ? "#ef4444" : v.ageDays > 14 ? "#eab308" : "var(--muted)" }}>
                      {v.ageDays}
                    </td>
                    <td className="px-4 py-3 text-xs" style={{ color: "var(--muted)" }}>{v.category}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
