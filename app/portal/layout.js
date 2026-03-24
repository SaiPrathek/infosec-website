"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  BarChart3, CheckCircle, FileText, Shield, Upload,
  AlertTriangle, Activity, ClipboardCheck, Bug, ChevronDown,
  Users, Lock, Crosshair,
} from "lucide-react";
import PortalAIAssistant from "@/components/PortalAIAssistant";

const workspaceConfig = {
  "iam-assessment": {
    label: "IAM Assessment",
    tabs: [
      { icon: BarChart3,     label: "Dashboard",    href: "/portal" },
      { icon: CheckCircle,   label: "Tasks",        href: "/portal/onboarding" },
      { icon: FileText,      label: "Documents",    href: "/portal/documents" },
      { icon: Shield,        label: "RAID Log",     href: "/portal/raid" },
      { icon: AlertTriangle, label: "Findings",     href: "/portal/findings" },
      { icon: Upload,        label: "Upload files", href: "/portal/upload" },
    ],
  },
  "managed-services": {
    label: "Managed Services",
    tabs: [
      { icon: BarChart3,     label: "Dashboard",      href: "/portal" },
      { icon: Activity,      label: "Service Health", href: "/portal/health" },
      { icon: FileText,      label: "Reports",        href: "/portal/documents" },
      { icon: Shield,        label: "Open Actions",   href: "/portal/raid" },
      { icon: AlertTriangle, label: "Incidents",      href: "/portal/findings" },
      { icon: Upload,        label: "Upload files",   href: "/portal/upload" },
    ],
  },
  "assurance": {
    label: "Assurance Services",
    tabs: [
      { icon: BarChart3,       label: "Dashboard",  href: "/portal" },
      { icon: CheckCircle,     label: "Tasks",      href: "/portal/onboarding" },
      { icon: ClipboardCheck,  label: "Assurance",  href: "/portal/assurance" },
      { icon: FileText,        label: "Documents",  href: "/portal/documents" },
      { icon: Upload,          label: "Upload files", href: "/portal/upload" },
    ],
  },
  "offensive-security": {
    label: "Offensive Security",
    tabs: [
      { icon: BarChart3,     label: "Dashboard",       href: "/portal" },
      { icon: Crosshair,     label: "Findings",        href: "/portal/findings" },
      { icon: Bug,           label: "Vulnerabilities", href: "/portal/vulns" },
      { icon: FileText,      label: "Documents",       href: "/portal/documents" },
      { icon: Upload,        label: "Upload files",    href: "/portal/upload" },
    ],
  },
};

const projectContext = {
  "iam-assessment":    { name: "Active Engagement", client: "Demo Client", status: "In Progress" },
  "managed-services":  { name: "Managed Identity Programme", client: "Demo Client", status: "Active" },
  "assurance":         { name: "ISO 27001 Assurance", client: "Demo Client", status: "In Progress" },
  "offensive-security":{ name: "Q2 2026 Pentest", client: "Demo Client", status: "Remediation" },
};

export default function PortalLayout({ children }) {
  const pathname = usePathname();
  const [serviceType, setServiceType] = useState("iam-assessment");
  const [selectorOpen, setSelectorOpen] = useState(false);

  const workspace = workspaceConfig[serviceType];
  const project = projectContext[serviceType];

  return (
    <div className="pt-16 min-h-screen flex" style={{ background: "var(--background)" }}>
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r flex-shrink-0"
        style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>

        {/* Project header */}
        <div className="p-4 border-b" style={{ borderColor: "var(--border)" }}>
          <p className="text-xs font-bold uppercase tracking-[0.1em] mb-1" style={{ color: "var(--muted)" }}>Client Portal</p>
          <p className="font-bold text-sm leading-tight" style={{ color: "var(--foreground)" }}>{project.name}</p>
          <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{project.client}</p>
          <span className="inline-flex items-center gap-1 mt-2 text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{ background: "rgba(92,221,162,0.12)", color: "#5cdda2" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#5cdda2]" />
            {project.status}
          </span>
        </div>

        {/* Workspace type selector */}
        <div className="p-3 border-b" style={{ borderColor: "var(--border)" }}>
          <p className="text-xs font-semibold mb-1.5 px-1" style={{ color: "var(--muted)" }}>Workspace</p>
          <div className="relative">
            <button
              onClick={() => setSelectorOpen(!selectorOpen)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{ background: "var(--surface-high)", color: "var(--foreground)" }}>
              {workspace.label}
              <ChevronDown size={14} style={{ color: "var(--muted)" }} />
            </button>
            {selectorOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 rounded-xl border z-10 overflow-hidden"
                style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
                {Object.entries(workspaceConfig).map(([key, cfg]) => (
                  <button key={key}
                    className="w-full text-left px-3 py-2 text-sm transition-colors"
                    style={{
                      color: key === serviceType ? "#5cdda2" : "var(--foreground)",
                      background: key === serviceType ? "rgba(92,221,162,0.08)" : "transparent",
                    }}
                    onClick={() => { setServiceType(key); setSelectorOpen(false); }}>
                    {cfg.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-0.5">
          {workspace.tabs.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                style={{
                  background: isActive ? "rgba(92,221,162,0.12)" : "transparent",
                  color: isActive ? "#5cdda2" : "var(--muted)",
                }}>
                <item.icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User footer */}
        <div className="p-4 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ background: "var(--k2k-gradient)", color: "white" }}>JS</div>
            <div>
              <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>Jane Smith</p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>Client Sponsor</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0">
        {children}
      </main>

      <PortalAIAssistant />
    </div>
  );
}
