"use client";

import Link from "next/link";
import {
  CheckCircle, Clock, Upload, FileText,
  BarChart3, Bell, Settings, Shield,
  ChevronRight, Circle
} from "lucide-react";

const tasks = [
  { id: 1, title: "Complete discovery questionnaire", status: "in-progress", due: "25 Mar 2026", priority: "high", owner: "Client" },
  { id: 2, title: "Upload network architecture diagram", status: "pending", due: "28 Mar 2026", priority: "high", owner: "Client" },
  { id: 3, title: "Confirm project kick-off attendees", status: "completed", due: "20 Mar 2026", priority: "medium", owner: "Client" },
  { id: 4, title: "Provide Active Directory export", status: "pending", due: "1 Apr 2026", priority: "medium", owner: "Client" },
  { id: 5, title: "Review assessment summary report", status: "completed", due: "18 Mar 2026", priority: "low", owner: "K2K" },
  { id: 6, title: "Schedule privileged access workshop", status: "pending", due: "5 Apr 2026", priority: "medium", owner: "Client" },
];

const milestones = [
  { label: "Contract & onboarding", status: "completed", date: "10 Mar" },
  { label: "Discovery & questionnaire", status: "in-progress", date: "28 Mar" },
  { label: "Kick-off workshop", status: "upcoming", date: "7 Apr" },
  { label: "Assessment delivery", status: "upcoming", date: "25 Apr" },
  { label: "Roadmap presentation", status: "upcoming", date: "9 May" },
];

const documents = [
  { name: "K2K_Assessment_Summary_v1.pdf", size: "2.4 MB", uploaded: "18 Mar", type: "PDF", by: "K2K" },
  { name: "Project_Statement_of_Work.docx", size: "890 KB", uploaded: "10 Mar", type: "DOC", by: "K2K" },
  { name: "NDA_Signed.pdf", size: "340 KB", uploaded: "8 Mar", type: "PDF", by: "Client" },
];

const statusConfig = {
  completed: { color: "#22c55e", bg: "rgba(34,197,94,0.1)", label: "Completed", icon: CheckCircle },
  "in-progress": { color: "#00b5df", bg: "rgba(0,181,223,0.1)", label: "In progress", icon: Clock },
  pending: { color: "#94a3b8", bg: "rgba(148,163,184,0.1)", label: "Pending", icon: Circle },
  upcoming: { color: "#94a3b8", bg: "rgba(148,163,184,0.1)", label: "Upcoming", icon: Circle },
};

export default function PortalPage() {
  const completedTasks = tasks.filter((t) => t.status === "completed").length;
  const progressPct = Math.round((completedTasks / tasks.length) * 100);

  return (
    <>
      {/* Top bar */}
      <div className="border-b px-6 py-3 flex items-center justify-between"
        style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
        <div>
          <h1 className="font-bold text-lg" style={{ color: "var(--foreground)" }}>Project Dashboard</h1>
          <p className="text-xs" style={{ color: "var(--muted)" }}>IAM Assessment — Onboarding Phase</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg border relative" style={{ borderColor: "var(--border)" }}>
            <Bell size={14} style={{ color: "var(--muted)" }} />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full text-white text-[9px] font-bold flex items-center justify-center"
              style={{ background: "var(--k2k-teal)" }}>2</span>
          </button>
          <button className="p-2 rounded-lg border" style={{ borderColor: "var(--border)" }}>
            <Settings size={14} style={{ color: "var(--muted)" }} />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Summary cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Tasks complete", value: `${completedTasks}/${tasks.length}`, sub: `${progressPct}% done`, color: "var(--k2k-teal)" },
            { label: "Days to next milestone", value: "13", sub: "Kick-off workshop", color: "#00b5df" },
            { label: "Documents uploaded", value: `${documents.length}`, sub: "2 pending review", color: "#a78bfa" },
            { label: "Project status", value: "On track", sub: "No blockers", color: "#22c55e" },
          ].map((card) => (
            <div key={card.label} className="rounded-xl p-4 border"
              style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
              <p className="text-xs mb-2" style={{ color: "var(--muted)" }}>{card.label}</p>
              <p className="font-bold text-xl mb-0.5" style={{ color: card.color }}>{card.value}</p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>{card.sub}</p>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="rounded-xl p-4 border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium" style={{ color: "var(--foreground)" }}>Onboarding progress</span>
            <span className="font-bold" style={{ color: "var(--k2k-teal)" }}>{progressPct}%</span>
          </div>
          <div className="h-2.5 rounded-full" style={{ background: "var(--border)" }}>
            <div className="h-2.5 rounded-full transition-all" style={{ width: `${progressPct}%`, background: "var(--k2k-gradient)" }} />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Tasks */}
          <div className="md:col-span-2 rounded-xl border overflow-hidden"
            style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
            <div className="px-5 py-4 border-b flex items-center justify-between"
              style={{ borderColor: "var(--border)" }}>
              <h2 className="font-bold text-sm" style={{ color: "var(--foreground)" }}>Tasks</h2>
              <Link href="/portal/onboarding" className="text-xs font-semibold text-teal-500 flex items-center gap-0.5">
                View all <ChevronRight size={12} />
              </Link>
            </div>
            <div className="divide-y" style={{ borderColor: "var(--border)" }}>
              {tasks.map((task) => {
                const cfg = statusConfig[task.status];
                const Icon = cfg.icon;
                return (
                  <div key={task.id} className="px-5 py-3 flex items-center gap-3">
                    <Icon size={14} style={{ color: cfg.color, flexShrink: 0 }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate" style={{
                        color: task.status === "completed" ? "var(--muted)" : "var(--foreground)",
                        textDecoration: task.status === "completed" ? "line-through" : "none",
                      }}>
                        {task.title}
                      </p>
                      <p className="text-xs" style={{ color: "var(--muted)" }}>Due {task.due} · {task.owner}</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0"
                      style={{ background: cfg.bg, color: cfg.color }}>
                      {cfg.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Milestones + Documents */}
          <div className="space-y-4">
            {/* Milestones */}
            <div className="rounded-xl border overflow-hidden"
              style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
              <div className="px-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
                <h2 className="font-bold text-sm" style={{ color: "var(--foreground)" }}>Milestones</h2>
              </div>
              <div className="p-4 space-y-3">
                {milestones.map((m) => {
                  const cfg = statusConfig[m.status] || statusConfig.upcoming;
                  return (
                    <div key={m.label} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: cfg.color }} />
                      <div className="flex-1">
                        <p className="text-xs font-medium" style={{ color: m.status === "completed" ? "var(--muted)" : "var(--foreground)" }}>
                          {m.label}
                        </p>
                      </div>
                      <span className="text-xs" style={{ color: "var(--muted)" }}>{m.date}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recent documents */}
            <div className="rounded-xl border overflow-hidden"
              style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
              <div className="px-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
                <h2 className="font-bold text-sm" style={{ color: "var(--foreground)" }}>Documents</h2>
              </div>
              <div className="p-4 space-y-3">
                {documents.map((doc) => (
                  <div key={doc.name} className="flex items-start gap-2">
                    <FileText size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--k2k-teal)" }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate" style={{ color: "var(--foreground)" }}>{doc.name}</p>
                      <p className="text-xs" style={{ color: "var(--muted)" }}>{doc.size} · {doc.uploaded}</p>
                    </div>
                  </div>
                ))}
                <Link href="/portal/upload"
                  className="w-full text-xs font-semibold py-2 rounded-lg border mt-1 flex items-center justify-center gap-1.5 hover:opacity-70 transition-opacity"
                  style={{ color: "var(--k2k-teal)", borderColor: "rgba(0,164,110,0.3)" }}>
                  <Upload size={12} /> Upload document
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
