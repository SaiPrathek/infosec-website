import Link from "next/link";
import { ArrowRight, BarChart3, TrendingUp, Shield, Lock, ShieldAlert, CheckCircle } from "lucide-react";

const services = [
  {
    slug: "assessment",
    icon: BarChart3,
    title: "IAM Assessment",
    tagline: "Understand your current posture — honestly",
    desc: "A structured, 22-question assessment across five IAM domains. You get a maturity score, gap analysis and prioritised recommendations.",
    outcomes: ["Know exactly where your gaps are", "Benchmark against sector peers", "Get a ready-to-present board summary"],
    time: "2–4 weeks",
    badge: "Most popular starting point",
  },
  {
    slug: "roadmap",
    icon: TrendingUp,
    title: "Roadmap & Strategy",
    tagline: "A prioritised, costed path to target maturity",
    desc: "Turn your assessment findings into a practical, board-ready roadmap that prioritises risk reduction, aligns to budget and sequences delivery realistically.",
    outcomes: ["Clear 12–24 month programme plan", "Quick wins identified and costed", "Executive presentation ready"],
    time: "4–6 weeks",
    badge: null,
  },
  {
    slug: "implementation",
    icon: Shield,
    title: "Implementation",
    tagline: "Hands-on delivery, not just advice",
    desc: "From PAM deployments and MFA rollouts to IGA platform implementation — we deliver, configure and handover with full knowledge transfer.",
    outcomes: ["Named delivery leads throughout", "Tracked via your client portal", "Full documentation and runbooks"],
    time: "Project-based",
    badge: null,
  },
  {
    slug: "implementation",
    icon: Lock,
    title: "Optimisation",
    tagline: "More value from tools you already own",
    desc: "Many organisations have IAM tooling in place that isn't being used to its potential. We tune, expand and improve existing deployments.",
    outcomes: ["Tool utilisation audit", "Coverage expansion plan", "Configuration hardening"],
    time: "4–8 weeks",
    badge: null,
  },
  {
    slug: "managed",
    icon: ShieldAlert,
    title: "Managed Services",
    tagline: "Ongoing identity security, without the overhead",
    desc: "Continuous monitoring, access reviews, incident response and periodic health assessments — delivered as a flexible managed service.",
    outcomes: ["Regular access certification campaigns", "Identity threat monitoring", "Quarterly posture reviews"],
    time: "Ongoing subscription",
    badge: null,
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16" style={{ background: "var(--background)" }}>
      {/* Hero */}
      <section className="py-16 border-b" style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
            Services built around <span className="gradient-text">your maturity</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            Every engagement starts with understanding where you are. Our services are designed to meet you there and move you forward.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {services.map((s, i) => (
            <div key={i} className="rounded-2xl p-8 border hover:shadow-lg transition-shadow"
              style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(0,164,110,0.12)" }}>
                    <s.icon size={22} style={{ color: "var(--k2k-teal)" }} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h2 className="font-bold text-xl" style={{ color: "var(--foreground)" }}>{s.title}</h2>
                    {s.badge && (
                      <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                        style={{ background: "rgba(0,164,110,0.15)", color: "var(--k2k-teal)" }}>
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold mb-2" style={{ color: "var(--k2k-teal)" }}>{s.tagline}</p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>{s.desc}</p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {s.outcomes.map((o) => (
                      <div key={o} className="flex items-center gap-1.5 text-xs">
                        <CheckCircle size={12} style={{ color: "var(--k2k-teal)" }} />
                        <span style={{ color: "var(--foreground)" }}>{o}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-xs px-3 py-1 rounded-full border" style={{ color: "var(--muted)", borderColor: "var(--border)" }}>
                      Typical: {s.time}
                    </span>
                    <Link href={`/services/${s.slug}`}
                      className="text-sm font-semibold text-teal-500 hover:text-teal-400 transition-colors flex items-center gap-1">
                      Learn more <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ background: "var(--card-bg)" }}>
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>Not sure where to start?</h2>
          <p className="text-base mb-6" style={{ color: "var(--muted)" }}>
            Take our free assessment and we&apos;ll tell you exactly which service fits your current maturity.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/assessment" className="btn-primary px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2">
              Start free assessment <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="px-6 py-3 rounded-xl border font-semibold text-sm inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
              style={{ color: "var(--foreground)", borderColor: "var(--border)" }}>
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
