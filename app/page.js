import Link from "next/link";
import {
  ArrowRight, CheckCircle, Users, Eye,
  BarChart3, ShieldAlert, Building2, Landmark, Shield,
  BookOpen, TrendingUp, Search, RefreshCw, Globe,
  ChevronRight, Radio, CreditCard, Lock, KeyRound,
  Users2, MapPin,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LogoCloud from "@/components/LogoCloud";

const stats = [
  { value: "150+", label: "Clients Secured" },
  { value: "500+", label: "Cyber Risk Assessments" },
  { value: "12+", label: "Years Expertise" },
  { value: "98%", label: "Client Satisfaction" },
];

const painPoints = [
  {
    question: "Do you have a clear picture of your most critical cyber risks — right now?",
    icon: ShieldAlert,
    desc: "Most organisations prioritise security spend on instinct. Our assessments surface the risks that matter most to your specific environment.",
  },
  {
    question: "Could you detect a threat actor moving laterally inside your network within hours?",
    icon: Eye,
    desc: "Detection gaps are the difference between a contained incident and a headline breach. Managed detection closes that window.",
  },
  {
    question: "Is your domain and external attack surface actively monitored for compromise signals?",
    icon: Globe,
    desc: "Leaked credentials, exposed subdomains and supplier breaches all appear in open sources before they appear in your SIEM.",
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
    desc: "We recommend what's right for you — not what earns us a commission. We work across all major security platforms.",
  },
  {
    icon: TrendingUp,
    title: "Accelerated ROI",
    desc: "Our structured methodology delivers measurable outcomes faster. Every engagement is tracked through our client portal.",
  },
];

const sectorCards = [
  { label: "Financial Services", icon: Landmark, href: "/sectors/financial-services", desc: "FCA, DORA, PCI DSS compliance" },
  { label: "Healthcare & NHS", icon: Shield, href: "/sectors/healthcare", desc: "DSPT, CQC and NHS Cyber standards" },
  { label: "Public Sector", icon: Building2, href: "/sectors/public-sector", desc: "CAF, Cyber Essentials+, UK GDPR" },
  { label: "Critical Infrastructure", icon: ShieldAlert, href: "/sectors/regulated", desc: "NIS2, ISO 27001, GxP" },
];

const insights = [
  {
    title: "The Cyber Risk Assessment Maturity Model explained",
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
    title: "Preparing for Cyber Essentials Plus — a risk assessment checklist",
    category: "Checklist",
    readTime: "5 min read",
    href: "#",
  },
];

const iamPlatformBadges = ["CyberArk", "BeyondTrust", "Delinea", "SailPoint", "Saviynt", "Okta", "Microsoft Entra", "Duo Security", "WSO2", "Cyolo"];

const iamDepthStats = [
  { value: "120+", label: "IAM/PAM programmes delivered" },
  { value: "40+", label: "PAM platform deployments" },
  { value: "15+", label: "Financial services firms" },
  { value: "End-to-end", label: "Assessment → Managed" },
];

const deliveryGeographies = [
  {
    flag: "🇬🇧", country: "United Kingdom", city: "London", color: "#5cdda2",
    highlights: [
      "On-site and remote delivery",
      "UK contract frameworks",
      "IR35-compliant placements",
      "FCA and DORA-regulated sector experience",
    ],
  },
  {
    flag: "🇩🇪", country: "Germany / EU", city: "Berlin", color: "#c3c0ff",
    highlights: [
      "EU GDPR-aligned contracts",
      "NIS2 and DORA programme delivery",
      "German-speaking resource available",
      "Cross-border programme coordination",
    ],
  },
  {
    flag: "🇮🇳", country: "India", city: "Ahmedabad & Hyderabad", color: "#e8a87c",
    highlights: [
      "Extended-hours monitoring coverage",
      "Cost-efficient programme resource",
      "IGA, PAM and SOC specialisms",
      "IST timezone for APAC overlap",
    ],
  },
];

const deliveryModels = ["Project-Based", "Dedicated Placement", "Managed Service Augmentation", "On-Demand Advisory"];

const domainBars = [
  { label: "Identity Security", color: "#5cdda2", width: 72 },
  { label: "Privileged Access", color: "#5cdda2", width: 45 },
  { label: "Authentication", color: "#c3c0ff", width: 60 },
  { label: "Endpoint Exposure", color: "#f97316", width: 33 },
  { label: "Detection Maturity", color: "#c3c0ff", width: 55 },
];

const journeySteps = [
  {
    step: "01",
    label: "Discover",
    icon: Search,
    color: "#5cdda2",
    desc: "Surface your external exposure and existing risk signals via our Domain Intelligence tool or initial advisory call.",
  },
  {
    step: "02",
    label: "Assess",
    icon: BarChart3,
    color: "#5cdda2",
    desc: "Complete a free Cyber Risk Assessment covering identity, detection, domain intelligence, assurance and payments.",
  },
  {
    step: "03",
    label: "Score",
    icon: TrendingUp,
    color: "#c3c0ff",
    desc: "Receive a risk score and maturity profile across each of the five solution pathways relevant to your organisation.",
  },
  {
    step: "04",
    label: "Propose",
    icon: TrendingUp,
    color: "#c3c0ff",
    desc: "We generate a tailored programme proposal — mapped to your score, your budget and your compliance obligations. You review it before anyone calls you.",
  },
  {
    step: "05",
    label: "Engage",
    icon: Users,
    color: "#5cdda2",
    desc: "Named consultants kick off your programme. Every milestone tracked in your client portal with full transparency.",
  },
  {
    step: "06",
    label: "Convert",
    icon: CheckCircle,
    color: "#5cdda2",
    desc: "Risk findings become closed gaps. Maturity scores improve. Board reports become evidence-led.",
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
                Cyber Risk Assessment &amp; Managed Security
              </span>
              <h1 className="glitch-h1 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter mb-6 text-[#dee1f7]">
                Understand your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5cdda2] to-[#04a56f]">
                  cyber risk.
                </span>{" "}
                Prioritise the right actions.
              </h1>
              <p className="text-lg leading-relaxed mb-8 text-[#bccabf] max-w-2xl">
                Infosec K2K helps UK organisations understand their full cyber risk exposure — then move into the right security programme. From cyber risk assessment and identity security to managed detection, domain intelligence and payments assurance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link href="/assessment/select"
                  className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold text-base">
                  Start Cyber Risk Assessment <ArrowRight size={16} />
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

            {/* Right — 5 cols: glass card */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-[#5cdda2]/5 blur-[60px] rounded-full" />
              <div className="relative bg-[#0e1322]/70 backdrop-blur-xl border border-[#3d4a42]/20 rounded-xl p-6">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#bccabf] mb-4">Risk Profile Preview</p>
                <div className="space-y-3 mb-5">
                  {domainBars.map((bar) => (
                    <div key={bar.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-[#bccabf]">{bar.label}</span>
                        <span className="text-xs font-bold" style={{ color: bar.color }}>{bar.width}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-[#3d4a42]/30">
                        <div className="h-1.5 rounded-full transition-all duration-700"
                          style={{ width: `${bar.width}%`, background: bar.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[0.65rem] text-[#bccabf]/60 text-center">Example profile · Complete the assessment for your real score</p>
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
          <ScrollReveal className="text-center mb-14">
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#c3c0ff] mb-4 block">
              Current Landscape
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-4 text-[#dee1f7]">
              Is this your organisation?
            </h2>
            <p className="text-base max-w-xl mx-auto text-[#bccabf]">
              Most organisations have gaps they don&apos;t know about. Our free assessment gives you the answers.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {painPoints.map((p) => (
              <div key={p.question} className="card-glow bg-[#161b2b] hover:bg-[#25293a] rounded-xl p-7 border border-[#3d4a42]/10 transition-colors">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-[#5cdda2]/10">
                  <p.icon size={20} className="text-[#5cdda2]" />
                </div>
                <p className="text-base font-semibold leading-snug mb-3 text-[#dee1f7]">{p.question}</p>
                <p className="text-sm text-[#bccabf]">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/assessment/select"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold">
              Start your Cyber Risk Assessment <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Free Tools — promoted to position 4 */}
      <section className="bg-[#090e1c] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block">
              Free Tools — No Account Required
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-4 text-[#dee1f7]">
              Two free tools. Real intelligence. No account required.
            </h2>
            <p className="text-base max-w-2xl mx-auto text-[#bccabf]">
              Used by 500+ UK security teams. Start with intelligence — not a sales call.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Assessment card */}
            <div className="bg-[#1a1f2f] rounded-xl border border-[#5cdda2]/20 p-7 flex flex-col">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#5cdda2] to-[#04a56f]">
                  <BarChart3 size={20} color="#003823" />
                </div>
                <div>
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[#bccabf] mb-0.5">Cyber Risk Assessment</p>
                  <h3 className="font-bold text-base text-[#dee1f7]">Cyber Risk Assessment</h3>
                </div>
              </div>
              {/* Domain bars preview */}
              <div className="space-y-2.5 mb-5 opacity-60">
                {domainBars.map((bar) => (
                  <div key={bar.label}>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[0.65rem] font-medium text-[#bccabf]">{bar.label}</span>
                    </div>
                    <div className="w-full h-1 rounded-full bg-[#3d4a42]/30">
                      <div className="h-1 rounded-full" style={{ width: `${bar.width}%`, background: bar.color }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-5 text-[#bccabf]">
                22 questions across five cyber risk domains. Get your risk score, gap analysis and recommended programme pathway — completely free, takes under 10 minutes.
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-xs px-3 py-1 rounded-full font-bold bg-[#2f3445] text-[#5cdda2]">
                  Free · ~10 minutes
                </span>
                <Link href="/assessment/select"
                  className="btn-primary flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold">
                  Start Cyber Risk Assessment <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Domain Intelligence card */}
            <div className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-7 flex flex-col">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6]">
                  <Globe size={20} color="white" />
                </div>
                <div>
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[#bccabf] mb-0.5">Domain Intelligence</p>
                  <h3 className="font-bold text-base text-[#dee1f7]">Domain Intelligence Hub</h3>
                </div>
              </div>
              {/* What it reveals */}
              <div className="space-y-3 mb-5">
                {[
                  { icon: Lock, label: "Credential exposure", desc: "Leaked passwords and emails from data breaches" },
                  { icon: Globe, label: "Domain footprint", desc: "Subdomains, exposed services and DNS records" },
                  { icon: Search, label: "Infrastructure mapping", desc: "Open ports, technologies and public-facing assets" },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 bg-blue-500/10 mt-0.5">
                      <Icon size={11} style={{ color: "#3b82f6" }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#dee1f7]">{label}</p>
                      <p className="text-xs text-[#bccabf]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-5 text-[#bccabf]">
                Surface your external attack surface — powered by DomainTools technology. No account required.
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-xs px-3 py-1 rounded-full font-bold bg-[#2f3445] text-[#5cdda2]">
                  Free · Results in seconds
                </span>
                <Link href="/tools/osint"
                  className="flex items-center gap-1.5 text-sm font-bold border border-[#3d4a42]/30 px-4 py-2 rounded-lg text-[#bccabf] hover:text-[#dee1f7] hover:border-[#5cdda2]/30 transition-colors">
                  Check your domain <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <p className="text-center text-xs text-[#bccabf]/60 mt-8">
            500+ assessments completed · Trusted by UK financial services, NHS and critical infrastructure
          </p>
        </div>
      </section>

      {/* Solution Pathways */}
      <section className="bg-[#090e1c] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block">
              Solution Pathways
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-4 text-[#dee1f7]">
              Five solution pathways. One starting point.
            </h2>
            <p className="text-base max-w-xl mx-auto text-[#bccabf]">
              Every engagement begins with a Cyber Risk Assessment. We then route you into the programme that matches your risk profile and business context.
            </p>
          </ScrollReveal>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large card — Identity Security */}
            <div className="card-glow md:col-span-8 bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 hover:bg-[#25293a] transition-colors p-8 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#5cdda2]/10">
                  <BarChart3 size={24} className="text-[#5cdda2]" />
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-[#5cdda2]/15 text-[#5cdda2] font-bold">Core Specialism · 12 years deep</span>
              </div>
              {/* Platform stack tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["CyberArk", "SailPoint", "Okta", "BeyondTrust", "Microsoft Entra"].map((p) => (
                  <span key={p} className="text-[0.65rem] px-2 py-0.5 rounded border border-[#3d4a42]/30 text-[#bccabf]">{p}</span>
                ))}
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3 text-[#dee1f7]">Identity Security</h3>
              <p className="text-sm leading-relaxed text-[#bccabf] mb-6">
                Our deepest area of expertise — from PAM and IGA to MFA rollout and identity governance. The full stack, delivered.
              </p>
              <Link href="/services/assessment"
                className="mt-auto inline-flex items-center gap-1 text-sm font-bold text-[#5cdda2] hover:text-[#7bfabc] transition-colors">
                Explore Identity Security <ArrowRight size={14} />
              </Link>
            </div>

            {/* Managed Detection */}
            <div className="card-glow md:col-span-4 bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 hover:bg-[#25293a] transition-colors p-7 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#c3c0ff]/10">
                  <Radio size={20} className="text-[#c3c0ff]" />
                </div>
                <span className="text-[0.6rem] px-2 py-0.5 rounded-full bg-[#2f3445] text-[#c3c0ff] font-bold uppercase tracking-wide">Powered by LevelBlue</span>
              </div>
              <h3 className="text-base font-bold tracking-tight mb-2 text-[#dee1f7]">Managed Detection</h3>
              <p className="text-sm text-[#bccabf] mb-4">24/7 threat detection and response. Purpose-built for UK organisations without an in-house SOC.</p>
              <Link href="/services/managed-detection"
                className="mt-auto inline-flex items-center gap-1 text-sm font-bold text-[#c3c0ff] hover:text-white transition-colors">
                Learn more <ArrowRight size={13} />
              </Link>
            </div>

            {/* Domain Intelligence */}
            <div className="card-glow md:col-span-4 bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 hover:bg-[#25293a] transition-colors p-7 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: "rgba(59,130,246,0.1)"}}>
                  <Globe size={20} style={{color: "#3b82f6"}} />
                </div>
                <span className="text-[0.6rem] px-2 py-0.5 rounded-full bg-[#2f3445] text-blue-400 font-bold uppercase tracking-wide">Powered by DomainTools</span>
              </div>
              <h3 className="text-base font-bold tracking-tight mb-2 text-[#dee1f7]">Domain Intelligence & OSINT</h3>
              <p className="text-sm text-[#bccabf] mb-4">Continuous external exposure monitoring. Know what attackers know about you.</p>
              <Link href="/services/domain-intelligence"
                className="mt-auto inline-flex items-center gap-1 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">
                Learn more <ArrowRight size={13} />
              </Link>
            </div>

            {/* Security Assurance */}
            <div className="card-glow md:col-span-4 bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 hover:bg-[#25293a] transition-colors p-7 flex flex-col">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-[#5cdda2]/10">
                <ShieldAlert size={20} className="text-[#5cdda2]" />
              </div>
              <h3 className="text-base font-bold tracking-tight mb-2 text-[#dee1f7]">Security Assurance</h3>
              <p className="text-sm text-[#bccabf] mb-4">ISO 27001, DORA, FCA, Cyber Essentials+ and SWIFT CSP. Audit-ready for boards and regulators.</p>
              <Link href="/services/assurance"
                className="mt-auto inline-flex items-center gap-1 text-sm font-bold text-[#5cdda2] hover:text-[#7bfabc] transition-colors">
                Learn more <ArrowRight size={13} />
              </Link>
            </div>

            {/* SWIFT & Payments Assurance — accent card */}
            <div className="card-glow md:col-span-4 bg-[#5cdda2] rounded-xl border border-[#5cdda2] p-7 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#003823]/20">
                  <CreditCard size={20} className="text-[#003823]" />
                </div>
                <span className="text-[0.6rem] px-2 py-0.5 rounded-full bg-[#003823]/20 text-[#003823] font-bold uppercase tracking-wide">Regulated</span>
              </div>
              <h3 className="text-base font-bold tracking-tight mb-2 text-[#003823]">SWIFT & Payments Assurance</h3>
              <p className="text-sm text-[#003823]/80 mb-4">Dedicated CSP readiness, gap analysis and attestation support for payment infrastructure.</p>
              <Link href="/services/swift-assurance"
                className="mt-auto inline-flex items-center gap-1 text-sm font-bold text-[#003823] hover:opacity-70 transition-opacity">
                Learn more <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Identity Security Depth */}
      <section className="bg-[#0e1322] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block">
              Our Deepest Specialism
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-4 text-[#dee1f7]">
              Identity Security &amp; PAM — 12 years, end to end
            </h2>
            <p className="text-base max-w-2xl text-[#bccabf]">
              IAM and PAM is not a sub-service for us. It&apos;s what we built the firm on. We deliver the technology, the process, the governance framework and the ongoing managed service — across all major platforms.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left: platform badges */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#bccabf] mb-4">Platforms we deploy and operate</p>
              <div className="flex flex-wrap gap-2">
                {iamPlatformBadges.map((p) => (
                  <span key={p} className="text-sm font-semibold px-4 py-2 rounded-full border border-[#3d4a42]/30 text-[#dee1f7] bg-[#1a1f2f]">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {iamDepthStats.map((s) => (
                <div key={s.label} className="bg-[#1a1f2f] rounded-xl p-5 border border-[#3d4a42]/10">
                  <p className="text-2xl font-extrabold tracking-tight text-[#5cdda2] mb-1">{s.value}</p>
                  <p className="text-xs text-[#bccabf]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <Link href="/services/assessment"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-md font-bold text-sm">
              Explore Identity Security <ArrowRight size={14} />
            </Link>
            <Link href="/book?service=assessment"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-bold text-sm border border-[#5cdda2]/30 text-[#5cdda2] hover:bg-[#5cdda2]/5 transition-all">
              Talk to a specialist <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Resource Delivery at Scale */}
      <section className="bg-[#090e1c] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] mb-4 block" style={{ color: "#e8a87c" }}>
              Technical Resource Delivery
            </span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-4 text-[#dee1f7]">
                  Security resource, at the pace you need.
                </h2>
                <p className="text-base max-w-2xl text-[#bccabf]">
                  K2K deploys experienced security professionals across UK, Germany/EU and India — on the model that fits your programme. Every resource is governed, time-tracked and visible in your client portal.
                </p>
              </div>
              <Link href="/services/technical-resources"
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-md font-bold text-sm border transition-all"
                style={{ borderColor: "rgba(232,168,124,0.35)", color: "#e8a87c" }}>
                Explore resource delivery <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          {/* 3 geography cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {deliveryGeographies.map((geo) => (
              <div key={geo.country} className="bg-[#1a1f2f] rounded-xl p-7 border hover:bg-[#25293a] transition-colors"
                style={{ borderColor: `${geo.color}25` }}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl leading-none">{geo.flag}</span>
                  <div>
                    <p className="font-extrabold text-base tracking-tight text-[#dee1f7]">{geo.country}</p>
                    <p className="text-xs font-medium" style={{ color: geo.color }}>{geo.city}</p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {geo.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-[#bccabf]">
                      <CheckCircle size={12} className="mt-0.5 flex-shrink-0" style={{ color: geo.color }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Delivery models + governance strip */}
          <div className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-6 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#bccabf] mb-3">Delivery Models</p>
              <div className="flex flex-wrap gap-2">
                {deliveryModels.map((m) => (
                  <span key={m} className="text-xs px-3 py-1.5 rounded-full border font-semibold"
                    style={{ borderColor: "rgba(232,168,124,0.3)", color: "#e8a87c", background: "rgba(232,168,124,0.07)" }}>
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:text-right flex-shrink-0">
              <p className="text-xs font-bold text-[#dee1f7] mb-1">Full portal visibility</p>
              <p className="text-xs text-[#bccabf] max-w-xs md:max-w-[280px] mb-2">
                Timesheets, utilisation and resource burn-rate visible in your client portal — back-ended into Zoho Projects and Zoho People.
              </p>
              <Link href="/portal" className="text-xs font-bold text-[#5cdda2] hover:text-[#7bfabc] transition-colors inline-flex items-center gap-1">
                View portal demo <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="bg-[#0e1322] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#c3c0ff] mb-4 block">
              How it works
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-4 text-[#dee1f7]">
              From first conversation to active programme
            </h2>
            <p className="text-base max-w-xl mx-auto text-[#bccabf]">
              Every client follows the same structured journey. No guesswork, no generic slide decks — just a clear path from risk discovery to the right programme.
            </p>
          </div>

          <div className="relative">
            {/* Connector line — desktop only */}
            <div className="hidden md:block absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5cdda2]/30 to-transparent" style={{top: "2rem"}} />
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-4">
              {journeySteps.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="flex flex-col items-center text-center relative">
                    <div className="relative z-10 mb-4">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center border-2"
                        style={{ background: `${s.color}10`, borderColor: `${s.color}40` }}>
                        <Icon size={22} style={{color: s.color}} />
                      </div>
                      <span className="absolute -top-1 -right-1 text-[0.6rem] font-black px-1.5 py-0.5 rounded-full"
                        style={{background: s.color, color: "#003823"}}>
                        {s.step}
                      </span>
                    </div>
                    <h4 className="font-extrabold text-sm tracking-tight mb-2 text-[#dee1f7]">{s.label}</h4>
                    <p className="text-xs leading-relaxed text-[#bccabf]">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/assessment/select"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold">
              Begin with a Cyber Risk Assessment <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why K2K */}
      <section className="bg-[#090e1c] py-24">
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
                Cyber security specialists. Built around your risk.
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

      {/* Sector Expertise — compressed */}
      <section className="bg-[#090e1c] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-3 block">
              Sector experience
            </span>
            <h2 className="text-xl font-extrabold tracking-tight text-[#dee1f7]">
              We know your compliance environment
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {sectorCards.map((s) => (
              <Link key={s.label} href={s.href}
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#3d4a42]/30 bg-[#1a1f2f] hover:bg-[#25293a] transition-colors">
                <s.icon size={14} className="text-[#5cdda2]" />
                <span className="text-sm font-semibold text-[#dee1f7]">{s.label}</span>
                <span className="text-[0.65rem] text-[#bccabf] ml-1">{s.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logo Cloud */}
      <LogoCloud />

      {/* Testimonial */}
      <section className="bg-[#0e1322] py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-10 md:p-14 text-center">
            <div className="text-6xl font-black text-[#5cdda2]/30 leading-none mb-4">&ldquo;</div>
            <p className="text-xl md:text-2xl font-semibold italic leading-relaxed mb-8 text-[#dee1f7]">
              Infosec K2K transformed how we think about cyber risk. The assessment gave us a clear, honest picture and the roadmap was immediately actionable.
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


      {/* CTA Section */}
      <section className="bg-[#0e1322] py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1f2f] rounded-3xl border border-[#5cdda2]/20 p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-4 text-[#dee1f7]">
              Know your cyber risk in 10 minutes
            </h2>
            <p className="text-base text-[#bccabf] mb-10 max-w-xl mx-auto">
              Our free Cyber Risk Assessment covers identity, detection, domain intelligence, assurance and payments. Get a risk score and recommended pathway — no commitment required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/assessment/select"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold">
                Start Cyber Risk Assessment <ArrowRight size={16} />
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
                className="card-glow bg-[#1a1f2f] hover:bg-[#25293a] rounded-xl p-6 border border-[#3d4a42]/10 transition-colors block group">
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
