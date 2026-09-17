export type Logo = {
  id: string;
  /** Organisation name — also the image alt text. Verified against the artwork. */
  name: string;
  src: string;
  /** Intrinsic pixel dimensions, so next/image can reserve layout (CLS = 0). */
  width: number;
  height: number;
  /**
   * Visual-weight correction for the home page strip. Logos are set at one
   * shared height, and a square seal at that height looks half the size of a
   * wide wordmark; this nudges each toward the same apparent size. 1 = as is.
   */
  scale?: number;
  href?: string;
};

/**
 * Label chosen with the client. Covers awards, accelerators and partners.
 *
 * NOTE(assets): the two files originally named `iF-Logo_colour.*` are NOT the
 * iF Design Award — both are the Innovation Factory logo. They have been
 * renamed accordingly. Every name below was read off the artwork itself.
 */
export const recognitionLabel = "Recognised by";

export const logos: Logo[] = [
  {
    id: "innovation-factory",
    name: "Innovation Factory",
    src: "/logos/innovation-factory.webp",
    width: 2037,
    height: 801,
  },
  {
    id: "hamilton-health",
    name: "Hamilton Health Sciences",
    src: "/logos/hamilton-health.webp",
    width: 3648,
    height: 1280,
    scale: 1.05,
  },
  {
    id: "theforge",
    name: "The Forge",
    src: "/logos/theforge.png",
    width: 404,
    height: 91,
    scale: 0.72,
  },
  {
    id: "lab2market",
    name: "Lab2Market Launch",
    src: "/logos/lab2market.png",
    width: 960,
    height: 268,
    scale: 0.82,
  },
  {
    id: "entrepreneurs-organization",
    name: "Entrepreneurs' Organization",
    src: "/logos/entrepreneurs-organization.png",
    width: 444,
    height: 222,
    scale: 1.15,
  },
  {
    id: "theclinic",
    name: "The Clinic Agency",
    src: "/logos/theclinic.png",
    width: 272,
    height: 272,
    scale: 1.5,
  },
  {
    id: "rellia",
    name: "Rellia Health Network",
    src: "/logos/rellia.png",
    width: 346,
    height: 178,
    scale: 1.1,
  },
];

/**
 * Logos that belong to an award tile on the About page but not to the home
 * page strip — the client kept that strip to partners and programmes.
 * Names read off the artwork, as above.
 */
export const awardLogos: Logo[] = [
  {
    id: "synapse",
    name: "Synapse Life Science Competition",
    src: "/logos/synapse.webp",
    width: 1200,
    height: 400,
  },
  {
    id: "stu-clark",
    name: "Stu Clark New Venture Championships",
    src: "/logos/stu-clark.webp",
    width: 1200,
    height: 466,
  },
  {
    id: "fowler-gsic",
    name: "The Fowler Global Social Innovation Challenge",
    src: "/logos/fowler-gsic.webp",
    width: 300,
    height: 290,
  },
  {
    id: "mcmaster-entrepreneurship-academy",
    name: "McMaster University Entrepreneurship Academy",
    src: "/logos/mcmaster-entrepreneurship-academy.png",
    width: 300,
    height: 238,
  },
];
