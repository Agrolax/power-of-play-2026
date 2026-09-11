import Image from "next/image";
import Link from "next/link";
import { whoWeAre } from "@/content/home";
import { founders } from "@/content/team";
import { Section } from "@/components/shared/Section";

export function WhoWeAreTeaser({ basePath = "" }: { basePath?: string }) {
  const href = basePath ? `${basePath}${whoWeAre.cta.href}` : whoWeAre.cta.href;
  return (
    <Section labelledBy="who-heading" className="bg-ground-soft">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 id="who-heading" className="text-h2 text-ink">
            {whoWeAre.title}
          </h2>
          <p className="mt-5 text-lede text-ink-muted">
            {whoWeAre.body}
          </p>
          {/* A secondary destination, so it is set as a link rather than
              dressed up as a third button on the page. */}
          <Link
            href={href}
            className="mt-7 inline-block font-display text-lg font-bold text-forest underline decoration-green-400 decoration-[3px] underline-offset-[6px] transition-colors duration-200 hover:text-green-600"
          >
            {whoWeAre.cta.label}
          </Link>
        </div>

        <ul className="grid grid-cols-2 items-start gap-5 sm:gap-8">
          {founders.map((member, index) => (
            <li key={member.slug} className={index % 2 === 1 ? "translate-y-6" : undefined}>
              {member.photo && (
                <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-lg)] bg-green-100 shadow-card">
                  <Image
                    src={member.photo.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 18rem, (min-width: 768px) 24vw, 45vw"
                    className={
                      member.slug === "rooaa-shansal"
                        ? "origin-center object-cover object-top scale-[1.45] translate-y-[10%]"
                        : "object-cover object-center"
                    }
                  />
                </div>
              )}
              <p className="mt-3 font-display font-bold leading-tight text-ink">{member.name}</p>
              <p className="mt-1 text-sm text-ink-muted">{member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
