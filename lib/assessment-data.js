export const assessmentThemes = [
  {
    id: "identity-governance",
    title: "Identity Governance",
    description: "How well does your organisation manage the full lifecycle of user identities?",
    icon: "Users",
    questions: [
      {
        id: "ig-1",
        type: "radio",
        text: "How do you manage joiners, movers, and leavers?",
        options: [
          { label: "Manual, ad-hoc processes with no formal procedure", score: 1 },
          { label: "Documented process but inconsistently followed", score: 2 },
          { label: "Consistent process with some automation", score: 3 },
          { label: "Fully automated with audit trail and exception alerts", score: 4 },
        ],
      },
      {
        id: "ig-2",
        type: "radio",
        text: "How frequently are user access rights reviewed?",
        options: [
          { label: "Never or only when an issue arises", score: 1 },
          { label: "Annually, informally", score: 2 },
          { label: "Quarterly with documented sign-off", score: 3 },
          { label: "Continuously with automated certification campaigns", score: 4 },
        ],
      },
      {
        id: "ig-3",
        type: "checkbox",
        text: "Which of the following does your organisation have in place? (Select all that apply)",
        options: [
          { label: "Role-based access control (RBAC)", score: 1 },
          { label: "Segregation of duties (SoD) controls", score: 1 },
          { label: "Orphaned account detection", score: 1 },
          { label: "Formal access request and approval workflow", score: 1 },
        ],
      },
      {
        id: "ig-4",
        type: "scale",
        text: "How confident are you that all current employees only have access they need to do their job?",
        min: 1,
        max: 5,
        minLabel: "Not at all confident",
        maxLabel: "Fully confident",
      },
      {
        id: "ig-5",
        type: "radio",
        text: "How is identity governance data reported to leadership?",
        options: [
          { label: "It isn't reported", score: 1 },
          { label: "Ad-hoc when requested", score: 2 },
          { label: "Regular reports with basic metrics", score: 3 },
          { label: "Real-time dashboards with risk scoring", score: 4 },
        ],
      },
    ],
  },
  {
    id: "privileged-access",
    title: "Privileged Access",
    description: "How does your organisation control and monitor its most powerful accounts?",
    icon: "ShieldAlert",
    questions: [
      {
        id: "pa-1",
        type: "radio",
        text: "Do you use a Privileged Access Management (PAM) solution?",
        options: [
          { label: "No, privileged accounts are managed like standard accounts", score: 1 },
          { label: "Partial controls — some vaulting but no session management", score: 2 },
          { label: "PAM tool in place with vaulting and session recording", score: 3 },
          { label: "Full PAM with just-in-time access and zero standing privilege", score: 4 },
        ],
      },
      {
        id: "pa-2",
        type: "radio",
        text: "How are break-glass (emergency) accounts managed?",
        options: [
          { label: "Shared credentials stored informally", score: 1 },
          { label: "Documented but rarely tested", score: 2 },
          { label: "Sealed envelope or vault with access log", score: 3 },
          { label: "Automated vaulting with dual-control and real-time alert", score: 4 },
        ],
      },
      {
        id: "pa-3",
        type: "checkbox",
        text: "Which privileged account types are inventoried in your organisation? (Select all that apply)",
        options: [
          { label: "Domain administrator accounts", score: 1 },
          { label: "Service accounts", score: 1 },
          { label: "Cloud infrastructure admin accounts", score: 1 },
          { label: "Application admin accounts", score: 1 },
        ],
      },
      {
        id: "pa-4",
        type: "scale",
        text: "How confident are you that all privileged sessions are logged and reviewable?",
        min: 1,
        max: 5,
        minLabel: "Not confident",
        maxLabel: "Fully confident",
      },
      {
        id: "pa-5",
        type: "radio",
        text: "How quickly can you identify and revoke a compromised privileged account?",
        options: [
          { label: "Hours to days — manual process", score: 1 },
          { label: "Within hours with manual steps", score: 2 },
          { label: "Within 30 minutes with documented runbook", score: 3 },
          { label: "Near real-time automated response", score: 4 },
        ],
      },
    ],
  },
  {
    id: "authentication",
    title: "Authentication",
    description: "How robustly does your organisation verify who is accessing its systems?",
    icon: "KeyRound",
    questions: [
      {
        id: "auth-1",
        type: "radio",
        text: "What is your current MFA coverage across business applications?",
        options: [
          { label: "Less than 25% of applications", score: 1 },
          { label: "25–60% — mainly email and VPN", score: 2 },
          { label: "60–90% with consistent enforcement", score: 3 },
          { label: "90%+ including legacy and on-premise apps", score: 4 },
        ],
      },
      {
        id: "auth-2",
        type: "radio",
        text: "Do you use conditional access or adaptive authentication policies?",
        options: [
          { label: "No conditional access — same rules for all users", score: 1 },
          { label: "Basic location-based rules only", score: 2 },
          { label: "Risk-based policies for sensitive apps", score: 3 },
          { label: "Fully adaptive with device posture, location, and behaviour signals", score: 4 },
        ],
      },
      {
        id: "auth-3",
        type: "checkbox",
        text: "Which authentication methods are in use? (Select all that apply)",
        options: [
          { label: "FIDO2 / passkeys", score: 1 },
          { label: "Authenticator app (TOTP)", score: 1 },
          { label: "SMS one-time passcode", score: 1 },
          { label: "Federated identity / SSO", score: 1 },
        ],
      },
      {
        id: "auth-4",
        type: "scale",
        text: "How confident are you that password-only access is eliminated for critical systems?",
        min: 1,
        max: 5,
        minLabel: "Not confident",
        maxLabel: "Fully confident",
      },
    ],
  },
  {
    id: "endpoints-secrets",
    title: "Endpoints & Secrets",
    description: "How well does your organisation manage non-human identities and credentials?",
    icon: "Lock",
    questions: [
      {
        id: "es-1",
        type: "radio",
        text: "How are application secrets (API keys, passwords, certificates) managed?",
        options: [
          { label: "Hardcoded in code or stored in plain text files", score: 1 },
          { label: "Environment variables with limited access controls", score: 2 },
          { label: "Secrets manager with access logging", score: 3 },
          { label: "Automated rotation with zero static secrets policy", score: 4 },
        ],
      },
      {
        id: "es-2",
        type: "radio",
        text: "How are machine and service account identities governed?",
        options: [
          { label: "Not inventoried or governed separately", score: 1 },
          { label: "Basic inventory but no lifecycle controls", score: 2 },
          { label: "Inventory with ownership and review cadence", score: 3 },
          { label: "Automated governance with workload identity federation", score: 4 },
        ],
      },
      {
        id: "es-3",
        type: "checkbox",
        text: "Which of the following controls exist for endpoints? (Select all that apply)",
        options: [
          { label: "Device compliance checks before access", score: 1 },
          { label: "Certificate-based authentication for devices", score: 1 },
          { label: "EDR / endpoint detection and response", score: 1 },
          { label: "Automated certificate renewal", score: 1 },
        ],
      },
      {
        id: "es-4",
        type: "scale",
        text: "How confident are you that all credentials are rotated on a regular, automated schedule?",
        min: 1,
        max: 5,
        minLabel: "Not confident",
        maxLabel: "Fully confident",
      },
    ],
  },
  {
    id: "operations-assurance",
    title: "Operations & Assurance",
    description: "How mature are your identity security operations, policies and incident response?",
    icon: "BarChart3",
    questions: [
      {
        id: "oa-1",
        type: "radio",
        text: "Do you have documented identity security policies?",
        options: [
          { label: "No formal policies exist", score: 1 },
          { label: "Policies exist but are outdated or unenforced", score: 2 },
          { label: "Current policies with annual review cycle", score: 3 },
          { label: "Living policies embedded in tooling and regularly tested", score: 4 },
        ],
      },
      {
        id: "oa-2",
        type: "radio",
        text: "How do you detect and respond to identity-based threats (e.g. account compromise, lateral movement)?",
        options: [
          { label: "No specific detection capability", score: 1 },
          { label: "Reactive — respond to alerts from third parties or users", score: 2 },
          { label: "SIEM alerts with defined response playbooks", score: 3 },
          { label: "Proactive threat hunting with automated identity threat detection", score: 4 },
        ],
      },
      {
        id: "oa-3",
        type: "checkbox",
        text: "Which of the following are in place for audit and compliance? (Select all that apply)",
        options: [
          { label: "Immutable identity audit logs", score: 1 },
          { label: "Regular internal access audits", score: 2 },
          { label: "Third-party penetration testing of identity controls", score: 1 },
          { label: "Compliance mapping (ISO 27001, Cyber Essentials, etc.)", score: 1 },
        ],
      },
      {
        id: "oa-4",
        type: "scale",
        text: "How confident are you that your organisation could pass an identity security audit today?",
        min: 1,
        max: 5,
        minLabel: "Not confident",
        maxLabel: "Fully confident",
      },
    ],
  },
];

export const maturityBands = [
  {
    min: 0,
    max: 30,
    label: "Initial",
    color: "#ef4444",
    description:
      "Identity security is largely informal and reactive. Significant gaps exist across most domains that represent material risk to the organisation.",
    recommendation: "assessment",
    recommendationLabel: "IAM Assessment & Roadmap",
    proposalSteps: [
      { label: "IAM Assessment", duration: "2–4 weeks", current: true, serviceSlug: "assessment" },
      { label: "Roadmap & Strategy", duration: "4–6 weeks", current: false, serviceSlug: "roadmap" },
      { label: "Implementation", duration: "Project-based", current: false, serviceSlug: "implementation" },
    ],
  },
  {
    min: 31,
    max: 55,
    label: "Developing",
    color: "#f97316",
    description:
      "Some controls are in place but coverage and consistency are incomplete. There are clear priority areas where targeted improvements would reduce risk quickly.",
    recommendation: "roadmap",
    recommendationLabel: "Roadmap & Strategy",
    proposalSteps: [
      { label: "IAM Assessment", duration: "2–4 weeks", current: true, serviceSlug: "assessment" },
      { label: "Roadmap & Strategy", duration: "4–6 weeks", current: false, serviceSlug: "roadmap" },
      { label: "Targeted Implementation", duration: "Project-based", current: false, serviceSlug: "implementation" },
    ],
  },
  {
    min: 56,
    max: 75,
    label: "Defined",
    color: "#eab308",
    description:
      "A solid foundation exists with documented processes and tooling. The focus should be on optimising automation, reducing manual effort and closing residual gaps.",
    recommendation: "implementation",
    recommendationLabel: "Optimisation & Implementation",
    proposalSteps: [
      { label: "IAM Assessment", duration: "2–4 weeks", current: true, serviceSlug: "assessment" },
      { label: "Optimisation & Implementation", duration: "Project-based", current: false, serviceSlug: "implementation" },
      { label: "Managed Services", duration: "Ongoing", current: false, serviceSlug: "managed" },
    ],
  },
  {
    min: 76,
    max: 100,
    label: "Optimising",
    color: "#22c55e",
    description:
      "Mature identity security posture with strong controls and governance. The priority is continuous improvement, benchmarking and ongoing assurance.",
    recommendation: "managed",
    recommendationLabel: "Managed Identity Services",
    proposalSteps: [
      { label: "IAM Assessment", duration: "2–4 weeks", current: true, serviceSlug: "assessment" },
      { label: "Managed Identity Services", duration: "Ongoing subscription", current: false, serviceSlug: "managed" },
    ],
  },
];

export function calculateScores(answers, themes) {
  const resolvedThemes = themes || assessmentThemes;
  const themeScores = {};
  let totalRaw = 0;
  let totalMax = 0;

  resolvedThemes.forEach((theme) => {
    let themeRaw = 0;
    let themeMax = 0;

    theme.questions.forEach((q) => {
      const answer = answers[q.id];
      if (answer === undefined || answer === null) return;

      if (q.type === "radio") {
        themeRaw += answer;
        themeMax += 4;
      } else if (q.type === "checkbox") {
        const selected = Array.isArray(answer) ? answer.length : 0;
        themeRaw += selected;
        themeMax += q.options.length;
      } else if (q.type === "scale") {
        themeRaw += answer;
        themeMax += 5;
      }
    });

    const pct = themeMax > 0 ? Math.round((themeRaw / themeMax) * 100) : 0;
    themeScores[theme.id] = pct;
    totalRaw += themeRaw;
    totalMax += themeMax;
  });

  const overallScore = totalMax > 0 ? Math.round((totalRaw / totalMax) * 100) : 0;
  const band = maturityBands.find((b) => overallScore >= b.min && overallScore <= b.max) || maturityBands[0];

  // Identify top 3 gaps (lowest scoring themes)
  const gaps = resolvedThemes
    .map((t) => ({ id: t.id, title: t.title, score: themeScores[t.id] ?? 0 }))
    .sort((a, b) => a.score - b.score)
    .slice(0, 3);

  return { themeScores, overallScore, band, gaps };
}

// ── Assessment type branching ─────────────────────────────────────────────
export const assessmentTypes = [
  {
    id: "iam",
    title: "IAM Maturity Assessment",
    subtitle: "Identity & Access Management",
    desc: "Full identity and access management posture review across governance, privileged access, authentication, endpoints and operations.",
    icon: "Users",
    estimatedTime: "10 min",
    questionCount: 22,
    badge: "Most Popular",
    themes: null, // resolved at runtime to assessmentThemes
  },
  {
    id: "swift",
    title: "SWIFT CSP Readiness",
    subtitle: "SWIFT Customer Security Programme",
    desc: "Structured readiness check against SWIFT CSP mandatory and advisory controls — helps you prepare for annual attestation.",
    icon: "Building2",
    estimatedTime: "8 min",
    questionCount: 18,
    badge: "Regulated",
    themes: [
      {
        id: "swift-governance",
        title: "Governance & Policy",
        questions: [
          { id: "sg1", text: "Does your organisation have a formally approved SWIFT security policy?", type: "radio", options: ["Yes, approved and reviewed annually", "Yes, but not recently reviewed", "In draft", "No"] },
          { id: "sg2", text: "Is there a named individual responsible for SWIFT CSP compliance?", type: "radio", options: ["Yes, dedicated role", "Yes, part of broader role", "Shared informally", "No clear ownership"] },
          { id: "sg3", text: "How are SWIFT-related risks tracked?", type: "radio", options: ["Formal risk register reviewed quarterly", "Tracked but not formally", "Ad hoc only", "Not tracked"] },
          { id: "sg4", text: "Are third parties with SWIFT access subject to security assessments?", type: "radio", options: ["Yes, annually", "Yes, at onboarding only", "Informal checks", "No assessments"] },
        ],
      },
      {
        id: "swift-access",
        title: "Access Control",
        questions: [
          { id: "sa1", text: "How is privileged access to SWIFT systems controlled?", type: "radio", options: ["PAM solution with full session recording", "PAM solution, limited recording", "Shared admin accounts with manual logging", "No formal controls"] },
          { id: "sa2", text: "Is multi-factor authentication enforced for all SWIFT operator accounts?", type: "radio", options: ["Yes, all operators", "Yes, most operators", "Optional", "No MFA"] },
          { id: "sa3", text: "How frequently are SWIFT operator access rights reviewed?", type: "radio", options: ["Quarterly or more often", "Annually", "On departure only", "Not reviewed"] },
          { id: "sa4", text: "Are dormant SWIFT operator accounts automatically detected and disabled?", type: "radio", options: ["Automated detection and disablement", "Manual review process", "Occasional checks", "No process"] },
        ],
      },
      {
        id: "swift-detection",
        title: "Detection & Monitoring",
        questions: [
          { id: "sd1", text: "Are SWIFT transaction logs centrally collected and monitored?", type: "radio", options: ["SIEM with alerting", "Centrally collected, manual review", "Stored but rarely reviewed", "Not centralised"] },
          { id: "sd2", text: "Is anomaly detection in place for SWIFT message flows?", type: "radio", options: ["Automated behavioural detection", "Rule-based alerts", "Manual sampling", "No detection"] },
          { id: "sd3", text: "How quickly can your team detect and respond to a suspected SWIFT compromise?", type: "radio", options: ["Defined playbook, tested <1hr", "Defined playbook, untested", "Ad hoc response", "No defined process"] },
          { id: "sd4", text: "Are SWIFT security events reviewed against SWIFT ISAC threat intelligence?", type: "radio", options: ["Yes, regularly", "Occasionally", "Rarely", "No"] },
        ],
      },
      {
        id: "swift-resilience",
        title: "Resilience & Recovery",
        questions: [
          { id: "sr1", text: "Is there a tested business continuity plan for SWIFT service disruption?", type: "radio", options: ["Tested annually", "Documented but untested", "In development", "No BCP"] },
          { id: "sr2", text: "Are SWIFT infrastructure components covered in vulnerability management?", type: "radio", options: ["Yes, patched within policy SLA", "Yes, but patching lags", "Occasional scans only", "Not covered"] },
          { id: "sr3", text: "How is the security of your SWIFT messaging interface (Alliance/SAG/AMH) validated?", type: "radio", options: ["Annual penetration test", "Configuration review only", "Vendor assurance only", "Not validated"] },
          { id: "sr4", text: "Are SWIFT environment changes managed through a formal change control process?", type: "radio", options: ["Full CAB process", "Informal approval", "Operator discretion", "No change process"] },
        ],
      },
      {
        id: "swift-supply-chain",
        title: "Supply Chain & Third Parties",
        questions: [
          { id: "ss1", text: "Are SWIFT service bureaux or third-party operators subject to annual security assessments?", type: "radio", options: ["Yes, formal assessment", "Yes, questionnaire only", "At onboarding only", "No assessments"] },
          { id: "ss2", text: "Do third parties connecting to your SWIFT environment provide attestation of their CSP compliance?", type: "radio", options: ["Yes, CSP attestation obtained", "Yes, partial evidence", "Requested but not always received", "No"] },
        ],
      },
    ],
  },
  {
    id: "compliance",
    title: "Compliance Maturity Review",
    subtitle: "ISO 27001 / DORA / FCA / Cyber Essentials",
    desc: "Assess your current control coverage and maturity against the most common UK and EU security frameworks — identify gaps before your auditors do.",
    icon: "CheckCircle",
    estimatedTime: "12 min",
    questionCount: 20,
    badge: null,
    themes: [
      {
        id: "comp-governance",
        title: "Governance & Oversight",
        questions: [
          { id: "cg1", text: "Is information security governance formally embedded in your organisational structure?", type: "radio", options: ["Board-level accountability with CISO", "Security committee in place", "Informal senior oversight", "No formal governance"] },
          { id: "cg2", text: "How mature is your information security risk management process?", type: "radio", options: ["Formal risk register, quarterly review", "Risk register exists, infrequent review", "Ad hoc risk identification", "No formal risk management"] },
          { id: "cg3", text: "Are security policies reviewed and approved annually?", type: "radio", options: ["Yes, full policy suite reviewed annually", "Some policies reviewed", "Policies exist but not reviewed", "No formal policies"] },
          { id: "cg4", text: "How is security awareness and training delivered?", type: "radio", options: ["Mandatory training, phishing simulations", "Annual mandatory training", "Voluntary training only", "No formal training"] },
        ],
      },
      {
        id: "comp-access",
        title: "Access & Identity Controls",
        questions: [
          { id: "ca1", text: "Is least-privilege access enforced across your estate?", type: "radio", options: ["Enforced and audited quarterly", "Enforced but infrequently audited", "Partially enforced", "Not enforced"] },
          { id: "ca2", text: "Are privileged accounts managed through a PAM solution?", type: "radio", options: ["Full PAM with session recording", "PAM deployed, limited controls", "Privileged access tracked manually", "No PAM controls"] },
          { id: "ca3", text: "Is MFA enforced for remote access and critical systems?", type: "radio", options: ["MFA everywhere", "MFA for remote access only", "MFA for some systems", "No MFA"] },
          { id: "ca4", text: "How are joiners, movers and leavers (JML) managed?", type: "radio", options: ["Automated JML with HR integration", "Defined process, manual execution", "Ad hoc process", "No formal JML process"] },
        ],
      },
      {
        id: "comp-resilience",
        title: "Resilience & Business Continuity",
        questions: [
          { id: "cr1", text: "Do you have a tested business continuity and disaster recovery plan?", type: "radio", options: ["Tested annually with documented results", "Documented but rarely tested", "Plan exists, untested", "No formal BCP/DR"] },
          { id: "cr2", text: "How are security incidents detected and responded to?", type: "radio", options: ["24/7 SOC with defined playbooks", "SOC or SIEM with alert response", "Manual monitoring and ad hoc response", "No formal incident response"] },
          { id: "cr3", text: "How frequently are critical systems backed up and recovery tested?", type: "radio", options: ["Daily backup, quarterly recovery test", "Regular backup, annual test", "Regular backup, untested", "Infrequent or untested backup"] },
          { id: "cr4", text: "Is vulnerability management conducted on a defined cycle?", type: "radio", options: ["Monthly scans with SLA-driven patching", "Quarterly scans", "Ad hoc scanning", "No vulnerability management"] },
        ],
      },
      {
        id: "comp-supply-chain",
        title: "Supply Chain & Third Parties",
        questions: [
          { id: "cs1", text: "Are third-party suppliers assessed for security before onboarding?", type: "radio", options: ["Formal due diligence process", "Questionnaire-based assessment", "Informal checks", "No assessment"] },
          { id: "cs2", text: "Are security requirements embedded in supplier contracts?", type: "radio", options: ["Comprehensive security schedules", "Basic security clauses", "GDPR clauses only", "No security requirements"] },
          { id: "cs3", text: "How are critical supplier security postures monitored ongoing?", type: "radio", options: ["Annual reassessment + continuous monitoring", "Annual reassessment only", "On material change only", "Not monitored"] },
          { id: "cs4", text: "Do you have visibility of fourth-party (sub-processor) risks?", type: "radio", options: ["Mapped and assessed", "Partially mapped", "Aware but not assessed", "No visibility"] },
        ],
      },
      {
        id: "comp-data",
        title: "Data Protection & Privacy",
        questions: [
          { id: "cd1", text: "Is a data asset register maintained and kept current?", type: "radio", options: ["Maintained and reviewed quarterly", "Exists but infrequently updated", "Partial register", "No register"] },
          { id: "cd2", text: "How is data classification enforced?", type: "radio", options: ["Automated classification with DLP", "Manual classification policy enforced", "Policy exists, inconsistently applied", "No classification"] },
          { id: "cd3", text: "Is your organisation's data breach response process tested?", type: "radio", options: ["Annual tabletop exercise", "Documented but untested", "Ad hoc process", "No defined process"] },
          { id: "cd4", text: "Are privacy impact assessments (DPIAs) conducted for new processing activities?", type: "radio", options: ["Yes, routinely for all qualifying activities", "Yes, for high-risk activities only", "Occasionally", "No DPIA process"] },
        ],
      },
    ],
  },
  {
    id: "offensive",
    title: "Vulnerability Exposure Check",
    subtitle: "Attack Surface & Testing Readiness",
    desc: "A quick-fire assessment of your external attack surface, internal testing maturity and readiness to detect and respond to threats.",
    icon: "Shield",
    estimatedTime: "6 min",
    questionCount: 16,
    badge: "Quick",
    themes: [
      {
        id: "off-surface",
        title: "External Attack Surface",
        questions: [
          { id: "oa1", text: "Do you maintain an inventory of all externally exposed systems and services?", type: "radio", options: ["Full inventory, reviewed monthly", "Inventory exists, quarterly review", "Partial visibility", "No formal inventory"] },
          { id: "oa2", text: "How frequently are external-facing assets scanned for vulnerabilities?", type: "radio", options: ["Continuous or weekly scanning", "Monthly scanning", "Quarterly scanning", "Ad hoc or never"] },
          { id: "oa3", text: "Are externally exposed services protected by web application firewalls or equivalent?", type: "radio", options: ["WAF on all external services", "WAF on critical services", "Partial coverage", "No WAF"] },
          { id: "oa4", text: "How is DNS and domain security managed (DMARC, DNSSEC, certificate monitoring)?", type: "radio", options: ["Full suite configured and monitored", "DMARC + certificate monitoring", "Basic DNS controls only", "Not actively managed"] },
        ],
      },
      {
        id: "off-testing",
        title: "Penetration Testing Maturity",
        questions: [
          { id: "ot1", text: "How often do you conduct external penetration tests?", type: "radio", options: ["Annually or more often", "Every 2 years", "Rarely or on request", "Never"] },
          { id: "ot2", text: "Do penetration tests include identity and Active Directory attack paths?", type: "radio", options: ["Yes, always in scope", "Occasionally in scope", "Rarely included", "Never included"] },
          { id: "ot3", text: "What happens to penetration test findings after delivery?", type: "radio", options: ["Tracked to closure with retest", "Remediation plan created", "Some findings addressed", "Reports filed, limited action"] },
          { id: "ot4", text: "Have you conducted a red team or assumed breach exercise in the last 2 years?", type: "radio", options: ["Yes, within last 12 months", "Yes, within last 2 years", "No, but planned", "No"] },
        ],
      },
      {
        id: "off-vulnmgmt",
        title: "Vulnerability Management",
        questions: [
          { id: "ov1", text: "Do you operate a formal vulnerability management programme?", type: "radio", options: ["Formal programme with SLA-driven patching", "Regular scanning with manual tracking", "Ad hoc scanning", "No programme"] },
          { id: "ov2", text: "How quickly are critical vulnerabilities patched across your estate?", type: "radio", options: ["Within 24-48 hours", "Within 7 days", "Within 30 days", "No defined SLA"] },
          { id: "ov3", text: "Are vulnerability scan results correlated with asset criticality?", type: "radio", options: ["Yes, risk-prioritised remediation", "Partially", "No correlation", "No scanning"] },
          { id: "ov4", text: "Is there executive visibility of the vulnerability risk position?", type: "radio", options: ["Monthly board/exec reporting", "Quarterly reporting", "Ad hoc reporting", "No executive visibility"] },
        ],
      },
      {
        id: "off-detection",
        title: "Detection & Response",
        questions: [
          { id: "od1", text: "How is your environment monitored for intrusions and anomalous behaviour?", type: "radio", options: ["24/7 SOC with EDR/SIEM", "SIEM with business-hours monitoring", "Basic alerting", "No monitoring"] },
          { id: "od2", text: "Do you have a tested incident response plan?", type: "radio", options: ["Tested annually", "Documented but untested", "Ad hoc process", "No plan"] },
          { id: "od3", text: "How mature is your threat intelligence capability?", type: "radio", options: ["Subscribed feeds integrated into SOC", "Commercial feed, manual consumption", "Open source only", "No threat intelligence"] },
          { id: "od4", text: "Can you detect lateral movement within your network?", type: "radio", options: ["Yes, with EDR and network detection", "Partially, some visibility", "Limited visibility", "No visibility"] },
        ],
      },
    ],
  },
];
