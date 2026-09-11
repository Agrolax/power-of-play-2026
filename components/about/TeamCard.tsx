import Image from "next/image";
import type { Member } from "@/content/team";
import { LinkedInIcon } from "@/components/shared/icons";
import { cn } from "@/lib/utils";

function isLive(text?: string) {
  return Boolean(text) && !text!.startsWith("PLACEHOLDER");
}

export function TeamCard({ member }: { member: Member }) {
  const focus = member.photo?.focus ?? "50% 50%";
  const zoom = member.photo?.zoom ?? 1;

  return (
    <li
      className={cn(
        "squircle grid overflow-hidden border border-line-soft bg-surface shadow-card",
        member.photo && "md:min-h-[22rem] md:grid-cols-[minmax(0,20rem)_1fr]",
      )}
    >
      {member.photo && (
        <div className="squircle-top relative aspect-[4/3] overflow-hidden md:aspect-auto md:squircle-left">
          {/* The zoom scales a wrapper, not the image, so `object-position`
              keeps meaning "where the subject is" and the enlarged picture
              grows away from that same anchor. `sizes` is scaled to match,
              or the browser would pick a file too small for the box. */}
          <span
            className="absolute inset-0 block"
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: focus,
            }}
          >
            <Image
              src={member.photo.src}
              alt={`${member.name}, ${member.role}`}
              fill
              sizes={`(min-width: 768px) ${Math.ceil(20 * zoom)}rem, ${Math.ceil(100 * zoom)}vw`}
              className="object-cover"
              style={{ objectPosition: focus }}
            />
          </span>
        </div>
      )}

      <div className="flex flex-col justify-center p-8 lg:p-12">
        {isLive(member.quote) && (
          <blockquote className="font-display text-h3 leading-snug text-forest">
            &ldquo;{member.quote}&rdquo;
          </blockquote>
        )}

        <div className={isLive(member.quote) ? "mt-6" : undefined}>
          <h3 className="text-h3 text-ink">{member.name}</h3>
          <p className="mt-1 font-display font-bold text-green-700">{member.role}</p>
        </div>

        {isLive(member.bio) && (
          <p className="mt-4 max-w-xl text-ink-muted">{member.bio}</p>
        )}

        {member.linkedin && (
          <a
            href={member.linkedin}
            className="mt-6 inline-flex w-fit items-center gap-2 font-display font-bold text-forest underline-offset-4 hover:underline"
          >
            <LinkedInIcon className="size-4" />
            LinkedIn
          </a>
        )}
      </div>
    </li>
  );
}
