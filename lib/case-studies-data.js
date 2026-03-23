import { Shield, Building2, Landmark, Factory } from "lucide-react";

export const caseStudies = [
  {
    id: "global-bank-iam",
    sector: "Financial Services",
    icon: Landmark,
    tag: "IAM Assessment & Roadmap",
    service: "assessment",
    title: "Global bank reduces identity risk by 60% in six months",
    summary:
      "A tier-one European bank faced mounting compliance pressure after an internal audit flagged critical gaps in privileged access governance. K2K delivered a full IAM maturity assessment, prioritised roadmap and implementation support across 14 business units.",
    challenge:
      "An internal audit revealed that the bank had no consistent model for managing privileged access across its 14 business units. Entitlements had accumulated over a decade of mergers, and the security team had no reliable picture of who had access to what. Regulators were asking questions the bank couldn't answer.",
    approach: [
      "Conducted a five-domain IAM maturity assessment across all business units in parallel using structured workshops",
      "Scored privileged access, identity governance, authentication and endpoint controls against K2K's maturity framework",
      "Produced a risk-rated gap register with 47 findings, of which 9 were critical",
      "Built a 12-month roadmap with quick wins in the first 30 days, anchored to audit remediation requirements",
    ],
    outcomes: [
      "IAM maturity score improved from 28 to 71 in six months",
      "Privileged access reduced by 60% through PAM rollout",
      "Passed follow-up audit with zero critical findings",
    ],
    quote: {
      text: "K2K gave us the evidence we needed to go to the board and secure investment. Within six months we had gone from 'we don't know' to a fully documented and tested PAM programme.",
      author: "Group CISO",
      role: "Tier-one European Bank",
    },
    duration: "6 months",
    team: "UK",
  },
  {
    id: "nhs-trust-mfa",
    sector: "Public Sector",
    icon: Building2,
    tag: "Implementation",
    service: "implementation",
    title: "NHS trust deploys MFA across 8,000 clinical staff with zero downtime",
    summary:
      "A large NHS trust needed to meet DSPT requirements for multi-factor authentication without disrupting 24/7 clinical operations. K2K designed a phased rollout that respected shift patterns and legacy clinical systems.",
    challenge:
      "The trust was operating a sprawling mix of clinical applications, many of which had never been tested with modern authentication controls. A failed MFA rollout at a neighbouring trust had caused a 48-hour clinical system outage, making the board extremely cautious. The DSPT submission deadline was six months away.",
    approach: [
      "Mapped all 8,000 user accounts against 140+ clinical applications to identify legacy authentication dependencies",
      "Designed a phased rollout plan that prioritised low-risk administrative staff before clinical users",
      "Built a parallel legacy pathway for critical clinical systems that could not be updated during the rollout window",
      "Ran a dedicated support desk for the first two weeks of clinical staff onboarding to handle device issues in real time",
    ],
    outcomes: [
      "100% MFA coverage achieved across all clinical and admin staff",
      "Zero service disruptions during rollout",
      "DSPT Toolkit submission passed with 'Standards Met' rating",
    ],
    quote: {
      text: "We had failed at this twice before with other suppliers. K2K's approach was completely different — they understood clinical workflows and designed around them rather than forcing staff to change how they work.",
      author: "Head of Digital Transformation",
      role: "NHS Trust",
    },
    duration: "4 months",
    team: "UK",
  },
  {
    id: "manufacturing-ad-cleanup",
    sector: "Regulated Industry",
    icon: Factory,
    tag: "Managed Services",
    service: "managed",
    title: "Manufacturing group removes 15 years of Active Directory sprawl",
    summary:
      "Following a series of acquisitions, a pan-European manufacturer was running six disconnected Active Directory forests with over 40,000 stale accounts. K2K's managed identity team led a full consolidation and hygiene programme.",
    challenge:
      "Each acquisition had brought its own AD estate, and nobody had ever rationalised them. The result was six disconnected forests, inconsistent group policy, and over 40,000 accounts that no longer corresponded to active employees. A supply chain partner had recently suffered a ransomware attack through a stale account — the manufacturer's board wanted this fixed before the same happened to them.",
    approach: [
      "Audited all six AD forests to produce a complete inventory of accounts, groups, policies and trust relationships",
      "Classified all accounts as active, dormant or stale using HR data correlation and last-logon analysis",
      "Designed a consolidation target with a single managed forest, migrating forests in order of risk priority",
      "Established an ongoing managed service to continuously detect and remediate new stale accounts as they emerge",
    ],
    outcomes: [
      "Six AD forests consolidated into a single managed estate",
      "42,000 stale accounts removed or decommissioned",
      "Ongoing managed service provides continuous governance",
    ],
    quote: {
      text: "The scale of what K2K found was shocking — but more importantly they had a plan for it. The managed service means we will never accumulate this kind of debt again.",
      author: "Group IT Director",
      role: "Pan-European Manufacturing Group",
    },
    duration: "9 months",
    team: "Germany",
  },
  {
    id: "fintech-iam-startup",
    sector: "Financial Services",
    icon: Shield,
    tag: "Roadmap & Strategy",
    service: "roadmap",
    title: "Series B fintech builds IAM foundations ahead of FCA authorisation",
    summary:
      "A fast-growing payments fintech needed to demonstrate mature identity controls to the FCA as part of their authorisation process. K2K produced a gap analysis, target operating model and a 12-month roadmap aligned to DORA requirements.",
    challenge:
      "The company had 180 employees and a best-effort approach to access management built on a mix of Google Workspace, Okta and manual spreadsheets. FCA authorisation required them to demonstrate controls that simply did not exist yet. They had less than four months before the submission window opened and no internal IAM expertise.",
    approach: [
      "Ran a compressed three-week assessment to establish the current state baseline against DORA and FCA expectations",
      "Identified 22 control gaps, of which 8 needed to be closed before the authorisation submission",
      "Designed a target operating model with clear ownership for each control, aligned to the company's growth stage",
      "Built a 12-month roadmap with the first two phases deliverable before the FCA deadline",
    ],
    outcomes: [
      "IAM target operating model accepted by FCA reviewers",
      "12-month implementation roadmap delivered in three weeks",
      "First two roadmap phases completed before authorisation deadline",
    ],
    quote: {
      text: "We needed someone who understood both the regulatory language and the practical reality of a 180-person startup. K2K bridged that gap in a way nobody else had managed.",
      author: "Chief Operating Officer",
      role: "Series B Payments Fintech",
    },
    duration: "3 months",
    team: "UK",
  },
];

export const sectorColors = {
  "Financial Services": { bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.25)", text: "#3b82f6" },
  "Public Sector": { bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.25)", text: "#10b981" },
  "Regulated Industry": { bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.25)", text: "#f59e0b" },
  "Enterprise": { bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.25)", text: "#8b5cf6" },
};
