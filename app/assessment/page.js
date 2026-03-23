import Link from "next/link";
import { ArrowRight, Clock, BarChart3, FileText, CheckCircle, Shield } from "lucide-react";

const features = [
  { icon: Clock, title: "10 minutes", desc: "Five themed sections, 22 questions total" },
  { icon: BarChart3, title: "Maturity score", desc: "Scored across five IAM domains" },
  { icon: FileText, title: "Personalised output", desc: "Gap analysis and service recommendations" },
  { icon: Shield, title: "No obligation", desc: "Free to complete, no sales call required" },
];

const domains = [
  "Identity Governance",
  "Privileged Access",
  "Authentication",
  "Endpoints & Secrets",
  "Operations & Assurance",
];

export default function AssessmentLandingPage() {
  return (
    <div className="pt-16" style={{ background: "var(--background)" }}>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden dark-mesh">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border mb-6"
            style={{ color: "var(--k2k-teal)", borderColor: "rgba(0,164,110,0.3)", background: "rgba(0,164,110,0.08)" }}>
            <BarChart3 size={12} /> Free IAM Maturity Assessment
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "var(--foreground)" }}>
            Know your <span className="gradient-text">identity security posture</span> in 10 minutes
          </h1>
          <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            Answer 22 structured questions across five IAM domains. Get an instant maturity score, gap analysis and tailored recommendations — completely free, no commitment required.
          </p>
          <Link href="/assessment/start"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg">
            Start the assessment <ArrowRight size={18} />
          </Link>
          <p className="text-xs mt-4" style={{ color: "var(--muted)" }}>
            Takes ~10 minutes · Instant results · No account required
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16" style={{ background: "var(--card-bg)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "var(--foreground)" }}>
            What you&apos;ll receive
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="text-center p-6 rounded-2xl border"
                style={{ background: "var(--background)", borderColor: "var(--border)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(0,164,110,0.12)" }}>
                  <f.icon size={22} style={{ color: "var(--k2k-teal)" }} />
                </div>
                <h3 className="font-bold text-base mb-1" style={{ color: "var(--foreground)" }}>{f.title}</h3>
                <p className="text-sm" style={{ color: "var(--muted)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment domains */}
      <section className="py-16" style={{ background: "var(--background)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                Five domains. Complete picture.
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                Our assessment is built on the same framework our consultants use in paid engagements. You get the same structured evaluation — instantly.
              </p>
              <ul className="space-y-3">
                {domains.map((d, i) => (
                  <li key={d} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{ background: "var(--k2k-gradient)" }}>
                      {i + 1}
                    </div>
                    <span className="font-medium text-sm" style={{ color: "var(--foreground)" }}>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Maturity bands preview */}
            <div className="space-y-3">
              <p className="text-sm font-semibold mb-4" style={{ color: "var(--muted)" }}>Your results will include:</p>
              {[
                { label: "Initial", color: "#ef4444", desc: "Significant gaps, urgent action needed" },
                { label: "Developing", color: "#f97316", desc: "Partial controls, targeted improvements" },
                { label: "Defined", color: "#eab308", desc: "Solid foundation, optimisation focus" },
                { label: "Optimising", color: "#22c55e", desc: "Mature posture, continuous improvement" },
              ].map((band) => (
                <div key={band.label} className="flex items-center gap-3 p-3 rounded-xl border"
                  style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: band.color }} />
                  <span className="font-semibold text-sm w-28" style={{ color: "var(--foreground)" }}>{band.label}</span>
                  <span className="text-xs" style={{ color: "var(--muted)" }}>{band.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ background: "var(--card-bg)" }}>
        <div className="max-w-xl mx-auto px-4">
          <CheckCircle size={40} className="mx-auto mb-4" style={{ color: "var(--k2k-teal)" }} />
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
            Ready to find out where you stand?
          </h2>
          <p className="text-base mb-6" style={{ color: "var(--muted)" }}>
            Join 500+ organisations that have used our assessment to prioritise their identity security investment.
          </p>
          <Link href="/assessment/start"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base">
            Start free assessment <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
