import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, Quote, BarChart3 } from "lucide-react";
import { servicesData } from "@/lib/services-data";

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return { title: "Service not found" };
  return { title: `${service.title} — Infosec K2K`, description: service.heroDesc };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) notFound();

  return (
    <div className="pt-16 bg-[#0e1322] min-h-screen">
      {/* Hero */}
      <section className="bg-[#090e1c] py-20 border-b border-[#3d4a42]/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#5cdda2]/5 blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="text-xs font-bold text-[#5cdda2] hover:text-[#7bfabc] flex items-center gap-1 mb-8 transition-colors">
            ← All services
          </Link>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full border border-[#5cdda2]/30 bg-[#5cdda2]/10 text-[#5cdda2] mb-6">
              <BarChart3 size={12} /> IAM Consultancy
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-[#dee1f7]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5cdda2] to-[#04a56f]">
                {service.title}
              </span>
            </h1>
            <p className="text-lg font-semibold mb-4 text-[#5cdda2]">{service.tagline}</p>
            <p className="text-base leading-relaxed text-[#bccabf] mb-8">{service.heroDesc}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact"
                className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold">
                Book advisory call <ArrowRight size={16} />
              </Link>
              <Link href="/assessment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold border border-[#5cdda2]/30 text-[#5cdda2] hover:bg-[#5cdda2]/5 transition-all">
                Start free assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding your posture — bento */}
      <section className="bg-[#0e1322] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block">
            Understanding Your Posture
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tighter mb-8 text-[#dee1f7]">
            Who this is for
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-8">
              <p className="text-sm leading-relaxed text-[#bccabf]">{service.targetClient}</p>
            </div>
            <div className="md:col-span-4 bg-[#161b2b] rounded-xl border border-[#3d4a42]/10 p-7 flex flex-col justify-between">
              <div>
                <p className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#c3c0ff] mb-4">Quick facts</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#5cdda2]" />
                    <span className="text-sm text-[#dee1f7]">UK-based delivery team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#5cdda2]" />
                    <span className="text-sm text-[#dee1f7]">Client portal tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#5cdda2]" />
                    <span className="text-sm text-[#dee1f7]">Fixed-price available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do — 5 Key Domains */}
      <section className="bg-[#090e1c] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block">
            5 Key Domains
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tighter mb-8 text-[#dee1f7]">
            What we do
          </h2>
          <div className="space-y-0">
            {service.whatWeDo.map((item, i) => (
              <div key={item} className="flex items-start gap-6 py-5 border-l-2 border-[#5cdda2]/40 pl-6 hover:border-[#5cdda2] transition-colors">
                <span className="text-[#5cdda2]/60 text-sm font-bold w-6 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm text-[#dee1f7] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Protocol steps */}
      <section className="bg-[#0e1322] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block">
                Clear, Actionable Roadmap
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tighter mb-8 text-[#dee1f7]">
                How we deliver
              </h2>
              <div className="space-y-6 relative">
                {service.howWeDeliver.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-[#003823] flex-shrink-0 bg-[#5cdda2]">
                      {i + 1}
                    </div>
                    <span className="text-sm pt-1.5 text-[#dee1f7]">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right card placeholder */}
            <div className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-8">
              <p className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#c3c0ff] mb-4">Delivery timeline</p>
              <div className="w-full h-48 rounded-xl bg-gradient-to-br from-[#090e1c] to-[#1a1f2f] border border-[#3d4a42]/10 flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#5cdda2]/10 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle size={20} className="text-[#5cdda2]" />
                  </div>
                  <p className="text-xs text-[#bccabf]">Structured delivery framework</p>
                </div>
              </div>
              <p className="text-xs text-[#bccabf]">
                All engagements tracked through our client portal with real-time milestone visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case study quote */}
      <section className="bg-[#090e1c] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1f2f] rounded-xl border border-[#5cdda2]/20 p-10 md:p-14">
            <Quote size={36} className="mb-6 text-[#5cdda2]/30" />
            <p className="text-xl italic leading-relaxed mb-6 text-[#dee1f7]">
              &ldquo;{service.caseStudy.result}&rdquo;
            </p>
            <p className="text-sm font-bold text-[#bccabf]">{service.caseStudy.org}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0e1322] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1f2f] rounded-3xl border border-[#5cdda2]/20 p-12 text-center">
            <h3 className="font-extrabold text-2xl tracking-tighter mb-3 text-[#dee1f7]">
              Ready to get started?
            </h3>
            <p className="text-sm mb-8 text-[#bccabf]">
              Book a free 30-minute advisory call to discuss how {service.title} could work for your organisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary px-8 py-4 rounded-md font-bold inline-flex items-center gap-2">
                Book advisory call <ArrowRight size={14} />
              </Link>
              <Link href="/assessment"
                className="px-8 py-4 rounded-md border border-[#5cdda2]/30 font-bold text-sm inline-flex items-center gap-2 text-[#5cdda2] hover:bg-[#5cdda2]/5 transition-all">
                Start free assessment <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
