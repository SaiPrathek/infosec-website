import Link from "next/link";
import { ArrowRight, BarChart3, TrendingUp, Shield, Lock, ShieldAlert, CheckCircle, Zap, HeadphonesIcon } from "lucide-react";

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
    icon: Zap,
    title: "Optimisation",
    tagline: "More value from tools you already own",
    desc: "Many organisations have IAM tooling in place that isn't being used to its potential. We tune, expand and improve existing deployments.",
    outcomes: ["Tool utilisation audit", "Coverage expansion plan", "Configuration hardening"],
    time: "4–8 weeks",
    badge: null,
  },
  {
    slug: "managed",
    icon: HeadphonesIcon,
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
    <div className="pt-16 bg-[#0e1322] min-h-screen">
      {/* Hero */}
      <section className="bg-[#090e1c] py-20 border-b border-[#3d4a42]/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#5cdda2]/5 blur-[80px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block">
            End-to-End Delivery
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-[#dee1f7]">
            Services built around{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5cdda2] to-[#04a56f]">
              your maturity
            </span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-[#bccabf]">
            Every engagement starts with understanding where you are. Our services are designed to meet you there and move you forward.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-[#0e1322] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {services.map((s, i) => (
            <div key={i} className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 hover:bg-[#25293a] transition-colors p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#5cdda2]/10">
                    <s.icon size={22} className="text-[#5cdda2]" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h2 className="font-extrabold text-xl tracking-tight text-[#dee1f7]">{s.title}</h2>
                    {s.badge && (
                      <span className="text-xs px-3 py-1 rounded-full font-bold bg-[#2f3445] text-[#5cdda2]">
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-bold mb-2 text-[#5cdda2]">{s.tagline}</p>
                  <p className="text-sm leading-relaxed mb-4 text-[#bccabf]">{s.desc}</p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {s.outcomes.map((o) => (
                      <div key={o} className="flex items-center gap-1.5 text-xs">
                        <CheckCircle size={12} className="text-[#5cdda2]" />
                        <span className="text-[#dee1f7]">{o}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-xs px-3 py-1 rounded-full border border-[#3d4a42]/30 text-[#bccabf]">
                      Typical: {s.time}
                    </span>
                    <Link href={`/services/${s.slug}`}
                      className="text-sm font-bold text-[#5cdda2] hover:text-[#7bfabc] transition-colors flex items-center gap-1">
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
      <section className="bg-[#090e1c] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1f2f] rounded-3xl border border-[#5cdda2]/20 p-12 text-center">
            <h2 className="text-2xl font-extrabold tracking-tighter mb-3 text-[#dee1f7]">Not sure where to start?</h2>
            <p className="text-base mb-8 text-[#bccabf]">
              Take our free assessment and we&apos;ll tell you exactly which service fits your current maturity.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/assessment" className="btn-primary px-8 py-4 rounded-md font-bold inline-flex items-center gap-2">
                Start free assessment <ArrowRight size={14} />
              </Link>
              <Link href="/contact"
                className="px-8 py-4 rounded-md border border-[#5cdda2]/30 font-bold text-sm inline-flex items-center gap-2 text-[#5cdda2] hover:bg-[#5cdda2]/5 transition-all">
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
