import Image from "next/image";
import { ArrowUpRight, Award } from "lucide-react";
import { groups, logoById, recognition, sectionCopy, type RecognitionItem } from "@/content/media";
import { Section } from "@/components/shared/Section";
import { cn } from "@/lib/utils";
import { RecognitionCarousel } from "./RecognitionCarousel";

const tileClass =
  "flex h-full items-center gap-5 rounded-[var(--radius-lg)] border border-line-soft bg-surface p-6 shadow-card";

/**
 * One tile anatomy for every award — logo slot, placement, organisation —
 * so the column of text lines up down the grid whether or not the logo has
 * arrived yet. A tile with an `href` is a link to the article; the rest are
 * static and do not pretend otherwise.
 */
function AwardTile({ item }: { item: RecognitionItem }) {
  const logo = logoById(item.logoId);

  const body = (
    <>
      <span className="flex h-12 w-24 shrink-0 items-center justify-center">
        {logo ? (
          <Image
            src={logo.src}
            alt=""
            width={logo.width}
            height={logo.height}
            className="max-h-12 w-auto max-w-24 object-contain"
          />
        ) : (
          // Stand-in for any award that has no logo artwork.
          <span
            aria-hidden="true"
            className="flex size-12 items-center justify-center rounded-full bg-green-50 text-green-700"
          >
            <Award className="size-6" strokeWidth={1.75} />
          </span>
        )}
      </span>

      <span className="min-w-0 flex-1">
        <span className="block font-display font-bold text-ink">{item.title}</span>
        <span className="mt-1 block text-sm text-ink-muted">
          {item.org}
          {item.year ? ` · ${item.year}` : ""}
        </span>
      </span>

      {item.href && (
        <ArrowUpRight
          aria-hidden="true"
          className="size-5 shrink-0 text-green-700 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (!item.href) return <li className={tileClass}>{body}</li>;

  return (
    <li className="h-full">
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          tileClass,
          "group cursor-pointer transition-[border-color,box-shadow] duration-200 hover:border-green-400 hover:shadow-lift",
        )}
      >
        {body}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </li>
  );
}

/**
 * Awards & competitions, and media features when there are any — the
 * "where we've been recognised" section. Groups with no entries are skipped.
 */
export function RecognitionSection() {
  return (
    <Section id="recognition" labelledBy="recognition-heading" className="bg-ground-soft">
      <h2 id="recognition-heading" className="text-h2 text-ink">
        {sectionCopy.title}
      </h2>
      <p className="mt-6 max-w-2xl text-lede text-ink-muted">{sectionCopy.body}</p>

      <RecognitionCarousel />

      <div className="mt-14 space-y-14">
        {groups.map((group) => {
          const items = recognition.filter((r) => r.kind === group.kind);
          if (items.length === 0) return null;

          return (
            <div key={group.kind}>
              <h3 className="font-display text-h3 text-forest">{group.label}</h3>

              <ul className="mt-6 grid gap-5 md:grid-cols-2">
                {items.map((item) => (
                  <AwardTile key={item.id} item={item} />
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
