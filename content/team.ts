export type MemberKind = "founder" | "advisor";

export type Member = {
  slug: string;
  name: string;
  role: string;
  kind: MemberKind;
  photo: {
    src: string;
    width: number;
    height: number;
    /**
     * CSS `object-position` — where the subject is in the frame. The card
     * crops every photo to the same box, so a portrait with the head near the
     * top edge needs `"50% 0%"` or the crop takes the top of the head off.
     */
    focus?: string;
    /**
     * Enlarge inside the frame, anchored at `focus`, for a photograph shot
     * from further back than the others so the faces read at a similar size.
     */
    zoom?: number;
  } | null;
  /** Short bio shown on the About card. */
  bio: string;
  /** Optional pull-quote, rendered above the bio on the card. */
  quote?: string;
  linkedin?: string;
  /** True while `bio`/`quote` are still placeholder copy awaiting the client. */
  draft: boolean;
};

/**
 * Founders confirmed by the client. Advisor names and roles come from the
 * company's own pitch deck. Bios and quotes for Deena and Rooaa are still
 * PLACEHOLDER. Advisor one-liners restated from the pitch deck, not invented.
 */
export const team: Member[] = [
  {
    slug: "deena-al-sammak",
    name: "Deena Al-Sammak",
    role: "Chief Executive Officer",
    kind: "founder",
    photo: { src: "/team/deena-al-sammak.webp", width: 1080, height: 1080 },
    quote: "PLACEHOLDER — a one-line quote from Deena.",
    bio: "PLACEHOLDER — two or three sentences on Deena's background and what she leads at Power of Play. Replace before launch.",
    linkedin: "https://www.linkedin.com/in/deena-al-sammak/",
    draft: true,
  },
  {
    slug: "rooaa-shansal",
    name: "Rooaa Shanshal",
    role: "Chief Operations Officer",
    kind: "founder",
    photo: { src: "/team/rooaa-shansal.jpg", width: 1365, height: 2048 },
    quote: "PLACEHOLDER — a one-line quote from Rooaa.",
    bio: "PLACEHOLDER — two or three sentences on Rooaa's background and what she leads at Power of Play. Replace before launch.",
    linkedin: "https://ca.linkedin.com/in/rooaashanshal",
    draft: true,
  },
  {
    slug: "tara-packham",
    name: "Dr Tara Packham",
    role: "Clinical Advisor",
    kind: "advisor",
    photo: { src: "/team/tara_packham_photo.jpg", width: 1200, height: 1800, focus: "50% 0%" },
    bio: "Occupational therapist in hand therapy. Clinical advisor to Power of Play.",
    linkedin: "https://www.linkedin.com/in/tara-packham-21918924/",
    draft: false,
  },
  {
    slug: "megan-kane",
    name: "Megan Kane",
    role: "Regulatory & QA Expert",
    kind: "advisor",
    photo: { src: "/team/megan-headshot.jpeg", width: 896, height: 1088, focus: "50% 0%", zoom: 1.35 },
    bio: "Regulatory and quality assurance expert, and entrepreneur in residence.",
    linkedin: "https://www.linkedin.com/in/megankane1/",
    draft: false,
  },
];

export const founders = team.filter((m) => m.kind === "founder");
export const advisors = team.filter((m) => m.kind === "advisor");
