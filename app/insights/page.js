import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

const articles = [
  {
    id: 1,
    category: "Privileged Access",
    title: "Why PAM failures top the CISA advisory list — and what to do about it",
    excerpt:
      "Privileged access mismanagement consistently appears in breach post-mortems. We break down the most common failure patterns and how to close them without disrupting operations.",
    readTime: "6 min read",
    date: "12 Mar 2025",
  },
  {
    id: 2,
    category: "Regulatory",
    title: "The five IAM controls every FCA-regulated firm needs before DORA",
    excerpt:
      "DORA's ICT risk requirements land in January 2025. Here are the five identity security controls that regulators will look for first — and how to evidence them.",
    readTime: "8 min read",
    date: "5 Mar 2025",
  },
  {
    id: 3,
    category: "Strategy",
    title: "Zero Standing Privilege: myth or achievable goal for mid-market firms?",
    excerpt:
      "ZSP is the gold standard for privileged access, but most organisations treat it as aspirational. We examine what a practical path to near-ZSP looks like with today's tooling.",
    readTime: "7 min read",
    date: "26 Feb 2025",
  },
  {
    id: 4,
    category: "Identity Governance",
    title: "Joiner-mover-leaver: the process that makes or breaks your IAM programme",
    excerpt:
      "Most organisations have a documented JML process. Far fewer actually follow it consistently. We look at why JML fails in practice and how automation changes the picture.",
    readTime: "5 min read",
    date: "18 Feb 2025",
  },
  {
    id: 5,
    category: "Public Sector",
    title: "DSPT and NHS identity security: what 'Standards Met' actually requires",
    excerpt:
      "The Data Security and Protection Toolkit raises the bar for NHS organisations every year. This guide covers the identity-specific assertions and what evidence assessors look for.",
    readTime: "9 min read",
    date: "10 Feb 2025",
  },
  {
    id: 6,
    category: "Authentication",
    title: "MFA fatigue attacks are rising — here is how identity teams should respond",
    excerpt:
      "Attackers are increasingly exploiting MFA push notification fatigue to bypass authentication. We cover detection signals, user education approaches and technical mitigations.",
    readTime: "6 min read",
    date: "3 Feb 2025",
  },
];

const categoryColors = {
  "Privileged Access": { bg: "rgba(239,68,68,0.08)", text: "#ef4444" },
  "Regulatory": { bg: "rgba(59,130,246,0.08)", text: "#3b82f6" },
  "Strategy": { bg: "rgba(139,92,246,0.08)", text: "#8b5cf6" },
  "Identity Governance": { bg: "rgba(0,164,110,0.08)", text: "#00a46e" },
  "Public Sector": { bg: "rgba(16,185,129,0.08)", text: "#10b981" },
  "Authentication": { bg: "rgba(245,158,11,0.08)", text: "#f59e0b" },
};

export const metadata = {
  title: "Insights | Infosec K2K",
  description: "Perspectives on identity security, IAM strategy and regulatory compliance from the Infosec K2K team.",
};

export default function InsightsPage() {
  return (
    <div className="pt-16" style={{ background: "var(--background)" }}>
      {/* Hero */}
      <section className="py-20 border-b" style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--k2k-teal)" }}>
            Knowledge & perspectives
          </p>
          <h1 className="text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
            Insights
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "var(--muted)" }}>
            Practical perspectives on identity security, IAM strategy and regulatory compliance — from practitioners who deliver this work every day.
          </p>
        </div>
      </section>

      {/* Article grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => {
            const catColor = categoryColors[article.category] || categoryColors["Strategy"];
            return (
              <article key={article.id}
                className="rounded-2xl border overflow-hidden flex flex-col hover:shadow-md transition-shadow"
                style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ background: catColor.bg, color: catColor.text }}>
                      <Tag size={10} /> {article.category}
                    </span>
                  </div>
                  <h2 className="font-bold text-base leading-snug mb-3" style={{ color: "var(--foreground)" }}>
                    {article.title}
                  </h2>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                    {article.excerpt}
                  </p>
                </div>
                <div className="px-6 py-4 border-t flex items-center justify-between"
                  style={{ borderColor: "var(--border)", background: "var(--background)" }}>
                  <div className="flex items-center gap-3 text-xs" style={{ color: "var(--muted)" }}>
                    <span className="flex items-center gap-1"><Clock size={11} /> {article.readTime}</span>
                    <span>{article.date}</span>
                  </div>
                  <Link href="#"
                    className="inline-flex items-center gap-1 text-xs font-semibold hover:opacity-70 transition-opacity"
                    style={{ color: "var(--k2k-teal)" }}>
                    Read more <ArrowRight size={11} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <section className="border-t py-16" style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
            Have a topic you&apos;d like us to cover?
          </h2>
          <p className="mb-8" style={{ color: "var(--muted)" }}>
            We write about the identity security challenges we see in practice. If there&apos;s a topic you&apos;d like our take on, get in touch.
          </p>
          <Link href="/contact"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold">
            Suggest a topic <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
