# Task 3 — Enterprise visual refinement

## Content integrity

The ten approved sections, headlines, subtitles, points, takeaways, maturity distinctions, and source links are retained. The SHA-256 hashes of `src/content/presentation.ts`, `src/content/references.ts`, `docs/speaker-notes.md`, and `docs/content-review.md` match the pre-task values. Approved supporting copy renders exactly once, with longer explanations available in keyboard-accessible native **Engineering detail** disclosures. These expand in print. No presenter narratives are exported.

## Components changed

- Added `src/components/presentation/engineering-diagrams.tsx`: reusable equipment schematic, compact/full diagnostic workspace, training comparison, three-layer expertise diagram, six-step return loop, pilot scorecard, and complementarity diagram.
- Added `src/content/engineering-visuals.ts`: ancillary diagram labels, evaluation definitions, and explicitly fictional categorical exercise states. No invented operational measurements or company results.
- Updated `section-visual.tsx`: section-specific visual compositions, three roadmap phases, four capability branches feeding one engine, and progressive supporting detail.
- Updated `scrolling-presentation.tsx`: two-column hero with the approved credibility point moved into the opening rather than duplicated.
- Updated `section-heading.tsx` and `content-card.tsx`: reduce redundant maturity badges; preserve distinctions within mixed-stage detail and roadmap phases.
- Updated `src/app/globals.css`: hero sizing, schematic/panel layout, diagram connections, responsive handling, contained mobile scorecard scrolling, citation wrapping, skip-link visibility, and print rules.
- Updated `next.config.ts`: `devIndicators: false`; no runtime/backend changes.
- Updated `README.md` and the current desktop preview. Added laptop/mobile screenshots in `docs/images/refined-hero-laptop.png` and `docs/images/refined-hero-mobile.png`.

## Visual treatments

| Section | Treatment |
| --- | --- |
| 01 | Smaller, balanced two-column hero; static cooling schematic plus diagnostic panel; approved value proposition and credibility statement |
| 02 | Prominent qualitative evidence and direct citations; no unsupported percentages |
| 03 | Reference-led learning versus scenario-based practice |
| 04 | Failure records → tacit knowledge → expert validation |
| 05 | Fictional coolant-distribution exercise: conflicting local/supervisory states, stale signal context, example instructor guidance, diagnostic choices, and explicit simulation/rules/expert responsibilities |
| 06 | Four capability branches, shared connection bus, one Engineering Knowledge Engine |
| 07 | Six-stage directional learning loop with a return path and permission/quality gate |
| 08 | Six evaluation areas, measurement definitions, baseline/AI-assisted columns marked Not measured, and bias-control reminders |
| 09 | Current prototypes, proposed pilot, and future vision in three phases; both future points retained |
| 10 | Engineering contribution versus potential Google Cloud infrastructure capabilities, converging on a proposed scoping discussion |

## Verification

- Production build, TypeScript, and static-export content/privacy verification passed after the implementation changes.
- Browser viewport overrides were set to 1440×900, 1280×800, and 390×844 for visual checks. Layout client widths are 1425, 1265, and 375 respectively because the browser reserves a scrollbar gutter. No page-level horizontal overflow remains.
- At desktop/laptop sizes the approved headline and value proposition are fully above the fold; the exploration action is also within the first viewport.
- Mobile citation overflow found during checking was fixed. The scorecard uses a local horizontal scroller with keyboard focus and a comparison hint; the rest of the page stays within the viewport.
- Ten anchor targets, source URLs, four platform capabilities/one engine, six loop stages, and three roadmap phases are present. Anchor landings remain below sticky navigation. Native detail expansion was exercised and revealed the original source points.
- Screenshots show no development indicator. The keyboard skip link remains functional, is clipped when unfocused, and is hidden with `!important` in print CSS; the loaded browser stylesheet was checked for this print rule.
- No new dependency, real AI API, live device integration, 3D engine, autonomous control, or deployment was introduced.

## Print and remaining review

Disable browser-generated **Headers and footers** in the Print dialog. Background graphics, margins, scaling, browser version, and paper size affect the final PDF. Print CSS expands details and avoids breaking small units without imposing section-per-page pagination. A new full PDF export/pagination audit was not performed in this task; final paper pagination should be reviewed in the intended browser.

The technical schematic is conceptual and the shown states are fictional training examples, not a validated simulator or live equipment data. Company evidence, data permissions, pilot thresholds/economics, and Google discussion terms still require the confirmations already recorded in `docs/content-review.md`.
