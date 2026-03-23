"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Shield, ArrowRight, Eye, EyeOff, Lock } from "lucide-react";

export default function PortalLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulate a brief loading state for realism
    setTimeout(() => {
      if (email === "demo@infoseck2k.com" && password === "portal2024") {
        sessionStorage.setItem("k2k-portal-auth", "1");
        router.push("/portal");
      } else {
        setError("Invalid credentials. Please use the demo credentials below.");
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ background: "var(--background)" }}>

      {/* Logo */}
      <div className="flex items-center gap-2 mb-10">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: "var(--k2k-gradient)" }}>
          <Shield size={18} color="white" />
        </div>
        <span className="font-bold text-xl" style={{ color: "var(--foreground)" }}>
          Infosec<span className="gradient-text">K2K</span>
        </span>
      </div>

      {/* Card */}
      <div className="w-full max-w-sm rounded-2xl border p-8 shadow-xl"
        style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>

        <div className="flex items-center gap-2 mb-1">
          <Lock size={16} style={{ color: "var(--k2k-teal)" }} />
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--k2k-teal)" }}>
            Secure Client Portal
          </p>
        </div>
        <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--foreground)" }}>Sign in</h1>
        <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>
          Access your project workspace and deliverables.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--foreground)" }}>
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              autoComplete="email"
              className="w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors"
              style={{ background: "var(--background)", borderColor: "var(--border)", color: "var(--foreground)" }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--foreground)" }}>
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                autoComplete="current-password"
                className="w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors pr-10"
                style={{ background: "var(--background)", borderColor: "var(--border)", color: "var(--foreground)" }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
                style={{ color: "var(--muted)" }}>
                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-500 bg-red-50 dark:bg-red-900/20 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-60 mt-2">
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Signing in...
              </>
            ) : (
              <>Sign in <ArrowRight size={15} /></>
            )}
          </button>
        </form>
      </div>

      {/* Demo credentials hint */}
      <div className="w-full max-w-sm mt-4 rounded-xl border p-4"
        style={{ background: "rgba(0,164,110,0.06)", borderColor: "rgba(0,164,110,0.2)" }}>
        <p className="text-xs font-semibold mb-2" style={{ color: "var(--k2k-teal)" }}>
          Demo access credentials
        </p>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span style={{ color: "var(--muted)" }}>Email</span>
            <code className="font-mono" style={{ color: "var(--foreground)" }}>demo@infoseck2k.com</code>
          </div>
          <div className="flex justify-between text-xs">
            <span style={{ color: "var(--muted)" }}>Password</span>
            <code className="font-mono" style={{ color: "var(--foreground)" }}>portal2024</code>
          </div>
        </div>
      </div>

      <p className="text-xs mt-6 text-center" style={{ color: "var(--muted)" }}>
        Not a client yet?{" "}
        <a href="/book" className="underline" style={{ color: "var(--k2k-teal)" }}>Book a free advisory call</a>
      </p>
    </div>
  );
}
