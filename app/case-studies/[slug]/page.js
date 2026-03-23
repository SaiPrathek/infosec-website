import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, ArrowRight, ArrowLeft, Clock, Quote } from "lucide-react";
import { caseStudies, sectorColors } from "@/lib/case-studies-data";

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.id === slug);
  if (!cs) return {};
  return {
    title: `${cs.title} | Infosec K2K`,
    description: cs.summary,
  };
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.id === slug);
  if (!cs) notFound();

  const Icon = cs.icon;
  const colors = sectorColors[cs.sector] || sectorColors["Financial Services"];

  return (
    <div className="pt-16" style={{ background: "var(--background)" }}>
      {/* Hero */}
      <section className="py-16 border-b" style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm mb-6 hover:opacity-70 transition-opacity"
            style={{ color: "var(--muted)" }}>
            <ArrowLeft size={14} /> Back to case studies
          </Link>

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
              <Clock size={10} /> {cs.duration} · {cs.team} team
            </span>
          </div>

          <h1 className="text-3xl font-bold mb-4 leading-snug" style={{ color: "var(--foreground)" }}>
            {cs.title}
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            {cs.summary}
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">

        {/* Challenge */}
        <div className="rounded-2xl p-8 border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--muted)" }}>
            The challenge
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>
            {cs.challenge}
          </p>
        </div>

        {/* Approach */}
        <div className="rounded-2xl p-8 border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--muted)" }}>
            Our approach
          </p>
          <div className="space-y-3">
            {cs.approach.map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5"
                  style={{ background: "var(--k2k-gradient)" }}>
                  {i + 1}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div className="rounded-2xl p-8 border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--muted)" }}>
            Key outcomes
          </p>
          <div className="space-y-3">
            {cs.outcomes.map((outcome, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl"
                style={{ background: "rgba(0,164,110,0.05)", border: "1px solid rgba(0,164,110,0.15)" }}>
                <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: "var(--k2k-teal)" }} />
                <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="rounded-2xl p-8 border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <Quote size={28} className="mb-4 opacity-30" style={{ color: "var(--k2k-teal)" }} />
          <p className="text-base leading-relaxed italic mb-5" style={{ color: "var(--foreground)" }}>
            &ldquo;{cs.quote.text}&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
              style={{ background: "var(--k2k-gradient)" }}>
              {cs.quote.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{cs.quote.author}</p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>{cs.quote.role}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-8 border text-center"
          style={{ background: "rgba(0,164,110,0.06)", borderColor: "rgba(0,164,110,0.2)" }}>
          <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--k2k-teal)" }}>
            Achieve similar results
          </p>
          <h2 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
            Ready to discuss your situation?
          </h2>
          <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
            Book a free 30-minute advisory call. We&apos;ll assess where you are and what a realistic improvement path looks like for your organisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/book" className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold">
              Book a free call <ArrowRight size={16} />
            </Link>
            <Link href="/case-studies"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border font-semibold text-sm hover:opacity-80 transition-opacity"
              style={{ color: "var(--foreground)", borderColor: "var(--border)" }}>
              <ArrowLeft size={14} /> More case studies
            </Link>
          </div>
          <p className="text-xs mt-4" style={{ color: "var(--muted)" }}>
            Names and identifying details anonymised at client request.
          </p>
        </div>
      </div>
    </div>
  );
}
