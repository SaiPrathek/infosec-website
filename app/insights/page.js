import Link from "next/link";
import { ArrowRight, Clock, Search } from "lucide-react";

const articles = [
  {
    id: 1,
    category: "Privileged Access",
    title: "Why PAM failures top the CISA advisory list — and what to do about it",
    excerpt:
      "Privileged access mismanagement consistently appears in breach post-mortems. We break down the most common failure patterns and how to close them without disrupting operations.",
    readTime: "6 min read",
    date: "12 Mar 2025",
    featured: true,
  },
  {
    id: 2,
    category: "Regulatory",
    title: "The five IAM controls every FCA-regulated firm needs before DORA",
    excerpt:
      "DORA's ICT risk requirements land in January 2025. Here are the five identity security controls that regulators will look for first — and how to evidence them.",
    readTime: "8 min read",
    date: "5 Mar 2025",
    featured: false,
  },
  {
    id: 3,
    category: "Strategy",
    title: "Zero Standing Privilege: myth or achievable goal for mid-market firms?",
    excerpt:
      "ZSP is the gold standard for privileged access, but most organisations treat it as aspirational. We examine what a practical path to near-ZSP looks like with today's tooling.",
    readTime: "7 min read",
    date: "26 Feb 2025",
    featured: false,
  },
  {
    id: 4,
    category: "Identity Governance",
    title: "Joiner-mover-leaver: the process that makes or breaks your IAM programme",
    excerpt:
      "Most organisations have a documented JML process. Far fewer actually follow it consistently. We look at why JML fails in practice and how automation changes the picture.",
    readTime: "5 min read",
    date: "18 Feb 2025",
    featured: false,
  },
  {
    id: 5,
    category: "Public Sector",
    title: "DSPT and NHS identity security: what 'Standards Met' actually requires",
    excerpt:
      "The Data Security and Protection Toolkit raises the bar for NHS organisations every year. This guide covers the identity-specific assertions and what evidence assessors look for.",
    readTime: "9 min read",
    date: "10 Feb 2025",
    featured: false,
  },
  {
    id: 6,
    category: "Authentication",
    title: "MFA fatigue attacks are rising — here is how identity teams should respond",
    excerpt:
      "Attackers are increasingly exploiting MFA push notification fatigue to bypass authentication. We cover detection signals, user education approaches and technical mitigations.",
    readTime: "6 min read",
    date: "3 Feb 2025",
    featured: false,
  },
];

export const metadata = {
  title: "Insights | Infosec K2K",
  description: "Perspectives on identity security, IAM strategy and regulatory compliance from the Infosec K2K team.",
};

export default function InsightsPage() {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <div className="pt-16 bg-[#0e1322] min-h-screen">
      {/* Header */}
      <section className="bg-[#090e1c] py-20 border-b border-[#3d4a42]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block">
            Threat Intelligence &amp; Insights
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-[#dee1f7]">
            Latest insights &amp; news
          </h1>
          <p className="text-lg text-[#bccabf] max-w-2xl">
            Practical perspectives on identity security, IAM strategy and regulatory compliance — from practitioners who deliver this work every day.
          </p>
        </div>
      </section>

      {/* Filter pills + Search */}
      <div className="bg-[#090e1c] border-b border-[#3d4a42]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {["All Insights", "Guide", "Research", "Checklist", "News"].map((filter, i) => (
              <button key={filter}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-colors ${
                  i === 0
                    ? "bg-[#5cdda2] text-[#003823]"
                    : "bg-[#1a1f2f] text-[#bccabf] border border-[#3d4a42]/20 hover:bg-[#25293a]"
                }`}>
                {filter}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#bccabf]" />
            <input
              type="text"
              placeholder="Search insights..."
              className="bg-[#1a1f2f] border border-[#3d4a42]/20 rounded-lg pl-9 pr-4 py-2 text-sm text-[#dee1f7] placeholder:text-[#bccabf] focus:outline-none focus:border-[#5cdda2]/40 w-56"
            />
          </div>
        </div>
      </div>

      {/* Bento grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured article */}
        {featured && (
          <Link href="#" className="block mb-8 group">
            <div className="bg-[#161b2b] border border-[#3d4a42]/10 rounded-xl hover:bg-[#25293a] transition-colors overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 h-48 lg:h-auto">
                  <div className="w-full h-full bg-gradient-to-br from-[#1a1f2f] to-[#090e1c] border-b lg:border-b-0 lg:border-r border-[#3d4a42]/10 flex items-center justify-center min-h-[200px]">
                    <div className="text-center p-6">
                      <div className="w-14 h-14 rounded-full bg-[#5cdda2]/10 flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl font-black text-[#5cdda2]">★</span>
                      </div>
                      <p className="text-xs text-[#bccabf]">Featured article</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[0.7rem] font-bold px-3 py-1 rounded-full bg-[#2f3445] text-[#5cdda2]">
                      {featured.category}
                    </span>
                    <span className="text-xs font-bold text-[#5cdda2] bg-[#5cdda2]/10 px-2 py-0.5 rounded-full">Featured</span>
                  </div>
                  <h2 className="text-2xl font-extrabold tracking-tight mb-4 text-[#dee1f7] group-hover:text-[#5cdda2] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-[#bccabf] mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-[#bccabf]">
                      <span className="flex items-center gap-1"><Clock size={11} /> {featured.readTime}</span>
                      <span>{featured.date}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-[#5cdda2]">
                      Read more <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Rest of articles */}
        <div className="grid md:grid-cols-3 gap-6">
          {rest.map((article) => (
            <article key={article.id}
              className="bg-[#161b2b] border border-[#3d4a42]/10 rounded-xl hover:bg-[#25293a] transition-colors overflow-hidden flex flex-col group">
              {/* Image placeholder */}
              <div className="w-full h-36 bg-gradient-to-br from-[#1a1f2f] to-[#090e1c] border-b border-[#3d4a42]/10 flex items-center justify-center flex-shrink-0">
                <div className="w-8 h-8 rounded-lg bg-[#5cdda2]/10 flex items-center justify-center">
                  <span className="text-[#5cdda2] text-sm font-black">#</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-[0.7rem] font-bold px-3 py-1 rounded-full mb-4 inline-block bg-[#2f3445] text-[#5cdda2] self-start">
                  {article.category}
                </span>
                <h2 className="font-bold text-sm leading-snug mb-3 text-[#dee1f7] group-hover:text-[#5cdda2] transition-colors">
                  {article.title}
                </h2>
                <p className="text-xs leading-relaxed text-[#bccabf] mb-4 flex-1">
                  {article.excerpt.slice(0, 100)}...
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#3d4a42]/10">
                  <div className="flex items-center gap-2 text-xs text-[#bccabf]">
                    <span className="flex items-center gap-1"><Clock size={10} /> {article.readTime}</span>
                  </div>
                  <Link href="#"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#5cdda2] hover:text-[#7bfabc] transition-colors">
                    Read more <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="border-t border-[#3d4a42]/10 py-16 bg-[#090e1c]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold tracking-tighter mb-3 text-[#dee1f7]">
            Have a topic you&apos;d like us to cover?
          </h2>
          <p className="mb-8 text-[#bccabf]">
            We write about the identity security challenges we see in practice. If there&apos;s a topic you&apos;d like our take on, get in touch.
          </p>
          <Link href="/contact"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold">
            Suggest a topic <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
