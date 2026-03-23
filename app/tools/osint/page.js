"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Search, Shield, Globe, Database } from "lucide-react";

const capabilities = [
  { icon: Database, label: "Credential exposure", desc: "Leaked passwords and email addresses from data breaches" },
  { icon: Globe, label: "Domain footprint", desc: "Subdomains, exposed services, and DNS records" },
  { icon: Search, label: "Infrastructure mapping", desc: "Open ports, technologies, and public-facing assets" },
  { icon: Shield, label: "Posture signals", desc: "Indicators of shadow IT and unmanaged exposure" },
];

export default function OsintPage() {
  return (
    <div className="pt-16 min-h-screen" style={{ background: "var(--background)" }}>
      {/* Top bar */}
      <div className="border-b px-4 py-3 flex items-center justify-between"
        style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)" }}>
            <Search size={14} color="white" />
          </div>
          <div>
            <p className="font-bold text-sm" style={{ color: "var(--foreground)" }}>OSINT Intelligence Hub</p>
            <p className="text-xs" style={{ color: "var(--muted)" }}>Open-source threat intelligence — Free tool by Infosec K2K</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://osint-dev-new.vercel.app/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border hover:opacity-80 transition-opacity"
            style={{ color: "var(--muted)", borderColor: "var(--border)" }}>
            Open full screen <ExternalLink size={11} />
          </a>
          <Link href="/book"
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg btn-primary">
            Book an expert <ArrowRight size={11} />
          </Link>
        </div>
      </div>

      <div className="flex" style={{ height: "calc(100vh - 8rem)" }}>
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 border-r p-5 shrink-0 overflow-y-auto"
          style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--muted)" }}>
            What this tool surfaces
          </p>
          <div className="space-y-4 mb-8">
            {capabilities.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(59,130,246,0.1)" }}>
                  <Icon size={13} style={{ color: "#3b82f6" }} />
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: "var(--foreground)" }}>{label}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto">
            <div className="rounded-xl p-4 border"
              style={{ background: "rgba(0,164,110,0.06)", borderColor: "rgba(0,164,110,0.2)" }}>
              <p className="text-xs font-semibold mb-1.5" style={{ color: "var(--foreground)" }}>
                Concerned about what you find?
              </p>
              <p className="text-xs mb-3" style={{ color: "var(--muted)" }}>
                Our experts can help you remediate exposure and strengthen your identity posture.
              </p>
              <Link href="/book"
                className="w-full py-2 rounded-lg text-xs font-semibold btn-primary flex items-center justify-center gap-1">
                Book a free call <ArrowRight size={11} />
              </Link>
            </div>

            <div className="mt-4 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
              <p className="text-xs mb-2" style={{ color: "var(--muted)" }}>Also try our IAM assessment:</p>
              <Link href="/assessment"
                className="flex items-center gap-2 text-xs font-medium hover:opacity-70 transition-opacity"
                style={{ color: "var(--k2k-teal)" }}>
                <Shield size={12} /> IAM Maturity Assessment →
              </Link>
            </div>
          </div>
        </aside>

        {/* Iframe */}
        <div className="flex-1 relative">
          <iframe
            src="https://osint-dev-new.vercel.app/"
            className="w-full h-full border-0"
            title="OSINT Intelligence Hub"
            allow="clipboard-write"
          />
        </div>
      </div>
    </div>
  );
}
