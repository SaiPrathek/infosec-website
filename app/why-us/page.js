import Link from "next/link";
import { ArrowRight, Shield, Users, BarChart3, Monitor, CheckCircle, Star } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Delivery methodology",
    desc: "Our engagement model is structured, repeatable and auditable. Every project follows the same rigorous approach — from discovery through to handover. Built on NIST, ISO 27001 and twelve years of delivery experience.",
    points: ["Consistent delivery framework", "Named consultants throughout", "No handoffs to junior staff mid-project"],
  },
  {
    icon: Users,
    title: "Sector depth",
    desc: "We don't consult across every security domain. We focus on identity. That depth means we understand the specific compliance pressures, threat models and political realities of your sector.",
    points: ["Financial services, public sector, enterprise and regulated industries", "Compliance-aware recommendations", "Sector-specific case studies and benchmarks"],
  },
  {
    icon: BarChart3,
    title: "Commercial honesty",
    desc: "We tell clients what they need to hear, not what they want to hear. Our assessments are candid. Our roadmaps are realistic. We don't over-scope to maximise fees.",
    points: ["Fixed-price engagements available", "No unnecessary tool recommendations", "We'll tell you if you don't need us"],
  },
  {
    icon: Monitor,
    title: "Portal transparency",
    desc: "Every engagement runs through our client portal. You can see exactly where your project stands — milestones, actions, deliverables, risks — in real time. No weekly email updates. No surprises.",
    points: ["Real-time milestone tracking", "Secure document exchange", "Stakeholder-ready reporting"],
  },
];

const team = [
  {
    name: "Principal Consultants",
    desc: "Our consultants have delivered IAM programmes at major financial institutions, government agencies and global enterprises. They lead, they don't review.",
  },
  {
    name: "Average experience",
    stat: "12+ years",
    desc: "in identity security and IAM delivery.",
  },
  {
    name: "Certifications",
    desc: "CISMs, CISSPs and platform specialists in Microsoft Entra, SailPoint, CyberArk, Okta and BeyondTrust.",
  },
];

export default function WhyUsPage() {
  return (
    <div className="pt-16" style={{ background: "var(--background)" }}>
      {/* Hero */}
      <section className="py-16 border-b dark-mesh" style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
            Why <span className="gradient-text">Infosec K2K</span>?
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            There are many security consultancies. Very few focus exclusively on identity. Fewer still have delivered across the breadth of sectors and programmes we have.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl p-8 border"
              style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(0,164,110,0.12)" }}>
                <p.icon size={20} style={{ color: "var(--k2k-teal)" }} />
              </div>
              <h2 className="font-bold text-lg mb-3" style={{ color: "var(--foreground)" }}>{p.title}</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>{p.desc}</p>
              <ul className="space-y-2">
                {p.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-xs">
                    <CheckCircle size={12} style={{ color: "var(--k2k-teal)" }} />
                    <span style={{ color: "var(--foreground)" }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 border-y" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "150+", label: "Clients secured" },
              { value: "500+", label: "IAM assessments" },
              { value: "12+", label: "Years delivering" },
              { value: "98%", label: "Would recommend us" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold mb-1 gradient-text">{s.value}</div>
                <div className="text-sm" style={{ color: "var(--muted)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "var(--foreground)" }}>Our people</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((t) => (
              <div key={t.name} className="rounded-2xl p-6 border text-center"
                style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
                {t.stat && (
                  <div className="text-3xl font-bold mb-2 gradient-text">{t.stat}</div>
                )}
                <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--foreground)" }}>{t.name}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16" style={{ background: "var(--card-bg)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="var(--k2k-teal)" style={{ color: "var(--k2k-teal)" }} />
            ))}
          </div>
          <p className="text-xl italic font-medium leading-relaxed mb-6" style={{ color: "var(--foreground)" }}>
            &ldquo;We&apos;ve worked with three IAM consultancies over the past decade. Infosec K2K are the only ones who told us the truth about our programme from day one — and then delivered exactly what they promised.&rdquo;
          </p>
          <p className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>CISO</p>
          <p className="text-xs" style={{ color: "var(--muted)" }}>Major UK Insurance Group</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ background: "var(--background)" }}>
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>Ready to work together?</h2>
          <p className="text-base mb-6" style={{ color: "var(--muted)" }}>
            Start with a free assessment, or book a call to talk through your requirements.
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
