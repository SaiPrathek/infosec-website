"use client";

import Link from "next/link";
import { Users, Building2, CheckCircle, Shield, ArrowRight, Clock, ChevronLeft } from "lucide-react";

const broadAssessment = {
  id: "iam",
  href: "/assessment/start?type=iam",
  title: "Cyber Risk Assessment",
  desc: "Covers all five cyber risk domains: identity security, privileged access, authentication, endpoint exposure and detection maturity. Get a risk score and programme recommendation across all five pathways.",
  time: "10 min",
  questions: 22,
  domains: [
    { label: "Identity Security", color: "#5cdda2" },
    { label: "Privileged Access", color: "#5cdda2" },
    { label: "Authentication", color: "#c3c0ff" },
    { label: "Endpoint Exposure", color: "#f97316" },
    { label: "Detection", color: "#c3c0ff" },
  ],
};

const specialistTypes = [
  {
    id: "iam",
    title: "IAM Maturity Assessment",
    subtitle: "Identity & Access Management",
    desc: "Detailed identity-only deep-dive across governance, privileged access, authentication, endpoints and operations.",
    time: "10 min",
    questions: 22,
    badge: "Specialist · Most popular",
    badgeStyle: "bg-[#5cdda2]/20 text-[#5cdda2]",
    icon: Users,
    href: "/assessment/start?type=iam",
  },
  {
    id: "swift",
    title: "SWIFT CSP Readiness",
    subtitle: "SWIFT Customer Security Programme",
    desc: "Structured readiness check against SWIFT CSP mandatory and advisory controls.",
    time: "8 min",
    questions: 18,
    badge: "Regulated",
    badgeStyle: "bg-blue-500/20 text-blue-400",
    icon: Building2,
    href: "/assessment/start?type=swift",
  },
  {
    id: "compliance",
    title: "Compliance Maturity Review",
    subtitle: "ISO 27001 / DORA / FCA / Cyber Essentials",
    desc: "Assess control coverage and maturity against common UK and EU security frameworks.",
    time: "12 min",
    questions: 20,
    badge: null,
    badgeStyle: null,
    icon: CheckCircle,
    href: "/assessment/start?type=compliance",
  },
];

export default function AssessmentSelectPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 section-pad" style={{ background: "var(--background)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link href="/assessment" className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors"
          style={{ color: "var(--muted)" }}>
          <ChevronLeft size={15} /> Back to overview
        </Link>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(92,221,162,0.1)", color: "#5cdda2" }}>
            Free Assessment
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-4" style={{ color: "var(--foreground)" }}>
            Find your starting point
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            Not sure where your biggest risk is? Start with the broad Cyber Risk Assessment. Already know it&apos;s an identity issue? Go straight to the IAM deep-dive.
          </p>
        </div>

        {/* Primary broad card */}
        <Link href={broadAssessment.href}
          className="group block w-full rounded-2xl border-2 p-7 mb-8 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
          style={{ background: "var(--card-bg)", borderColor: "#5cdda2" }}>
          {/* Top row */}
          <div className="flex items-start justify-between mb-5 flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full"
              style={{ background: "rgba(92,221,162,0.15)", color: "#5cdda2" }}>
              Best starting point · 10 minutes
            </span>
            <span className="text-xs font-medium" style={{ color: "var(--muted)" }}>
              Recommended for most organisations
            </span>
          </div>

          {/* Title + desc */}
          <h2 className="text-2xl font-extrabold tracking-tight mb-2" style={{ color: "var(--foreground)" }}>
            {broadAssessment.title}
          </h2>
          <p className="text-sm leading-relaxed mb-5 max-w-2xl" style={{ color: "var(--muted)" }}>
            {broadAssessment.desc}
          </p>

          {/* Domain tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {broadAssessment.domains.map((d) => (
              <span key={d.label}
                className="text-xs font-semibold px-3 py-1 rounded-full border"
                style={{ borderColor: d.color + "40", color: d.color, background: d.color + "12" }}>
                {d.label}
              </span>
            ))}
          </div>

          {/* Bottom row */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4 text-xs" style={{ color: "var(--muted)" }}>
              <span className="flex items-center gap-1"><Clock size={12} /> {broadAssessment.time}</span>
              <span>{broadAssessment.questions} questions</span>
              <span>Free · No account required</span>
            </div>
            <span className="btn-primary flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold">
              Start Cyber Risk Assessment <ArrowRight size={14} />
            </span>
          </div>
        </Link>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
          <p className="text-xs font-semibold uppercase tracking-wider whitespace-nowrap" style={{ color: "var(--muted)" }}>
            Already know your priority area? Go deeper:
          </p>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>

        {/* Specialist cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {specialistTypes.map((t) => {
            const Icon = t.icon;
            return (
              <Link key={t.id + t.title} href={t.href}
                className="group relative rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
                style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
                {/* Badge */}
                {t.badge && (
                  <span className={`absolute top-4 right-4 text-xs font-bold px-2 py-0.5 rounded-full ${t.badgeStyle}`}>
                    {t.badge}
                  </span>
                )}

                {/* Icon */}
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 flex-shrink-0"
                  style={{ background: "rgba(92,221,162,0.1)" }}>
                  <Icon size={18} color="#5cdda2" />
                </div>

                {/* Content */}
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#5cdda2" }}>
                  {t.subtitle}
                </p>
                <h3 className="text-sm font-bold mb-2 pr-20" style={{ color: "var(--foreground)" }}>{t.title}</h3>
                <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: "var(--muted)" }}>{t.desc}</p>

                {/* Meta + arrow */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs" style={{ color: "var(--muted)" }}>
                    <span className="flex items-center gap-1"><Clock size={11} /> {t.time}</span>
                    <span>{t.questions}q</span>
                  </div>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(92,221,162,0.15)" }}>
                    <ArrowRight size={12} color="#5cdda2" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm mt-8" style={{ color: "var(--muted)" }}>
          Not sure which applies?{" "}
          <Link href="/contact" className="font-medium" style={{ color: "#5cdda2" }}>
            Talk to our team →
          </Link>
        </p>
      </div>
    </div>
  );
}
