import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations";

/**
 * POST /api/contact
 * Validates the payload with the shared Zod schema (defense in depth —
 * the client already validates with the same schema via RHF), then
 * emails the submission via Resend.
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL_TO) {
      // Not configured yet — fail loudly in the server log instead of
      // silently pretending the message was sent.
      console.error(
        "Contact API: RESEND_API_KEY or CONTACT_EMAIL_TO is missing. " +
          "Add both to your .env.local (and to your Vercel project's Environment Variables) — see .env.example."
      );
      return NextResponse.json(
        { success: false, message: "Contact form isn't configured yet. Please email me directly instead." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      // Resend's shared test domain — works immediately without verifying
      // your own domain. Swap in a verified domain address later if you
      // want the "from" address to match your own domain.
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, message: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
