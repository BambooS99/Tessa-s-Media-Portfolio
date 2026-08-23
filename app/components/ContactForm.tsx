"use client";

import { useState, type FormEvent } from "react";

const fieldClasses =
  "w-full bg-transparent border-0 border-b border-[rgba(32,31,29,0.3)] py-2 text-[14px] font-[Lora] placeholder:text-[rgba(32,31,29,0.45)] outline-none focus:border-[#7d5411] transition-colors";

const labelClasses = "block text-[11px] uppercase tracking-[0.1em] mb-2";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong.");
      }

      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="max-w-[440px]">
        <p className="font-['Cormorant_Garamond',serif] font-semibold text-[28px] leading-[1.1] mb-3">
          Thanks for reaching out.
        </p>
        <p className="text-[13.5px] leading-[1.65] font-[Lora]">
          I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-[440px] flex flex-col gap-7">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input id="name" name="name" type="text" required className={fieldClasses} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input id="email" name="email" type="email" required className={fieldClasses} placeholder="you@email.com" />
        </div>
      </div>

      <div>
        <label htmlFor="occasion" className={labelClasses}>
          What are you here to see more of?
        </label>
        <input
          id="occasion"
          name="occasion"
          type="text"
          className={fieldClasses}
          placeholder="Portrait session, event, editorial…"
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClasses} resize-none`}
          placeholder="Tell me a bit about what you have in mind."
        />
      </div>

      {/* Honeypot — hidden from real visitors, bots tend to fill every field. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {status === "error" && error && (
        <p className="text-[13px] leading-[1.5] text-[#a3402f]">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="self-start mt-2 border border-[#201f1d] px-7 py-2.5 text-[13px] uppercase tracking-[0.08em] font-[Lora] transition-colors hover:bg-[#201f1d] hover:text-[#f0ead6] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
