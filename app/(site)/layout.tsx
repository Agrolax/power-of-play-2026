import type { ReactNode } from "react";
import { SiteShell } from "@/components/site/SiteShell";

/**
 * Live site chrome — skip link, header, main landmark, footer. A route
 * *group*, so `/`, `/about` and `/contact` keep their URLs.
 */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}
