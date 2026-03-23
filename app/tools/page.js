"use client";

import Link from "next/link";
import { Shield, Search, ArrowRight, Clock, BarChart3 } from "lucide-react";

const tools = [
  {
    id: "assessment",
    icon: BarChart3,
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
    gradient: "from-[#5cdda2] to-[#04a56f]",
    iconColor: "#003823",
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
    gradient: "from-[#3b82f6] to-[#8b5cf6]",
    iconColor: "white",
  },
];

export default function ToolsPage() {
  return (
    <div className="pt-16 min-h-screen bg-[#0e1322]">
      {/* Header */}
      <section className="bg-[#090e1c] py-20 border-b border-[#3d4a42]/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#5cdda2]/5 blur-[80px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block">
            Free Tools
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-[#dee1f7]">
            Know your risk before you{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5cdda2] to-[#04a56f]">
              spend a penny
            </span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-[#bccabf]">
            Two free tools used by 500+ UK security teams. No account required. Immediate results.
          </p>
        </div>
      </section>

      {/* Tool cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div key={tool.id}
                className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 overflow-hidden flex flex-col hover:bg-[#25293a] transition-colors">
                {/* Card header */}
                <div className="p-7 pb-0">
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${tool.gradient}`}>
                      <Icon size={22} color={tool.iconColor} />
                    </div>
                    <div>
                      <p className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[#bccabf] mb-0.5">{tool.tag}</p>
                      <h2 className="text-xl font-extrabold tracking-tight text-[#dee1f7]">{tool.title}</h2>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-5 text-[#bccabf]">{tool.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-5">
                    {tool.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-[#dee1f7]">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#5cdda2]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card footer */}
                <div className="p-7 pt-4 mt-auto">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock size={13} className="text-[#bccabf]" />
                    <span className="text-xs text-[#bccabf]">{tool.time}</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-bold ml-2 bg-[#2f3445] text-[#5cdda2]">
                      Free
                    </span>
                  </div>
                  <Link href={tool.href}
                    className="w-full py-3 rounded-md font-bold text-sm flex items-center justify-center gap-2 btn-primary">
                    {tool.cta} <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-[#1a1f2f] rounded-3xl border border-[#5cdda2]/20 p-10 text-center">
          <h2 className="text-xl font-extrabold tracking-tight mb-2 text-[#dee1f7]">
            Seen enough? Talk to an expert.
          </h2>
          <p className="mb-6 text-[#bccabf]">
            Our teams in the UK, India and Germany are available for a free 30-minute advisory call.
          </p>
          <Link href="/book"
            className="inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-md font-bold text-sm">
            Book a free call <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
