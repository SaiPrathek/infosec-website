export const sectorsData = {
  enterprise: {
    title: "Enterprise",
    tagline: "IAM at scale — without losing control",
    heroDesc:
      "Large organisations face unique IAM challenges: sprawling identity estates, complex hybrid environments, M&A-driven complexity and growing regulatory pressure. We help enterprise clients build scalable, governable identity security.",
    challenges: [
      { title: "Identity sprawl", desc: "Thousands of accounts, roles and entitlements accumulated over years — many of which are no longer needed or appropriate." },
      { title: "Privileged access risk", desc: "Large IT teams mean large numbers of privileged accounts. Each one is a potential breach vector if not governed properly." },
      { title: "M&A complexity", desc: "Acquisitions create fragmented identity environments with inconsistent controls and duplicate accounts." },
      { title: "Hybrid infrastructure", desc: "On-premise, cloud and SaaS environments require a unified identity approach that most tools don't deliver out of the box." },
    ],
    compliance: ["ISO 27001", "Cyber Essentials Plus", "GDPR", "NIS2"],
    caseStudy: {
      result: "Reduced privileged account count by 40% and achieved full PAM coverage across a 15,000-user estate within 9 months.",
      org: "FTSE 250 Retailer",
    },
  },
  "financial-services": {
    title: "Financial Services",
    tagline: "Meeting the toughest regulatory bar in identity security",
    heroDesc:
      "Financial services organisations face the highest scrutiny on identity controls. From FCA expectations to DORA and PCI DSS, the regulatory burden is real — and getting heavier. We know this sector inside out.",
    challenges: [
      { title: "Regulatory scrutiny", desc: "FCA, PRA and international regulators increasingly focus on privileged access, access reviews and identity governance as core control requirements." },
      { title: "Third-party access", desc: "Vendors, contractors and outsourced teams require secure, auditable access that doesn't extend trust beyond what's needed." },
      { title: "DORA readiness", desc: "The Digital Operational Resilience Act requires documented, tested identity controls as part of broader ICT risk management." },
      { title: "Insider threat", desc: "Financial services face significant insider risk. Access reviews, SoD controls and privileged session monitoring are not optional." },
    ],
    compliance: ["FCA / PRA", "DORA", "PCI DSS", "ISO 27001", "SOC 2"],
    caseStudy: {
      result: "Delivered a DORA-aligned IAM controls framework for a tier-2 bank in 12 weeks, with full audit trail and board reporting.",
      org: "UK Tier-2 Bank",
    },
  },
  "public-sector": {
    title: "Public Sector",
    tagline: "Securing public services — and citizen data",
    heroDesc:
      "Public sector organisations handle sensitive citizen data with limited budgets and aging infrastructure. We help government departments, local authorities and NHS organisations build credible identity security within real-world constraints.",
    challenges: [
      { title: "Legacy infrastructure", desc: "Many public sector organisations carry decades of technical debt. IAM must work alongside legacy systems, not assume greenfield." },
      { title: "Budget constraints", desc: "Doing more with less is a constant reality. We prioritise quick wins and maximise value from existing tooling before recommending new spend." },
      { title: "Workforce complexity", desc: "Contractors, agency staff, cross-organisation working and frequent role changes make identity lifecycle management genuinely complex." },
      { title: "NCSC alignment", desc: "Meeting Cyber Essentials, CAF and GDS standards requires documented, evidenced identity controls — not just intent." },
    ],
    compliance: ["Cyber Essentials Plus", "CAF (NCSC)", "GDS Standards", "UK GDPR", "PSN"],
    caseStudy: {
      result: "Delivered Cyber Essentials Plus readiness for a government agency in 8 weeks, addressing critical MFA gaps across 2,000 users.",
      org: "Central Government Agency",
    },
  },
  regulated: {
    title: "Regulated Industries",
    tagline: "Where compliance and security meet",
    heroDesc:
      "Regulated sectors — pharmaceuticals, energy, legal, insurance — share a common challenge: strong compliance requirements, complex data environments and reputational risk that makes a breach existential.",
    challenges: [
      { title: "Compliance-driven requirements", desc: "Whether GxP, FCA, ICO or sector-specific, regulators want evidence of controlled access — not promises." },
      { title: "Data sensitivity", desc: "Client, patient or commercially sensitive data demands strict access controls and full audit trails." },
      { title: "Third-party supply chain", desc: "Complex supplier ecosystems create extended identity perimeters that are difficult to govern with traditional tools." },
      { title: "Audit readiness", desc: "Regulators expect organisations to demonstrate access controls on demand. Preparation is not optional." },
    ],
    compliance: ["ISO 27001", "GDPR / UK GDPR", "FCA", "GxP / FDA 21 CFR Part 11", "Cyber Essentials"],
    caseStudy: {
      result: "Helped a pharmaceutical company achieve GxP-compliant privileged access controls for their manufacturing systems within a six-month timeline.",
      org: "Global Pharmaceutical Company",
    },
  },
};
