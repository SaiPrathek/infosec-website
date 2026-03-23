import Link from "next/link";
import { ArrowRight, Shield, Building2, Landmark, Factory, CheckCircle, TrendingUp, Lock } from "lucide-react";

const caseStudies = [
  {
    id: "global-bank-iam",
    sector: "Financial Services",
    icon: Landmark,
    tag: "IAM Assessment & Roadmap",
    title: "Global bank reduces identity risk by 60% in six months",
    summary:
      "A tier-one European bank faced mounting compliance pressure after an internal audit flagged critical gaps in privileged access governance. K2K delivered a full IAM maturity assessment, prioritised roadmap and implementation support across 14 business units.",
    outcomes: [
      "IAM maturity score improved from 28 to 71 in six months",
      "Privileged access reduced by 60% through PAM rollout",
      "Passed follow-up audit with zero critical findings",
    ],
    duration: "6 months",
    team: "UK",
  },
  {
    id: "nhs-trust-mfa",
    sector: "Public Sector",
    icon: Building2,
    tag: "Implementation",
    title: "NHS trust deploys MFA across 8,000 clinical staff with zero downtime",
    summary:
      "A large NHS trust needed to meet DSPT requirements for multi-factor authentication without disrupting 24/7 clinical operations. K2K designed a phased rollout that respected shift patterns and legacy clinical systems.",
    outcomes: [
      "100% MFA coverage achieved across all clinical and admin staff",
      "Zero service disruptions during rollout",
      "DSPT Toolkit submission passed with 'Standards Met' rating",
    ],
    duration: "4 months",
    team: "UK",
  },
  {
    id: "manufacturing-ad-cleanup",
    sector: "Regulated Industry",
    icon: Factory,
    tag: "Managed Services",
    title: "Manufacturing group removes 15 years of Active Directory sprawl",
    summary:
      "Following a series of acquisitions, a pan-European manufacturer was running six disconnected Active Directory forests with over 40,000 stale accounts. K2K's managed identity team led a full consolidation and hygiene programme.",
    outcomes: [
      "Six AD forests consolidated into a single managed estate",
      "42,000 stale accounts removed or decommissioned",
      "Ongoing managed service provides continuous governance",
    ],
    duration: "9 months",
    team: "Germany",
  },
  {
    id: "fintech-iam-startup",
    sector: "Financial Services",
    icon: Shield,
    tag: "Roadmap & Strategy",
    title: "Series B fintech builds IAM foundations ahead of FCA authorisation",
    summary:
      "A fast-growing payments fintech needed to demonstrate mature identity controls to the FCA as part of their authorisation process. K2K produced a gap analysis, target operating model and a 12-month roadmap aligned to DORA requirements.",
    outcomes: [
      "IAM target operating model accepted by FCA reviewers",
      "12-month implementation roadmap delivered in three weeks",
      "First two roadmap phases completed before authorisation deadline",
    ],
    duration: "3 months",
    team: "UK",
  },
];

const sectorColors = {
  "Financial Services": { bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.25)", text: "#3b82f6" },
  "Public Sector": { bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.25)", text: "#10b981" },
  "Regulated Industry": { bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.25)", text: "#f59e0b" },
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-16" style={{ background: "var(--background)" }}>
      {/* Hero */}
      <section className="py-20 border-b" style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--k2k-teal)" }}>
            Client outcomes
          </p>
          <h1 className="text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
            Case studies
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "var(--muted)" }}>
            Real engagements. Measurable outcomes. Every case study below represents a completed project — not a sales narrative.
          </p>
        </div>
      </section>

      {/* Case study grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        {caseStudies.map((cs) => {
          const Icon = cs.icon;
          const colors = sectorColors[cs.sector] || sectorColors["Financial Services"];
          return (
            <div key={cs.id} className="rounded-2xl border overflow-hidden"
              style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border"
                    style={{ background: colors.bg, borderColor: colors.border, color: colors.text }}>
                    <Icon size={11} />
                    {cs.sector}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border"
                    style={{ background: "var(--background)", borderColor: "var(--border)", color: "var(--muted)" }}>
                    {cs.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border"
                    style={{ background: "var(--background)", borderColor: "var(--border)", color: "var(--muted)" }}>
                    {cs.team} team · {cs.duration}
                  </span>
                </div>

                <h2 className="text-xl font-bold mb-3 leading-snug" style={{ color: "var(--foreground)" }}>
                  {cs.title}
                </h2>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                  {cs.summary}
                </p>

                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--muted)" }}>
                    Key outcomes
                  </p>
                  {cs.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--k2k-teal)" }} />
                      <span className="text-sm" style={{ color: "var(--foreground)" }}>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-8 py-4 border-t flex items-center justify-between"
                style={{ borderColor: "var(--border)", background: "var(--background)" }}>
                <span className="text-xs" style={{ color: "var(--muted)" }}>Names and identifying details anonymised at client request.</span>
                <Link href="/book"
                  className="inline-flex items-center gap-1 text-sm font-semibold hover:opacity-70 transition-opacity"
                  style={{ color: "var(--k2k-teal)" }}>
                  Discuss a similar project <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <section className="border-t py-16" style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp size={32} className="mx-auto mb-4" style={{ color: "var(--k2k-teal)" }} />
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
            Want results like these?
          </h2>
          <p className="mb-8" style={{ color: "var(--muted)" }}>
            Book a free 30-minute advisory call. We&apos;ll assess where you are and what a realistic improvement path looks like.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/book" className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold">
              Book a free call <ArrowRight size={16} />
            </Link>
            <Link href="/assessment"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border font-semibold text-sm hover:opacity-80 transition-opacity"
              style={{ color: "var(--foreground)", borderColor: "var(--border)" }}>
              <Lock size={14} /> Take the free IAM assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
