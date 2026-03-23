"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip
} from "recharts";
import { ArrowRight, Download, Calendar, AlertTriangle, TrendingUp, CheckCircle } from "lucide-react";
import { assessmentThemes, maturityBands } from "@/lib/assessment-data";

const serviceLinks = {
  assessment: "/services/assessment",
  roadmap: "/services/roadmap",
  implementation: "/services/implementation",
  managed: "/services/managed",
};

export default function AssessmentResultsPage() {
  const [data, setData] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = sessionStorage.getItem("k2k-assessment-results");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

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

  const radarData = assessmentThemes.map((t) => ({
    subject: t.title.split(" ")[0], // Short label for radar
    fullName: t.title,
    score: themeScores[t.id] ?? 0,
    fullMark: 100,
  }));

  return (
    <div className="pt-16" style={{ background: "var(--background)" }}>
      {/* Header */}
      <section className="py-12 border-b" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm mb-1" style={{ color: "var(--muted)" }}>IAM Maturity Assessment — {contact?.company}</p>
          <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
            Your results, {contact?.name?.split(" ")[0]}
          </h1>
          <p className="text-base" style={{ color: "var(--muted)" }}>
            Completed {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
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
              Recommended service: {band.recommendationLabel}
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

        {/* Recommended service + CTA */}
        <div className="rounded-2xl p-8 border mb-8"
          style={{ background: "rgba(0,164,110,0.06)", borderColor: "rgba(0,164,110,0.2)" }}>
          <CheckCircle size={24} className="mb-4" style={{ color: "var(--k2k-teal)" }} />
          <h3 className="font-bold text-xl mb-2" style={{ color: "var(--foreground)" }}>
            Recommended next step: {band.recommendationLabel}
          </h3>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
            Based on your score of {overallScore} ({band.label} maturity), our consultants recommend starting with a {band.recommendationLabel} engagement. This will address your top gaps and create a clear, prioritised path forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={`/book?name=${encodeURIComponent(contact?.name || "")}&email=${encodeURIComponent(contact?.email || "")}&company=${encodeURIComponent(contact?.company || "")}&role=${encodeURIComponent(contact?.role || "")}`}
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold">
              <Calendar size={16} /> Book a free advisory call
            </Link>
            <Link href={serviceLinks[band.recommendation]}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border font-semibold text-sm hover:opacity-80 transition-opacity"
              style={{ color: "var(--foreground)", borderColor: "var(--border)" }}>
              Learn about {band.recommendationLabel} <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Download / share */}
        <div className="text-center">
          <button onClick={() => window.print()}
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
            style={{ color: "var(--muted)" }}>
            <Download size={14} /> Save / print results
          </button>
        </div>
      </div>
    </div>
  );
}
