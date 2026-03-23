"use client";

import Link from "next/link";
import { Shield, Search, ArrowRight, Clock, BarChart3, FileText, Lock } from "lucide-react";

const tools = [
  {
    id: "assessment",
    icon: Shield,
    tag: "IAM SECURITY",
    title: "IAM Maturity Assessment",
    description:
      "Answer 22 targeted questions across 5 identity domains. Get a personalised maturity score, domain breakdown, and prioritised recommendations — in under 10 minutes.",
    features: [
      "5 domain maturity scores",
      "Personalised gap analysis",
      "Recommended next steps",
      "Printable report",
    ],
    time: "~10 minutes",
    cta: "Start Assessment",
    href: "/assessment",
    gradient: "linear-gradient(135deg, #00a46e 0%, #00b5df 100%)",
    highlight: true,
  },
  {
    id: "osint",
    icon: Search,
    tag: "THREAT INTELLIGENCE",
    title: "OSINT Intelligence Hub",
    description:
      "Surface open-source intelligence about your organisation's external exposure — leaked credentials, exposed infrastructure, shadow IT, and more.",
    features: [
      "Credential exposure check",
      "Domain & subdomain mapping",
      "Dark web monitoring signals",
      "Infrastructure footprint",
    ],
    time: "Results in seconds",
    cta: "Open OSINT Hub",
    href: "/tools/osint",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
    highlight: false,
  },
];

export default function ToolsPage() {
  return (
    <div className="pt-24 min-h-screen" style={{ background: "var(--background)" }}>
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border"
          style={{ color: "var(--k2k-teal)", borderColor: "rgba(0,164,110,0.3)", background: "rgba(0,164,110,0.06)" }}>
          FREE TOOLS
        </div>
        <h1 className="text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
          Know your risk before you <span className="gradient-text">spend a penny</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
          Two free tools used by 500+ UK security teams. No account required. Immediate results.
        </p>
      </div>

      {/* Tool cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div key={tool.id}
                className="rounded-2xl border overflow-hidden flex flex-col"
                style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
                {/* Card header */}
                <div className="p-6 pb-0">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: tool.gradient }}>
                      <Icon size={22} color="white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-wider mb-0.5" style={{ color: "var(--muted)" }}>{tool.tag}</p>
                      <h2 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>{tool.title}</h2>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>{tool.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-5">
                    {tool.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "var(--foreground)" }}>
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--k2k-teal)" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card footer */}
                <div className="p-6 pt-4 mt-auto">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock size={13} style={{ color: "var(--muted)" }} />
                    <span className="text-xs" style={{ color: "var(--muted)" }}>{tool.time}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full font-semibold ml-2"
                      style={{ background: "rgba(0,164,110,0.1)", color: "var(--k2k-teal)" }}>
                      Free
                    </span>
                  </div>
                  <Link href={tool.href}
                    className="w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 btn-primary">
                    {tool.cta} <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl p-8 text-center"
          style={{ background: "rgba(0,164,110,0.06)", border: "1px solid rgba(0,164,110,0.2)" }}>
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
            Seen enough? Talk to an expert.
          </h2>
          <p className="mb-6" style={{ color: "var(--muted)" }}>
            Our teams in the UK, India and Germany are available for a free 30-minute advisory call.
          </p>
          <Link href="/book"
            className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-xl font-semibold text-sm">
            Book a free call <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
