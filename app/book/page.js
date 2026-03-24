"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight, ArrowLeft, CheckCircle,
  Calendar, User, Building2, Mail, Briefcase
} from "lucide-react";

const expertiseOptions = [
  { id: "assessment", label: "Assessment Services", desc: "IAM maturity, SWIFT CSP readiness, compliance maturity, operating model & control reviews" },
  { id: "tooling-strategy", label: "Tooling Strategy & Support", desc: "Vendor-agnostic tool review, architecture, roadmap, optimisation and implementation planning" },
  { id: "managed", label: "Managed Services", desc: "Ongoing IAM/PAM governance, managed detection, continuous monitoring & vulnerability management" },
  { id: "assurance", label: "Assurance Services", desc: "Evidence tracking, control mapping, compliance packs and audit-ready outputs" },
  { id: "offensive-security", label: "Offensive Security", desc: "Penetration testing, vulnerability assessments, remediation planning and retesting" },
  { id: "technical-resources", label: "Technical Resource Delivery", desc: "Flexible security resource across UK, Germany & India — project-based, dedicated, managed service augmentation or on-demand" },
  { id: "unsure", label: "Not sure — help me decide", desc: "Speak with an expert who will guide you to the right service" },
];

const regionOptions = [
  { id: "uk", label: "UK Team", sub: "London — GMT/BST", flag: "🇬🇧" },
  { id: "india", label: "India Team", sub: "Ahmedabad & Hyderabad — IST (UTC+5:30)", flag: "🇮🇳" },
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

  useEffect(() => {
    const name = params.get("name");
    const email = params.get("email");
    const company = params.get("company");
    const role = params.get("role");
    if (name || email) {
      setContact({ name: name || "", email: email || "", company: company || "", role: role || "" });
    }

    // Pre-select service from URL param (e.g. ?service=assurance)
    const serviceParam = params.get("service");
    if (serviceParam) {
      const match = expertiseOptions.find((o) => o.id === serviceParam);
      if (match) setExpertise(match.id);
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
          service: expertise,
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
      <div className="pt-24 min-h-screen flex items-center justify-center px-4 bg-[#0e1322]">
        <div className="max-w-lg w-full text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-[#5cdda2]/10">
            <CheckCircle size={32} className="text-[#5cdda2]" />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight mb-3 text-[#dee1f7]">Request received</h1>
          <p className="mb-8 text-[#bccabf]">
            We&apos;ve sent your request to our {regionOptions.find(r => r.id === region)?.label || "team"}.
            An expert will reach out within one business day to confirm your call.
          </p>
          <div className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-5 text-left mb-8 space-y-3">
            <p className="text-sm font-bold text-[#dee1f7]">What happens next</p>
            {[
              "You'll receive a confirmation email shortly",
              "Your regional expert reviews your request",
              "They'll send you a calendar invite within 1 business day",
              "Your 30-minute advisory call takes place",
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5 text-[#003823] bg-[#5cdda2]">{i + 1}</span>
                <span className="text-sm text-[#bccabf]">{s}</span>
              </div>
            ))}
          </div>
          <Link href="/" className="text-sm font-bold text-[#5cdda2] hover:text-[#7bfabc] transition-colors">
            ← Back to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-[#0e1322]">
      {/* Hero */}
      <section className="bg-[#090e1c] py-16 border-b border-[#3d4a42]/10">
        <div className="max-w-xl mx-auto px-4 text-center">
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block">
            Free Advisory Call
          </span>
          <h1 className="text-3xl font-extrabold tracking-tighter mb-3 text-[#dee1f7]">Book an expert session</h1>
          <p className="text-[#bccabf]">
            30 minutes with a K2K specialist — no sales pitch, just expert guidance.
          </p>
        </div>
      </section>

      <div className="max-w-xl mx-auto px-4 py-12 pb-16">
        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-all"
                style={{
                  background: s <= step ? "#5cdda2" : "#1a1f2f",
                  color: s <= step ? "#003823" : "#bccabf",
                  border: s <= step ? "none" : "1px solid rgba(61,74,66,0.3)",
                }}>
                {s < step ? <CheckCircle size={14} /> : s}
              </div>
              {s < 4 && <div className="w-8 h-0.5 rounded" style={{ background: s < step ? "#5cdda2" : "#3d4a42" }} />}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs mb-8 px-1 text-[#bccabf]">
          <span>Your details</span>
          <span>Expertise</span>
          <span>Region</span>
          <span>Availability</span>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-8 space-y-5">
            <h2 className="text-lg font-extrabold tracking-tight mb-5 text-[#dee1f7]">Your details</h2>
            {[
              { field: "name", label: "Full name", placeholder: "Jane Smith", icon: User },
              { field: "company", label: "Company", placeholder: "Acme Ltd", icon: Building2 },
              { field: "email", label: "Work email", placeholder: "jane@acme.com", icon: Mail, type: "email" },
              { field: "role", label: "Job title", placeholder: "CISO / IT Manager / etc.", icon: Briefcase },
            ].map(({ field, label, placeholder, icon: Icon, type }) => (
              <div key={field}>
                <label className="block text-sm font-bold mb-1.5 text-[#dee1f7]">{label}</label>
                <div className="relative">
                  <Icon size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#bccabf]" />
                  <input
                    type={type || "text"}
                    value={contact[field]}
                    onChange={(e) => setContact({ ...contact, [field]: e.target.value })}
                    placeholder={placeholder}
                    className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-[#3d4a42]/30 text-sm outline-none transition-colors bg-[#0e1322] text-[#dee1f7] placeholder:text-[#bccabf] focus:border-[#5cdda2]/40"
                  />
                </div>
              </div>
            ))}
            <button
              onClick={() => setStep(2)}
              disabled={!contactValid}
              className="w-full py-3 rounded-md font-bold text-sm btn-primary flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed mt-2">
              Continue <ArrowRight size={15} />
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-8">
            <h2 className="text-lg font-extrabold tracking-tight mb-5 text-[#dee1f7]">What do you need help with?</h2>
            <div className="space-y-3">
              {expertiseOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setExpertise(opt.id)}
                  className="w-full text-left p-4 rounded-xl border transition-all"
                  style={{
                    background: expertise === opt.id ? "rgba(92,221,162,0.08)" : "#0e1322",
                    borderColor: expertise === opt.id ? "#5cdda2" : "rgba(61,74,66,0.3)",
                  }}>
                  <p className="font-bold text-sm mb-0.5 text-[#dee1f7]">{opt.label}</p>
                  <p className="text-xs text-[#bccabf]">{opt.desc}</p>
                </button>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setStep(1)} className="flex items-center gap-1 text-sm font-bold text-[#bccabf] hover:text-[#dee1f7] transition-colors">
                <ArrowLeft size={14} /> Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!expertise}
                className="flex-1 py-3 rounded-md font-bold text-sm btn-primary flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed">
                Continue <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-8">
            <h2 className="text-lg font-extrabold tracking-tight mb-2 text-[#dee1f7]">Preferred team region</h2>
            <p className="text-sm mb-5 text-[#bccabf]">Choose a team by timezone or expertise focus.</p>
            <div className="space-y-3">
              {regionOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setRegion(opt.id)}
                  className="w-full text-left p-4 rounded-xl border transition-all flex items-center gap-3"
                  style={{
                    background: region === opt.id ? "rgba(92,221,162,0.08)" : "#0e1322",
                    borderColor: region === opt.id ? "#5cdda2" : "rgba(61,74,66,0.3)",
                  }}>
                  <span className="text-2xl">{opt.flag}</span>
                  <div>
                    <p className="font-bold text-sm text-[#dee1f7]">{opt.label}</p>
                    <p className="text-xs text-[#bccabf]">{opt.sub}</p>
                  </div>
                  {region === opt.id && <CheckCircle size={16} className="ml-auto text-[#5cdda2]" />}
                </button>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setStep(2)} className="flex items-center gap-1 text-sm font-bold text-[#bccabf] hover:text-[#dee1f7] transition-colors">
                <ArrowLeft size={14} /> Back
              </button>
              <button
                onClick={() => setStep(4)}
                disabled={!region}
                className="flex-1 py-3 rounded-md font-bold text-sm btn-primary flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed">
                Continue <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-8">
            <h2 className="text-lg font-extrabold tracking-tight mb-2 text-[#dee1f7]">When works for you?</h2>
            <p className="text-sm mb-5 text-[#bccabf]">We&apos;ll work around your schedule.</p>

            <p className="text-sm font-bold mb-2 text-[#dee1f7]">Preferred time of day</p>
            <div className="grid grid-cols-3 gap-3 mb-5">
              {timeOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setAvailability({ ...availability, time: opt.id })}
                  className="p-3 rounded-xl border text-center transition-all"
                  style={{
                    background: availability.time === opt.id ? "rgba(92,221,162,0.08)" : "#0e1322",
                    borderColor: availability.time === opt.id ? "#5cdda2" : "rgba(61,74,66,0.3)",
                  }}>
                  <p className="font-bold text-sm text-[#dee1f7]">{opt.label}</p>
                  <p className="text-xs text-[#bccabf]">{opt.sub}</p>
                </button>
              ))}
            </div>

            <label className="block text-sm font-bold mb-1.5 text-[#dee1f7]">
              Anything else you&apos;d like us to know? <span className="text-[#bccabf] font-normal">(optional)</span>
            </label>
            <textarea
              value={availability.message}
              onChange={(e) => setAvailability({ ...availability, message: e.target.value })}
              placeholder="E.g. specific dates that don't work, context about your environment..."
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-[#3d4a42]/30 text-sm outline-none resize-none bg-[#0e1322] text-[#dee1f7] placeholder:text-[#bccabf] focus:border-[#5cdda2]/40"
            />

            {error && (
              <p className="mt-3 text-sm text-red-400">{error}</p>
            )}

            <div className="flex gap-3 mt-5">
              <button onClick={() => setStep(3)} className="flex items-center gap-1 text-sm font-bold text-[#bccabf] hover:text-[#dee1f7] transition-colors">
                <ArrowLeft size={14} /> Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={!availability.time || submitting}
                className="flex-1 py-3 rounded-md font-bold text-sm btn-primary flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed">
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
    <Suspense fallback={<div className="pt-24 min-h-screen flex items-center justify-center bg-[#0e1322]" />}>
      <BookPageInner />
    </Suspense>
  );
}
