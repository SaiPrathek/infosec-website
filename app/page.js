import Link from "next/link";
import {
  Shield, ArrowRight, CheckCircle, Users, Lock, KeyRound,
  BarChart3, ShieldAlert, Star, Building2, Landmark, ChevronRight,
  BookOpen, Calendar, TrendingUp, Search
} from "lucide-react";

const stats = [
  { value: "150+", label: "Clients secured" },
  { value: "500+", label: "IAM assessments" },
  { value: "12+", label: "Years expertise" },
  { value: "98%", label: "Client satisfaction" },
];

const services = [
  {
    icon: BarChart3,
    title: "IAM Assessment",
    desc: "Understand your current identity security posture with a structured maturity assessment across five key domains.",
    href: "/services/assessment",
    cta: "Start free assessment",
  },
  {
    icon: TrendingUp,
    title: "Roadmap & Strategy",
    desc: "Get a prioritised, budget-aware roadmap that moves your organisation from current state to target maturity.",
    href: "/services/roadmap",
    cta: "Learn more",
  },
  {
    icon: Shield,
    title: "Implementation",
    desc: "Hands-on delivery of IAM tools and processes — from PAM and MFA rollouts to IGA platform deployments.",
    href: "/services/implementation",
    cta: "Learn more",
  },
  {
    icon: Lock,
    title: "Optimisation",
    desc: "Improve the performance, coverage and efficiency of existing identity tools already in your environment.",
    href: "/services/implementation",
    cta: "Learn more",
  },
  {
    icon: ShieldAlert,
    title: "Managed Services",
    desc: "Ongoing identity security operations — monitoring, access reviews, incident response and continuous assurance.",
    href: "/services/managed",
    cta: "Learn more",
  },
];

const painPoints = [
  {
    question: "Do you know who has access to what across your organisation?",
    icon: Users,
  },
  {
    question: "Could you detect and respond to a compromised admin account within minutes?",
    icon: ShieldAlert,
  },
  {
    question: "Are your privileged accounts, service accounts and secrets all inventoried and governed?",
    icon: KeyRound,
  },
];

const differentiators = [
  {
    title: "Delivery methodology",
    desc: "A structured, repeatable approach built on NIST, ISO 27001 and real-world experience — not templates from a textbook.",
  },
  {
    title: "Sector depth",
    desc: "Deep experience across financial services, public sector and regulated industries. We understand your compliance landscape.",
  },
  {
    title: "Track record",
    desc: "Over 150 clients secured. Our outcomes speak for themselves — ask us for references.",
  },
  {
    title: "Portal transparency",
    desc: "Every engagement runs through our client portal. You always know where your project stands, in real time.",
  },
];

const testimonials = [
  {
    quote: "Infosec K2K transformed how we think about identity security. The assessment gave us a clear, honest picture and the roadmap was immediately actionable.",
    author: "CISO",
    org: "UK Financial Services Group",
  },
  {
    quote: "We had tried to tackle our PAM programme twice before. K2K delivered it in six months. The portal-based approach made it easy to keep stakeholders aligned.",
    author: "Head of IT Security",
    org: "Central Government Agency",
  },
];

const sectors = [
  { label: "Enterprise", icon: Building2, href: "/sectors/enterprise" },
  { label: "Financial Services", icon: Landmark, href: "/sectors/financial-services" },
  { label: "Public Sector", icon: Shield, href: "/sectors/public-sector" },
  { label: "Regulated Industries", icon: CheckCircle, href: "/sectors/regulated" },
];

const insights = [
  {
    title: "The Identity Security Maturity Model explained",
    category: "Guide",
    readTime: "6 min read",
    href: "#",
  },
  {
    title: "Why 70% of breaches start with a compromised identity",
    category: "Research",
    readTime: "4 min read",
    href: "#",
  },
  {
    title: "Preparing for Cyber Essentials Plus — an IAM checklist",
    category: "Checklist",
    readTime: "5 min read",
    href: "#",
  },
];

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative flex items-center dark-mesh overflow-hidden"
        style={{ background: "var(--background)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl"
            style={{ background: "var(--k2k-gradient)" }} />
          <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-5 blur-3xl"
            style={{ background: "var(--k2k-cyan)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border mb-6"
              style={{ color: "var(--k2k-teal)", borderColor: "rgba(0,164,110,0.3)", background: "rgba(0,164,110,0.08)" }}>
              <Shield size={12} /> UK Identity Security Specialists
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ color: "var(--foreground)" }}>
              Secure your{" "}
              <span className="gradient-text">identity infrastructure.</span>{" "}
              Reduce your attack surface.
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl" style={{ color: "var(--muted)" }}>
              Infosec K2K helps UK organisations take control of identity security — from initial assessment and strategic roadmap through to hands-on implementation and ongoing managed services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link href="/assessment"
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base">
                Start Free IAM Assessment <ArrowRight size={16} />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base border transition-colors hover:opacity-80"
                style={{ color: "var(--foreground)", borderColor: "var(--border)" }}>
                <Calendar size={16} /> Book an advisory call
              </Link>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-xs font-medium" style={{ color: "var(--muted)" }}>Certified:</span>
              {["ISO 27001", "Cyber Essentials+", "CREST", "NCSC Assured"].map((cert) => (
                <span key={cert} className="text-xs px-2.5 py-1 rounded-full border font-medium"
                  style={{ color: "var(--muted)", borderColor: "var(--border)" }}>
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y py-12" style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1 gradient-text">{s.value}</div>
                <div className="text-sm" style={{ color: "var(--muted)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="section-pad" style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
              Is this your organisation?
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
              Most organisations have gaps they don&apos;t know about. Our free assessment gives you the answers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {painPoints.map((p) => (
              <div key={p.question} className="rounded-2xl p-8 border transition-shadow hover:shadow-lg"
                style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(0,164,110,0.12)" }}>
                  <p.icon size={20} style={{ color: "var(--k2k-teal)" }} />
                </div>
                <p className="text-base font-medium leading-snug" style={{ color: "var(--foreground)" }}>{p.question}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/assessment"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold">
              Find out with a free assessment <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad" style={{ background: "var(--card-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
              Services built around <span className="gradient-text">your maturity</span>
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
              Whether you&apos;re starting from scratch or optimising an existing programme, we have the right engagement model.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl p-7 border group transition-all hover:shadow-xl hover:-translate-y-0.5"
                style={{ background: "var(--background)", borderColor: "var(--border)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(0,164,110,0.12)" }}>
                  <s.icon size={20} style={{ color: "var(--k2k-teal)" }} />
                </div>
                <h3 className="font-semibold text-base mb-2" style={{ color: "var(--foreground)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>{s.desc}</p>
                <Link href={s.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-teal-500 hover:text-teal-400 transition-colors">
                  {s.cta} <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why K2K */}
      <section className="section-pad" style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                Why Infosec K2K?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
                We don&apos;t just assess and advise. We deliver outcomes — and you can hold us to it through our client portal where every milestone, deliverable and action is tracked transparently.
              </p>
              <Link href="/why-us"
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-500 hover:text-teal-400 transition-colors">
                About our approach <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {differentiators.map((d) => (
                <div key={d.title} className="flex gap-4 p-4 rounded-xl border"
                  style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
                  <CheckCircle size={20} className="shrink-0 mt-0.5" style={{ color: "var(--k2k-teal)" }} />
                  <div>
                    <h4 className="font-semibold text-sm mb-1" style={{ color: "var(--foreground)" }}>{d.title}</h4>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section-pad" style={{ background: "var(--card-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
              Sector expertise
            </h2>
            <p className="text-base" style={{ color: "var(--muted)" }}>
              We understand the compliance pressures and threat landscape specific to your industry.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sectors.map((s) => (
              <Link key={s.label} href={s.href}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl border text-center group hover:shadow-md transition-all hover:-translate-y-0.5"
                style={{ background: "var(--background)", borderColor: "var(--border)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(0,164,110,0.1)" }}>
                  <s.icon size={22} style={{ color: "var(--k2k-teal)" }} />
                </div>
                <span className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad" style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
              What clients say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="rounded-2xl p-8 border"
                style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="var(--k2k-teal)" style={{ color: "var(--k2k-teal)" }} />
                  ))}
                </div>
                <p className="text-base italic leading-relaxed mb-6" style={{ color: "var(--foreground)" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>{t.author}</p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>{t.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Tools */}
      <section className="section-pad" style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border"
              style={{ color: "var(--k2k-teal)", borderColor: "rgba(0,164,110,0.3)", background: "rgba(0,164,110,0.06)" }}>
              FREE TOOLS — NO ACCOUNT REQUIRED
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
              Know your risk before you <span className="gradient-text">spend a penny</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
              Two tools used by 500+ UK security teams. Get immediate, actionable intelligence about your identity and external exposure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Shield,
                tag: "IAM SECURITY",
                title: "IAM Maturity Assessment",
                desc: "22 questions across 5 identity domains. Get your maturity score, gap analysis and prioritised recommendations in under 10 minutes.",
                time: "~10 minutes",
                href: "/assessment",
                cta: "Start assessment",
                gradient: "var(--k2k-gradient)",
              },
              {
                icon: Search,
                tag: "THREAT INTELLIGENCE",
                title: "OSINT Intelligence Hub",
                desc: "Surface your organisation's external exposure — leaked credentials, exposed infrastructure, and open-source threat signals.",
                time: "Results in seconds",
                href: "/tools/osint",
                cta: "Open OSINT Hub",
                gradient: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
              },
            ].map((tool) => {
              const Icon = tool.icon;
              return (
                <div key={tool.title} className="rounded-2xl border p-7 flex flex-col"
                  style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: tool.gradient }}>
                      <Icon size={20} color="white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-wider mb-0.5" style={{ color: "var(--muted)" }}>{tool.tag}</p>
                      <h3 className="font-bold text-base" style={{ color: "var(--foreground)" }}>{tool.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>{tool.desc}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs px-2.5 py-1 rounded-full font-semibold"
                      style={{ background: "rgba(0,164,110,0.1)", color: "var(--k2k-teal)" }}>
                      Free · {tool.time}
                    </span>
                    <Link href={tool.href}
                      className="flex items-center gap-1.5 text-sm font-semibold hover:opacity-70 transition-opacity"
                      style={{ color: "var(--k2k-teal)" }}>
                      {tool.cta} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Assessment CTA Banner */}
      <section className="py-16 relative overflow-hidden" style={{ background: "var(--k2k-gradient)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl bg-white" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Know your IAM risk in 10 minutes
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Our free assessment covers five domains, generates a maturity score and delivers personalised recommendations — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/assessment"
              className="bg-white font-semibold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              style={{ color: "var(--k2k-teal)" }}>
              Start free assessment <ArrowRight size={16} />
            </Link>
            <Link href="/book"
              className="border border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 hover:bg-white/10 transition-colors">
              Book a free call
            </Link>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="section-pad" style={{ background: "var(--card-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--foreground)" }}>
              Latest insights
            </h2>
            <Link href="#" className="text-sm font-semibold text-teal-500 hover:text-teal-400 transition-colors flex items-center gap-1">
              View all <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {insights.map((a) => (
              <Link key={a.title} href={a.href}
                className="rounded-2xl p-6 border group hover:shadow-md transition-all hover:-translate-y-0.5 block"
                style={{ background: "var(--background)", borderColor: "var(--border)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "rgba(0,164,110,0.1)" }}>
                  <BookOpen size={16} style={{ color: "var(--k2k-teal)" }} />
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full mb-3 inline-block"
                  style={{ background: "rgba(0,164,110,0.1)", color: "var(--k2k-teal)" }}>
                  {a.category}
                </span>
                <h3 className="font-semibold text-sm leading-snug mb-2 group-hover:text-teal-500 transition-colors"
                  style={{ color: "var(--foreground)" }}>
                  {a.title}
                </h3>
                <span className="text-xs" style={{ color: "var(--muted)" }}>{a.readTime}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
