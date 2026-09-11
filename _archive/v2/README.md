# v2 design concept — archived

The "clinical editorial" redesign that was live at `/`, `/about` and `/contact`
between commits `76412e1` and `28a56af` (31 Aug – 1 Sep 2026). The client
reviewed both designs and chose the original, so this one is parked here.

**Nothing in this folder is built, linted or type-checked.** It is excluded in
`tsconfig.json` and `eslint.config.mjs`, and Next.js only routes from `app/`.

## What is here

| Archived path | Original path |
| --- | --- |
| `app/site/` | `app/(site)/` — the v2 pages and layout |
| `app/compare/` | `app/compare/` — side-by-side viewer of both designs |
| `app/theme-v2.css` | `app/theme-v2.css` — token overrides scoped to `.theme-v2` |
| `components/v2/` | `components/v2/` |
| `components/compare/` | `components/compare/` |
| `content/v2.ts` | `content/v2.ts` |
| `lib/fonts.ts` | `lib/fonts.ts` — the JetBrains Mono label face |

## To bring it back

The last commit where it ran is `28a56af`. `git checkout 28a56af -- app components content lib`
restores the whole working tree from that point, which is simpler than moving
these folders back one by one: `content/` and `app/globals.css` have moved on
since (the awards list, the team photo focal points, the theme import), and
the snapshot here predates those changes.
