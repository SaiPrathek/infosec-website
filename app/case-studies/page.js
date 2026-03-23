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
    <div className="pt-16 bg-[#0e1322] min-h-screen">
      {/* Header */}
      <section className="bg-[#090e1c] py-20 border-b border-[#3d4a42]/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#5cdda2]/5 blur-[80px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block">
            Client Outcomes
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-[#dee1f7]">
            Case studies
          </h1>
          <p className="text-lg max-w-2xl text-[#bccabf]">
            Real engagements. Measurable outcomes. Every case study below represents a completed project — not a sales narrative.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <div className="border-b border-[#3d4a42]/10 bg-[#090e1c]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-2">
          {allSectors.map((sector) => (
            <button
              key={sector}
              onClick={() => setActiveFilter(sector)}
              className="px-4 py-1.5 rounded-full text-sm font-bold border transition-all"
              style={{
                background: activeFilter === sector ? "#5cdda2" : "#1a1f2f",
                borderColor: activeFilter === sector ? "#5cdda2" : "rgba(61,74,66,0.2)",
                color: activeFilter === sector ? "#003823" : "#bccabf",
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
              <div className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 overflow-hidden hover:bg-[#25293a] transition-colors">
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border"
                      style={{ background: colors.bg, borderColor: colors.border, color: colors.text }}>
                      <Icon size={11} />
                      {cs.sector}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#2f3445] text-[#bccabf]">
                      {cs.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#2f3445] text-[#bccabf]">
                      {cs.team} team · {cs.duration}
                    </span>
                  </div>

                  <h2 className="text-xl font-extrabold tracking-tight mb-3 leading-snug text-[#dee1f7] group-hover:text-[#5cdda2] transition-colors">
                    {cs.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-6 text-[#bccabf]">
                    {cs.summary}
                  </p>

                  <div className="space-y-2">
                    <p className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#bccabf] mb-3">
                      Key outcomes
                    </p>
                    {cs.outcomes.map((outcome, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <svg width="14" height="14" viewBox="0 0 14 14" className="mt-0.5 flex-shrink-0" fill="none">
                          <circle cx="7" cy="7" r="7" fill="rgba(92,221,162,0.15)" />
                          <path d="M4 7l2 2 4-4" stroke="#5cdda2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-sm text-[#dee1f7]">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-8 py-4 border-t border-[#3d4a42]/10 bg-[#161b2b] flex items-center justify-between">
                  <span className="text-xs text-[#bccabf]">
                    Names and identifying details anonymised at client request.
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-[#5cdda2]">
                    Read case study <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* CTA */}
      <section className="border-t border-[#3d4a42]/10 py-16 bg-[#090e1c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1f2f] rounded-3xl border border-[#5cdda2]/20 p-12 text-center">
            <TrendingUp size={32} className="mx-auto mb-4 text-[#5cdda2]" />
            <h2 className="text-2xl font-extrabold tracking-tighter mb-3 text-[#dee1f7]">
              Want results like these?
            </h2>
            <p className="mb-8 text-[#bccabf]">
              Book a free 30-minute advisory call. We&apos;ll assess where you are and what a realistic improvement path looks like.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/book" className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold">
                Book a free call <ArrowRight size={16} />
              </Link>
              <Link href="/assessment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border border-[#5cdda2]/30 font-bold text-sm text-[#5cdda2] hover:bg-[#5cdda2]/5 transition-all">
                <Lock size={14} /> Take the free IAM assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
