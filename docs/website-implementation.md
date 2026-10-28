# Static scrolling presentation — implementation report

Both `/` and `/presentation/` now render the same ten-section continuous presentation. The existing Next.js App Router, TypeScript, Tailwind, static export configuration, and dependencies are retained. Nothing was deployed.

## Created

- `src/components/presentation/scrolling-presentation.tsx`: shared server-rendered page, sticky anchor navigation, alternating sections, opening/final navy surfaces, and footer.
- `src/components/presentation/section-heading.tsx`: reusable section hierarchy.
- `src/components/presentation/content-card.tsx`: supporting-point layouts and qualitative evidence panels; no numerical statistics inferred.
- `src/components/presentation/capability-label.tsx`: maturity labels.
- `src/components/presentation/citations.tsx`: source links and expandable bibliography.
- `src/components/presentation/section-visual.tsx`: static hero diagram, evidence composition, training comparison, platform capability layer, learning loop, roadmap, and complementary-capability layout.
- `src/content/presentation-ui.ts`: ancillary navigation/interface/diagram labels only.
- `src/lib/presentation-view.ts`: explicit rendering projection that omits speaker notes and presenter transitions.
- `scripts/verify-presentation.mjs`: static export integrity and private-copy checks.
- `docs/images/scrolling-presentation-preview.png`: desktop preview screenshot.
- `docs/website-implementation.md`: this report.

## Modified

- `src/app/page.tsx`: renders the new presentation.
- `src/app/presentation/page.tsx`: preserves the existing URL and renders the new presentation.
- `src/app/globals.css`: replaces slide/carousel styles with the requested enterprise palette, responsive editorial layouts, sticky navigation, accessible focus, and reduced-motion/print handling.
- `README.md`: current architecture, preview, local opening instructions, export/check commands, and editorial boundaries.

## Removed

- `src/components/presentation/presentation-deck.tsx`: obsolete carousel controls and client-side slide state.
- `src/components/presentation/slide.tsx`: obsolete 16:9 placeholder renderer.

## Preserved

The SHA-256 hashes of `src/content/presentation.ts`, `src/content/references.ts`, `docs/speaker-notes.md`, and `docs/content-review.md` match their values before this task. No approved presentation copy was rewritten. The original four-slide data remains in `src/content/platform.ts` as provenance, with no active slide UI using it.

## Verification

- `npm run typecheck`: passed.
- `npm run build`: passed; both routes prerender and export to `out/`.
- `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON scripts/verify-presentation.mjs`: passed. Checks ten sections per route, exact source copy appearing once, unique IDs, local anchor targets, citation URLs, removal of slide controls, and absence of complete speaker narratives and presenter transitions across exported HTML, RSC text, and JavaScript assets.
- Browser smoke check at 1265px and 600px viewport widths: no page-level horizontal overflow. Narrow navigation scrolls horizontally within its own row. Section anchors land below the sticky header; platform and learning-loop navigation were exercised. The learning loop contains six steps.
- All ten anchor destinations and all used source URLs were checked against exported markup. External source availability can vary; the Uptime canonical-source retrieval limitation remains documented in the unchanged reference register.
- Source register retains eight records; six are cited by the presentation and shown in the website bibliography.

## Remaining scope

No implementation/build errors remain. Detailed diagram/visual refinement is deferred as requested. Company facts, data-use permissions, prototype evidence, pilot economics, and Google engagement terms still need the confirmations documented in `docs/content-review.md`. Speaker notes are excluded from the built website; repository visibility is a separate matter.

## Open locally

Run `npm ci` if dependencies are absent, then `npm run dev`. Open `http://127.0.0.1:3000/` or `http://127.0.0.1:3000/presentation/`. The temporary verification server was stopped after checks; these commands start a fresh local preview.
