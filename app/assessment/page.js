import Link from "next/link";
import { ArrowRight, Clock, BarChart3, FileText, CheckCircle, Shield } from "lucide-react";
import RadarWidget from "@/components/RadarWidget";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  { icon: Clock, title: "10 minutes", desc: "Five themed sections, 22 questions total" },
  { icon: BarChart3, title: "Risk score", desc: "Scored across five cyber risk domains" },
  { icon: FileText, title: "Personalised output", desc: "Gap analysis and programme pathway recommendations" },
  { icon: Shield, title: "No obligation", desc: "Free to complete, no sales call required" },
];

const domains = [
  "Identity & Access Security",
  "Privileged Access & Secrets",
  "Authentication & MFA Maturity",
  "Endpoint & Infrastructure Exposure",
  "Detection, Operations & Assurance",
];

export default function AssessmentLandingPage() {
  return (
    <div className="pt-16 bg-[#0e1322] min-h-screen">
      {/* Hero */}
      <section className="bg-[#090e1c] relative py-24 overflow-hidden border-b border-[#3d4a42]/10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#5cdda2]/5 blur-[100px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full border border-[#5cdda2]/30 bg-[#5cdda2]/10 text-[#5cdda2] mb-6">
            <BarChart3 size={12} /> Free Cyber Risk Assessment
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter mb-6 text-[#dee1f7]">
            Know your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5cdda2] to-[#04a56f]">
              cyber risk profile
            </span>{" "}
            in 10 minutes
          </h1>
          <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto text-[#bccabf]">
            Answer structured questions across five cyber risk domains. Get an instant risk score, gap analysis and a recommended programme pathway — completely free, no commitment required.
          </p>
          <Link href="/assessment/select"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold text-base">
            Start the assessment <ArrowRight size={18} />
          </Link>
          <p className="text-xs mt-4 text-[#bccabf]">
            Takes ~10 minutes · Instant results · No account required
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-[#0e1322] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tighter text-center mb-10 text-[#dee1f7]">
            What you&apos;ll receive
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="text-center p-6 bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 bg-[#5cdda2]/10">
                  <f.icon size={22} className="text-[#5cdda2]" />
                </div>
                <h3 className="font-extrabold text-base mb-1 text-[#dee1f7]">{f.title}</h3>
                <p className="text-sm text-[#bccabf]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment domains + Radar */}
      <section className="bg-[#090e1c] py-20 border-y border-[#3d4a42]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block">
                Five Domains
              </span>
              <h2 className="text-2xl font-extrabold tracking-tighter mb-4 text-[#dee1f7]">
                Five domains. Your complete risk picture.
              </h2>
              <p className="text-base leading-relaxed mb-6 text-[#bccabf]">
                Our Cyber Risk Assessment uses the same structured framework our consultants apply in paid engagements. You get the same rigorous evaluation — instantly, free, with no account required.
              </p>
              <ul className="space-y-3">
                {domains.map((d, i) => (
                  <li key={d} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-[#003823] flex-shrink-0 bg-[#5cdda2]">
                      {i + 1}
                    </div>
                    <span className="font-bold text-sm text-[#dee1f7]">{d}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            {/* Live Radar benchmark */}
            <ScrollReveal delay={2}>
              <RadarWidget />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0e1322] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1f2f] rounded-3xl border border-[#5cdda2]/20 p-12 text-center">
            <CheckCircle size={40} className="mx-auto mb-4 text-[#5cdda2]" />
            <h2 className="text-2xl font-extrabold tracking-tighter mb-3 text-[#dee1f7]">
              Ready to find out where you stand?
            </h2>
            <p className="text-base mb-8 text-[#bccabf]">
              Join 500+ UK organisations that have used our assessment to understand their cyber risk and prioritise the right security programme.
            </p>
            <Link href="/assessment/select"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold text-base">
              Start Cyber Risk Assessment <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
