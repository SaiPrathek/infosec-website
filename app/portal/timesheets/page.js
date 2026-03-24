"use client";

import { RefreshCw } from "lucide-react";

const resources = [
  { id: "R001", name: "James Whitfield",  role: "IAM Architect",       location: "UK",      domain: "Identity / IAM",    allocation: 100, status: "active" },
  { id: "R002", name: "Priya Nair",       role: "PAM Engineer",        location: "India",   domain: "Identity / PAM",    allocation: 80,  status: "active" },
  { id: "R003", name: "Tobias Müller",    role: "Compliance Analyst",  location: "Germany", domain: "Assurance",          allocation: 60,  status: "active" },
  { id: "R004", name: "Sophie Adeyemi",   role: "SOC Analyst",         location: "UK",      domain: "Managed Detection", allocation: 100, status: "active" },
  { id: "R005", name: "Arjun Krishnan",   role: "IGA Consultant",      location: "India",   domain: "Identity / IGA",    allocation: 40,  status: "on-hold" },
];

const timesheetEntries = [
  { id: "TS-001", date: "24 Mar 2026", consultant: "James Whitfield",  task: "PAM architecture review — Privileged Access Tier 2 design",     hours: 7.5, project: "IAM Programme Phase 2", domain: "Identity / PAM",    zohoTask: "ZP-2841" },
  { id: "TS-002", date: "24 Mar 2026", consultant: "Priya Nair",       task: "CyberArk Vault configuration — connector policy build",          hours: 8.0, project: "IAM Programme Phase 2", domain: "Identity / PAM",    zohoTask: "ZP-2842" },
  { id: "TS-003", date: "24 Mar 2026", consultant: "Tobias Müller",    task: "DORA compliance gap analysis — ICT third-party risk controls",   hours: 6.0, project: "DORA Readiness",        domain: "Assurance",          zohoTask: "ZP-2850" },
  { id: "TS-004", date: "24 Mar 2026", consultant: "Sophie Adeyemi",   task: "SOC alert triage and escalation — 3 P2 incidents",               hours: 8.0, project: "MDR Managed Service",   domain: "Managed Detection", zohoTask: "ZP-2855" },
  { id: "TS-005", date: "21 Mar 2026", consultant: "James Whitfield",  task: "Stakeholder workshop — access certification design session",     hours: 3.5, project: "IAM Programme Phase 2", domain: "Identity / IAM",    zohoTask: "ZP-2839" },
  { id: "TS-006", date: "21 Mar 2026", consultant: "Priya Nair",       task: "SailPoint IdentityNow — role mining and role catalogue build",   hours: 7.5, project: "IGA Deployment",        domain: "Identity / IGA",    zohoTask: "ZP-2843" },
  { id: "TS-007", date: "21 Mar 2026", consultant: "Tobias Müller",    task: "Evidence collection tracker update — 18 controls reviewed",     hours: 5.0, project: "DORA Readiness",        domain: "Assurance",          zohoTask: "ZP-2851" },
  { id: "TS-008", date: "20 Mar 2026", consultant: "Arjun Krishnan",   task: "IGA policy documentation — joiner/mover/leaver workflows",      hours: 4.0, project: "IGA Deployment",        domain: "Identity / IGA",    zohoTask: "ZP-2846" },
  { id: "TS-009", date: "20 Mar 2026", consultant: "Sophie Adeyemi",   task: "Threat hunting — lateral movement analysis across 3 hosts",     hours: 8.0, project: "MDR Managed Service",   domain: "Managed Detection", zohoTask: "ZP-2856" },
  { id: "TS-010", date: "19 Mar 2026", consultant: "James Whitfield",  task: "PAM playbook authoring — emergency break-glass procedure",      hours: 6.0, project: "IAM Programme Phase 2", domain: "Identity / PAM",    zohoTask: "ZP-2840" },
  { id: "TS-011", date: "19 Mar 2026", consultant: "Priya Nair",       task: "Connector testing — ServiceNow ticketing integration",          hours: 7.0, project: "IGA Deployment",        domain: "Identity / IGA",    zohoTask: "ZP-2844" },
  { id: "TS-012", date: "18 Mar 2026", consultant: "Tobias Müller",    task: "NIS2 gap register review — 12 critical findings triaged",       hours: 4.5, project: "DORA Readiness",        domain: "Assurance",          zohoTask: "ZP-2852" },
];

const locationConfig = {
  UK:      { color: "#5cdda2", bg: "rgba(92,221,162,0.1)",  flag: "🇬🇧" },
  Germany: { color: "#c3c0ff", bg: "rgba(195,192,255,0.1)", flag: "🇩🇪" },
  India:   { color: "#e8a87c", bg: "rgba(232,168,124,0.1)", flag: "🇮🇳" },
};

const statusConfig = {
  "active":  { color: "#22c55e", bg: "rgba(34,197,94,0.1)",   label: "Active" },
  "on-hold": { color: "#94a3b8", bg: "rgba(148,163,184,0.1)", label: "On Hold" },
};

export default function TimesheetsPage() {
  const thisWeekDates = ["24 Mar 2026", "21 Mar 2026"];
  const totalHoursThisWeek = timesheetEntries
    .filter((e) => thisWeekDates.includes(e.date))
    .reduce((acc, e) => acc + e.hours, 0);

  const activeResources = resources.filter((r) => r.status === "active").length;
  const avgUtilisation = Math.round(
    resources.filter((r) => r.status === "active").reduce((a, r) => a + r.allocation, 0) / activeResources
  );
  const openTasks = 14;

  return (
    <div className="p-6">
      {/* Page header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--foreground)" }}>
            Timesheets &amp; Resource Tracking
          </h1>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Time entries and resource utilisation tracked across all active consultants
          </p>
        </div>
        {/* Zoho sync badge */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg border self-start flex-shrink-0"
          style={{ background: "rgba(92,221,162,0.06)", borderColor: "rgba(92,221,162,0.25)" }}>
          <RefreshCw size={12} style={{ color: "#5cdda2" }} />
          <span className="text-xs font-semibold whitespace-nowrap" style={{ color: "#5cdda2" }}>
            Synced with Zoho People &amp; Projects
          </span>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="rounded-xl p-4 border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>Hours this week</p>
          <p className="text-xl font-bold" style={{ color: "#5cdda2" }}>{totalHoursThisWeek}</p>
        </div>
        <div className="rounded-xl p-4 border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>Active resources</p>
          <p className="text-xl font-bold" style={{ color: "#e8a87c" }}>{activeResources}</p>
        </div>
        <div className="rounded-xl p-4 border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>Avg utilisation</p>
          <p className="text-xl font-bold" style={{ color: "#c3c0ff" }}>{avgUtilisation}%</p>
        </div>
        <div className="rounded-xl p-4 border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>Open Zoho tasks</p>
          <p className="text-xl font-bold" style={{ color: "#3b82f6" }}>{openTasks}</p>
        </div>
      </div>

      {/* Resources table */}
      <div className="rounded-xl border overflow-hidden mb-6" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
        <div className="px-5 py-3 border-b flex items-center justify-between"
          style={{ borderColor: "var(--border)" }}>
          <h2 className="text-sm font-bold" style={{ color: "var(--foreground)" }}>Active Resources</h2>
          <span className="text-xs" style={{ color: "var(--muted)" }}>{resources.length} consultants</span>
        </div>
        {/* Header row */}
        <div className="hidden md:grid px-5 py-2.5 border-b text-xs font-semibold uppercase tracking-wider"
          style={{ borderColor: "var(--border)", color: "var(--muted)", gridTemplateColumns: "60px 1fr 160px 120px 160px 70px 80px" }}>
          <span>ID</span>
          <span>Name</span>
          <span>Role</span>
          <span>Location</span>
          <span>Domain</span>
          <span>Alloc</span>
          <span>Status</span>
        </div>
        {resources.map((r) => {
          const lc = locationConfig[r.location] || locationConfig.UK;
          const sc = statusConfig[r.status] || statusConfig.active;
          return (
            <div key={r.id} className="px-5 py-3.5 border-b flex flex-col md:grid items-start md:items-center gap-2 md:gap-0"
              style={{ borderColor: "var(--border)", gridTemplateColumns: "60px 1fr 160px 120px 160px 70px 80px" }}>
              <span className="text-xs font-mono" style={{ color: "var(--muted)" }}>{r.id}</span>
              <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{r.name}</span>
              <span className="text-xs" style={{ color: "var(--muted)" }}>{r.role}</span>
              <span>
                <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ background: lc.bg, color: lc.color }}>
                  {lc.flag} {r.location}
                </span>
              </span>
              <span className="text-xs" style={{ color: "var(--muted)" }}>{r.domain}</span>
              <span className="text-xs font-bold"
                style={{ color: r.allocation >= 80 ? "#5cdda2" : "#e8a87c" }}>
                {r.allocation}%
              </span>
              <span>
                <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ background: sc.bg, color: sc.color }}>
                  {sc.label}
                </span>
              </span>
            </div>
          );
        })}
      </div>

      {/* Timesheet entries table */}
      <div className="rounded-xl border overflow-hidden" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
        <div className="px-5 py-3 border-b flex items-center justify-between"
          style={{ borderColor: "var(--border)" }}>
          <h2 className="text-sm font-bold" style={{ color: "var(--foreground)" }}>Time Entries</h2>
          <span className="text-xs" style={{ color: "var(--muted)" }}>{timesheetEntries.length} entries · 18–24 Mar 2026</span>
        </div>
        {/* Header row */}
        <div className="hidden md:grid px-5 py-2.5 border-b text-xs font-semibold uppercase tracking-wider"
          style={{ borderColor: "var(--border)", color: "var(--muted)", gridTemplateColumns: "90px 130px 1fr 50px 170px 100px 80px" }}>
          <span>Date</span>
          <span>Consultant</span>
          <span>Task / Activity</span>
          <span>Hrs</span>
          <span>Project</span>
          <span>Domain</span>
          <span>Zoho ID</span>
        </div>
        {timesheetEntries.map((entry) => {
          const nameParts = entry.consultant.split(" ");
          const shortName = `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;
          return (
            <div key={entry.id} className="px-5 py-3.5 border-b flex flex-col md:grid items-start md:items-center gap-1 md:gap-0"
              style={{ borderColor: "var(--border)", gridTemplateColumns: "90px 130px 1fr 50px 170px 100px 80px" }}>
              <span className="text-xs" style={{ color: "var(--muted)" }}>
                {entry.date.replace(" 2026", "")}
              </span>
              <span className="text-xs font-medium" style={{ color: "var(--foreground)" }}>{shortName}</span>
              <span className="text-xs leading-snug" style={{ color: "var(--foreground)" }}>{entry.task}</span>
              <span className="text-xs font-bold" style={{ color: "#5cdda2" }}>{entry.hours}</span>
              <span className="text-xs" style={{ color: "var(--muted)" }}>{entry.project}</span>
              <span className="text-xs" style={{ color: "var(--muted)" }}>{entry.domain.split(" / ")[0]}</span>
              <span className="text-xs font-mono" style={{ color: "var(--muted)" }}>{entry.zohoTask}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
