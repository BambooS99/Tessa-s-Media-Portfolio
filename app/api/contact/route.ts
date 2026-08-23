import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name?: string;
  email?: string;
  occasion?: string;
  message?: string;
  company?: string; // honeypot — real visitors never fill this in
}

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const { name, email, occasion, message, company } = data;

  // Honeypot field: bots fill every input, humans never see this one.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const {
    SMTP_HOST = "smtp.hostinger.com",
    SMTP_PORT = "465",
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO,
  } = process.env;

  if (!SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: SMTP_USER / SMTP_PASS are not set.");
    return NextResponse.json(
      { ok: false, error: "The contact form isn't set up yet — email me directly for now." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"Tessa Osborne Photography" <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      replyTo: `"${name}" <${email}>`,
      subject: `New inquiry from ${name}${occasion ? ` — ${occasion}` : ""}`,
      text: `From: ${name} <${email}>\nOccasion: ${occasion || "—"}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send your message. Please try again in a moment." },
      { status: 502 }
    );
  }
}
