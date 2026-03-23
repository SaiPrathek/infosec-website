import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, Quote, Shield } from "lucide-react";
import { sectorsData } from "@/lib/sectors-data";

export function generateStaticParams() {
  return Object.keys(sectorsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const sector = sectorsData[slug];
  if (!sector) return { title: "Sector not found" };
  return { title: `${sector.title} IAM Security — Infosec K2K`, description: sector.heroDesc };
}

export default async function SectorPage({ params }) {
  const { slug } = await params;
  const sector = sectorsData[slug];
  if (!sector) notFound();

  return (
    <div className="pt-16 bg-[#0e1322] min-h-screen">
      {/* Hero */}
      <section className="bg-[#090e1c] py-20 border-b border-[#3d4a42]/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#5cdda2]/5 blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/sectors" className="text-xs font-bold text-[#5cdda2] hover:text-[#7bfabc] flex items-center gap-1 mb-8 transition-colors">
            ← All sectors
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#c3c0ff] mb-4 block">
                Sector Expertise
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-[#dee1f7]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5cdda2] to-[#04a56f]">
                  {sector.title}
                </span>
              </h1>
              <p className="text-lg font-semibold mb-4 text-[#5cdda2]">{sector.tagline}</p>
              <p className="text-base leading-relaxed text-[#bccabf] mb-8">{sector.heroDesc}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact"
                  className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold">
                  Talk to a specialist <ArrowRight size={16} />
                </Link>
                <Link href="/assessment"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold border border-[#5cdda2]/30 text-[#5cdda2] hover:bg-[#5cdda2]/5 transition-all">
                  Start free assessment
                </Link>
              </div>
            </div>
            {/* Image card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[#5cdda2]/5 blur-[60px] rounded-full" />
              <div className="relative w-full h-72 rounded-xl bg-gradient-to-br from-[#1a1f2f] to-[#090e1c] border border-[#3d4a42]/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#5cdda2]/10 flex items-center justify-center mx-auto mb-4">
                    <Shield size={28} className="text-[#5cdda2]" />
                  </div>
                  <p className="text-sm text-[#bccabf]">{sector.title}</p>
                  <p className="text-xs text-[#5cdda2] mt-1">IAM Security</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance frameworks */}
      <section className="bg-[#0e1322] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block">
            Compliance &amp; Regulatory
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tighter mb-8 text-[#dee1f7]">
            Frameworks we work with
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {sector.compliance.slice(0, 3).map((c) => (
              <div key={c} className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#5cdda2]/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={18} className="text-[#5cdda2]" />
                </div>
                <span className="font-bold text-sm text-[#dee1f7]">{c}</span>
              </div>
            ))}
          </div>
          {sector.compliance.length > 3 && (
            <div className="flex flex-wrap gap-3 mt-5">
              {sector.compliance.slice(3).map((c) => (
                <span key={c} className="px-3 py-1.5 rounded-full border border-[#3d4a42]/30 text-sm text-[#bccabf]">
                  {c}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Challenges bento */}
      <section className="bg-[#090e1c] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#c3c0ff] mb-4 block">
            Key Challenges
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tighter mb-8 text-[#dee1f7]">
            Challenges in {sector.title.toLowerCase()}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {sector.challenges.map((c, i) => (
              <div key={c.title}
                className={`bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 hover:bg-[#25293a] transition-colors p-7 ${
                  i === 0 ? "md:col-span-7" : "md:col-span-5"
                }`}>
                <h3 className="font-bold text-sm mb-3 text-[#dee1f7]">{c.title}</h3>
                <p className="text-sm leading-relaxed text-[#bccabf]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why K2K for this sector */}
      <section className="bg-[#0e1322] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block">
            Why K2K
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tighter mb-8 text-[#dee1f7]">
            Why Infosec K2K for {sector.title}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { title: "Sector-specific experience", desc: "We've delivered IAM programmes specifically for your sector, including compliance with your regulatory obligations." },
              { title: "Compliance-aware delivery", desc: "Our recommendations factor in the specific frameworks and evidence requirements your auditors and regulators will expect." },
              { title: "Measurable outcomes", desc: "Every engagement is tracked through our client portal. You always know where your project stands." },
            ].map((item) => (
              <div key={item.title} className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-7">
                <div className="w-8 h-8 rounded-lg bg-[#5cdda2]/10 flex items-center justify-center mb-4">
                  <CheckCircle size={16} className="text-[#5cdda2]" />
                </div>
                <h3 className="font-bold text-sm mb-2 text-[#dee1f7]">{item.title}</h3>
                <p className="text-sm text-[#bccabf]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study quote */}
      <section className="bg-[#090e1c] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1f2f] rounded-xl border border-[#5cdda2]/20 p-10 md:p-14">
            <Quote size={36} className="mb-6 text-[#5cdda2]/30" />
            <p className="text-xl italic leading-relaxed mb-6 text-[#dee1f7]">
              &ldquo;{sector.caseStudy.result}&rdquo;
            </p>
            <p className="text-sm font-bold text-[#bccabf]">{sector.caseStudy.org}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0e1322] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1f2f] rounded-3xl border border-[#5cdda2]/20 p-12 text-center">
            <h3 className="font-extrabold text-2xl tracking-tighter mb-3 text-[#dee1f7]">
              Working in {sector.title}?
            </h3>
            <p className="text-sm mb-8 text-[#bccabf]">
              Let&apos;s talk about your specific requirements. Or start with a free assessment to get a picture of where you stand.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary px-8 py-4 rounded-md font-bold inline-flex items-center gap-2">
                Talk to a specialist <ArrowRight size={14} />
              </Link>
              <Link href="/assessment"
                className="px-8 py-4 rounded-md border border-[#5cdda2]/30 font-bold text-sm inline-flex items-center gap-2 text-[#5cdda2] hover:bg-[#5cdda2]/5 transition-all">
                Start free assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
