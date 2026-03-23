"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Search,
  Sparkles,
  Shield,
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0e1322]/70 backdrop-blur-3xl border-b border-[#3d4a42]/15">
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
              <button className="flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                Services <ChevronDown size={14} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-64 pt-2">
                  <div className="bg-[#1a1f2f] rounded-xl p-2 shadow-xl border border-[#3d4a42]/20 z-50">
                    {services.map((s) => (
                      <Link key={s.href} href={s.href}
                        className="flex flex-col px-3 py-2 rounded-lg hover:bg-[#25293a] transition-colors"
                        onClick={() => setServicesOpen(false)}>
                        <span className="text-sm font-medium text-[#dee1f7]">{s.label}</span>
                        <span className="text-xs text-[#bccabf]">{s.desc}</span>
                      </Link>
                    ))}
                    <div className="border-t border-[#3d4a42]/30 mt-2 pt-2">
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
              <button className="flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                Sectors <ChevronDown size={14} />
              </button>
              {sectorsOpen && (
                <div className="absolute top-full left-0 w-48 pt-2">
                  <div className="bg-[#1a1f2f] rounded-xl p-2 shadow-xl border border-[#3d4a42]/20 z-50">
                    {sectors.map((s) => (
                      <Link key={s.href} href={s.href}
                        className="block px-3 py-2 rounded-lg text-sm font-medium text-[#dee1f7] hover:bg-[#25293a] transition-colors"
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
              <button className="flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                Free Tools <ChevronDown size={14} />
              </button>
              {toolsOpen && (
                <div className="absolute top-full left-0 w-56 pt-2">
                  <div className="bg-[#1a1f2f] rounded-xl p-2 shadow-xl border border-[#3d4a42]/20 z-50">
                    <Link href="/assessment"
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-[#25293a] transition-colors"
                      onClick={() => setToolsOpen(false)}>
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#5cdda2] to-[#04a56f]">
                        <Shield size={13} color="#003823" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#dee1f7]">IAM Assessment</p>
                        <p className="text-xs text-[#bccabf]">Know your risk in 10 min</p>
                      </div>
                    </Link>
                    <Link href="/tools/osint"
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-[#25293a] transition-colors"
                      onClick={() => setToolsOpen(false)}>
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)" }}>
                        <Search size={13} color="white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#dee1f7]">OSINT Hub</p>
                        <p className="text-xs text-[#bccabf]">External exposure check</p>
                      </div>
                    </Link>
                    <div className="border-t border-[#3d4a42]/30 mt-1 pt-1">
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
              <button className="flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                Resources <ChevronDown size={14} />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-0 w-48 pt-2">
                  <div className="bg-[#1a1f2f] rounded-xl p-2 shadow-xl border border-[#3d4a42]/20 z-50">
                    {[
                      { label: "Why Us", href: "/why-us" },
                      { label: "Insights", href: "/insights" },
                      { label: "Case Studies", href: "/case-studies" },
                    ].map((s) => (
                      <Link key={s.href} href={s.href}
                        className="block px-3 py-2 rounded-lg text-sm font-medium text-[#dee1f7] hover:bg-[#25293a] transition-colors"
                        onClick={() => setResourcesOpen(false)}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/portal" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
              Client Portal
            </Link>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Link href="/internal" className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-colors hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)", color: "white" }}>
              <Sparkles size={11} /> Sales AI
            </Link>
            <Link href="/assessment"
              className="hidden md:inline-flex items-center gap-1 text-sm font-bold px-4 py-2 rounded-md btn-primary">
              Free Assessment <ArrowRight size={14} />
            </Link>
            <button className="md:hidden p-2 rounded-lg text-[#dee1f7]" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#3d4a42]/20 px-4 py-4 space-y-3 bg-[#0e1322]">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#bccabf]">Services</p>
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="block text-sm font-medium py-1 text-[#dee1f7]"
              onClick={() => setMenuOpen(false)}>
              {s.label}
            </Link>
          ))}
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#bccabf] pt-2">Sectors</p>
          {sectors.map((s) => (
            <Link key={s.href} href={s.href} className="block text-sm font-medium py-1 text-[#dee1f7]"
              onClick={() => setMenuOpen(false)}>
              {s.label}
            </Link>
          ))}
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#bccabf] pt-2">Free Tools</p>
          <Link href="/assessment" className="block text-sm font-medium py-1 text-[#dee1f7]" onClick={() => setMenuOpen(false)}>IAM Assessment</Link>
          <Link href="/tools/osint" className="block text-sm font-medium py-1 text-[#dee1f7]" onClick={() => setMenuOpen(false)}>OSINT Hub</Link>
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#bccabf] pt-2">Resources</p>
          <Link href="/why-us" className="block text-sm font-medium py-1 text-[#dee1f7]" onClick={() => setMenuOpen(false)}>Why Us</Link>
          <Link href="/insights" className="block text-sm font-medium py-1 text-[#dee1f7]" onClick={() => setMenuOpen(false)}>Insights</Link>
          <Link href="/case-studies" className="block text-sm font-medium py-1 text-[#dee1f7]" onClick={() => setMenuOpen(false)}>Case Studies</Link>
          <div className="pt-3 space-y-2">
            <Link href="/portal" className="block text-sm font-medium text-[#dee1f7]" onClick={() => setMenuOpen(false)}>Client Portal</Link>
            <Link href="/internal" className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg mt-1"
              style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)", color: "white" }}
              onClick={() => setMenuOpen(false)}>
              <Sparkles size={11} /> Sales AI
            </Link>
          </div>
          <Link href="/assessment"
            className="btn-primary block text-center text-sm font-bold px-4 py-2.5 rounded-md mt-2"
            onClick={() => setMenuOpen(false)}>
            Free Assessment
          </Link>
        </div>
      )}
    </nav>
  );
}
