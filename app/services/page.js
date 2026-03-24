import Link from "next/link";
import { ArrowRight, BarChart3, TrendingUp, Shield, ShieldAlert, CheckCircle, Zap, HeadphonesIcon, Wrench, ClipboardCheck, Crosshair, Radio, Globe, CreditCard } from "lucide-react";
import { servicesData } from "@/lib/services-data";

const iconMap = {
  BarChart3,
  TrendingUp,
  Shield,
  ShieldAlert,
  Zap,
  HeadphonesIcon,
  Wrench,
  ClipboardCheck,
  Crosshair,
  Radio,
  Globe,
  CreditCard,
};

const servicesMap = Object.fromEntries(
  Object.entries(servicesData).map(([slug, s]) => {
    const time = slug === "assessment" ? "2–4 weeks"
      : slug === "roadmap" ? "4–6 weeks"
      : slug === "managed" ? "Ongoing subscription"
      : slug === "tooling-strategy" ? "4–8 weeks"
      : slug === "assurance" ? "4–8 weeks"
      : slug === "offensive-security" ? "2–4 weeks"
      : slug === "managed-detection" ? "Ongoing subscription"
      : slug === "domain-intelligence" ? "Ongoing subscription"
      : slug === "swift-assurance" ? "4–6 weeks"
      : "Project-based";
    return [slug, {
      slug,
      Icon: iconMap[s.icon] || Shield,
      title: s.title,
      tagline: s.tagline,
      desc: s.heroDesc,
      outcomes: (s.whatWeDo || []).slice(0, 3),
      time,
      badge: s.badge || null,
    }];
  })
);

const practiceGroups = [
  {
    id: "identity",
    eyebrow: "Our Core Specialism",
    title: "Identity Security",
    desc: "From first assessment through to ongoing managed service — IAM and PAM delivered end to end.",
    accent: "#5cdda2",
    borderColor: "border-[#5cdda2]/20",
    slugs: ["assessment", "roadmap", "implementation", "managed", "tooling-strategy"],
  },
  {
    id: "detection",
    eyebrow: "Detection & Intelligence",
    title: "Detection & Intelligence",
    desc: "24/7 threat monitoring, domain intelligence and offensive security to surface and close coverage gaps.",
    accent: "#3b82f6",
    borderColor: "border-[#3d4a42]/20",
    slugs: ["managed-detection", "domain-intelligence", "offensive-security"],
  },
  {
    id: "assurance",
    eyebrow: "Assurance & Compliance",
    title: "Assurance & Compliance",
    desc: "Evidence-led, audit-ready assurance across ISO 27001, DORA, FCA, Cyber Essentials+ and SWIFT CSP.",
    accent: "#c3c0ff",
    borderColor: "border-[#3d4a42]/20",
    slugs: ["assurance", "swift-assurance"],
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
            Five specialist practice areas.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5cdda2] to-[#04a56f]">
              One firm.
            </span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-[#bccabf]">
            Every engagement starts with understanding where you are. Our services are designed to meet you there and move you forward.
          </p>
        </div>
      </section>

      {/* Services grouped by practice area */}
      <section className="bg-[#0e1322] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {practiceGroups.map((group) => (
            <div key={group.id}>
              {/* Group header */}
              <div className={`pb-6 mb-6 border-b ${group.borderColor}`}>
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.12em] block mb-2"
                  style={{ color: group.accent }}>
                  {group.eyebrow}
                </span>
                <h2 className="text-2xl font-extrabold tracking-tight text-[#dee1f7] mb-1">{group.title}</h2>
                <p className="text-sm text-[#bccabf]">{group.desc}</p>
              </div>
              {/* Service cards */}
              <div className="space-y-4">
                {group.slugs.map((slug) => {
                  const s = servicesMap[slug];
                  if (!s) return null;
                  return (
                    <div key={slug} className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 hover:bg-[#25293a] transition-colors p-8">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ background: `${group.accent}18` }}>
                            <s.Icon size={22} style={{ color: group.accent }} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 className="font-extrabold text-xl tracking-tight text-[#dee1f7]">{s.title}</h3>
                            {s.badge && (
                              <span className="text-xs px-3 py-1 rounded-full font-bold bg-[#2f3445]"
                                style={{ color: group.accent }}>
                                {s.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-bold mb-2" style={{ color: group.accent }}>{s.tagline}</p>
                          <p className="text-sm leading-relaxed mb-4 text-[#bccabf]">{s.desc}</p>
                          <div className="flex flex-wrap gap-3 mb-4">
                            {s.outcomes.map((o) => (
                              <div key={o} className="flex items-center gap-1.5 text-xs">
                                <CheckCircle size={12} style={{ color: group.accent }} />
                                <span className="text-[#dee1f7]">{o}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex flex-wrap items-center gap-4">
                            <span className="text-xs px-3 py-1 rounded-full border border-[#3d4a42]/30 text-[#bccabf]">
                              Typical: {s.time}
                            </span>
                            <Link href={`/services/${s.slug}`}
                              className="text-sm font-bold transition-colors flex items-center gap-1"
                              style={{ color: group.accent }}>
                              Learn more <ArrowRight size={12} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
