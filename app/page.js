import Link from "next/link";
import {
  ArrowRight, CheckCircle, Users, KeyRound,
  BarChart3, ShieldAlert, Building2, Landmark, Shield,
  BookOpen, TrendingUp, Search, Zap, RefreshCw, HeadphonesIcon,
  ChevronRight,
} from "lucide-react";

const stats = [
  { value: "150+", label: "Clients Secured" },
  { value: "500+", label: "IAM Assessments" },
  { value: "12+", label: "Years Expertise" },
  { value: "98%", label: "Client Satisfaction" },
];

const painPoints = [
  {
    question: "Do you know who has access to what across your organisation?",
    icon: Users,
    desc: "Uncontrolled access sprawl is the number one cause of identity breaches.",
  },
  {
    question: "Could you detect and respond to a compromised admin account within minutes?",
    icon: ShieldAlert,
    desc: "Most organisations can't. Our assessments reveal exactly how exposed you are.",
  },
  {
    question: "Are your privileged accounts, service accounts and secrets all inventoried and governed?",
    icon: KeyRound,
    desc: "Ungoverned privileged access is an open door for attackers.",
  },
];

const services = [
  {
    icon: BarChart3,
    title: "IAM Assessment",
    desc: "Understand your current identity security posture with a structured maturity assessment across five key domains.",
    href: "/services/assessment",
    badge: "Strategic Phase",
    large: true,
  },
  {
    icon: TrendingUp,
    title: "Roadmap & Strategy",
    desc: "Get a prioritised, budget-aware roadmap that moves your organisation from current state to target maturity.",
    href: "/services/roadmap",
    badge: null,
    large: false,
  },
  {
    icon: Shield,
    title: "Implementation",
    desc: "Hands-on delivery of IAM tools and processes — from PAM and MFA rollouts to IGA platform deployments.",
    href: "/services/implementation",
    badge: null,
    large: false,
  },
  {
    icon: Zap,
    title: "Optimisation",
    desc: "Improve the performance, coverage and efficiency of existing identity tools already in your environment.",
    href: "/services/implementation",
    badge: null,
    large: false,
  },
  {
    icon: HeadphonesIcon,
    title: "Managed Services",
    desc: "Ongoing identity security operations — monitoring, access reviews, incident response and continuous assurance.",
    href: "/services/managed",
    badge: null,
    large: false,
    highlight: true,
  },
];

const differentiators = [
  {
    icon: CheckCircle,
    title: "UK-Based Expertise",
    desc: "Named consultants with 12+ years of delivery experience across financial services, public sector and regulated industries.",
  },
  {
    icon: RefreshCw,
    title: "Vendor Agnostic",
    desc: "We recommend what's right for you — not what earns us a commission. We work across all major IAM platforms.",
  },
  {
    icon: Zap,
    title: "Accelerated ROI",
    desc: "Our structured methodology delivers measurable outcomes faster. Every engagement is tracked through our client portal.",
  },
];

const sectorCards = [
  { label: "Financial Services", icon: Landmark, href: "/sectors/financial-services", desc: "FCA, DORA, PCI DSS compliance" },
  { label: "Healthcare & NHS", icon: Shield, href: "/sectors/public-sector", desc: "DSPT, CQC and NHS Cyber standards" },
  { label: "Public Sector", icon: Building2, href: "/sectors/public-sector", desc: "CAF, Cyber Essentials+, UK GDPR" },
  { label: "Critical Infrastructure", icon: ShieldAlert, href: "/sectors/regulated", desc: "NIS2, ISO 27001, GxP" },
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
      <section className="relative bg-[#0e1322] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-[#5cdda2]/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#5cdda2]/5 blur-[80px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left — 7 cols */}
            <div className="lg:col-span-7">
              <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-5 block">
                Identity &amp; Access Management Specialists
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter mb-6 text-[#dee1f7]">
                Secure your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5cdda2] to-[#04a56f]">
                  identity infrastructure.
                </span>{" "}
                Reduce your attack surface.
              </h1>
              <p className="text-lg leading-relaxed mb-8 text-[#bccabf] max-w-2xl">
                Infosec K2K helps UK organisations take control of identity security — from initial assessment and strategic roadmap through to hands-on implementation and ongoing managed services.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link href="/assessment"
                  className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold text-base">
                  Start Free IAM Assessment <ArrowRight size={16} />
                </Link>
                <Link href="/book"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold text-base border border-[#5cdda2]/30 text-[#5cdda2] hover:bg-[#5cdda2]/5 transition-all">
                  Book an advisory call
                </Link>
              </div>
              {/* Certifications */}
              <div className="flex flex-wrap items-center gap-3 opacity-60">
                <span className="text-xs text-[#bccabf]">Certified:</span>
                {["ISO 27001", "Cyber Essentials+", "CREST", "NCSC Assured"].map((cert) => (
                  <span key={cert} className="text-xs px-2.5 py-1 rounded-full border border-[#3d4a42]/50 text-[#bccabf]">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — 5 cols: glass card placeholder */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-[#5cdda2]/5 blur-[60px] rounded-full" />
              <div className="relative bg-[#0e1322]/70 backdrop-blur-xl border border-[#3d4a42]/20 rounded-xl p-6">
                <div className="w-full h-64 rounded-xl bg-gradient-to-br from-[#1a1f2f] to-[#090e1c] border border-[#3d4a42]/20 flex items-center justify-center mb-5">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[#5cdda2]/10 flex items-center justify-center mx-auto mb-3">
                      <Shield size={28} className="text-[#5cdda2]" />
                    </div>
                    <p className="text-sm text-[#bccabf]">IAM Security Dashboard</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Maturity Score", value: "3.8/5", color: "text-[#5cdda2]" },
                    { label: "Controls Active", value: "87%", color: "text-[#c3c0ff]" },
                    { label: "Critical Gaps", value: "2", color: "text-orange-400" },
                    { label: "Risk Level", value: "Low", color: "text-[#5cdda2]" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-[#1a1f2f] rounded-lg p-3 border border-[#3d4a42]/10">
                      <p className="text-xs text-[#bccabf] mb-1">{stat.label}</p>
                      <p className={`text-lg font-extrabold tracking-tight ${stat.color}`}>{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#090e1c] py-14 border-y border-[#3d4a42]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-2 text-[#5cdda2]">{s.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#bccabf]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-[#0e1322] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#c3c0ff] mb-4 block">
              Current Landscape
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-4 text-[#dee1f7]">
              Is this your organisation?
            </h2>
            <p className="text-base max-w-xl mx-auto text-[#bccabf]">
              Most organisations have gaps they don&apos;t know about. Our free assessment gives you the answers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {painPoints.map((p) => (
              <div key={p.question} className="bg-[#161b2b] hover:bg-[#25293a] rounded-xl p-7 border border-[#3d4a42]/10 transition-colors">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-[#5cdda2]/10">
                  <p.icon size={20} className="text-[#5cdda2]" />
                </div>
                <p className="text-base font-semibold leading-snug mb-3 text-[#dee1f7]">{p.question}</p>
                <p className="text-sm text-[#bccabf]">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/assessment"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold">
              Find out with a free assessment <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Bento */}
      <section className="bg-[#090e1c] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block">
              End-to-End Delivery
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-4 text-[#dee1f7]">
              Services built around your maturity
            </h2>
            <p className="text-base max-w-xl mx-auto text-[#bccabf]">
              Whether you&apos;re starting from scratch or optimising an existing programme, we have the right engagement model.
            </p>
          </div>
          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large card */}
            <div className="md:col-span-8 bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 hover:bg-[#25293a] transition-colors p-8 flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#5cdda2]/10">
                  <BarChart3 size={24} className="text-[#5cdda2]" />
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-[#2f3445] text-[#5cdda2] font-bold">Strategic Phase</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3 text-[#dee1f7]">IAM Assessment</h3>
              <p className="text-sm leading-relaxed text-[#bccabf] mb-6">
                Understand your current identity security posture with a structured maturity assessment across five key domains. Get a maturity score, gap analysis and prioritised recommendations in under 2 weeks.
              </p>
              <Link href="/services/assessment"
                className="mt-auto inline-flex items-center gap-1 text-sm font-bold text-[#5cdda2] hover:text-[#7bfabc] transition-colors">
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
            {/* Roadmap */}
            <div className="md:col-span-4 bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 hover:bg-[#25293a] transition-colors p-7 flex flex-col">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-[#c3c0ff]/10">
                <TrendingUp size={20} className="text-[#c3c0ff]" />
              </div>
              <h3 className="text-base font-bold tracking-tight mb-2 text-[#dee1f7]">Roadmap & Strategy</h3>
              <p className="text-sm text-[#bccabf] mb-4">A prioritised, budget-aware roadmap that moves your organisation forward.</p>
              <Link href="/services/roadmap" className="mt-auto inline-flex items-center gap-1 text-sm font-bold text-[#c3c0ff] hover:text-white transition-colors">
                Learn more <ArrowRight size={13} />
              </Link>
            </div>
            {/* Implementation */}
            <div className="md:col-span-4 bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 hover:bg-[#25293a] transition-colors p-7 flex flex-col">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-[#5cdda2]/10">
                <Shield size={20} className="text-[#5cdda2]" />
              </div>
              <h3 className="text-base font-bold tracking-tight mb-2 text-[#dee1f7]">Implementation</h3>
              <p className="text-sm text-[#bccabf] mb-4">Hands-on delivery of IAM tools and processes — from PAM to IGA.</p>
              <Link href="/services/implementation" className="mt-auto inline-flex items-center gap-1 text-sm font-bold text-[#5cdda2] hover:text-[#7bfabc] transition-colors">
                Learn more <ArrowRight size={13} />
              </Link>
            </div>
            {/* Optimisation */}
            <div className="md:col-span-4 bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 hover:bg-[#25293a] transition-colors p-7 flex flex-col">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-[#5cdda2]/10">
                <Zap size={20} className="text-[#5cdda2]" />
              </div>
              <h3 className="text-base font-bold tracking-tight mb-2 text-[#dee1f7]">Optimisation</h3>
              <p className="text-sm text-[#bccabf] mb-4">More value from tools you already own. Tune, expand and improve.</p>
              <Link href="/services/implementation" className="mt-auto inline-flex items-center gap-1 text-sm font-bold text-[#5cdda2] hover:text-[#7bfabc] transition-colors">
                Learn more <ArrowRight size={13} />
              </Link>
            </div>
            {/* Managed Services — green */}
            <div className="md:col-span-4 bg-[#5cdda2] rounded-xl border border-[#5cdda2] p-7 flex flex-col">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-[#003823]/20">
                <HeadphonesIcon size={20} className="text-[#003823]" />
              </div>
              <h3 className="text-base font-bold tracking-tight mb-2 text-[#003823]">Managed Services</h3>
              <p className="text-sm text-[#003823]/80 mb-4">Ongoing identity security operations, monitoring and assurance.</p>
              <Link href="/services/managed" className="mt-auto inline-flex items-center gap-1 text-sm font-bold text-[#003823] hover:opacity-70 transition-opacity">
                Learn more <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why K2K */}
      <section className="bg-[#0e1322] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: image placeholder */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[#5cdda2]/5 blur-[60px] rounded-full" />
              <div className="relative w-full h-80 rounded-xl bg-gradient-to-br from-[#1a1f2f] to-[#090e1c] border border-[#3d4a42]/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-[#5cdda2]/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={36} className="text-[#5cdda2]" />
                  </div>
                  <p className="text-sm text-[#bccabf]">Proven delivery methodology</p>
                </div>
              </div>
            </div>
            {/* Right: bullets */}
            <div>
              <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block">
                Why Infosec K2K
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-6 text-[#dee1f7]">
                Identity security specialists. Not generalists.
              </h2>
              <p className="text-base leading-relaxed mb-8 text-[#bccabf]">
                We don&apos;t just assess and advise. We deliver outcomes — and you can hold us to it through our client portal where every milestone, deliverable and action is tracked transparently.
              </p>
              <div className="space-y-5">
                {differentiators.map((d) => (
                  <div key={d.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#5cdda2]/10 flex-shrink-0">
                      <d.icon size={18} className="text-[#5cdda2]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1 text-[#dee1f7]">{d.title}</h4>
                      <p className="text-sm text-[#bccabf]">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/why-us"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#5cdda2] hover:text-[#7bfabc] transition-colors">
                  About our approach <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Expertise */}
      <section className="bg-[#090e1c] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block">
              Sector Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-4 text-[#dee1f7]">
              Deep sector knowledge
            </h2>
            <p className="text-base text-[#bccabf]">
              We understand the compliance pressures and threat landscape specific to your industry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {sectorCards.map((s) => (
              <Link key={s.label} href={s.href}
                className="bg-[#1a1f2f] hover:bg-[#25293a] rounded-xl p-6 border border-[#3d4a42]/10 transition-colors group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-[#5cdda2]/10">
                  <s.icon size={22} className="text-[#5cdda2]" />
                </div>
                <h3 className="font-bold text-sm mb-1 text-[#dee1f7] group-hover:text-[#5cdda2] transition-colors">{s.label}</h3>
                <p className="text-xs text-[#bccabf]">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#0e1322] py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-10 md:p-14 text-center">
            <div className="text-6xl font-black text-[#5cdda2]/30 leading-none mb-4">&ldquo;</div>
            <p className="text-xl md:text-2xl font-semibold italic leading-relaxed mb-8 text-[#dee1f7]">
              Infosec K2K transformed how we think about identity security. The assessment gave us a clear, honest picture and the roadmap was immediately actionable.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5cdda2] to-[#04a56f] flex items-center justify-center text-[#003823] font-bold text-sm">C</div>
              <div className="text-left">
                <p className="font-bold text-sm text-[#dee1f7]">CISO</p>
                <p className="text-xs text-[#bccabf]">UK Financial Services Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Tools */}
      <section className="bg-[#161b2b] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block">
              Free Tools — No Account Required
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-4 text-[#dee1f7]">
              Know your risk before you spend a penny
            </h2>
            <p className="text-base max-w-2xl mx-auto text-[#bccabf]">
              Two tools used by 500+ UK security teams. Get immediate, actionable intelligence about your identity and external exposure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                tag: "IAM SECURITY",
                title: "IAM Maturity Assessment",
                desc: "22 questions across 5 identity domains. Get your maturity score, gap analysis and prioritised recommendations in under 10 minutes.",
                time: "~10 minutes",
                href: "/assessment",
                cta: "Start assessment",
                gradient: "from-[#5cdda2] to-[#04a56f]",
                iconColor: "#003823",
              },
              {
                tag: "THREAT INTELLIGENCE",
                title: "OSINT Intelligence Hub",
                desc: "Surface your organisation's external exposure — leaked credentials, exposed infrastructure, and open-source threat signals.",
                time: "Results in seconds",
                href: "/tools/osint",
                cta: "Open OSINT Hub",
                gradient: "from-[#3b82f6] to-[#8b5cf6]",
                iconColor: "white",
              },
            ].map((tool) => (
              <div key={tool.title} className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-7 flex flex-col">
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${tool.gradient}`}>
                    {tool.tag.includes("IAM") ? <BarChart3 size={20} color={tool.iconColor} /> : <Search size={20} color={tool.iconColor} />}
                  </div>
                  <div>
                    <p className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[#bccabf] mb-0.5">{tool.tag}</p>
                    <h3 className="font-bold text-base text-[#dee1f7]">{tool.title}</h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-5 text-[#bccabf]">{tool.desc}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs px-3 py-1 rounded-full font-bold bg-[#2f3445] text-[#5cdda2]">
                    Free · {tool.time}
                  </span>
                  <Link href={tool.href}
                    className="flex items-center gap-1.5 text-sm font-bold text-[#5cdda2] hover:text-[#7bfabc] transition-colors">
                    {tool.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0e1322] py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1f2f] rounded-3xl border border-[#5cdda2]/20 p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-4 text-[#dee1f7]">
              Know your IAM risk in 10 minutes
            </h2>
            <p className="text-base text-[#bccabf] mb-10 max-w-xl mx-auto">
              Our free assessment covers five domains, generates a maturity score and delivers personalised recommendations — no commitment required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/assessment"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold">
                Start free assessment <ArrowRight size={16} />
              </Link>
              <Link href="/book"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold border border-[#5cdda2]/30 text-[#5cdda2] hover:bg-[#5cdda2]/5 transition-all">
                Book a free call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="bg-[#0e1322] pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-2 block">
                Latest Insights
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-[#dee1f7]">
                From the team
              </h2>
            </div>
            <Link href="/insights" className="text-sm font-bold text-[#5cdda2] hover:text-[#7bfabc] transition-colors flex items-center gap-1">
              View all <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {insights.map((a) => (
              <Link key={a.title} href={a.href}
                className="bg-[#1a1f2f] hover:bg-[#25293a] rounded-xl p-6 border border-[#3d4a42]/10 transition-colors block group">
                <span className="text-[0.7rem] font-bold px-3 py-1 rounded-full mb-4 inline-block bg-[#2f3445] text-[#5cdda2]">
                  {a.category}
                </span>
                <h3 className="font-bold text-sm leading-snug mb-3 text-[#dee1f7] group-hover:text-[#5cdda2] transition-colors">
                  {a.title}
                </h3>
                <div className="flex items-center gap-2">
                  <BookOpen size={11} className="text-[#bccabf]" />
                  <span className="text-xs text-[#bccabf]">{a.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
