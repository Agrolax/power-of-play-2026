/**
 * Global site facts. Phase 2 note: this file is shaped like the document a
 * Sanity `siteSettings` singleton would return, so swapping the source later
 * touches this file and nothing that imports from it.
 */
export const site = {
  name: "Power of Play",
  legalName: "Power of Play Inc.",
  url: "https://powerofplayinc.com",
  tagline: "Taking a play-based approach to pediatric rehabilitation",
  description:
    "Power of Play is a pediatric rehabilitation company taking a play-based approach to therapy and assessment for young children.",
  email: "info@powerofplayinc.com",
  linkedin: "https://www.linkedin.com/company/power-of-play-pop/",
} as const;

/**
 * Canonical URLs are absolute against the brand domain, deliberately — never
 * relative.
 *
 * A relative `alternates.canonical` is resolved against `metadataBase`, which
 * is whatever host is actually serving the build. On Netlify that made every
 * canonical point at `main--powerofplayinc.netlify.app`, i.e. at a deploy
 * hostname, and it would have kept doing so after the domain went live: the
 * two values answer different questions. `metadataBase` is "where is this file
 * served from" (share-card images 404 anywhere else); a canonical is "which URL
 * is the real one for this page", and that is the brand domain whether or not
 * DNS has caught up yet.
 */
export const canonical = (path: string = "/") =>
  path === "/" ? site.url : `${site.url}${path}`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
] as const;

export const navCta = { label: "Get in touch", href: "/contact" } as const;
