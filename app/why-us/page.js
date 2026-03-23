import Link from "next/link";
import { ArrowRight, Shield, Users, BarChart3, Monitor, CheckCircle, Star, Zap, RefreshCw } from "lucide-react";

const differentiators = [
  {
    icon: Shield,
    title: "UK-Based Expertise",
    desc: "Our consultants have delivered IAM programmes at major financial institutions, government agencies and global enterprises. They lead, they don't review.",
    points: ["Named consultants throughout", "12+ years average experience", "No handoffs to junior staff mid-project"],
  },
  {
    icon: RefreshCw,
    title: "Vendor Agnostic",
    desc: "We work across all major IAM platforms — Microsoft Entra, SailPoint, CyberArk, Okta and BeyondTrust. Our recommendations are driven by your needs, not our partnerships.",
    points: ["Platform-independent advice", "No vendor incentives", "Best fit for your environment"],
  },
  {
    icon: Zap,
    title: "Accelerated ROI",
    desc: "Our structured methodology and client portal transparency means projects deliver faster. You can see exactly where your project stands — milestones, actions, deliverables — in real time.",
    points: ["Structured delivery framework", "Real-time milestone tracking", "Stakeholder-ready reporting"],
  },
];

const pillars = [
  {
    icon: BarChart3,
    title: "Commercial honesty",
    desc: "We tell clients what they need to hear, not what they want to hear. Our assessments are candid. Our roadmaps are realistic. We don't over-scope to maximise fees.",
    points: ["Fixed-price engagements available", "No unnecessary tool recommendations", "We'll tell you if you don't need us"],
  },
  {
    icon: Monitor,
    title: "Portal transparency",
    desc: "Every engagement runs through our client portal. You can see exactly where your project stands — milestones, actions, deliverables, risks — in real time. No weekly email updates. No surprises.",
    points: ["Real-time milestone tracking", "Secure document exchange", "Stakeholder-ready reporting"],
  },
];

export default function WhyUsPage() {
  return (
    <div className="pt-16 bg-[#0e1322] min-h-screen">
      {/* Hero */}
      <section className="bg-[#090e1c] py-20 border-b border-[#3d4a42]/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#5cdda2]/5 blur-[100px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block">
            Why Choose Us
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-5 text-[#dee1f7]">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5cdda2] to-[#04a56f]">
              Infosec K2K
            </span>
            ?
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-[#bccabf]">
            There are many security consultancies. Very few focus exclusively on identity. Fewer still have delivered across the breadth of sectors and programmes we have.
          </p>
        </div>
      </section>

      {/* 3 Differentiators */}
      <section className="bg-[#0e1322] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block text-center">
            Our Differentiators
          </span>
          <h2 className="text-3xl font-extrabold tracking-tighter mb-12 text-[#dee1f7] text-center">
            What sets us apart
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-[#5cdda2]/10">
                  <d.icon size={22} className="text-[#5cdda2]" />
                </div>
                <h3 className="font-extrabold text-lg tracking-tight mb-3 text-[#dee1f7]">{d.title}</h3>
                <p className="text-sm leading-relaxed mb-5 text-[#bccabf]">{d.desc}</p>
                <ul className="space-y-2">
                  {d.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-xs">
                      <CheckCircle size={12} className="text-[#5cdda2] flex-shrink-0" />
                      <span className="text-[#dee1f7]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#090e1c] py-16 border-y border-[#3d4a42]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "150+", label: "Clients Secured" },
              { value: "500+", label: "IAM Assessments" },
              { value: "12+", label: "Years Delivering" },
              { value: "98%", label: "Would Recommend" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-extrabold tracking-tighter mb-2 text-[#5cdda2]">{s.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#bccabf]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional pillars */}
      <section className="bg-[#0e1322] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-8">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 bg-[#5cdda2]/10">
                  <p.icon size={20} className="text-[#5cdda2]" />
                </div>
                <h2 className="font-extrabold text-lg tracking-tight mb-3 text-[#dee1f7]">{p.title}</h2>
                <p className="text-sm leading-relaxed mb-4 text-[#bccabf]">{p.desc}</p>
                <ul className="space-y-2">
                  {p.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-xs">
                      <CheckCircle size={12} className="text-[#5cdda2] flex-shrink-0" />
                      <span className="text-[#dee1f7]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / approach */}
      <section className="bg-[#090e1c] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block text-center">
            Our People
          </span>
          <h2 className="text-3xl font-extrabold tracking-tighter mb-12 text-[#dee1f7] text-center">
            The team behind your project
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Principal Consultants",
                desc: "Our consultants have delivered IAM programmes at major financial institutions, government agencies and global enterprises. They lead, they don't review.",
              },
              {
                name: "Average experience",
                stat: "12+ years",
                desc: "in identity security and IAM delivery.",
              },
              {
                name: "Certifications",
                desc: "CISMs, CISSPs and platform specialists in Microsoft Entra, SailPoint, CyberArk, Okta and BeyondTrust.",
              },
            ].map((t) => (
              <div key={t.name} className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-7 text-center">
                {t.stat && (
                  <div className="text-4xl font-extrabold tracking-tighter mb-2 text-[#5cdda2]">{t.stat}</div>
                )}
                <h3 className="font-bold text-sm mb-3 text-[#dee1f7]">{t.name}</h3>
                <p className="text-xs leading-relaxed text-[#bccabf]">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#0e1322] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="#5cdda2" className="text-[#5cdda2]" />
            ))}
          </div>
          <p className="text-xl italic font-semibold leading-relaxed mb-6 text-[#dee1f7]">
            &ldquo;We&apos;ve worked with three IAM consultancies over the past decade. Infosec K2K are the only ones who told us the truth about our programme from day one — and then delivered exactly what they promised.&rdquo;
          </p>
          <p className="font-bold text-sm text-[#dee1f7]">CISO</p>
          <p className="text-xs text-[#bccabf]">Major UK Insurance Group</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#090e1c] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1f2f] rounded-3xl border border-[#5cdda2]/20 p-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tighter mb-3 text-[#dee1f7]">Ready to work together?</h2>
            <p className="text-base mb-8 text-[#bccabf]">
              Start with a free assessment, or book a call to talk through your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/assessment" className="btn-primary px-8 py-4 rounded-md font-bold inline-flex items-center gap-2">
                Start free assessment <ArrowRight size={14} />
              </Link>
              <Link href="/contact"
                className="px-8 py-4 rounded-md border border-[#5cdda2]/30 font-bold text-sm inline-flex items-center gap-2 text-[#5cdda2] hover:bg-[#5cdda2]/5 transition-all">
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
