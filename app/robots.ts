import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * `/design-system` is an internal brand reference. It also carries
 * `robots: { index: false }` in its own metadata and an `X-Robots-Tag` header
 * from next.config.ts — this is the belt, those are the braces.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/design-system"],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
