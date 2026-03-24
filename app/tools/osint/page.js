"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Search, Shield, Globe, Database, X } from "lucide-react";

const capabilities = [
  { icon: Database, label: "Credential exposure", desc: "Leaked passwords and email addresses from data breaches" },
  { icon: Globe, label: "Domain footprint", desc: "Subdomains, exposed services, and DNS records" },
  { icon: Search, label: "Infrastructure mapping", desc: "Open ports, technologies, and public-facing assets" },
  { icon: Globe, label: "Domain intelligence", desc: "Domain history, registrant data and infrastructure linkage" },
];

export default function OsintPage() {
  const [hasAccess, setHasAccess] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (sessionStorage.getItem("k2k-osint-access")) {
      setHasAccess(true);
    }
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !form.email.includes("@")) e.email = "Valid work email required";
    if (!form.company.trim()) e.company = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleGateSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          role: "",
          service: "Domain Intelligence Hub",
          message: "Accessed Domain Intelligence Hub",
        }),
      });
    } catch {
      // graceful degradation
    }
    sessionStorage.setItem("k2k-osint-access", "1");
    setHasAccess(true);
    setSubmitting(false);
  };

  const handleSkip = () => {
    sessionStorage.setItem("k2k-osint-access", "1");
    setHasAccess(true);
  };

  return (
    <div className="pt-16 min-h-screen bg-[#0e1322]">
      {/* Top bar */}
      <div className="border-b border-[#3d4a42]/10 px-4 py-3 flex items-center justify-between bg-[#090e1c]">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)" }}>
            <Search size={14} color="white" />
          </div>
          <div>
            <p className="font-bold text-sm text-[#dee1f7]">Domain Intelligence Hub</p>
            <p className="text-xs text-[#bccabf]">Domain Intelligence & OSINT — Infosec K2K, powered by DomainTools</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://osint-dev-new.vercel.app/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border border-[#3d4a42]/30 text-[#bccabf] hover:text-[#dee1f7] hover:border-[#5cdda2]/30 transition-colors">
            Open full screen <ExternalLink size={11} />
          </a>
          <Link href="/book"
            className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-md btn-primary">
            Book an expert <ArrowRight size={11} />
          </Link>
        </div>
      </div>

      <div className="flex relative" style={{ height: "calc(100vh - 8rem)" }}>
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 border-r border-[#3d4a42]/10 p-5 shrink-0 overflow-y-auto bg-[#090e1c]">
          <p className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#bccabf] mb-4">
            What this tool surfaces
          </p>
          <div className="space-y-4 mb-8">
            {capabilities.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#3b82f6]/10">
                  <Icon size={13} style={{ color: "#3b82f6" }} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#dee1f7]">{label}</p>
                  <p className="text-xs mt-0.5 text-[#bccabf]">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto">
            <div className="bg-[#1a1f2f] rounded-xl border border-[#5cdda2]/20 p-4">
              <p className="text-xs font-bold mb-1.5 text-[#dee1f7]">
                Ready to move from free to managed?
              </p>
              <p className="text-xs mb-3 text-[#bccabf]">
                Our Domain Intelligence service provides continuous monitoring, analyst triage and monthly briefings — powered by DomainTools.
              </p>
              <Link href="/services/domain-intelligence"
                className="w-full py-2 rounded-md text-xs font-bold btn-primary flex items-center justify-center gap-1">
                Explore Domain Intelligence <ArrowRight size={11} />
              </Link>
            </div>

            <div className="mt-4 pt-4 border-t border-[#3d4a42]/10">
              <p className="text-xs mb-2 text-[#bccabf]">Start with a free risk assessment:</p>
              <Link href="/assessment/select"
                className="flex items-center gap-2 text-xs font-bold text-[#5cdda2] hover:text-[#7bfabc] transition-colors">
                <Shield size={12} /> Cyber Risk Assessment →
              </Link>
            </div>
          </div>
        </aside>

        {/* Iframe area */}
        <div className="flex-1 relative">
          {hasAccess ? (
            <iframe
              src="https://osint-dev-new.vercel.app/"
              className="w-full h-full border-0"
              title="OSINT Intelligence Hub"
              allow="clipboard-write"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#0e1322]">
              <div className="w-full h-full opacity-10 pointer-events-none select-none flex items-center justify-center text-[#bccabf]"
                style={{ fontSize: 48 }}>
                ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
              </div>
            </div>
          )}

          {/* Gate overlay */}
          {!hasAccess && (
            <div className="absolute inset-0 flex items-center justify-center z-50 p-4"
              style={{ background: "rgba(9,14,28,0.80)", backdropFilter: "blur(4px)" }}>
              <div className="w-full max-w-sm bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/20 p-8 shadow-2xl">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)" }}>
                  <Search size={18} color="white" />
                </div>
                <h2 className="text-xl font-extrabold tracking-tight mb-1 text-[#dee1f7]">
                  Access the Domain Intelligence Hub
                </h2>
                <p className="text-sm mb-6 text-[#bccabf]">
                  Enter your details to access the tool. We&apos;ll follow up with a summary of your domain exposure findings.
                </p>

                <form onSubmit={handleGateSubmit} className="space-y-3">
                  {[
                    { key: "name", label: "Full name", type: "text", placeholder: "Jane Smith" },
                    { key: "email", label: "Work email", type: "email", placeholder: "jane@company.com" },
                    { key: "company", label: "Company", type: "text", placeholder: "Acme Ltd" },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="block text-xs font-bold mb-1 text-[#dee1f7]">
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.key]}
                        onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))}
                        className="w-full px-3 py-2 rounded-lg border text-sm focus:outline-none bg-[#0e1322] text-[#dee1f7] placeholder:text-[#bccabf]"
                        style={{
                          borderColor: errors[f.key] ? "#ef4444" : "rgba(61,74,66,0.3)",
                        }}
                      />
                      {errors[f.key] && <p className="text-xs mt-1 text-red-400">{errors[f.key]}</p>}
                    </div>
                  ))}

                  <button type="submit" disabled={submitting}
                    className="btn-primary w-full py-2.5 rounded-md text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-60 mt-1">
                    {submitting ? "Confirming..." : "Get free access"} {!submitting && <ArrowRight size={14} />}
                  </button>
                </form>

                <button
                  onClick={handleSkip}
                  className="w-full mt-3 text-xs text-center text-[#bccabf] hover:text-[#dee1f7] transition-colors flex items-center justify-center gap-1">
                  <X size={11} /> Skip for now
                </button>

                <p className="text-xs text-center mt-3 text-[#bccabf]">
                  No spam. We respect your privacy.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
