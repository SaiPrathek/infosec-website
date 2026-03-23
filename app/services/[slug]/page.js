import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, Calendar, Quote } from "lucide-react";
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
    <div className="pt-16" style={{ background: "var(--background)" }}>
      {/* Hero */}
      <section className="py-16 border-b dark-mesh" style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="text-xs font-semibold text-teal-500 hover:text-teal-400 flex items-center gap-1 mb-6">
            ← All services
          </Link>
          <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
            {service.title}
          </h1>
          <p className="text-lg font-medium mb-4" style={{ color: "var(--k2k-teal)" }}>{service.tagline}</p>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>{service.heroDesc}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Who it's for */}
        <div className="rounded-2xl p-8 border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <h2 className="font-bold text-xl mb-3" style={{ color: "var(--foreground)" }}>Who this is for</h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{service.targetClient}</p>
        </div>

        {/* What we do */}
        <div className="rounded-2xl p-8 border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <h2 className="font-bold text-xl mb-6" style={{ color: "var(--foreground)" }}>What we do</h2>
          <ul className="space-y-3">
            {service.whatWeDo.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: "var(--k2k-teal)" }} />
                <span className="text-sm" style={{ color: "var(--foreground)" }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* How we deliver */}
        <div className="rounded-2xl p-8 border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <h2 className="font-bold text-xl mb-6" style={{ color: "var(--foreground)" }}>How we deliver</h2>
          <ol className="space-y-4">
            {service.howWeDeliver.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: "var(--k2k-gradient)" }}>
                  {i + 1}
                </div>
                <span className="text-sm pt-0.5" style={{ color: "var(--foreground)" }}>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Case study snippet */}
        <div className="rounded-2xl p-8 border" style={{ background: "rgba(0,164,110,0.05)", borderColor: "rgba(0,164,110,0.2)" }}>
          <Quote size={24} className="mb-4" style={{ color: "var(--k2k-teal)" }} />
          <p className="text-base italic leading-relaxed mb-4" style={{ color: "var(--foreground)" }}>
            &ldquo;{service.caseStudy.result}&rdquo;
          </p>
          <p className="text-sm font-semibold" style={{ color: "var(--muted)" }}>{service.caseStudy.org}</p>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-8 text-center border"
          style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <h3 className="font-bold text-xl mb-3" style={{ color: "var(--foreground)" }}>
            Ready to get started?
          </h3>
          <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
            Book a free 30-minute advisory call to discuss how {service.title} could work for your organisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact"
              className="btn-primary px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2">
              <Calendar size={16} /> Book advisory call
            </Link>
            <Link href="/assessment"
              className="px-6 py-3 rounded-xl border font-semibold text-sm inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
              style={{ color: "var(--foreground)", borderColor: "var(--border)" }}>
              Start free assessment <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
