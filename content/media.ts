import { awardLogos, logos, type Logo } from "./logos";

export type RecognitionKind = "award" | "media";

export type RecognitionItem = {
  id: string;
  kind: RecognitionKind;
  /** Placement first, prize after: "1st Place, $15,000". */
  title: string;
  org: string;
  /** null until the client confirms the date — never guessed. */
  year: string | null;
  /** Article or announcement the tile links to. Unset tiles are static. */
  href?: string;
  /** Matches an id in content/logos.ts, when a logo exists for the item. */
  logoId?: string;
  photo?: { src: string; alt: string; width: number; height: number };
  /** True while any field above is still awaiting client confirmation. */
  draft: boolean;
};

export const logoById = (id?: string): Logo | undefined =>
  [...logos, ...awardLogos].find((l) => l.id === id);

export const sectionCopy = {
  title: "Recognition",
  body: "Competitions and awards.",
} as const;

/**
 * Programmes & partners used to be a second group here. The client dropped
 * it (11 Sep 2026): partner logos stay on the home page strip, and this
 * section is awards only.
 */
export const groups: { kind: RecognitionKind; label: string }[] = [
  { kind: "award", label: "Awards & competitions" },
  { kind: "media", label: "In the media" },
];

/**
 * The seven awards the client listed (11 Sep 2026), in the order they asked
 * for: first-place wins, then second, then third. Placements and prize
 * amounts restated from the photographs the company supplied; the remaining
 * years and logos came from the client on 17 Sep 2026.
 *
 * TODO(client): `href` for each award once they choose which article or
 * announcement a tile should open.
 */
export const recognition: RecognitionItem[] = [
  {
    id: "synapse",
    kind: "award",
    title: "1st Place",
    org: "Synapse Life Science Competition",
    year: "2025",
    logoId: "synapse",
    draft: false,
  },
  {
    id: "spark-grant",
    kind: "award",
    title: "SPARK Grant",
    org: "Hamilton Health Sciences",
    year: "2024",
    logoId: "hamilton-health",
    photo: {
      src: "/team/award-sparkcompetition.jpg",
      alt: "Power of Play named 2024 SPARK Competition Winner by Hamilton Health Sciences",
      width: 1620,
      height: 1080,
    },
    draft: false,
  },
  {
    id: "theforge",
    kind: "award",
    title: "1st Place, $15,000",
    org: "Startup Survivor, The Forge",
    year: "2024",
    logoId: "theforge",
    photo: {
      src: "/team/award-forge.jpg",
      alt: "Deena Al-Sammak and Rooaa Shanshal receiving The Forge Startup Survivor Grand Prize",
      width: 6000,
      height: 4000,
    },
    draft: false,
  },
  {
    id: "stu-clark",
    kind: "award",
    title: "1st Place, Video Pitch",
    org: "Stu Clark New Venture Pitch Challenge",
    year: "2026",
    logoId: "stu-clark",
    photo: {
      src: "/images/awards/clark-centre.jpeg",
      alt: "First place video pitch award at the Stu Clark New Venture Pitch Challenge",
      width: 2048,
      height: 1362,
    },
    draft: false,
  },
  {
    id: "fowler-gsc",
    kind: "award",
    title: "2nd Place, $15,000",
    org: "Fowler Global Social Innovation Challenge",
    year: "2026",
    logoId: "fowler-gsic",
    photo: {
      src: "/images/awards/fowler-gsc.jpeg",
      alt: "Power of Play receiving a $15,000 ceremonial cheque at the Fowler Global Social Innovation Challenge",
      width: 2048,
      height: 1366,
    },
    draft: false,
  },
  {
    id: "gsea",
    kind: "award",
    title: "3rd Place, $20,000",
    org: "Global Student Entrepreneur Awards (GSEA)",
    year: "2023",
    logoId: "entrepreneurs-organization",
    photo: {
      src: "/team/award-gsea.jpg",
      alt: "Deena Al-Sammak with the GSEA third prize ceremonial cheque",
      width: 3648,
      height: 5472,
    },
    draft: false,
  },
  {
    id: "mcmaster-showcase",
    kind: "award",
    title: "People’s Choice Award",
    org: "McMaster Innovation Showcase",
    year: "2024",
    logoId: "mcmaster-entrepreneurship-academy",
    draft: false,
  },
];

export const awardPhotos = recognition.filter((r) => r.photo);
