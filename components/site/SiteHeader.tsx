"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav, navCta } from "@/content/site";
import { Logo } from "./Logo";

function prefix(basePath: string, href: string) {
  if (!basePath) return href;
  return href === "/" ? basePath : `${basePath}${href}`;
}

function isActive(pathname: string, href: string, homeHref: string) {
  return href === homeHref ? pathname === href : pathname.startsWith(href);
}

const linkClass =
  "rounded-[var(--radius-pill)] px-3.5 py-2 font-display text-[0.9375rem] font-semibold transition-colors duration-200";

/**
 * A quiet bar: small logo, two links, one button. The page below it carries
 * the colour; the header only has to stay out of the way and say where you are.
 */
export function SiteHeader({ basePath = "" }: { basePath?: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const homeHref = prefix(basePath, "/");

  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:h-[4.5rem] lg:px-[clamp(2rem,7.5vw,7.5rem)]">
        <Link href={homeHref} className="shrink-0 rounded-[var(--radius-sm)]">
          <Logo className="h-9 lg:h-10" />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const href = prefix(basePath, item.href);
            const active = isActive(pathname, href, homeHref);
            return (
              <Link
                key={item.href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  linkClass,
                  active
                    ? "bg-green-50 text-forest"
                    : "text-ink-muted hover:bg-ground-soft hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={prefix(basePath, navCta.href)}
            className={cn(linkClass, "ml-3 bg-forest px-4.5 text-ink-invert hover:bg-green-700")}
          >
            {navCta.label}
          </Link>
        </nav>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="-mr-2 cursor-pointer rounded-[var(--radius-sm)] p-2 text-forest md:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile panel */}
      <nav
        id="mobile-nav"
        aria-label="Main"
        hidden={!open}
        className="border-t border-line-soft bg-surface px-5 pb-5 pt-2 md:hidden"
      >
        <ul className="flex flex-col">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={prefix(basePath, item.href)}
                onClick={() => setOpen(false)}
                aria-current={isActive(pathname, prefix(basePath, item.href), homeHref) ? "page" : undefined}
                className="block py-3 font-display text-lg font-semibold text-forest aria-[current=page]:text-green-600"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <Link
              href={prefix(basePath, navCta.href)}
              onClick={() => setOpen(false)}
              className="block rounded-[var(--radius-pill)] bg-forest px-5 py-3 text-center font-display font-semibold text-ink-invert"
            >
              {navCta.label}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
