import Link from "next/link";
import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/shared/icons";
import Image from "next/image";
import { nav, navCta, site } from "@/content/site";

function prefix(basePath: string, href: string) {
  if (!basePath) return href;
  return href === "/" ? basePath : `${basePath}${href}`;
}

export function SiteFooter({ basePath = "" }: { basePath?: string }) {
  return (
    <footer className="on-forest mt-12 bg-forest text-ink-invert lg:mt-16">
      <div className="mx-auto max-w-[90rem] px-5 py-16 sm:px-8 lg:px-[clamp(2rem,7.5vw,7.5rem)] lg:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            {/* The lockup with its lettering in cream — the PNG the header
                uses has an opaque white field and would need a chip here. */}
            <Image
              src="/brand/logo-with-name-on-dark.svg"
              alt={site.name}
              width={313}
              height={204}
              className="h-16 w-auto lg:h-20"
            />
            <p className="mt-6 max-w-sm text-lg text-ink-invert-dim">{site.tagline}.</p>
          </div>

          <nav aria-labelledby="footer-site">
            <h2 id="footer-site" className="font-display text-sm font-bold uppercase tracking-[0.14em] text-green-300">
              Site
            </h2>
            <ul className="mt-4 space-y-3">
              {[...nav, navCta].map((item) => (
                <li key={item.href}>
                  <Link href={prefix(basePath, item.href)} className="text-ink-invert-dim transition-colors hover:text-ink-invert">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-green-300">Contact</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-ink-invert-dim transition-colors hover:text-ink-invert"
                >
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  className="inline-flex items-center gap-2 text-ink-invert-dim transition-colors hover:text-ink-invert"
                >
                  <LinkedInIcon className="size-4 shrink-0" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-green-700/50 pt-8 text-sm text-ink-invert-dim">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
