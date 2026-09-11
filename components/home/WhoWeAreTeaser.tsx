import Image from "next/image";
import Link from "next/link";
import { whoWeAre } from "@/content/home";
import { founders } from "@/content/team";
import { Section } from "@/components/shared/Section";

export function WhoWeAreTeaser({ basePath = "" }: { basePath?: string }) {
  const href = basePath ? `${basePath}${whoWeAre.cta.href}` : whoWeAre.cta.href;
  return (
    <Section labelledBy="who-heading" className="bg-ground-soft">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h2 id="who-heading" className="text-h2 text-ink">
            {whoWeAre.title}
          </h2>
          <p className="mt-6 text-lede text-ink-muted">
            {whoWeAre.body}
          </p>
          {/* A secondary destination, so it is set as a link rather than
              dressed up as a third button on the page. */}
          <Link
            href={href}
            className="mt-8 inline-block font-display text-lg font-bold text-forest underline decoration-green-400 decoration-[3px] underline-offset-[6px] transition-colors duration-200 hover:text-green-600"
          >
            {whoWeAre.cta.label}
          </Link>
        </div>

        <ul className="flex flex-wrap gap-6">
          {founders.map((member) => (
            <li key={member.slug} className="text-center">
              {member.photo && (
                <Image
                  src={member.photo.src}
                  alt=""
                  width={member.photo.width}
                  height={member.photo.height}
                  className="size-32 rounded-[var(--radius-lg)] object-cover shadow-card sm:size-40"
                />
              )}
              <p className="mt-3 font-display font-bold text-ink">{member.name}</p>
              <p className="text-sm text-ink-muted">{member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
