import { createLead } from "@/lib/zoho";
import { notifyContactForm } from "@/lib/email";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, company, email, role, service, message } = body;

    if (!email || !name) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const description = [
      `Service Interest: ${service || "Not specified"}`,
      message ? `\nMessage:\n${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    await createLead({
      name,
      company,
      email,
      role,
      source: "Website - Contact Form",
      description,
    });

    await notifyContactForm({ name, company, email, role, service, message });

    return Response.json({ success: true });
  } catch (error) {
    console.error("[API /contact]", error);
    return Response.json({ error: "Submission failed. Please try again." }, { status: 500 });
  }
}
