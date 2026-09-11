"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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

const labelClass =
  "rounded-[var(--radius-pill)] font-display text-[0.8125rem] font-bold uppercase tracking-[0.12em] transition-colors duration-200";

/**
 * A floating white bar, as the v2 concept had it: inset from the page edges,
 * rounded, bordered, and it condenses once the page has scrolled. Solid white
 * on purpose — the logo PNG carries a white field, and any tint or blur
 * behind it would show that field as a rectangle.
 *
 * The scroll listener is passive and only flips a boolean, so it never reads
 * layout.
 */
export function SiteHeader({ basePath = "" }: { basePath?: string }) {
  const pathname = usePathname();
  const [condensed, setCondensed] = useState(false);
  const [open, setOpen] = useState(false);
  const homeHref = prefix(basePath, "/");

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div
        className={cn(
          "mx-auto flex max-w-[88rem] items-center justify-between rounded-[var(--radius-lg)] border border-line-soft bg-surface",
          "transition-[padding,box-shadow] duration-300 ease-[var(--ease-brand)]",
          condensed ? "px-4 py-2 shadow-lift sm:px-5" : "px-4 py-3 sm:px-6",
        )}
      >
        <Link href={homeHref} className="flex shrink-0 items-center rounded-[var(--radius-sm)]">
          <Logo
            className={cn(
              "transition-[height] duration-300 ease-[var(--ease-brand)]",
              condensed ? "h-9 lg:h-9" : "h-10 lg:h-11",
            )}
          />
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
                  labelClass,
                  "px-4 py-2.5",
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
            className={cn(
              labelClass,
              "ml-2 bg-forest px-5 py-3 text-ink-invert hover:bg-green-400 hover:text-brand-ink",
            )}
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
          className={cn(
            labelClass,
            "cursor-pointer border border-line-soft px-4 py-2.5 text-forest hover:bg-ground-soft md:hidden",
          )}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile panel — a second floating card under the bar */}
      <nav
        id="mobile-nav"
        aria-label="Main"
        hidden={!open}
        className="mx-auto mt-2 max-w-[88rem] rounded-[var(--radius-lg)] border border-line-soft bg-surface p-3 shadow-lift md:hidden"
      >
        <ul>
          {nav.map((item) => (
            <li key={item.href} className="border-b border-line-soft last:border-0">
              <Link
                href={prefix(basePath, item.href)}
                onClick={() => setOpen(false)}
                aria-current={isActive(pathname, prefix(basePath, item.href), homeHref) ? "page" : undefined}
                className="block px-2 py-4 font-display text-2xl font-bold text-forest aria-[current=page]:text-green-600"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={prefix(basePath, navCta.href)}
          onClick={() => setOpen(false)}
          className={cn(labelClass, "mt-3 block bg-forest px-5 py-4 text-center text-ink-invert")}
        >
          {navCta.label}
        </Link>
      </nav>
    </header>
  );
}
