import Link from "next/link";
import { contactCta } from "@/content/home";
import { site } from "@/content/site";

/**
 * The closing band. Heading and body on the left, the action on the right,
 * with the plain email address underneath it for anyone who would rather not
 * fill in a form — a second door, not a second button.
 */
export function ContactCta({ basePath = "" }: { basePath?: string }) {
  const href = basePath ? `${basePath}${contactCta.cta.href}` : contactCta.cta.href;
  return (
    <section aria-labelledby="cta-heading" className="px-5 pt-8 sm:px-8 lg:pt-12">
      <div className="on-forest mx-auto max-w-[80rem] rounded-[var(--radius-lg)] bg-forest px-8 py-14 sm:px-12 lg:px-16 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-16">
          <div>
            <h2 id="cta-heading" className="max-w-xl text-h2 text-green-400">
              {contactCta.title}
            </h2>
            <p className="mt-5 max-w-lg text-lede text-ink-invert-dim">{contactCta.body}</p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <Link
              href={href}
              className="rounded-[var(--radius-md)] bg-green-400 px-7 py-3.5 font-display text-lg font-bold text-brand-ink transition-colors duration-200 hover:bg-green-300"
            >
              {contactCta.cta.label}
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="text-ink-invert-dim underline decoration-green-400/50 underline-offset-4 transition-colors duration-200 hover:text-ink-invert"
            >
              or email {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
