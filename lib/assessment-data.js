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
  },
];

export function calculateScores(answers) {
  const themeScores = {};
  let totalRaw = 0;
  let totalMax = 0;

  assessmentThemes.forEach((theme) => {
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
  const gaps = assessmentThemes
    .map((t) => ({ id: t.id, title: t.title, score: themeScores[t.id] ?? 0 }))
    .sort((a, b) => a.score - b.score)
    .slice(0, 3);

  return { themeScores, overallScore, band, gaps };
}
