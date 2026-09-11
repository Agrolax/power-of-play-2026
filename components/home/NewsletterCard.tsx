"use client";

import { useState, type FormEvent } from "react";
import { newsletter } from "@/content/home";
import { googleForm, formspreeEndpoint } from "@/content/contact";
import { site } from "@/content/site";
import { sendForm, type Outcome } from "@/lib/forms";

type Status = "idle" | "sending" | Outcome;

/**
 * A short line, a field and a button. The field is always there — a form that
 * hides what it is asking for behind a full-width button reads as a stunt, and
 * the hero has one job besides the headline, which is to collect an address.
 */
export function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;

    setStatus("sending");
    const outcome = await sendForm({
      fields: [{ name: "email", label: "Email", values: [email] }],
      subject: `Newsletter signup — ${site.name}`,
      google: googleForm.newsletter,
      formspree: formspreeEndpoint,
    });

    setStatus(outcome);
    // Keep the address after a mailto handoff — that draft may never be sent.
    if (outcome === "ok") setEmail("");
  }

  return (
    <div className="mx-auto max-w-md">
      <p className="font-display text-sm font-semibold text-ink-invert-dim">{newsletter.prompt}</p>

      <form
        onSubmit={onSubmit}
        className="mt-3 flex h-14 items-center rounded-[var(--radius-pill)] bg-surface p-1.5 pl-2 shadow-lift focus-within:ring-3 focus-within:ring-green-300"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={newsletter.placeholder}
          aria-describedby="newsletter-status"
          className="min-w-0 flex-1 bg-transparent px-4 text-ink outline-none placeholder:text-ink-faint"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="h-full shrink-0 cursor-pointer rounded-[var(--radius-pill)] bg-green-400 px-5 font-display font-bold text-brand-ink transition-colors duration-200 hover:bg-green-300 disabled:cursor-default disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : newsletter.submitLabel}
        </button>
      </form>

      <p id="newsletter-status" role="status" className="mt-3 min-h-5 text-sm text-ink-invert-dim">
        {status === "ok" && "You're on the list. We'll write when there's news."}
        {status === "mailto" && "Opening your email app — send that message and you're on the list."}
        {status === "error" && (
          <>
            Something went wrong. Email us at{" "}
            <a className="underline decoration-green-400/60 underline-offset-2" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </>
        )}
      </p>
    </div>
  );
}
