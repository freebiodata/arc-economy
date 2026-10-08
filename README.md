# ARC ECONOMY — ARC Raiders economy toolkit (Astro)

Unofficial fan-made economy calculators for **ARC Raiders**. Domain: **https://arceconomy.top**.

## Stack & commands
Astro 5, static output, vanilla JS islands. `npm install` → `npm run dev` / `npm run build` → deploy `dist/`.

## Pages (17)
`/` · `/tools/` · tools: `/craft-profit/`, `/loot-ev/`, `/flip-margin/`, `/kit-budget/` ·
guides: `/guides/crafting-for-profit/`, `/guides/raid-loot-value/`, `/guides/market-flipping/` ·
trust pages generated from `src/data/site.ts` via `src/pages/[slug].astro` · `404`.

## Design
Retro-futurist salvage theme: warm dark brown, cream text, orange + teal, Righteous display font, rounded panels — distinct per-game identity.

## Data policy
No game price database ships: every calculator takes the user's own prices (patch-day safe by design). Fee defaults are editable placeholders marked [VERIFY] in `src/data/site.ts`.

## [NEEDS DATA] before launch
1. Confirm current market fee % and set defaults in tool pages.
2. About page operator bio (placeholder comment in `site.ts`).
3. Mailbox for `hello@arceconomy.top`.
4. Optional: community price snapshot feed (disclose in About + changelog first).
