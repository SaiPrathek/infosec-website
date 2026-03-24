"use client";

import Link from "next/link";
import { Users, Building2, CheckCircle, Shield, ArrowRight, Clock, ChevronLeft } from "lucide-react";

const iconMap = { Users, Building2, CheckCircle, Shield };

const types = [
  {
    id: "iam",
    title: "IAM Maturity Assessment",
    subtitle: "Identity & Access Management",
    desc: "Full identity and access management posture review across governance, privileged access, authentication, endpoints and operations.",
    time: "10 min",
    questions: 22,
    badge: "Most Popular",
    icon: "Users",
    badgeColor: "bg-[#5cdda2]/20 text-[#5cdda2]",
  },
  {
    id: "swift",
    title: "SWIFT CSP Readiness",
    subtitle: "SWIFT Customer Security Programme",
    desc: "Structured readiness check against SWIFT CSP mandatory and advisory controls — helps you prepare for annual attestation.",
    time: "8 min",
    questions: 18,
    badge: "Regulated",
    icon: "Building2",
    badgeColor: "bg-blue-500/20 text-blue-400",
  },
  {
    id: "compliance",
    title: "Compliance Maturity Review",
    subtitle: "ISO 27001 / DORA / FCA / Cyber Essentials",
    desc: "Assess your control coverage and maturity against common UK and EU security frameworks — identify gaps before your auditors do.",
    time: "12 min",
    questions: 20,
    badge: null,
    icon: "CheckCircle",
    badgeColor: null,
  },
  {
    id: "offensive",
    title: "Vulnerability Exposure Check",
    subtitle: "Attack Surface & Testing Readiness",
    desc: "A quick-fire assessment of your external attack surface, internal testing maturity and readiness to detect and respond to threats.",
    time: "6 min",
    questions: 16,
    badge: "Quick",
    icon: "Shield",
    badgeColor: "bg-purple-500/20 text-purple-400",
  },
];

export default function AssessmentSelectPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 section-pad" style={{ background: "var(--background)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link href="/assessment" className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors"
          style={{ color: "var(--muted)" }}>
          <ChevronLeft size={15} /> Back to overview
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(92,221,162,0.1)", color: "#5cdda2" }}>
            Free Assessment
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-4" style={{ color: "var(--foreground)" }}>
            What would you like to assess?
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Select the assessment type that best matches your current priority. All assessments are free and take under 15 minutes.
          </p>
        </div>

        {/* Type cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {types.map((t) => {
            const Icon = iconMap[t.icon] || Shield;
            return (
              <Link key={t.id} href={`/assessment/start?type=${t.id}`}
                className="group relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
                {/* Badge */}
                {t.badge && (
                  <span className={`absolute top-4 right-4 text-xs font-bold px-2.5 py-0.5 rounded-full ${t.badgeColor}`}>
                    {t.badge}
                  </span>
                )}

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(92,221,162,0.1)" }}>
                  <Icon size={22} color="#5cdda2" />
                </div>

                {/* Content */}
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#5cdda2" }}>
                  {t.subtitle}
                </p>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--foreground)" }}>{t.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>{t.desc}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs" style={{ color: "var(--muted)" }}>
                  <span className="flex items-center gap-1"><Clock size={12} /> {t.time}</span>
                  <span>{t.questions} questions</span>
                </div>

                {/* CTA arrow */}
                <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(92,221,162,0.15)" }}>
                  <ArrowRight size={14} color="#5cdda2" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm mt-8" style={{ color: "var(--muted)" }}>
          Not sure which applies to you?{" "}
          <Link href="/contact" className="font-medium" style={{ color: "#5cdda2" }}>
            Talk to our team →
          </Link>
        </p>
      </div>
    </div>
  );
}
