import { site } from "./site";

export const hero = {
  headline: {
    before: "Play is the ",
    highlight: "assessment",
    after: "",
  },
  /** Real, client-supplied positioning line — not placeholder. */
  lede: site.tagline + ".",
} as const;

export const newsletter = {
  title: "Stay updated",
  body: "",
  placeholder: "Enter your email",
  /** Small line above the field. */
  prompt: "Get notified when we launch",
  submitLabel: "Notify me",
} as const;

/**
 * Problem framing from the client's own Figma, in their words (1 Sep 2026).
 *
 * TODO(client): the 1-in-16 / 63-million figures come from the Figma but carry
 * no citation. Supply the source, or we soften the claim before launch.
 */
export const problem = {
  title: "Fine motor difficulties affect 1 in 16 children's quality of life",
  stat: "That's 63 million kids globally",
  points: [
    {
      title: "Current tools are too large & heavy",
      body: "Traditional hand dynamometers simply don't fit a child's hand and lack meaningful reason for a child to engage and produce maximum effort.",
    },
    {
      title: "Weak hand grips go unmeasured",
      body: "Assessment tools built for adults are not calibrated for low muscle tone which fail to capture weak grips.",
    },
    {
      title: "Informal tests lack objective data",
      body: "Therapists fall back on subjective and unreliable means of collecting data to compensate for the lack of reliable tools for kids.",
    },
  ],
} as const;

/** Approach copy in the client's words (1 Sep 2026). */
export const approach = {
  title: "Assessment that a child experiences as play",
  body: "A play-based device developed to integrate with what kids love doing most: play! Sensitive enough for low muscle tone and clinically reliable to ensure that therapists can compare one visit to the next.",
  steps: [
    {
      title: "Play-Based Approach",
      body: "Engaging biofeedback ensures that children who are not able to follow verbal instructions can still participate in the assessment.",
    },
    {
      title: "Sensitive to Weak Grips",
      body: "Calibrated for low muscle tone to register the grips of even the weakest patients.",
    },
    {
      title: "The 3-in-1 Tool",
      body: "Measures hook, cylindrical and pinch grips, all in one tool.",
    },
  ],
  draft: false,
} as const;

/**
 * Written from facts already on the About page (the two founders and the two
 * advisors' fields) — no claim here that is not made there. It describes what
 * the team is building at the level of the client's own About copy.
 */
export const whoWeAre = {
  title: "The team building for pediatric clinicians",
  body: "Power of Play is led by co-founders Deena Al-Sammak and Rooaa Shanshal, advised by an occupational therapist in hand therapy and a regulatory and quality expert. Together they are building a play-based way to measure a child’s grip and pinch strength.",
  cta: { label: "Meet the team", href: "/about" },
  draft: false,
} as const;

export const contactCta = {
  title: "Talk to us about a pilot or a partnership",
  body: "Clinical partnerships, pilots, press and careers. Tell us what you are after and we will reply.",
  cta: { label: "Get in touch", href: "/contact" },
} as const;
