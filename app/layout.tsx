import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { canonical, site } from "@/content/site";
import "./globals.css";

/**
 * Display face. Only the axes actually used are requested (`wght` is implicit
 * for a variable font); `opsz` and `wdth` are what give the headline and the
 * hero pill their character.
 */
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  axes: ["opsz", "wdth"],
  display: "swap",
});

/** Body face — paragraphs, form fields, anything read at length. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Absolute OG/Twitter image URLs must point at the host actually serving this
 * build, or the card 404s.
 *
 * Netlify sets BOTH `URL` (the site's primary address) and `DEPLOY_PRIME_URL`
 * (the address of this particular deploy) on every build, production included —
 * where `DEPLOY_PRIME_URL` is the branch form, `https://main--<site>.netlify.app`.
 * So it cannot simply be preferred: on production that is a deploy hostname, and
 * it stays one even after a custom domain is attached. `CONTEXT` is what
 * distinguishes them.
 *
 * Canonicals do not come from here at all — see `canonical()` in content/site.ts.
 */
const metadataBase = new URL(
  process.env.CONTEXT === "production"
    ? (process.env.URL ?? site.url)
    : (process.env.DEPLOY_PRIME_URL ?? process.env.URL ?? site.url),
);

export const metadata: Metadata = {
  metadataBase,
  alternates: { canonical: canonical() },
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  logo: `${site.url}/brand/logo-with-name.svg`,
  sameAs: [site.linkedin],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
