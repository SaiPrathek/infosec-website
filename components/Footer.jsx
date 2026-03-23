import Link from "next/link";
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-auto" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--k2k-gradient)" }}>
                <Shield size={16} color="white" />
              </div>
              <span className="font-bold text-lg" style={{ color: "var(--foreground)" }}>
                Infosec<span className="gradient-text">K2K</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
              Expert Identity & Access Management consultancy. Helping organisations secure what matters most.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg border hover:opacity-70 transition-opacity"
                style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
                <Linkedin size={14} />
              </a>
              <a href="#" className="p-2 rounded-lg border hover:opacity-70 transition-opacity"
                style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-3" style={{ color: "var(--foreground)" }}>Services</h4>
            <ul className="space-y-2">
              {[
                { label: "IAM Assessment", href: "/services/assessment" },
                { label: "Roadmap & Strategy", href: "/services/roadmap" },
                { label: "Implementation", href: "/services/implementation" },
                { label: "Managed Services", href: "/services/managed" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-teal-500 transition-colors" style={{ color: "var(--muted)" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="font-semibold text-sm mb-3" style={{ color: "var(--foreground)" }}>Sectors</h4>
            <ul className="space-y-2">
              {[
                { label: "Enterprise", href: "/sectors/enterprise" },
                { label: "Financial Services", href: "/sectors/financial-services" },
                { label: "Public Sector", href: "/sectors/public-sector" },
                { label: "Regulated Industries", href: "/sectors/regulated" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-teal-500 transition-colors" style={{ color: "var(--muted)" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-3" style={{ color: "var(--foreground)" }}>Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm" style={{ color: "var(--muted)" }}>
                <Mail size={12} /><span>hello@infoseck2k.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: "var(--muted)" }}>
                <Phone size={12} /><span>+44 (0)20 0000 0000</span>
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: "var(--muted)" }}>
                <MapPin size={12} /><span>London, UK</span>
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--muted)" }}>Certifications</h5>
              <div className="flex flex-wrap gap-2">
                {["ISO 27001", "Cyber Essentials+", "CREST"].map((cert) => (
                  <span key={cert} className="text-xs px-2 py-0.5 rounded border" style={{ color: "var(--muted)", borderColor: "var(--border)" }}>
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "var(--border)" }}>
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} Infosec K2K Ltd. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <Link key={link} href="#" className="text-xs hover:text-teal-500 transition-colors" style={{ color: "var(--muted)" }}>
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
