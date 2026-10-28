# Executive landing redesign

## Result

Both `/` and `/presentation/` now render exactly six main sections: opportunity, industry problem, product, engineering advantage, business opportunity, and proposed Google Cloud next step. The main visible copy is **388 English words**. Counting includes schematic labels, simulated readings, diagnostic choices, maturity labels, and the compact loop. Navigation, source citations, footer disclosures, and decorative pillar indices are excluded. Static-export and live DOM counts agree.

The hero uses an abstract engineering signal flow. The full Engineering Diagnostic Workspace is the sole physical equipment schematic. The three field-experience pillars and six-stage loop are compact; potential buyers, value drivers, and commercialization path replace the previous scorecard/table layout. The final Google Cloud narrative ends with the requested specific proposed action.

## Files in this redesign

Created:
- `src/content/landing.ts`
- `src/components/presentation/executive-landing.tsx`
- `src/app/landing.css`
- `docs/archive/landing-preservation.json`
- `docs/archive/verify-ten-section-before-landing.mjs.txt`
- `docs/landing-redesign.md`
- `docs/images/landing-mobile.png`

Modified:
- `src/app/page.tsx`
- `src/app/presentation/page.tsx`
- `src/app/layout.tsx`
- `src/components/presentation/engineering-diagrams.tsx` (optional compact loop caption)
- `scripts/verify-presentation.mjs`
- `README.md`
- `package.json` (built-in Webpack production compiler)
- `docs/images/scrolling-presentation-preview.png`

The detailed ten-section proposal, all eight reference records, ten speaker notes, and factual review remain unchanged, verified against saved SHA-256 hashes. Prior components, archives, and technical review documents remain available in the repository. Detailed proposal content is not imported by the new routes.

## Verification

- TypeScript: `npm run typecheck` passed.
- Production static export passed using the built-in Webpack compiler. The local Turbopack CSS worker exited unexpectedly during the final rerun; the build script now selects Webpack explicitly. No dependency or framework version changes were required.
- Integrity check: `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON scripts/verify-presentation.mjs` passed on both route exports.
- Six sections, valid local anchors/source URLs, one workspace, one equipment schematic, one abstract preview, one engineering loop, no tables/carousel/roadmap or detailed engineering disclosures.
- Complete internal speaker narratives, presenter transitions, and pilot evaluation methodology are absent from exported text assets. No `out/docs` directory is served.
- Browser checks at desktop 1440×900 and mobile 390×844: no horizontal page overflow; sticky anchors clear the header; workspace remains legible through vertical flow. Mobile navigation scrolls within its own row.
- Main count: 388 words on both routes.

## Remaining business uncertainties

Existing company-confirmation items remain in `docs/content-review.md`. No new results, customer relationships, data ownership, production integration, or Google Cloud partnership is asserted. Proposed benefits, pilot scope, licensing, and technical consultation require validation. Publisher-reported statistics do not establish product-preventable outage rates.

No deployment was performed. The existing local development server remains available at `http://127.0.0.1:3000/presentation/`. If restarting later, run `npm run dev` from the project directory.
