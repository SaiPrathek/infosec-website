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
    <div className="pt-16 bg-[#0e1322] min-h-screen">
      <section className="bg-[#090e1c] py-20 border-b border-[#3d4a42]/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#5cdda2]/5 blur-[80px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block">
            Sector Focus
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-[#dee1f7]">
            Sector{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5cdda2] to-[#04a56f]">
              expertise
            </span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-[#bccabf]">
            Identity security isn&apos;t generic. The right approach depends on your sector, your compliance obligations and your threat landscape.
          </p>
        </div>
      </section>

      <section className="bg-[#0e1322] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          {sectors.map((s) => (
            <Link key={s.slug} href={`/sectors/${s.slug}`}
              className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 hover:bg-[#25293a] transition-colors group block p-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-[#5cdda2]/10">
                <s.icon size={22} className="text-[#5cdda2]" />
              </div>
              <h2 className="font-extrabold text-xl tracking-tight mb-2 text-[#dee1f7] group-hover:text-[#5cdda2] transition-colors">
                {s.title}
              </h2>
              <p className="text-sm leading-relaxed mb-4 text-[#bccabf]">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full border border-[#3d4a42]/30 text-[#bccabf]">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-sm font-bold text-[#5cdda2] flex items-center gap-1">
                View sector page <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
