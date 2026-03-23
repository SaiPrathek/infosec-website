"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3, CheckCircle, FileText, Shield, Upload,
} from "lucide-react";
import PortalAIAssistant from "@/components/PortalAIAssistant";

const sidebarItems = [
  { icon: BarChart3, label: "Dashboard", href: "/portal" },
  { icon: CheckCircle, label: "Tasks", href: "/portal/onboarding" },
  { icon: FileText, label: "Documents", href: "/portal/documents" },
  { icon: Shield, label: "RAID Log", href: "/portal/raid" },
  { icon: Upload, label: "Upload files", href: "/portal/upload" },
];

export default function PortalLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="pt-16 min-h-screen" style={{ background: "var(--background)" }}>
      {/* Portal notice banner */}
      <div className="border-b py-2 text-center text-xs font-medium"
        style={{ background: "rgba(0,164,110,0.08)", borderColor: "rgba(0,164,110,0.2)", color: "var(--k2k-teal)" }}>
        <span>Preview: This is a prototype of the Infosec K2K Client Portal. </span>
        <Link href="/assessment" className="underline">Try the live assessment instead →</Link>
      </div>

      {/* Portal layout */}
      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-56 border-r py-6 px-3 shrink-0"
          style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <div className="mb-6 px-3">
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--muted)" }}>Project</p>
            <p className="font-bold text-sm" style={{ color: "var(--foreground)" }}>IAM Assessment</p>
            <p className="text-xs" style={{ color: "var(--muted)" }}>Acme Financial Ltd</p>
          </div>
          <nav className="space-y-1 flex-1">
            {sidebarItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link key={item.label} href={item.href}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    background: active ? "rgba(0,164,110,0.12)" : "transparent",
                    color: active ? "var(--k2k-teal)" : "var(--muted)",
                  }}>
                  <item.icon size={15} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="px-3 mt-6 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style={{ background: "var(--k2k-gradient)" }}>J</div>
              <div>
                <p className="text-xs font-medium" style={{ color: "var(--foreground)" }}>Jane Smith</p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>Client Sponsor</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
      <PortalAIAssistant />
    </div>
  );
}
