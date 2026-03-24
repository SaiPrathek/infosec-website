// Email notification utility
// Demo mode: when SMTP env vars are empty, logs to console

const DEMO_MODE = !process.env.SMTP_HOST || !process.env.SMTP_USER;

let transporter = null;

async function getTransporter() {
  if (transporter) return transporter;
  const nodemailer = await import("nodemailer");
  transporter = nodemailer.default.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  return transporter;
}

function getRegionalEmail(region) {
  const map = {
    uk: process.env.NOTIFICATION_EMAIL_UK,
    india: process.env.NOTIFICATION_EMAIL_INDIA,
    germany: process.env.NOTIFICATION_EMAIL_GERMANY,
  };
  return map[region?.toLowerCase()] || process.env.NOTIFICATION_EMAIL_DEFAULT || process.env.SMTP_USER;
}

export async function sendNotification({ to, subject, html }) {
  if (DEMO_MODE) {
    console.log("\n[Email Demo] ─────────────────────────────");
    console.log(`  To: ${to}`);
    console.log(`  Subject: ${subject}`);
    console.log(`  Body preview: ${html.replace(/<[^>]+>/g, "").slice(0, 200)}...`);
    console.log("──────────────────────────────────────────\n");
    return { demo: true };
  }

  const transport = await getTransporter();
  return transport.sendMail({
    from: `"Infosec K2K Platform" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
  });
}

export async function notifyAssessmentComplete({ contact, scores, assessmentType }) {
  const to = getRegionalEmail() || "team@infoseck2k.com";
  // Support both old field names (overall/domains) and new (overallScore/themeScores)
  const overallScore = scores.overallScore ?? scores.overall ?? 0;
  const band = scores.band || {};
  const gaps = scores.gaps || [];
  const themeScores = scores.themeScores || {};

  const typeLabel = assessmentType
    ? assessmentType.toUpperCase()
    : "IAM";

  const domainRows = Object.entries(themeScores)
    .map(([id, score]) => `<tr><td style="padding:4px 12px;border:1px solid #e2e8f0">${id}</td><td style="padding:4px 12px;border:1px solid #e2e8f0;text-align:center">${score}%</td></tr>`)
    .join("");

  const gapList = gaps.map((g) => `<li>${g.title || g.name} (${g.score}%)</li>`).join("");

  return sendNotification({
    to,
    subject: `New ${typeLabel} Assessment: ${contact.name} at ${contact.company} — ${band.label || "Unknown"} (${overallScore}%)`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px">
        <h2 style="color:#00a46e">New ${typeLabel} Assessment Completed</h2>
        <table style="margin-bottom:16px">
          <tr><td><strong>Name:</strong></td><td>${contact.name}</td></tr>
          <tr><td><strong>Company:</strong></td><td>${contact.company}</td></tr>
          <tr><td><strong>Email:</strong></td><td><a href="mailto:${contact.email}">${contact.email}</a></td></tr>
          <tr><td><strong>Role:</strong></td><td>${contact.role}</td></tr>
        </table>
        <h3>Score: ${overallScore}% — ${band.label || "Unknown"}</h3>
        ${domainRows ? `
        <table style="border-collapse:collapse;margin-bottom:16px">
          <tr style="background:#f1f5f9"><th style="padding:6px 12px;border:1px solid #e2e8f0">Domain</th><th style="padding:6px 12px;border:1px solid #e2e8f0">Score</th></tr>
          ${domainRows}
        </table>` : ""}
        ${gapList ? `<h3>Top Gaps</h3><ul>${gapList}</ul>` : ""}
        ${band.recommendation ? `<p style="margin-top:16px"><strong>Recommended service:</strong> ${band.recommendation}</p>` : ""}
        <hr style="margin:24px 0"/>
        <p style="color:#64748b;font-size:12px">Sent from Infosec K2K Platform</p>
      </div>
    `,
  });
}

export async function notifyContactForm({ name, company, email, role, service, message }) {
  const to = getRegionalEmail() || "team@infoseck2k.com";

  return sendNotification({
    to,
    subject: `New Contact: ${name} at ${company} — ${service || "General enquiry"}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px">
        <h2 style="color:#00a46e">New Contact Form Submission</h2>
        <table style="margin-bottom:16px">
          <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td><strong>Company:</strong></td><td>${company}</td></tr>
          <tr><td><strong>Email:</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td><strong>Role:</strong></td><td>${role}</td></tr>
          <tr><td><strong>Service:</strong></td><td>${service || "Not specified"}</td></tr>
        </table>
        ${message ? `<h3>Message</h3><p>${message}</p>` : ""}
        <hr style="margin:24px 0"/>
        <p style="color:#64748b;font-size:12px">Sent from Infosec K2K Platform</p>
      </div>
    `,
  });
}

export async function notifyBookingRequest({ contact, service, expertise, region, availability, message }) {
  const to = getRegionalEmail(region) || "team@infoseck2k.com";

  return sendNotification({
    to,
    subject: `New Booking: ${contact.name} at ${contact.company} — ${expertise} (${region || "No preference"})`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px">
        <h2 style="color:#00a46e">New Expert Booking Request</h2>
        <table style="margin-bottom:16px">
          <tr><td><strong>Name:</strong></td><td>${contact.name}</td></tr>
          <tr><td><strong>Company:</strong></td><td>${contact.company}</td></tr>
          <tr><td><strong>Email:</strong></td><td><a href="mailto:${contact.email}">${contact.email}</a></td></tr>
          <tr><td><strong>Role:</strong></td><td>${contact.role}</td></tr>
        </table>
        <h3>Booking Details</h3>
        <table style="margin-bottom:16px">
          ${service ? `<tr><td><strong>Service Line:</strong></td><td>${service}</td></tr>` : ""}
          <tr><td><strong>Expertise:</strong></td><td>${expertise}</td></tr>
          <tr><td><strong>Region:</strong></td><td>${region || "No preference"}</td></tr>
          <tr><td><strong>Availability:</strong></td><td>${availability || "Flexible"}</td></tr>
        </table>
        ${message ? `<h3>Additional Notes</h3><p>${message}</p>` : ""}
        <hr style="margin:24px 0"/>
        <p style="color:#64748b;font-size:12px">Sent from Infosec K2K Platform</p>
      </div>
    `,
  });
}
