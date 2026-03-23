"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight, ArrowLeft, CheckCircle, Globe, Briefcase,
  Calendar, User, Building2, Mail, ChevronRight
} from "lucide-react";

const expertiseOptions = [
  { id: "assessment", label: "IAM Assessment & Roadmap", desc: "Understand your current maturity and define a prioritised improvement path" },
  { id: "implementation", label: "Implementation & Delivery", desc: "Hands-on deployment of IAM controls, tools and processes" },
  { id: "managed", label: "Managed Identity Services", desc: "Ongoing management and operation of your identity security environment" },
  { id: "pam", label: "Privileged Access Management", desc: "Secure and govern privileged accounts and credentials" },
  { id: "unsure", label: "Not sure — help me decide", desc: "Speak with an expert who will guide you to the right service" },
];

const regionOptions = [
  { id: "uk", label: "UK Team", sub: "London — GMT/BST", flag: "🇬🇧" },
  { id: "india", label: "India Team", sub: "Bangalore — IST (UTC+5:30)", flag: "🇮🇳" },
  { id: "germany", label: "Germany Team", sub: "Berlin — CET/CEST (UTC+1/2)", flag: "🇩🇪" },
  { id: "none", label: "No preference", sub: "We'll match you with the best available expert", flag: "🌐" },
];

const timeOptions = [
  { id: "morning", label: "Morning", sub: "9am – 12pm" },
  { id: "afternoon", label: "Afternoon", sub: "12pm – 5pm" },
  { id: "flexible", label: "Flexible", sub: "Any time works" },
];

function BookPageInner() {
  const params = useSearchParams();

  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [contact, setContact] = useState({ name: "", company: "", email: "", role: "" });
  const [expertise, setExpertise] = useState("");
  const [region, setRegion] = useState("");
  const [availability, setAvailability] = useState({ time: "", message: "" });

  // Pre-fill from assessment query params
  useEffect(() => {
    const name = params.get("name");
    const email = params.get("email");
    const company = params.get("company");
    const role = params.get("role");
    if (name || email) {
      setContact({ name: name || "", email: email || "", company: company || "", role: role || "" });
    }
  }, [params]);

  const contactValid = contact.name && contact.email && contact.company;

  async function handleSubmit() {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact,
          expertise: expertiseOptions.find((e) => e.id === expertise)?.label,
          region: regionOptions.find((r) => r.id === region)?.label,
          availability: timeOptions.find((t) => t.id === availability.time)?.label,
          message: availability.message,
        }),
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
  }

  if (submitted) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center px-4" style={{ background: "var(--background)" }}>
        <div className="max-w-lg w-full text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "rgba(0,164,110,0.12)" }}>
            <CheckCircle size={32} style={{ color: "var(--k2k-teal)" }} />
          </div>
          <h1 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>Request received</h1>
          <p className="mb-8" style={{ color: "var(--muted)" }}>
            We've sent your request to our {regionOptions.find(r => r.id === region)?.label || "team"}.
            An expert will reach out within one business day to confirm your call.
          </p>
          <div className="rounded-xl border p-5 text-left mb-8 space-y-3"
            style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
            <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>What happens next</p>
            {[
              "You'll receive a confirmation email shortly",
              "Your regional expert reviews your request",
              "They'll send you a calendar invite within 1 business day",
              "Your 30-minute advisory call takes place",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 text-white"
                  style={{ background: "var(--k2k-gradient)" }}>{i + 1}</span>
                <span className="text-sm" style={{ color: "var(--muted)" }}>{step}</span>
              </div>
            ))}
          </div>
          <Link href="/" className="text-sm font-medium" style={{ color: "var(--k2k-teal)" }}>
            ← Back to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen px-4" style={{ background: "var(--background)" }}>
      <div className="max-w-xl mx-auto pb-16">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold mb-2" style={{ color: "var(--k2k-teal)" }}>FREE ADVISORY CALL</p>
          <h1 className="text-3xl font-bold mb-3" style={{ color: "var(--foreground)" }}>Book an expert session</h1>
          <p style={{ color: "var(--muted)" }}>
            30 minutes with a K2K specialist — no sales pitch, just expert guidance.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-all"
                style={{
                  background: s <= step ? "var(--k2k-gradient)" : "var(--border)",
                  color: s <= step ? "white" : "var(--muted)",
                }}>
                {s < step ? <CheckCircle size={14} /> : s}
              </div>
              {s < 4 && <div className="w-8 h-0.5 rounded" style={{ background: s < step ? "var(--k2k-teal)" : "var(--border)" }} />}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs mb-8 px-1" style={{ color: "var(--muted)" }}>
          <span>Your details</span>
          <span>Expertise</span>
          <span>Region</span>
          <span>Availability</span>
        </div>

        {/* Step 1: Contact details */}
        {step === 1 && (
          <div className="space-y-5">
            <h2 className="text-lg font-bold mb-5" style={{ color: "var(--foreground)" }}>Your details</h2>
            {[
              { field: "name", label: "Full name", placeholder: "Jane Smith", icon: User },
              { field: "company", label: "Company", placeholder: "Acme Ltd", icon: Building2 },
              { field: "email", label: "Work email", placeholder: "jane@acme.com", icon: Mail, type: "email" },
              { field: "role", label: "Job title", placeholder: "CISO / IT Manager / etc.", icon: Briefcase },
            ].map(({ field, label, placeholder, icon: Icon, type }) => (
              <div key={field}>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--foreground)" }}>{label}</label>
                <div className="relative">
                  <Icon size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--muted)" }} />
                  <input
                    type={type || "text"}
                    value={contact[field]}
                    onChange={(e) => setContact({ ...contact, [field]: e.target.value })}
                    placeholder={placeholder}
                    className="w-full pl-9 pr-4 py-2.5 rounded-lg border text-sm outline-none transition-colors"
                    style={{ background: "var(--card-bg)", borderColor: "var(--border)", color: "var(--foreground)" }}
                  />
                </div>
              </div>
            ))}
            <button
              onClick={() => setStep(2)}
              disabled={!contactValid}
              className="w-full py-3 rounded-xl font-semibold text-sm btn-primary flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed mt-2">
              Continue <ArrowRight size={15} />
            </button>
          </div>
        )}

        {/* Step 2: Expertise */}
        {step === 2 && (
          <div>
            <h2 className="text-lg font-bold mb-5" style={{ color: "var(--foreground)" }}>What do you need help with?</h2>
            <div className="space-y-3">
              {expertiseOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setExpertise(opt.id)}
                  className="w-full text-left p-4 rounded-xl border transition-all"
                  style={{
                    background: expertise === opt.id ? "rgba(0,164,110,0.08)" : "var(--card-bg)",
                    borderColor: expertise === opt.id ? "var(--k2k-teal)" : "var(--border)",
                  }}>
                  <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--foreground)" }}>{opt.label}</p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>{opt.desc}</p>
                </button>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setStep(1)} className="flex items-center gap-1 text-sm font-medium" style={{ color: "var(--muted)" }}>
                <ArrowLeft size={14} /> Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!expertise}
                className="flex-1 py-3 rounded-xl font-semibold text-sm btn-primary flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed">
                Continue <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Region */}
        {step === 3 && (
          <div>
            <h2 className="text-lg font-bold mb-2" style={{ color: "var(--foreground)" }}>Preferred team region</h2>
            <p className="text-sm mb-5" style={{ color: "var(--muted)" }}>Choose a team by timezone or expertise focus.</p>
            <div className="space-y-3">
              {regionOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setRegion(opt.id)}
                  className="w-full text-left p-4 rounded-xl border transition-all flex items-center gap-3"
                  style={{
                    background: region === opt.id ? "rgba(0,164,110,0.08)" : "var(--card-bg)",
                    borderColor: region === opt.id ? "var(--k2k-teal)" : "var(--border)",
                  }}>
                  <span className="text-2xl">{opt.flag}</span>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>{opt.label}</p>
                    <p className="text-xs" style={{ color: "var(--muted)" }}>{opt.sub}</p>
                  </div>
                  {region === opt.id && <CheckCircle size={16} className="ml-auto" style={{ color: "var(--k2k-teal)" }} />}
                </button>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setStep(2)} className="flex items-center gap-1 text-sm font-medium" style={{ color: "var(--muted)" }}>
                <ArrowLeft size={14} /> Back
              </button>
              <button
                onClick={() => setStep(4)}
                disabled={!region}
                className="flex-1 py-3 rounded-xl font-semibold text-sm btn-primary flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed">
                Continue <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Availability */}
        {step === 4 && (
          <div>
            <h2 className="text-lg font-bold mb-2" style={{ color: "var(--foreground)" }}>When works for you?</h2>
            <p className="text-sm mb-5" style={{ color: "var(--muted)" }}>We'll work around your schedule.</p>

            <p className="text-sm font-medium mb-2" style={{ color: "var(--foreground)" }}>Preferred time of day</p>
            <div className="grid grid-cols-3 gap-3 mb-5">
              {timeOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setAvailability({ ...availability, time: opt.id })}
                  className="p-3 rounded-xl border text-center transition-all"
                  style={{
                    background: availability.time === opt.id ? "rgba(0,164,110,0.08)" : "var(--card-bg)",
                    borderColor: availability.time === opt.id ? "var(--k2k-teal)" : "var(--border)",
                  }}>
                  <p className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>{opt.label}</p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>{opt.sub}</p>
                </button>
              ))}
            </div>

            <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--foreground)" }}>
              Anything else you'd like us to know? <span style={{ color: "var(--muted)" }}>(optional)</span>
            </label>
            <textarea
              value={availability.message}
              onChange={(e) => setAvailability({ ...availability, message: e.target.value })}
              placeholder="E.g. specific dates that don't work, context about your environment, questions you want answered..."
              rows={4}
              className="w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none"
              style={{ background: "var(--card-bg)", borderColor: "var(--border)", color: "var(--foreground)" }}
            />

            {error && (
              <p className="mt-3 text-sm text-red-500">{error}</p>
            )}

            <div className="flex gap-3 mt-5">
              <button onClick={() => setStep(3)} className="flex items-center gap-1 text-sm font-medium" style={{ color: "var(--muted)" }}>
                <ArrowLeft size={14} /> Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={!availability.time || submitting}
                className="flex-1 py-3 rounded-xl font-semibold text-sm btn-primary flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed">
                {submitting ? "Sending..." : "Request call"} {!submitting && <ArrowRight size={15} />}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={<div className="pt-24 min-h-screen flex items-center justify-center" style={{ background: "var(--background)" }} />}>
      <BookPageInner />
    </Suspense>
  );
}
