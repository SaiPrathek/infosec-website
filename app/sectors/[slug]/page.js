import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, AlertTriangle, CheckCircle, Quote } from "lucide-react";
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
    <div className="pt-16" style={{ background: "var(--background)" }}>
      {/* Hero */}
      <section className="py-16 border-b dark-mesh" style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/sectors" className="text-xs font-semibold text-teal-500 hover:text-teal-400 flex items-center gap-1 mb-6">
            ← All sectors
          </Link>
          <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--foreground)" }}>{sector.title}</h1>
          <p className="text-lg font-medium mb-4" style={{ color: "var(--k2k-teal)" }}>{sector.tagline}</p>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>{sector.heroDesc}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Challenges */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle size={18} style={{ color: "#f97316" }} />
            <h2 className="font-bold text-xl" style={{ color: "var(--foreground)" }}>
              Key challenges in {sector.title.toLowerCase()}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {sector.challenges.map((c) => (
              <div key={c.title} className="rounded-2xl p-6 border"
                style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--foreground)" }}>{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance */}
        <div className="rounded-2xl p-8 border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle size={18} style={{ color: "var(--k2k-teal)" }} />
            <h2 className="font-bold text-xl" style={{ color: "var(--foreground)" }}>Compliance frameworks we work with</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {sector.compliance.map((c) => (
              <span key={c} className="px-3 py-1.5 rounded-full border text-sm font-medium"
                style={{ color: "var(--foreground)", borderColor: "var(--border)", background: "var(--background)" }}>
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Case study */}
        <div className="rounded-2xl p-8 border" style={{ background: "rgba(0,164,110,0.05)", borderColor: "rgba(0,164,110,0.2)" }}>
          <Quote size={24} className="mb-4" style={{ color: "var(--k2k-teal)" }} />
          <p className="text-base italic leading-relaxed mb-4" style={{ color: "var(--foreground)" }}>
            &ldquo;{sector.caseStudy.result}&rdquo;
          </p>
          <p className="text-sm font-semibold" style={{ color: "var(--muted)" }}>{sector.caseStudy.org}</p>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-8 text-center border"
          style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <h3 className="font-bold text-xl mb-3" style={{ color: "var(--foreground)" }}>
            Working in {sector.title}?
          </h3>
          <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
            Let&apos;s talk about your specific requirements. Or start with a free assessment to get a picture of where you stand.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2">
              Talk to a specialist <ArrowRight size={14} />
            </Link>
            <Link href="/assessment" className="px-6 py-3 rounded-xl border font-semibold text-sm inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
              style={{ color: "var(--foreground)", borderColor: "var(--border)" }}>
              Start free assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
