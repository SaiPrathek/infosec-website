import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Technology Partners — Infosec K2K",
  description:
    "Infosec K2K maintains formal technology partnerships with seven specialist vendors — CyberArk, Cyolo, Picus Security, Qualys, DomainTools, LevelBlue and WSO2.",
};

const partnerGroups = [
  {
    id: "identity",
    eyebrow: "Identity, Access & Zero Trust",
    accent: "#5cdda2",
    partners: [
      {
        name: "CyberArk",
        category: "Privileged Access Management",
        desc: "The industry-leading PAM platform. K2K delivers CyberArk Privileged Access Security (PAS), Endpoint Privilege Manager (EPM) and Secrets Manager — protecting privileged accounts, endpoints and DevOps pipelines for enterprise and regulated-sector clients.",
        capabilities: ["PAM & PAS implementation", "Endpoint Privilege Manager (EPM)", "Secrets Management for DevOps"],
        serviceSlug: "implementation",
        serviceLabel: "Implementation & Optimisation",
      },
      {
        name: "Cyolo",
        category: "Zero Trust Secure Connectivity",
        desc: "Identity-based zero-trust connectivity for remote access to OT environments, third-party systems and legacy applications — without VPN exposure. K2K deploys Cyolo as part of IAM implementation programmes where legacy connectivity is a risk vector.",
        capabilities: ["Zero-trust remote access", "OT and ICS secure connectivity", "Third-party vendor access management"],
        serviceSlug: "implementation",
        serviceLabel: "Implementation & Optimisation",
      },
      {
        name: "WSO2",
        category: "Open-Source IAM & Integration",
        desc: "WSO2 Identity Server provides a flexible, self-hosted IAM and integration platform for organisations that require open-source, vendor-neutral identity infrastructure. K2K designs, implements and integrates WSO2 deployments for clients across EMEA.",
        capabilities: ["Identity Server implementation", "API security and gateway integration", "Custom IAM platform development"],
        serviceSlug: "tooling-strategy",
        serviceLabel: "Tooling Strategy & Support",
      },
    ],
  },
  {
    id: "assurance",
    eyebrow: "Security Assurance & Testing",
    accent: "#3b82f6",
    partners: [
      {
        name: "Picus Security",
        category: "Breach & Attack Simulation",
        desc: "Picus enables K2K to deliver continuous security control validation — testing whether your defences actually stop real-world attack techniques. Integrated into offensive security engagements and vulnerability management programmes.",
        capabilities: ["Continuous attack simulation", "Security control validation", "MITRE ATT&CK-aligned threat coverage"],
        serviceSlug: "offensive-security",
        serviceLabel: "Offensive Security",
      },
      {
        name: "Qualys",
        category: "Vulnerability Management",
        desc: "Cloud-based vulnerability management, compliance scanning and web application security. K2K uses Qualys to deliver authenticated vulnerability assessments, continuous patch tracking and compliance reporting for clients under DORA, ISO 27001 and Cyber Essentials+.",
        capabilities: ["Authenticated vulnerability scanning", "Continuous patch management", "Compliance posture reporting"],
        serviceSlug: "offensive-security",
        serviceLabel: "Offensive Security",
      },
    ],
  },
  {
    id: "intelligence",
    eyebrow: "Intelligence & Threat Data",
    accent: "#c3c0ff",
    partners: [
      {
        name: "DomainTools",
        category: "Internet Intelligence & OSINT",
        desc: "DomainTools Iris Investigate powers K2K's Domain Intelligence service — providing continuous visibility of your external attack surface including domain infrastructure, passive DNS, WHOIS history, leaked credentials and threat actor profiling.",
        capabilities: ["Domain & subdomain footprint monitoring", "Threat actor and infrastructure profiling", "Lookalike domain and phishing detection"],
        serviceSlug: "domain-intelligence",
        serviceLabel: "Domain Intelligence & OSINT",
      },
    ],
  },
  {
    id: "mssp",
    eyebrow: "Managed Security (MSSP)",
    accent: "#e8a87c",
    partners: [
      {
        name: "LevelBlue",
        category: "Managed Detection & Response",
        desc: "Formerly AT&T Cybersecurity, LevelBlue powers K2K's 24/7 Managed Detection & Response service via USM Anywhere / AlienVault. The platform delivers SIEM correlation, threat intelligence via AlienVault OTX and incident response playbooks — enabling K2K to deliver enterprise-grade SOC capability to mid-market UK organisations.",
        capabilities: ["24/7 SOC via USM Anywhere", "AlienVault OTX threat intelligence", "SIEM correlation and alert triage"],
        serviceSlug: "managed-detection",
        serviceLabel: "Managed Detection & Response",
      },
    ],
  },
];

export default function PartnersPage() {
  return (
    <div className="pt-16 bg-[#0e1322] min-h-screen">
      {/* Hero */}
      <section className="bg-[#090e1c] py-20 border-b border-[#3d4a42]/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#5cdda2]/5 blur-[100px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#5cdda2] mb-4 block">
            Technology Partners
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-5 text-[#dee1f7]">
            A partner ecosystem built around{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5cdda2] to-[#04a56f]">
              best-in-class capability.
            </span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-[#bccabf]">
            We maintain formal technology partnerships with seven specialist vendors — selected for their depth, their track record, and their fit with how we deliver for clients across EMEA.
          </p>
        </div>
      </section>

      {/* Partner groups */}
      <section className="bg-[#0e1322] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {partnerGroups.map((group) => (
            <div key={group.id}>
              {/* Group header */}
              <div className="pb-6 mb-8 border-b border-[#3d4a42]/20">
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.12em] block mb-1"
                  style={{ color: group.accent }}>
                  {group.eyebrow}
                </span>
              </div>

              {/* Partner cards */}
              <div className="space-y-6">
                {group.partners.map((partner) => (
                  <div key={partner.name}
                    className="bg-[#1a1f2f] rounded-xl border border-[#3d4a42]/10 p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Left: name + category */}
                      <div className="md:w-48 flex-shrink-0">
                        <h2 className="text-xl font-extrabold tracking-tight text-[#dee1f7] mb-1">
                          {partner.name}
                        </h2>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={{ background: `${group.accent}18`, color: group.accent }}>
                          {partner.category}
                        </span>
                      </div>

                      {/* Right: content */}
                      <div className="flex-1">
                        <p className="text-sm leading-relaxed text-[#bccabf] mb-5">
                          {partner.desc}
                        </p>
                        <div className="flex flex-wrap gap-3 mb-5">
                          {partner.capabilities.map((cap) => (
                            <div key={cap} className="flex items-center gap-1.5 text-xs">
                              <CheckCircle size={11} style={{ color: group.accent }} />
                              <span className="text-[#dee1f7]">{cap}</span>
                            </div>
                          ))}
                        </div>
                        <Link href={`/services/${partner.serviceSlug}`}
                          className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors"
                          style={{ color: group.accent }}>
                          Explore {partner.serviceLabel} <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#090e1c] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1f2f] rounded-3xl border border-[#5cdda2]/20 p-12 text-center">
            <h2 className="text-2xl font-extrabold tracking-tighter mb-3 text-[#dee1f7]">
              Interested in how our partner ecosystem applies to your programme?
            </h2>
            <p className="text-base mb-8 text-[#bccabf]">
              Start with a free assessment to understand your current posture, or book a call to discuss which partner capabilities are relevant to your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/assessment/select"
                className="btn-primary px-8 py-4 rounded-md font-bold inline-flex items-center gap-2">
                Start free assessment <ArrowRight size={14} />
              </Link>
              <Link href="/contact"
                className="px-8 py-4 rounded-md border border-[#5cdda2]/30 font-bold text-sm inline-flex items-center gap-2 text-[#5cdda2] hover:bg-[#5cdda2]/5 transition-all">
                Book advisory call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
