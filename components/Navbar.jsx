"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu, X, ChevronDown, ArrowRight, Search, Sparkles, Shield, Sun, Moon,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const services = [
  { label: "Identity Security", href: "/services/assessment", desc: "IAM assessment, roadmap & implementation", isCore: true },
  { label: "Managed Detection", href: "/services/managed-detection", desc: "24/7 SOC powered by LevelBlue / AlienVault" },
  { label: "Domain Intelligence & OSINT", href: "/services/domain-intelligence", desc: "External exposure monitoring via DomainTools" },
  { label: "Security Assurance", href: "/services/assurance", desc: "ISO 27001, DORA, FCA & Cyber Essentials+" },
  { label: "SWIFT & Payments Assurance", href: "/services/swift-assurance", desc: "SWIFT CSP readiness & attestation support" },
];

const sectors = [
  { label: "Enterprise", href: "/sectors/enterprise" },
  { label: "Financial Services", href: "/sectors/financial-services" },
  { label: "Public Sector", href: "/sectors/public-sector" },
  { label: "Regulated Industries", href: "/sectors/regulated" },
  { label: "Healthcare & NHS", href: "/sectors/healthcare" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const navBg = isDark ? "bg-[#0e1322]/80 border-[#3d4a42]/15" : "bg-white/90 border-slate-200/60";
  const navLink = isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900";
  const dropdownBg = isDark ? "bg-[#1a1f2f] border-[#3d4a42]/20" : "bg-white border-slate-200/60 shadow-lg";
  const dropdownItem = isDark ? "text-[#dee1f7] hover:bg-[#25293a]" : "text-slate-800 hover:bg-slate-100";
  const dropdownMuted = isDark ? "text-[#bccabf]" : "text-slate-500";
  const dividerColor = isDark ? "border-[#3d4a42]/30" : "border-slate-200";
  const mobileBg = isDark ? "bg-[#0e1322] border-[#3d4a42]/20" : "bg-white border-slate-200";
  const mobileSectionLabel = isDark ? "text-[#bccabf]" : "text-slate-400";
  const mobileLink = isDark ? "text-[#dee1f7]" : "text-slate-800";
  const menuBtnColor = isDark ? "text-[#dee1f7]" : "text-slate-700";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-3xl border-b transition-colors duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-black tracking-tighter text-[#5cdda2]">Infosec K2K</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-5">
            {/* Services dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${navLink}`}>
                Services <ChevronDown size={14} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-72 pt-2">
                  <div className={`rounded-xl p-2 border ${dropdownBg}`}>
                    {services.map((s) => (
                      <Link key={s.href} href={s.href}
                        className={`flex flex-col px-3 py-2 rounded-lg transition-colors ${dropdownItem}`}
                        onClick={() => setServicesOpen(false)}>
                        <span className="flex items-center gap-1.5 text-sm font-medium">
                          {s.label}
                          {s.isCore && (
                            <span className="text-[0.6rem] px-1.5 py-0.5 rounded-full font-bold bg-[#5cdda2]/15 text-[#5cdda2]">
                              Core specialism
                            </span>
                          )}
                        </span>
                        <span className={`text-xs ${dropdownMuted}`}>{s.desc}</span>
                      </Link>
                    ))}
                    <div className={`border-t mt-2 pt-2 ${dividerColor}`}>
                      <Link href="/services" className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#5cdda2]"
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
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${navLink}`}>
                Sectors <ChevronDown size={14} />
              </button>
              {sectorsOpen && (
                <div className="absolute top-full left-0 w-48 pt-2">
                  <div className={`rounded-xl p-2 border ${dropdownBg}`}>
                    {sectors.map((s) => (
                      <Link key={s.href} href={s.href}
                        className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${dropdownItem}`}
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
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${navLink}`}>
                Free Tools <ChevronDown size={14} />
              </button>
              {toolsOpen && (
                <div className="absolute top-full left-0 w-56 pt-2">
                  <div className={`rounded-xl p-2 border ${dropdownBg}`}>
                    <Link href="/assessment/select"
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-colors ${dropdownItem}`}
                      onClick={() => setToolsOpen(false)}>
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#5cdda2] to-[#04a56f]">
                        <Shield size={13} color="#003823" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Cyber Risk Assessment</p>
                        <p className={`text-xs ${dropdownMuted}`}>Risk score across 5 domains</p>
                      </div>
                    </Link>
                    <Link href="/tools/osint"
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-colors ${dropdownItem}`}
                      onClick={() => setToolsOpen(false)}>
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)" }}>
                        <Search size={13} color="white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Domain Intelligence</p>
                        <p className={`text-xs ${dropdownMuted}`}>External exposure & OSINT signals</p>
                      </div>
                    </Link>
                    <div className={`border-t mt-1 pt-1 ${dividerColor}`}>
                      <Link href="/tools" className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#5cdda2]"
                        onClick={() => setToolsOpen(false)}>
                        All free tools <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources dropdown */}
            <div className="relative" onMouseEnter={() => setResourcesOpen(true)} onMouseLeave={() => setResourcesOpen(false)}>
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${navLink}`}>
                Resources <ChevronDown size={14} />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-0 w-48 pt-2">
                  <div className={`rounded-xl p-2 border ${dropdownBg}`}>
                    {[
                      { label: "Why Us", href: "/why-us" },
                      { label: "Insights", href: "/insights" },
                      { label: "Case Studies", href: "/case-studies" },
                    ].map((s) => (
                      <Link key={s.href} href={s.href}
                        className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${dropdownItem}`}
                        onClick={() => setResourcesOpen(false)}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/portal" className={`text-sm font-medium transition-colors ${navLink}`}>
              Client Portal
            </Link>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${isDark ? "text-slate-400 hover:text-white hover:bg-white/10" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <Link href="/internal" className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-colors hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)", color: "white" }}>
              <Sparkles size={11} /> Sales AI
            </Link>
            <Link href="/assessment/select"
              className="hidden md:inline-flex items-center gap-1 text-sm font-bold px-4 py-2 rounded-md btn-primary">
              Free Risk Assessment <ArrowRight size={14} />
            </Link>
            <button className={`md:hidden p-2 rounded-lg ${menuBtnColor}`} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`md:hidden border-t px-4 py-4 space-y-3 ${mobileBg}`}>
          <p className={`text-xs font-bold uppercase tracking-[0.1em] ${mobileSectionLabel}`}>Services</p>
          {services.map((s) => (
            <Link key={s.href} href={s.href} className={`flex items-center gap-1.5 text-sm font-medium py-1 ${mobileLink}`}
              onClick={() => setMenuOpen(false)}>
              {s.label}
              {s.isCore && (
                <span className="text-[0.6rem] px-1.5 py-0.5 rounded-full font-bold bg-[#5cdda2]/15 text-[#5cdda2]">
                  Core
                </span>
              )}
            </Link>
          ))}
          <p className={`text-xs font-bold uppercase tracking-[0.1em] ${mobileSectionLabel} pt-2`}>Sectors</p>
          {sectors.map((s) => (
            <Link key={s.href} href={s.href} className={`block text-sm font-medium py-1 ${mobileLink}`}
              onClick={() => setMenuOpen(false)}>
              {s.label}
            </Link>
          ))}
          <p className={`text-xs font-bold uppercase tracking-[0.1em] ${mobileSectionLabel} pt-2`}>Free Tools</p>
          <Link href="/assessment/select" className={`block text-sm font-medium py-1 ${mobileLink}`} onClick={() => setMenuOpen(false)}>Cyber Risk Assessment</Link>
          <Link href="/tools/osint" className={`block text-sm font-medium py-1 ${mobileLink}`} onClick={() => setMenuOpen(false)}>Domain Intelligence</Link>
          <p className={`text-xs font-bold uppercase tracking-[0.1em] ${mobileSectionLabel} pt-2`}>Resources</p>
          <Link href="/why-us" className={`block text-sm font-medium py-1 ${mobileLink}`} onClick={() => setMenuOpen(false)}>Why Us</Link>
          <Link href="/insights" className={`block text-sm font-medium py-1 ${mobileLink}`} onClick={() => setMenuOpen(false)}>Insights</Link>
          <Link href="/case-studies" className={`block text-sm font-medium py-1 ${mobileLink}`} onClick={() => setMenuOpen(false)}>Case Studies</Link>
          <div className="pt-3 space-y-2">
            <Link href="/portal" className={`block text-sm font-medium ${mobileLink}`} onClick={() => setMenuOpen(false)}>Client Portal</Link>
            <Link href="/internal" className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg mt-1"
              style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)", color: "white" }}
              onClick={() => setMenuOpen(false)}>
              <Sparkles size={11} /> Sales AI
            </Link>
          </div>
          <Link href="/assessment/select"
            className="btn-primary block text-center text-sm font-bold px-4 py-2.5 rounded-md mt-2"
            onClick={() => setMenuOpen(false)}>
            Free Risk Assessment
          </Link>
          {/* Mobile theme toggle */}
          <button
            onClick={toggleTheme}
            className={`flex items-center gap-2 text-sm font-medium py-1 ${mobileLink}`}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
            {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
