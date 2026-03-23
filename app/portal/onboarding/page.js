"use client";

import { useState } from "react";
import {
  CheckCircle, Clock, Circle, Upload, AlertTriangle,
  ChevronDown, ChevronUp, FileText, MessageSquare
} from "lucide-react";

const taskGroups = [
  {
    group: "Essential — Complete first",
    color: "#ef4444",
    tasks: [
      {
        id: 1,
        title: "Complete discovery questionnaire",
        desc: "Answer structured questions about your current identity environment, tooling and known gaps. Saves ~30 minutes.",
        status: "in-progress",
        due: "25 Mar 2025",
        owner: "Jane Smith",
        subtasks: [
          { label: "Identity governance section", done: true },
          { label: "Privileged access section", done: true },
          { label: "Authentication section", done: false },
          { label: "Endpoints & secrets section", done: false },
          { label: "Operations section", done: false },
        ],
      },
      {
        id: 2,
        title: "Upload network architecture diagram",
        desc: "Any recent diagram showing your network zones, key systems and cloud/on-premise split. PDF or Visio accepted.",
        status: "pending",
        due: "28 Mar 2025",
        owner: "Jane Smith",
      },
    ],
  },
  {
    group: "Required by kick-off",
    color: "#f97316",
    tasks: [
      {
        id: 3,
        title: "Confirm project kick-off attendees",
        desc: "Provide names and email addresses for all attendees. We need at least one technical lead and one business sponsor.",
        status: "completed",
        due: "20 Mar 2025",
        owner: "Jane Smith",
      },
      {
        id: 4,
        title: "Provide Active Directory export",
        desc: "Export of AD user/group structure (anonymised if preferred). Our team will provide a script if needed.",
        status: "pending",
        due: "1 Apr 2025",
        owner: "IT Team",
      },
    ],
  },
  {
    group: "Supporting information",
    color: "#eab308",
    tasks: [
      {
        id: 5,
        title: "Schedule privileged access workshop",
        desc: "A 90-minute session with your IT ops or security team to walk through privileged account inventory.",
        status: "pending",
        due: "5 Apr 2025",
        owner: "Jane Smith",
      },
    ],
  },
];

const statusConfig = {
  completed: { color: "#22c55e", bg: "rgba(34,197,94,0.1)", label: "Completed", icon: CheckCircle },
  "in-progress": { color: "#00b5df", bg: "rgba(0,181,223,0.1)", label: "In progress", icon: Clock },
  pending: { color: "#94a3b8", bg: "rgba(148,163,184,0.1)", label: "Pending", icon: Circle },
};

function TaskCard({ task }) {
  const [expanded, setExpanded] = useState(task.status === "in-progress");
  const cfg = statusConfig[task.status];
  const Icon = cfg.icon;

  return (
    <div className="rounded-xl border overflow-hidden" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
      <button className="w-full px-5 py-4 flex items-center gap-3 text-left"
        onClick={() => setExpanded(!expanded)}>
        <Icon size={16} style={{ color: cfg.color, flexShrink: 0 }} />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm" style={{
            color: task.status === "completed" ? "var(--muted)" : "var(--foreground)",
            textDecoration: task.status === "completed" ? "line-through" : "none",
          }}>
            {task.title}
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>Due {task.due} · {task.owner}</p>
        </div>
        <span className="text-xs px-2 py-0.5 rounded-full font-medium mr-2 flex-shrink-0"
          style={{ background: cfg.bg, color: cfg.color }}>
          {cfg.label}
        </span>
        {expanded ? <ChevronUp size={14} style={{ color: "var(--muted)", flexShrink: 0 }} /> : <ChevronDown size={14} style={{ color: "var(--muted)", flexShrink: 0 }} />}
      </button>

      {expanded && (
        <div className="px-5 pb-5 border-t" style={{ borderColor: "var(--border)" }}>
          <p className="text-sm leading-relaxed mt-4 mb-4" style={{ color: "var(--muted)" }}>{task.desc}</p>

          {/* Subtasks */}
          {task.subtasks && (
            <div className="space-y-2 mb-4">
              {task.subtasks.map((st) => (
                <div key={st.label} className="flex items-center gap-2">
                  {st.done
                    ? <CheckCircle size={13} style={{ color: "#22c55e" }} />
                    : <Circle size={13} style={{ color: "var(--muted)" }} />}
                  <span className="text-sm" style={{
                    color: st.done ? "var(--muted)" : "var(--foreground)",
                    textDecoration: st.done ? "line-through" : "none",
                  }}>
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {task.status !== "completed" && (
              <>
                {task.subtasks ? (
                  <button className="btn-primary text-xs px-4 py-2 rounded-lg font-semibold">
                    Continue questionnaire
                  </button>
                ) : (
                  <button className="btn-primary text-xs px-4 py-2 rounded-lg font-semibold flex items-center gap-1.5">
                    <Upload size={11} /> Upload file
                  </button>
                )}
              </>
            )}
            <button className="text-xs px-3 py-2 rounded-lg border flex items-center gap-1.5 hover:opacity-70 transition-opacity"
              style={{ color: "var(--muted)", borderColor: "var(--border)" }}>
              <MessageSquare size={11} /> Add comment
            </button>
            <button className="text-xs px-3 py-2 rounded-lg border flex items-center gap-1.5 hover:opacity-70 transition-opacity"
              style={{ color: "var(--muted)", borderColor: "var(--border)" }}>
              <FileText size={11} /> View guidance
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <div className="p-6 max-w-3xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--foreground)" }}>Onboarding tasks</h1>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Complete these tasks to move your engagement into the delivery phase. Items marked high priority are required before the kick-off workshop.
        </p>
      </div>

      {/* Alert */}
      <div className="flex items-start gap-3 p-4 rounded-xl border mb-8"
        style={{ background: "rgba(239,68,68,0.06)", borderColor: "rgba(239,68,68,0.2)" }}>
        <AlertTriangle size={16} style={{ color: "#ef4444", flexShrink: 0, marginTop: 1 }} />
        <p className="text-sm" style={{ color: "var(--foreground)" }}>
          <strong>2 high priority tasks</strong> are due in the next 3 days. Completing them on time will ensure your kick-off workshop can proceed as planned.
        </p>
      </div>

      {/* Task groups */}
      <div className="space-y-8">
        {taskGroups.map((group) => (
          <div key={group.group}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: group.color }} />
              <h2 className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                {group.group}
              </h2>
            </div>
            <div className="space-y-3">
              {group.tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Upload zone */}
      <div className="mt-8 border-2 border-dashed rounded-2xl p-8 text-center"
        style={{ borderColor: "var(--border)" }}>
        <Upload size={24} className="mx-auto mb-3" style={{ color: "var(--muted)" }} />
        <p className="font-semibold text-sm mb-1" style={{ color: "var(--foreground)" }}>Upload a document</p>
        <p className="text-xs mb-4" style={{ color: "var(--muted)" }}>
          PDF, Word, Excel, Visio — max 50MB per file
        </p>
        <button className="btn-primary text-sm px-5 py-2.5 rounded-xl font-semibold">
          Choose file
        </button>
      </div>
    </div>
  );
}
