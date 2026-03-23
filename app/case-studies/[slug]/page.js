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
    <div className="pt-16 bg-[#0e1322] min-h-screen">
      {/* Hero */}
      <section className="bg-[#090e1c] py-16 border-b border-[#3d4a42]/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#5cdda2]/5 blur-[80px] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm mb-6 text-[#bccabf] hover:text-[#dee1f7] transition-colors">
            <ArrowLeft size={14} /> Back to case studies
          </Link>

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
              <Clock size={10} /> {cs.duration} · {cs.team} team
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tighter mb-4 leading-snug text-[#dee1f7]">
            {cs.title}
          </h1>
          <p className="text-base leading-relaxed text-[#bccabf]">
            {cs.summary}
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">

        {/* Challenge */}
        <div className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-8">
          <p className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#bccabf] mb-3">
            The challenge
          </p>
          <p className="text-sm leading-relaxed text-[#dee1f7]">
            {cs.challenge}
          </p>
        </div>

        {/* Approach */}
        <div className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-8">
          <p className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#bccabf] mb-4">
            Our approach
          </p>
          <div className="space-y-4">
            {cs.approach.map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold text-[#003823] flex-shrink-0 mt-0.5 bg-[#5cdda2]">
                  {i + 1}
                </div>
                <p className="text-sm leading-relaxed text-[#dee1f7]">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-8">
          <p className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#bccabf] mb-4">
            Key outcomes
          </p>
          <div className="space-y-3">
            {cs.outcomes.map((outcome, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#5cdda2]/5 border border-[#5cdda2]/15">
                <CheckCircle size={16} className="flex-shrink-0 mt-0.5 text-[#5cdda2]" />
                <span className="text-sm font-semibold text-[#dee1f7]">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="bg-[#1a1f2f] rounded-xl border border-[#5cdda2]/20 p-8">
          <Quote size={28} className="mb-4 text-[#5cdda2]/30" />
          <p className="text-base leading-relaxed italic mb-5 text-[#dee1f7]">
            &ldquo;{cs.quote.text}&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-[#003823] bg-[#5cdda2]">
              {cs.quote.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-bold text-[#dee1f7]">{cs.quote.author}</p>
              <p className="text-xs text-[#bccabf]">{cs.quote.role}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#1a1f2f] rounded-3xl border border-[#5cdda2]/20 p-10 text-center">
          <p className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-2">
            Achieve similar results
          </p>
          <h2 className="text-xl font-extrabold tracking-tight mb-3 text-[#dee1f7]">
            Ready to discuss your situation?
          </h2>
          <p className="text-sm mb-6 text-[#bccabf]">
            Book a free 30-minute advisory call. We&apos;ll assess where you are and what a realistic improvement path looks like for your organisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/book" className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold">
              Book a free call <ArrowRight size={16} />
            </Link>
            <Link href="/case-studies"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border border-[#5cdda2]/30 font-bold text-sm text-[#5cdda2] hover:bg-[#5cdda2]/5 transition-all">
              <ArrowLeft size={14} /> More case studies
            </Link>
          </div>
          <p className="text-xs mt-4 text-[#bccabf]">
            Names and identifying details anonymised at client request.
          </p>
        </div>
      </div>
    </div>
  );
}
