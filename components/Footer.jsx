import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#090e1c] border-t border-[#3d4a42]/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 mb-12">
          {/* Brand — 4 cols */}
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="block mb-4">
              <span className="text-2xl font-black tracking-tighter text-[#5cdda2]">Infosec K2K</span>
            </Link>
            <p className="text-sm leading-relaxed mb-5 text-[#bccabf]">
              Expert Identity &amp; Access Management consultancy. Helping organisations secure what matters most.
            </p>
            <div className="flex gap-3 mb-6">
              <a href="#" className="p-2 rounded-lg border border-[#3d4a42]/30 text-[#bccabf] hover:text-[#5cdda2] hover:border-[#5cdda2]/40 transition-colors">
                <Linkedin size={14} />
              </a>
              <a href="#" className="p-2 rounded-lg border border-[#3d4a42]/30 text-[#bccabf] hover:text-[#5cdda2] hover:border-[#5cdda2]/40 transition-colors">
                <Twitter size={14} />
              </a>
            </div>
            <div className="space-y-2">
              {[
                { icon: Mail, label: "hello@infoseck2k.com" },
                { icon: Phone, label: "+44 (0)20 0000 0000" },
                { icon: MapPin, label: "London, UK" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-xs text-[#bccabf]">
                  <item.icon size={12} className="text-[#5cdda2]" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Services — 2 cols */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4">Services</h4>
            <ul className="space-y-2.5">
              {[
                { label: "IAM Assessment", href: "/services/assessment" },
                { label: "Roadmap & Strategy", href: "/services/roadmap" },
                { label: "Implementation", href: "/services/implementation" },
                { label: "Managed Services", href: "/services/managed" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#bccabf] hover:text-[#5cdda2] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors — 2 cols */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4">Sectors</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Enterprise", href: "/sectors/enterprise" },
                { label: "Financial Services", href: "/sectors/financial-services" },
                { label: "Public Sector", href: "/sectors/public-sector" },
                { label: "Regulated Industries", href: "/sectors/regulated" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#bccabf] hover:text-[#5cdda2] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Free Tools — 2 cols */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4">Free Tools</h4>
            <ul className="space-y-2.5">
              {[
                { label: "IAM Assessment", href: "/assessment" },
                { label: "OSINT Hub", href: "/tools/osint" },
                { label: "All Tools", href: "/tools" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#bccabf] hover:text-[#5cdda2] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company — 2 cols */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Why Us", href: "/why-us" },
                { label: "Insights", href: "/insights" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Contact", href: "/contact" },
                { label: "Client Portal", href: "/portal" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#bccabf] hover:text-[#5cdda2] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["ISO 27001", "Cyber Essentials+", "CREST", "NCSC Assured"].map((cert) => (
            <span key={cert} className="text-xs px-2.5 py-1 rounded-full border border-[#3d4a42]/30 text-[#bccabf]">
              {cert}
            </span>
          ))}
        </div>

        <div className="border-t border-[#3d4a42]/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#bccabf]">
            © {new Date().getFullYear()} Infosec K2K Ltd. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <Link key={link} href="#" className="text-xs text-[#bccabf] hover:text-[#5cdda2] transition-colors">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
