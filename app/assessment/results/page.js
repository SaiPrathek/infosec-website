"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip
} from "recharts";
import { ArrowRight, Download, Calendar, AlertTriangle, TrendingUp, CheckCircle, Shield, Sparkles } from "lucide-react";
import { assessmentThemes, maturityBands } from "@/lib/assessment-data";
import { servicesData } from "@/lib/services-data";

export default function AssessmentResultsPage() {
  const [data, setData] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [aiNarrative, setAiNarrative] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [displayedNarrative, setDisplayedNarrative] = useState("");

  useEffect(() => {
    setMounted(true);
    const stored = sessionStorage.getItem("k2k-assessment-results");
    if (stored) {
      const parsed = JSON.parse(stored);
      setData(parsed);
      // Fire AI report generation
      setAiLoading(true);
      fetch("/api/ai/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contact: parsed.contact, scores: parsed.scores }),
      })
        .then((r) => r.json())
        .then(({ narrative }) => {
          if (narrative) setAiNarrative(narrative);
        })
        .catch(() => {})
        .finally(() => setAiLoading(false));
    }
  }, []);

  // Typewriter effect for AI narrative
  useEffect(() => {
    if (!aiNarrative) return;
    setDisplayedNarrative("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < aiNarrative.length) {
        setDisplayedNarrative(aiNarrative.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 12);
    return () => clearInterval(interval);
  }, [aiNarrative]);

  if (!data) {
    return (
      <div className="pt-24 text-center min-h-screen flex flex-col items-center justify-center" style={{ background: "var(--background)" }}>
        <p className="text-base mb-4" style={{ color: "var(--muted)" }}>No assessment results found.</p>
        <Link href="/assessment/start" className="btn-primary px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2">
          Take the assessment <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  const { scores, contact } = data;
  const { themeScores, overallScore, band, gaps } = scores;

  const service = servicesData[band.recommendation];
  const heroDescFirstSentence = service?.heroDesc?.split(".")[0] + ".";

  const radarData = assessmentThemes.map((t) => ({
    subject: t.title.split(" ")[0],
    fullName: t.title,
    score: themeScores[t.id] ?? 0,
    fullMark: 100,
  }));

  const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <div className="pt-16" style={{ background: "var(--background)" }}>

      {/* Print-only header — hidden on screen, shown when printing */}
      <div className="print-header max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-xl" style={{ color: "#0a0f1e" }}>Infosec K2K</p>
            <p className="text-sm" style={{ color: "#64748b" }}>IAM Maturity Assessment Report</p>
          </div>
          <div className="text-right text-sm" style={{ color: "#64748b" }}>
            <p>{contact?.name} — {contact?.company}</p>
            <p>{today}</p>
          </div>
        </div>
      </div>

      {/* Screen header */}
      <section className="py-12 border-b no-print" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm mb-1" style={{ color: "var(--muted)" }}>IAM Maturity Assessment — {contact?.company}</p>
          <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
            Your results, {contact?.name?.split(" ")[0]}
          </h1>
          <p className="text-base" style={{ color: "var(--muted)" }}>
            Completed {today}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overall score + band */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="rounded-2xl p-8 border text-center"
            style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--muted)" }}>
              Overall Maturity Score
            </p>
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="42" fill="none" stroke="var(--border)" strokeWidth="8" />
                <circle cx="50" cy="50" r="42" fill="none"
                  stroke={band.color}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${(overallScore / 100) * 264} 264`} />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold" style={{ color: band.color }}>{overallScore}</span>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold"
              style={{ background: `${band.color}20`, color: band.color }}>
              {band.label}
            </div>
          </div>

          <div className="rounded-2xl p-8 border flex flex-col justify-center"
            style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
            <h3 className="font-bold text-lg mb-3" style={{ color: "var(--foreground)" }}>
              What this means
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
              {band.description}
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--k2k-teal)" }}>
              <TrendingUp size={14} />
              Recommended next step: {band.recommendationLabel}
            </div>
          </div>
        </div>

        {/* Radar chart */}
        <div className="rounded-2xl p-8 border mb-10"
          style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <h3 className="font-bold text-lg mb-6" style={{ color: "var(--foreground)" }}>
            Domain breakdown
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div style={{ height: 280 }}>
              {mounted && <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="var(--border)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: "var(--muted)", fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 8 }}
                    labelStyle={{ color: "var(--foreground)" }}
                    formatter={(value, name, props) => [`${value}%`, props.payload.fullName]}
                  />
                  <Radar name="Score" dataKey="score" stroke="#00a46e" fill="#00a46e" fillOpacity={0.25} strokeWidth={2} />
                </RadarChart>
              </ResponsiveContainer>}
            </div>
            <div className="space-y-3">
              {assessmentThemes.map((t) => {
                const score = themeScores[t.id] ?? 0;
                const color = score < 35 ? "#ef4444" : score < 60 ? "#f97316" : score < 80 ? "#eab308" : "#22c55e";
                return (
                  <div key={t.id}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium" style={{ color: "var(--foreground)" }}>{t.title}</span>
                      <span className="font-bold" style={{ color }}>{score}%</span>
                    </div>
                    <div className="h-2 rounded-full" style={{ background: "var(--border)" }}>
                      <div className="h-2 rounded-full transition-all" style={{ width: `${score}%`, background: color }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Top gaps */}
        <div className="rounded-2xl p-8 border mb-10"
          style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle size={18} style={{ color: "#f97316" }} />
            <h3 className="font-bold text-lg" style={{ color: "var(--foreground)" }}>Priority gaps</h3>
          </div>
          <div className="space-y-4">
            {gaps.map((gap, i) => (
              <div key={gap.id} className="flex items-start gap-4 p-4 rounded-xl border"
                style={{ background: "var(--background)", borderColor: "var(--border)" }}>
                <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: i === 0 ? "#ef4444" : i === 1 ? "#f97316" : "#eab308" }}>
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: "var(--foreground)" }}>{gap.title}</p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>
                    Current score: {gap.score}% — targeted improvement could significantly reduce identity risk exposure.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Narrative */}
        {(aiLoading || aiNarrative) && (
          <div className="rounded-2xl border mb-10 overflow-hidden"
            style={{ borderColor: "rgba(139,92,246,0.3)" }}>
            <div className="px-6 py-3 flex items-center gap-2 border-b"
              style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)", borderColor: "rgba(255,255,255,0.1)" }}>
              <Sparkles size={14} color="white" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">AI Analysis — Generated for {contact?.name?.split(" ")[0] || "you"}</span>
            </div>
            <div className="p-8" style={{ background: "rgba(139,92,246,0.04)" }}>
              {aiLoading && !aiNarrative ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-3 rounded-full animate-pulse"
                      style={{ background: "var(--border)", width: i === 3 ? "60%" : "100%" }} />
                  ))}
                  <p className="text-xs mt-3" style={{ color: "var(--muted)" }}>Generating your personalised analysis…</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {displayedNarrative.split("\n\n").filter(Boolean).map((para, i) => (
                    <p key={i} className="text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>
                      {para}
                    </p>
                  ))}
                  {displayedNarrative.length < (aiNarrative?.length || 0) && (
                    <span className="inline-block w-0.5 h-4 bg-purple-500 animate-pulse ml-0.5" />
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Recommended service card */}
        <div className="rounded-2xl border mb-8 overflow-hidden"
          style={{ borderColor: "rgba(0,164,110,0.3)" }}>
          <div className="p-2 text-center text-xs font-bold uppercase tracking-wider text-white"
            style={{ background: "var(--k2k-gradient)" }}>
            Recommended for your maturity level
          </div>
          <div className="p-8" style={{ background: "rgba(0,164,110,0.04)" }}>
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--k2k-gradient)" }}>
                <Shield size={18} color="white" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "var(--k2k-teal)" }}>
                  {band.recommendationLabel}
                </p>
                <h3 className="font-bold text-xl" style={{ color: "var(--foreground)" }}>
                  {service?.tagline}
                </h3>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              {heroDescFirstSentence} Based on your score of <strong>{overallScore}</strong> ({band.label} maturity), this is the engagement that will have the most immediate impact on your identity security posture.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 no-print">
              <Link
                href={`/book?name=${encodeURIComponent(contact?.name || "")}&email=${encodeURIComponent(contact?.email || "")}&company=${encodeURIComponent(contact?.company || "")}&role=${encodeURIComponent(contact?.role || "")}`}
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold">
                <Calendar size={16} /> Book a free advisory call
              </Link>
              <Link href={`/services/${band.recommendation}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border font-semibold text-sm hover:opacity-80 transition-opacity"
                style={{ color: "var(--foreground)", borderColor: "var(--border)" }}>
                See what&apos;s included <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div className="px-8 py-4 border-t" style={{ borderColor: "rgba(0,164,110,0.2)", background: "rgba(0,164,110,0.02)" }}>
            <div className="flex items-center gap-3">
              {[
                "Free 30-min discovery call",
                "No commitment required",
                "Response within one business day",
              ].map((point) => (
                <div key={point} className="flex items-center gap-1.5 text-xs" style={{ color: "var(--muted)" }}>
                  <CheckCircle size={12} style={{ color: "var(--k2k-teal)" }} />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download */}
        <div className="text-center no-print">
          <button onClick={() => window.print()}
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
            style={{ color: "var(--muted)" }}>
            <Download size={14} /> Download PDF report
          </button>
        </div>
      </div>
    </div>
  );
}
