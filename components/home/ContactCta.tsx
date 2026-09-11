import Link from "next/link";
import { contactCta } from "@/content/home";

/** The closing band. Heading and body on the left, the one action on the right. */
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

          <Link
            href={href}
            className="justify-self-start rounded-[var(--radius-md)] bg-green-400 px-7 py-3.5 font-display text-lg font-bold text-brand-ink transition-colors duration-200 hover:bg-green-300 lg:justify-self-end"
          >
            {contactCta.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
