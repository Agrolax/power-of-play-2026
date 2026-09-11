import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { SkipLink } from "./SkipLink";

/**
 * Page chrome — skip link, header, main landmark, footer.
 *
 * `basePath` prefixes internal nav; it exists so the design can be mounted
 * under a preview prefix (as it was at `/v1`) without leaking into the live
 * site. Unused on the live routes.
 */
export function SiteShell({
  children,
  basePath = "",
}: {
  children: ReactNode;
  basePath?: string;
}) {
  return (
    <>
      <SkipLink />
      <SiteHeader basePath={basePath} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter basePath={basePath} />
    </>
  );
}
