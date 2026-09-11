import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Kept here rather than in a host config file so the rule travels with the
   * app: `/design-system` is an internal reference page, not public content.
   */
  async headers() {
    return [
      {
        source: "/design-system",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  /**
   * `/v1` and `/v2` were the two designs while the client was choosing. Links
   * to either may still be in their inbox, so both land on the live page.
   */
  async redirects() {
    return [
      { source: "/v1", destination: "/", permanent: false },
      { source: "/v1/:path*", destination: "/:path*", permanent: false },
      { source: "/v2", destination: "/", permanent: false },
      { source: "/v2/:path*", destination: "/:path*", permanent: false },
      { source: "/compare", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
