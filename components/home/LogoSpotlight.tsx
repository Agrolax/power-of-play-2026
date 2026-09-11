import Image from "next/image";
import { logos, recognitionLabel, type Logo } from "@/content/logos";

/**
 * One shared height and one constant gap. The logos used to sit centred in
 * fixed-width slots, so a wide wordmark and a square seal left visibly
 * different amounts of air on either side; the per-logo `scale` in
 * content/logos.ts evens out their apparent size instead.
 */
function LogoTrack({ clone = false }: { clone?: boolean }) {
  return (
    <ul
      aria-hidden={clone || undefined}
      data-recognition-clone={clone || undefined}
      className="flex shrink-0 items-center gap-x-12 pr-12 sm:gap-x-16 sm:pr-16"
    >
      {logos.map((logo: Logo) => (
        <li key={logo.id} className="flex h-14 shrink-0 items-center">
          <Image
            src={logo.src}
            alt={clone ? "" : logo.name}
            width={logo.width}
            height={logo.height}
            sizes="12rem"
            className="w-auto"
            style={{ height: `calc(var(--logo-h) * ${logo.scale ?? 1})` }}
          />
        </li>
      ))}
    </ul>
  );
}

/**
 * A seamless, self-scrolling carousel. The duplicate track is hidden from
 * assistive technology and lands exactly where the first started, avoiding the
 * flash caused by swapping groups. Reduced-motion users get one wrapped list.
 */
export function LogoSpotlight() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 [--logo-h:2rem] sm:flex-row sm:items-center sm:gap-12 sm:[--logo-h:2.5rem]">
      <p className="shrink-0 font-display text-eyebrow font-bold uppercase tracking-[0.18em] text-ink-muted">
        {recognitionLabel}
      </p>

      <div className="recognition-carousel relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_2.5rem,#000_calc(100%-2.5rem),transparent)]">
        <div className="recognition-carousel__track flex w-max">
          <LogoTrack />
          <LogoTrack clone />
        </div>
      </div>
    </div>
  );
}
