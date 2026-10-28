# Project brief: Commissioning Intelligence Platform

## Purpose and audience

Build a static presentation foundation for an internal business proposal at a data center engineering company. The audience includes engineering leadership, commissioning teams, operations stakeholders, and internal decision makers. The same components and content structure should later support a public B2B company website after an editorial and evidence review.

Position the platform as a **proposed engineering intelligence layer** that explores technical knowledge retrieval and commissioning workflow assistance, with asset context as a development direction. Engineering evidence and human judgment remain central. Avoid claims of autonomous commissioning or production readiness.

## This phase

1. `/presentation/`: a 16:9 slide framework with four starter slides. The last slide explicitly reserves space for future proposal content.
2. `/`: a future company website scaffold with concept, capability, and maturity sections.
3. Reusable slide, section, diagram, brand, maturity badge, and UI components.
4. Typed, centralized content in `src/content/platform.ts`.
5. Reproducible static production build and project documentation.

This phase establishes the foundation and placeholder routes. It does not complete a business case, establish integrations, validate the prototypes, or publish a site.

## Product maturity: required language

| Area | Current state | Editorial rule |
| --- | --- | --- |
| RAG workflows | Prototype | Describe exploration or prototyping; never imply verified production retrieval |
| AI Agent workflows | Prototype | Require engineering review; no claims of autonomous operation |
| Digital Twin | Under development | Describe asset context as a direction; never present a working live twin |
| Real-time PLC and sensor integration | Not established | Label diagrams conceptual; no connected, streaming, or live indicators |
| Predictive maintenance | Future vision | Present only as a possible longer-term direction; no prediction or reliability promises |

## Content accuracy rules

- No actual customer data, confidential documents, project files, site identifiers, or operational telemetry.
- No fabricated performance numbers, savings, uptime, adoption metrics, certifications, testimonials, deployments, or customer logos.
- Do not imply Google, AWS, or Delta are confirmed product partners. No partner row or affiliation badges without explicit, verified authorization.
- Keep maturity labels adjacent to capability descriptions. Do not bury limitations in a footer while making stronger claims in a headline.
- Distinguish a conceptual flow from implemented functionality. Diagram edges show proposed relationships, not established integrations or real data movement.
- Prototype results are not validated engineering evidence. Human review and source validation remain necessary.
- Placeholder content must remain visibly identifiable. Replace placeholders only with approved copy and substantiated claims.
- Do not imply deadlines, budgets, milestones, or commitments that have not been supplied.
- Reassess every public claim before changing the website from internal proposal mode to public company mode.

## Design constraints

- Premium enterprise engineering style: deliberate grids, generous whitespace, thin technical rules, restrained surfaces, readable typography.
- Primary navy `#0B2545`; secondary blue `#1D4ED8`; white and light gray backgrounds.
- Neutral system typography; local rendering without remote font services.
- Direction inspired by Siemens enterprise clarity and Palantir-style product diagrams, without copying branding or suggesting affiliation.
- Use Lucide icons and a native HTML/CSS system diagram. No fake 3D server renders, neon colors, generic AI gradients, decorative charts, or fabricated telemetry.
- Minimal animation; respect reduced motion. This foundation uses only short color transitions and optional smooth scrolling.
- Semantic links and controls, visible keyboard focus, a skip link, clear headings, accessible control names, disabled presentation boundaries, and announced slide changes.
- Preserve a true 16:9 stage in presentation mode. The surrounding controls may reflow; slide content scales as a single composition. Fullscreen is browser-dependent and must have a readable fallback.

## Technical constraints

- Next.js App Router, TypeScript, Tailwind CSS, locally owned shadcn/ui primitives, Lucide icons.
- Use a currently supported stable Next.js release; pin installed versions with a lockfile.
- Static export only. No backend, database, authentication, API keys, external AI calls, analytics, or contact submission.
- Minimize dependencies; use React state for presentation interactions and browser fullscreen APIs only.
- Centralize business copy and maturity status in the content module. Keep visual primitives independent of route-level markup.
- No deployment or external publication in this foundation task.

## Acceptance and extension

The production build must succeed, emit both route entry points, and require no credentials or live services. Website navigation must reach its sections and presentation route. Presentation navigation must respect slide boundaries, support direct slide selection, and retain the 16:9 aspect ratio.

Future work may expand the narrative, approved architecture, validation approach, and delivery priorities. Any new product behavior, public publication, evidence claims, or service integration requires a separate scoped implementation and content review.
