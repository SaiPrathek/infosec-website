"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Calendar, CheckCircle, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", company: "", role: "", email: "", service: "", message: "", consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.consent) {
      setError("Please confirm you agree to our privacy policy before submitting.");
      return;
    }
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
    <div className="pt-16 bg-[#0e1322] min-h-screen">
      {/* Hero */}
      <section className="bg-[#090e1c] py-20 border-b border-[#3d4a42]/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#5cdda2]/5 blur-[80px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-[#dee1f7]">
            Let&apos;s talk
          </h1>
          <p className="text-lg max-w-xl text-[#bccabf]">
            Whether you have a specific requirement or just want to understand your options — we&apos;re happy to talk. No sales pressure.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact details */}
          <div className="md:col-span-2 space-y-8">
            {/* Book a call CTA */}
            <div className="bg-[#1a1f2f] rounded-xl border border-[#5cdda2]/20 p-6">
              <Calendar size={24} className="mb-3 text-[#5cdda2]" />
              <h3 className="font-extrabold text-base mb-2 text-[#dee1f7]">Book a 30-min call</h3>
              <p className="text-sm mb-4 text-[#bccabf]">
                Talk to one of our consultants about your requirements — no commitment, no sales pitch.
              </p>
              <Link href="/book" className="btn-primary w-full py-3 rounded-md text-sm font-bold flex items-center justify-center gap-2">
                <Calendar size={14} /> Schedule a call
              </Link>
            </div>

            {/* Direct contact */}
            <div className="space-y-4">
              <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2]">Direct contact</h3>
              {[
                { icon: Mail, label: "hello@infoseck2k.com" },
                { icon: Phone, label: "+44 (0)20 0000 0000" },
                { icon: MapPin, label: "London, United Kingdom" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-sm text-[#dee1f7]">
                  <item.icon size={16} className="text-[#5cdda2]" />
                  {item.label}
                </div>
              ))}
            </div>

            {/* Response time */}
            <div className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-4 text-sm text-[#bccabf]">
              We respond to all enquiries within one business day.
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-10 text-center h-full flex flex-col items-center justify-center">
                <CheckCircle size={48} className="mb-4 text-[#5cdda2]" />
                <h2 className="font-extrabold text-2xl tracking-tight mb-2 text-[#dee1f7]">Message received</h2>
                <p className="text-sm mb-6 text-[#bccabf]">
                  Thank you for getting in touch. A member of our team will contact you within one business day.
                </p>
                <div className="text-left w-full mt-2 bg-[#0e1322] rounded-xl border border-[#3d4a42]/10 p-4 space-y-2">
                  <p className="text-sm font-bold text-[#dee1f7]">What happens next</p>
                  {["You'll receive a confirmation email shortly", "A consultant will review your message", "We'll respond within one business day"].map((s, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5 text-[#003823] bg-[#5cdda2]">{i + 1}</span>
                      <span className="text-xs text-[#bccabf]">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { key: "name", label: "Full name", placeholder: "Jane Smith", type: "text" },
                      { key: "company", label: "Company", placeholder: "Acme Ltd", type: "text" },
                    ].map((f) => (
                      <div key={f.key}>
                        <label className="block text-sm font-bold mb-1.5 text-[#dee1f7]">{f.label}</label>
                        <input type={f.type} placeholder={f.placeholder} required
                          value={form[f.key]}
                          onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))}
                          className="w-full px-3 py-2.5 rounded-lg border border-[#3d4a42]/30 text-sm focus:outline-none transition-colors bg-[#0e1322] text-[#dee1f7] placeholder:text-[#bccabf] focus:border-[#5cdda2]/40" />
                      </div>
                    ))}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { key: "role", label: "Job title", placeholder: "Head of IT Security", type: "text" },
                      { key: "email", label: "Work email", placeholder: "jane@acme.com", type: "email" },
                    ].map((f) => (
                      <div key={f.key}>
                        <label className="block text-sm font-bold mb-1.5 text-[#dee1f7]">{f.label}</label>
                        <input type={f.type} placeholder={f.placeholder} required
                          value={form[f.key]}
                          onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))}
                          className="w-full px-3 py-2.5 rounded-lg border border-[#3d4a42]/30 text-sm focus:outline-none transition-colors bg-[#0e1322] text-[#dee1f7] placeholder:text-[#bccabf] focus:border-[#5cdda2]/40" />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-1.5 text-[#dee1f7]">I&apos;m interested in</label>
                    <select value={form.service}
                      onChange={(e) => setForm((p) => ({ ...p, service: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-lg border border-[#3d4a42]/30 text-sm focus:outline-none bg-[#0e1322] text-[#dee1f7]">
                      <option value="">Select a service</option>
                      <option>IAM Assessment</option>
                      <option>Roadmap &amp; Strategy</option>
                      <option>Implementation</option>
                      <option>Managed Services</option>
                      <option>Not sure — need guidance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-1.5 text-[#dee1f7]">Tell us about your challenge</label>
                    <textarea rows={4} placeholder="Briefly describe what you're trying to achieve or the problem you're facing..."
                      value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-lg border border-[#3d4a42]/30 text-sm focus:outline-none resize-none bg-[#0e1322] text-[#dee1f7] placeholder:text-[#bccabf] focus:border-[#5cdda2]/40" />
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => setForm((p) => ({ ...p, consent: e.target.checked }))}
                      className="mt-0.5 w-4 h-4 rounded flex-shrink-0"
                      style={{ accentColor: "#5cdda2" }}
                    />
                    <span className="text-xs leading-relaxed text-[#bccabf]">
                      I agree to Infosec K2K processing my contact details to respond to this enquiry, in line with our{" "}
                      <Link href="/contact" className="underline text-[#5cdda2]">Privacy Policy</Link>.
                    </span>
                  </label>

                  {error && <p className="text-sm text-red-400">{error}</p>}
                  <button type="submit" disabled={submitting}
                    className="btn-primary w-full py-3 rounded-md font-bold flex items-center justify-center gap-2 disabled:opacity-60">
                    {submitting ? "Sending..." : "Send message"} {!submitting && <ArrowRight size={16} />}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
