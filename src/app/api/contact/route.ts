import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req: Request) {
  try {
    const { name, email, message, recaptchaToken } = await req.json();

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      typeof recaptchaToken !== "string"
    ) {
      return NextResponse.json(
        { ok: false, error: "Invalid fields" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );

    const recaptchaResult = await recaptchaResponse.json();

    if (!recaptchaResult.success) {
      return NextResponse.json(
        { ok: false, error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    if (!resend) {
      console.error("Resend API key is not configured.");
      return NextResponse.json(
        { ok: false, error: "Email service not configured" },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: [process.env.CONTACT_TO!],
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Send failed" },
      { status: 500 }
    );
  }
}
