import type { Metadata } from "next";
import { StorySection } from "@/components/about/StorySection";
import { TeamSection } from "@/components/about/TeamSection";
import { RecognitionSection } from "@/components/about/RecognitionSection";
import { ContactCta } from "@/components/home/ContactCta";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The team behind Power of Play, and the competitions and awards that have recognised the work.",
};

export default function AboutPage() {
  return (
    <>
      <StorySection />
      <RecognitionSection />
      <TeamSection />
      <ContactCta />
    </>
  );
}
