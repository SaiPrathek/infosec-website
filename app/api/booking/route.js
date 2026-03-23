import { createLead, addNote } from "@/lib/zoho";
import { notifyBookingRequest } from "@/lib/email";

export async function POST(request) {
  try {
    const body = await request.json();
    const { contact, expertise, region, availability, message } = body;

    if (!contact?.email || !contact?.name) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const description = [
      `Expert Booking Request`,
      `Expertise Needed: ${expertise || "Not specified"}`,
      `Preferred Region: ${region || "No preference"}`,
      `Availability: ${availability || "Flexible"}`,
      message ? `\nNotes:\n${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const lead = await createLead({
      name: contact.name,
      company: contact.company,
      email: contact.email,
      role: contact.role,
      source: "Website - Expert Booking",
      description,
    });

    if (lead.id && !lead.demo) {
      await addNote(lead.id, {
        title: `Booking: ${expertise} — ${region || "No region preference"}`,
        content: description,
      });
    }

    await notifyBookingRequest({ contact, expertise, region, availability, message });

    return Response.json({ success: true });
  } catch (error) {
    console.error("[API /booking]", error);
    return Response.json({ error: "Booking failed. Please try again." }, { status: 500 });
  }
}
