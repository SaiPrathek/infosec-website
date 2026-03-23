"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, Lock } from "lucide-react";
import { caseStudies, sectorColors } from "@/lib/case-studies-data";

const allSectors = ["All", ...Array.from(new Set(caseStudies.map((c) => c.sector)))];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? caseStudies
    : caseStudies.filter((c) => c.sector === activeFilter);

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

      {/* Filter bar */}
      <div className="border-b" style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-2">
          {allSectors.map((sector) => (
            <button
              key={sector}
              onClick={() => setActiveFilter(sector)}
              className="px-4 py-1.5 rounded-full text-sm font-medium border transition-all"
              style={{
                background: activeFilter === sector ? "var(--k2k-teal)" : "var(--background)",
                borderColor: activeFilter === sector ? "var(--k2k-teal)" : "var(--border)",
                color: activeFilter === sector ? "white" : "var(--muted)",
              }}>
              {sector}
            </button>
          ))}
        </div>
      </div>

      {/* Case study grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        {filtered.map((cs) => {
          const Icon = cs.icon;
          const colors = sectorColors[cs.sector] || sectorColors["Financial Services"];
          return (
            <Link key={cs.id} href={`/case-studies/${cs.id}`} className="block group">
              <div className="rounded-2xl border overflow-hidden transition-shadow group-hover:shadow-lg"
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

                  <h2 className="text-xl font-bold mb-3 leading-snug group-hover:text-teal-500 transition-colors"
                    style={{ color: "var(--foreground)" }}>
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
                        <svg width="14" height="14" viewBox="0 0 14 14" className="mt-0.5 flex-shrink-0" fill="none">
                          <circle cx="7" cy="7" r="7" fill="rgba(0,164,110,0.15)" />
                          <path d="M4 7l2 2 4-4" stroke="#00a46e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-sm" style={{ color: "var(--foreground)" }}>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-8 py-4 border-t flex items-center justify-between"
                  style={{ borderColor: "var(--border)", background: "var(--background)" }}>
                  <span className="text-xs" style={{ color: "var(--muted)" }}>
                    Names and identifying details anonymised at client request.
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: "var(--k2k-teal)" }}>
                    Read case study <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </Link>
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
