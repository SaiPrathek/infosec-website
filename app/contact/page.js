"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Calendar, CheckCircle, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", company: "", role: "", email: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-16" style={{ background: "var(--background)" }}>
      {/* Hero */}
      <section className="py-16 border-b" style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
            Get in touch
          </h1>
          <p className="text-lg max-w-xl" style={{ color: "var(--muted)" }}>
            Whether you have a specific requirement or just want to understand your options — we&apos;re happy to talk. No sales pressure.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact details */}
          <div className="md:col-span-2 space-y-8">
            {/* Book a call CTA */}
            <div className="rounded-2xl p-6 border" style={{ background: "rgba(0,164,110,0.06)", borderColor: "rgba(0,164,110,0.2)" }}>
              <Calendar size={24} className="mb-3" style={{ color: "var(--k2k-teal)" }} />
              <h3 className="font-bold text-base mb-2" style={{ color: "var(--foreground)" }}>Book a 30-min call</h3>
              <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
                Talk to one of our consultants about your requirements — no commitment, no sales pitch.
              </p>
              <Link href="/book" className="btn-primary w-full py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2">
                <Calendar size={14} /> Schedule a call
              </Link>
            </div>

            {/* Direct contact */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wider" style={{ color: "var(--muted)" }}>Direct contact</h3>
              {[
                { icon: Mail, label: "hello@infoseck2k.com" },
                { icon: Phone, label: "+44 (0)20 0000 0000" },
                { icon: MapPin, label: "London, United Kingdom" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-sm" style={{ color: "var(--foreground)" }}>
                  <item.icon size={16} style={{ color: "var(--k2k-teal)" }} />
                  {item.label}
                </div>
              ))}
            </div>

            {/* Response time */}
            <div className="rounded-xl p-4 border text-sm" style={{ background: "var(--card-bg)", borderColor: "var(--border)", color: "var(--muted)" }}>
              We respond to all enquiries within one business day.
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="rounded-2xl p-10 border text-center h-full flex flex-col items-center justify-center"
                style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
                <CheckCircle size={48} className="mb-4" style={{ color: "var(--k2k-teal)" }} />
                <h2 className="font-bold text-2xl mb-2" style={{ color: "var(--foreground)" }}>Message received</h2>
                <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
                  Thank you for getting in touch. A member of our team will contact you within one business day.
                </p>
                <div className="text-left w-full mt-2 rounded-xl border p-4 space-y-2" style={{ borderColor: "var(--border)" }}>
                  <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>What happens next</p>
                  {["You'll receive a confirmation email shortly", "A consultant will review your message", "We'll respond within one business day"].map((s, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5 text-white" style={{ background: "var(--k2k-gradient)" }}>{i + 1}</span>
                      <span className="text-xs" style={{ color: "var(--muted)" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { key: "name", label: "Full name", placeholder: "Jane Smith", type: "text" },
                    { key: "company", label: "Company", placeholder: "Acme Ltd", type: "text" },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--foreground)" }}>{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} required
                        value={form[f.key]}
                        onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))}
                        className="w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors"
                        style={{ background: "var(--background)", borderColor: "var(--border)", color: "var(--foreground)" }} />
                    </div>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { key: "role", label: "Job title", placeholder: "Head of IT Security", type: "text" },
                    { key: "email", label: "Work email", placeholder: "jane@acme.com", type: "email" },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--foreground)" }}>{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} required
                        value={form[f.key]}
                        onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))}
                        className="w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors"
                        style={{ background: "var(--background)", borderColor: "var(--border)", color: "var(--foreground)" }} />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--foreground)" }}>I&apos;m interested in</label>
                  <select value={form.service}
                    onChange={(e) => setForm((p) => ({ ...p, service: e.target.value }))}
                    className="w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none"
                    style={{ background: "var(--background)", borderColor: "var(--border)", color: "var(--foreground)" }}>
                    <option value="">Select a service</option>
                    <option>IAM Assessment</option>
                    <option>Roadmap & Strategy</option>
                    <option>Implementation</option>
                    <option>Managed Services</option>
                    <option>Not sure — need guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--foreground)" }}>Tell us about your challenge</label>
                  <textarea rows={4} placeholder="Briefly describe what you're trying to achieve or the problem you're facing..."
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    className="w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none resize-none"
                    style={{ background: "var(--background)", borderColor: "var(--border)", color: "var(--foreground)" }} />
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}
                <button type="submit" disabled={submitting}
                  className="btn-primary w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-60">
                  {submitting ? "Sending..." : "Send message"} {!submitting && <ArrowRight size={16} />}
                </button>
                <p className="text-xs text-center" style={{ color: "var(--muted)" }}>
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
