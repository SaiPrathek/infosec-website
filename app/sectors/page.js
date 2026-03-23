import Link from "next/link";
import { ArrowRight, Building2, Landmark, Shield, CheckCircle } from "lucide-react";

const sectors = [
  {
    slug: "enterprise",
    icon: Building2,
    title: "Enterprise",
    desc: "Large, complex identity estates with hybrid infrastructure and M&A-driven complexity.",
    tags: ["ISO 27001", "NIS2", "GDPR"],
  },
  {
    slug: "financial-services",
    icon: Landmark,
    title: "Financial Services",
    desc: "The highest regulatory bar — FCA, DORA, PCI DSS — with insider risk and third-party access challenges.",
    tags: ["FCA / PRA", "DORA", "PCI DSS"],
  },
  {
    slug: "public-sector",
    icon: Shield,
    title: "Public Sector",
    desc: "Sensitive citizen data, legacy infrastructure and NCSC compliance requirements.",
    tags: ["Cyber Essentials+", "CAF", "UK GDPR"],
  },
  {
    slug: "regulated",
    icon: CheckCircle,
    title: "Regulated Industries",
    desc: "Pharmaceuticals, energy, legal and insurance — where compliance and security meet.",
    tags: ["GxP", "ISO 27001", "FCA"],
  },
];

export default function SectorsPage() {
  return (
    <div className="pt-16" style={{ background: "var(--background)" }}>
      <section className="py-16 border-b" style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
            Sector <span className="gradient-text">expertise</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            Identity security isn&apos;t generic. The right approach depends on your sector, your compliance obligations and your threat landscape.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          {sectors.map((s) => (
            <Link key={s.slug} href={`/sectors/${s.slug}`}
              className="rounded-2xl p-8 border group hover:shadow-xl hover:-translate-y-0.5 transition-all block"
              style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(0,164,110,0.12)" }}>
                <s.icon size={22} style={{ color: "var(--k2k-teal)" }} />
              </div>
              <h2 className="font-bold text-xl mb-2 group-hover:text-teal-500 transition-colors"
                style={{ color: "var(--foreground)" }}>
                {s.title}
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>{s.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full border"
                    style={{ color: "var(--muted)", borderColor: "var(--border)" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-sm font-semibold text-teal-500 flex items-center gap-1">
                View sector page <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
