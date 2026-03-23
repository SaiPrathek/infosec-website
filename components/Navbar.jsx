"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import {
  Shield,
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Search,
} from "lucide-react";

const services = [
  { label: "IAM Assessment", href: "/services/assessment", desc: "Know your risk in 10 minutes" },
  { label: "Roadmap & Strategy", href: "/services/roadmap", desc: "Prioritised path to maturity" },
  { label: "Implementation", href: "/services/implementation", desc: "Hands-on delivery" },
  { label: "Managed Services", href: "/services/managed", desc: "Ongoing identity security" },
];

const sectors = [
  { label: "Enterprise", href: "/sectors/enterprise" },
  { label: "Financial Services", href: "/sectors/financial-services" },
  { label: "Public Sector", href: "/sectors/public-sector" },
  { label: "Regulated Industries", href: "/sectors/regulated" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b transition-colors
      bg-white/95 border-slate-200 dark:bg-navy-900/95 dark:border-white/10 backdrop-blur-md"
      style={{ background: theme === "dark" ? "rgba(10,15,30,0.95)" : "rgba(255,255,255,0.95)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--k2k-gradient)" }}>
              <Shield size={16} color="white" />
            </div>
            <span className="font-bold text-lg" style={{ color: "var(--foreground)" }}>
              Infosec<span className="gradient-text">K2K</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {/* Services dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium transition-colors"
                style={{ color: "var(--muted)" }}>
                Services <ChevronDown size={14} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-64 pt-2" >
                <div className="rounded-xl p-2 shadow-xl border z-50"
                  style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
                  {services.map((s) => (
                    <Link key={s.href} href={s.href}
                      className="flex flex-col px-3 py-2 rounded-lg hover:opacity-80 transition-opacity"
                      onClick={() => setServicesOpen(false)}>
                      <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{s.label}</span>
                      <span className="text-xs" style={{ color: "var(--muted)" }}>{s.desc}</span>
                    </Link>
                  ))}
                  <div className="border-t mt-2 pt-2" style={{ borderColor: "var(--border)" }}>
                    <Link href="/services" className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-teal-500"
                      onClick={() => setServicesOpen(false)}>
                      All services <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
                </div>
              )}
            </div>

            {/* Sectors dropdown */}
            <div className="relative" onMouseEnter={() => setSectorsOpen(true)} onMouseLeave={() => setSectorsOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium transition-colors"
                style={{ color: "var(--muted)" }}>
                Sectors <ChevronDown size={14} />
              </button>
              {sectorsOpen && (
                <div className="absolute top-full left-0 w-48 pt-2">
                <div className="rounded-xl p-2 shadow-xl border z-50"
                  style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
                  {sectors.map((s) => (
                    <Link key={s.href} href={s.href}
                      className="block px-3 py-2 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity"
                      style={{ color: "var(--foreground)" }}
                      onClick={() => setSectorsOpen(false)}>
                      {s.label}
                    </Link>
                  ))}
                </div>
                </div>
              )}
            </div>

            {/* Free Tools dropdown */}
            <div className="relative" onMouseEnter={() => setToolsOpen(true)} onMouseLeave={() => setToolsOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium transition-colors"
                style={{ color: "var(--muted)" }}>
                Free Tools <ChevronDown size={14} />
              </button>
              {toolsOpen && (
                <div className="absolute top-full left-0 w-56 pt-2">
                <div className="rounded-xl p-2 shadow-xl border z-50"
                  style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
                  <Link href="/assessment"
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:opacity-80 transition-opacity"
                    onClick={() => setToolsOpen(false)}>
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "var(--k2k-gradient)" }}>
                      <Shield size={13} color="white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>IAM Assessment</p>
                      <p className="text-xs" style={{ color: "var(--muted)" }}>Know your risk in 10 min</p>
                    </div>
                  </Link>
                  <Link href="/tools/osint"
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:opacity-80 transition-opacity"
                    onClick={() => setToolsOpen(false)}>
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)" }}>
                      <Search size={13} color="white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>OSINT Hub</p>
                      <p className="text-xs" style={{ color: "var(--muted)" }}>External exposure check</p>
                    </div>
                  </Link>
                  <div className="border-t mt-1 pt-1" style={{ borderColor: "var(--border)" }}>
                    <Link href="/tools" className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-teal-500"
                      onClick={() => setToolsOpen(false)}>
                      All free tools <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
                </div>
              )}
            </div>

            <Link href="/why-us" className="text-sm font-medium transition-colors hover:text-teal-500"
              style={{ color: "var(--muted)" }}>
              Why Us
            </Link>
            <Link href="/case-studies" className="text-sm font-medium transition-colors hover:text-teal-500"
              style={{ color: "var(--muted)" }}>
              Case Studies
            </Link>
            <Link href="/portal" className="text-sm font-medium transition-colors hover:text-teal-500"
              style={{ color: "var(--muted)" }}>
              Client Portal
            </Link>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className="p-2 rounded-lg transition-colors hover:opacity-70"
              style={{ color: "var(--muted)" }} aria-label="Toggle theme">
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <Link href="/book" className="hidden md:inline-flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-lg border transition-colors hover:opacity-80"
              style={{ color: "var(--foreground)", borderColor: "var(--border)" }}>
              Book a Call
            </Link>
            <Link href="/assessment"
              className="hidden md:inline-flex items-center gap-1 text-sm font-semibold px-4 py-2 rounded-lg btn-primary">
              Free Assessment <ArrowRight size={14} />
            </Link>
            <button className="md:hidden p-2 rounded-lg" onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: "var(--foreground)" }}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t px-4 py-4 space-y-3"
          style={{ background: "var(--background)", borderColor: "var(--border)" }}>
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>Services</p>
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="block text-sm font-medium py-1"
              style={{ color: "var(--foreground)" }} onClick={() => setMenuOpen(false)}>
              {s.label}
            </Link>
          ))}
          <p className="text-xs font-semibold uppercase tracking-wider pt-2" style={{ color: "var(--muted)" }}>Sectors</p>
          {sectors.map((s) => (
            <Link key={s.href} href={s.href} className="block text-sm font-medium py-1"
              style={{ color: "var(--foreground)" }} onClick={() => setMenuOpen(false)}>
              {s.label}
            </Link>
          ))}
          <p className="text-xs font-semibold uppercase tracking-wider pt-2" style={{ color: "var(--muted)" }}>Free Tools</p>
          <Link href="/assessment" className="block text-sm font-medium py-1" style={{ color: "var(--foreground)" }} onClick={() => setMenuOpen(false)}>IAM Assessment</Link>
          <Link href="/tools/osint" className="block text-sm font-medium py-1" style={{ color: "var(--foreground)" }} onClick={() => setMenuOpen(false)}>OSINT Hub</Link>
          <div className="pt-3 space-y-2">
            <Link href="/why-us" className="block text-sm font-medium" style={{ color: "var(--foreground)" }} onClick={() => setMenuOpen(false)}>Why Us</Link>
            <Link href="/contact" className="block text-sm font-medium" style={{ color: "var(--foreground)" }} onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link href="/portal" className="block text-sm font-medium" style={{ color: "var(--foreground)" }} onClick={() => setMenuOpen(false)}>Client Portal</Link>
          </div>
          <Link href="/book" className="btn-primary block text-center text-sm font-semibold px-4 py-2.5 rounded-lg mt-2"
            onClick={() => setMenuOpen(false)}>
            Book a Free Call
          </Link>
        </div>
      )}
    </nav>
  );
}
