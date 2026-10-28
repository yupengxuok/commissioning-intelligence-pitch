# Commissioning Intelligence Platform

A static, presentation-first foundation for an internal data center engineering proposal, structured for later adaptation into a public B2B website. This phase provides the design system, starter content, and two routes. It is not a connected product or a completed business proposal.

面向数据中心工程公司的静态提案展示基础：企业官网模式与 16:9 演示模式共用组件和内容。下方为实际页面截图；交互体验可按运行说明在本地打开。

## Website preview

### Company website · `/`

An enterprise engineering landing page with a conceptual system diagram, capability descriptions, and explicit development boundaries.

![Company website preview showing the engineering headline and conceptual platform architecture](docs/images/website-preview.png)

### Presentation mode · `/presentation/`

A 16:9 proposal workspace with four starter slides, an outline, keyboard navigation, and fullscreen controls.

![Presentation preview showing the 16:9 cover slide, conceptual architecture, outline, and slide navigation](docs/images/presentation-preview.png)

| Website content | Current status |
| --- | --- |
| Engineering knowledge / RAG | Prototype |
| Commissioning / AI Agent workflows | Prototype |
| Digital Twin functionality | In development |
| Real-time PLC and sensor integration | Not established |
| Predictive maintenance | Future vision |

The README displays static screenshots; GitHub does not execute the Next.js application inside Markdown. No hosted website has been deployed as part of this repository upload.

## Local development

Use Node.js 24 LTS (verified with 24.16.0) and npm.

```sh
git clone https://github.com/yupengxuok/commissioning-intelligence-pitch.git
cd commissioning-intelligence-pitch
npm ci
npm run dev
```

Open [website mode](http://127.0.0.1:3000) or [presentation mode](http://127.0.0.1:3000/presentation/).

```sh
npm run typecheck
npm run build
```

The production build generates static files in `out/`. Serve that directory using a static HTTP server with directory index support. Opening the HTML files directly through `file://` is not supported. No production Node server, environment variables, credentials, database, or external AI services are needed. Internal Next.js navigation loads only local static assets.

## Routes and controls

| Route | Purpose |
| --- | --- |
| `/` | Company website scaffold: platform concept, capability placeholders, development boundaries |
| `/presentation/` | Four starter slides in a reusable 16:9 stage |

Presentation controls include Previous/Next, slide dots, outline selection, an outline toggle, and browser fullscreen where available. Use Left/Right, Page Up/Page Down, Space, Home, and End when focus is outside interactive controls. Navigation stops at the first and last slides. Slides scale proportionally on small screens; use landscape or fullscreen for comfortable presentation reading. The outline remains accessible on narrow screens. Browser print prints the currently selected slide; PDF deck export and presenter notes are outside this foundation.

## Structure

```text
src/
  app/
    globals.css              # Tokens, website layout, 16:9 slide styles
    layout.tsx               # Shared metadata and accessibility entry point
    page.tsx                 # Company website scaffold
    presentation/page.tsx    # Presentation route
    not-found.tsx            # Route fallback
  components/
    ui/                      # Locally owned shadcn/ui primitives
    presentation/
      slide.tsx              # Reusable slide frame and starter layouts
      presentation-deck.tsx  # Client-side navigation and fullscreen controls
    brand.tsx
    platform-diagram.tsx     # Shared, explicitly conceptual system diagram
    section.tsx              # Reusable website section frame
    status-badge.tsx         # Consistent capability maturity labels
  content/platform.ts        # Typed proposal copy, slides, diagram and statuses
  lib/utils.ts               # shadcn class composition helper
docs/PROJECT_BRIEF.md         # Positioning, design and content constraints
```

## Stack and component ownership

- Next.js 16.4.3, App Router, TypeScript, React 19.
- Tailwind CSS 4 through its PostCSS plugin.
- Locally owned shadcn/ui Button, Badge, and Card components, adapted to the engineering theme. The Button uses Radix Slot for semantic link composition; no full UI library is shipped.
- Lucide icons, class-variance-authority, clsx, and tailwind-merge.
- Exact versions and `package-lock.json` are committed as project files for reproducible installs. There is no animation library, remote font dependency, tracking, or runtime API integration.

Component configuration lives in `components.json`; future shadcn additions should respect the existing tokens and locally modified primitives. Edit the typed content module before editing individual route markup. Add slide entries and their matching layout to expand the placeholder deck.

## Design reference and version selection

[nobruf/shadcn-landing-page](https://github.com/nobruf/shadcn-landing-page) informed the modular landing-page structure, spacing, CTA hierarchy, and component organization. Its source and dependency versions were not copied. This foundation replaces promotional proof sections with engineering context and maturity disclosures.

Next.js 16.4.3 was selected from the stable npm release; Next.js 16 is listed as Active LTS in the [official support policy](https://nextjs.org/support-policy). Static output follows the [official export guide](https://nextjs.org/docs/app/guides/static-exports). Review supported versions and security patches before future releases.

## Content and publication

Read `docs/PROJECT_BRIEF.md` before expanding the site. RAG and AI Agent workflows remain prototypes; Digital Twin functionality is in development; real-time PLC/sensor integration is not established; predictive maintenance remains a future vision. The diagram is conceptual and contains no operational data.

The pages currently include internal proposal labels and `noindex, nofollow` metadata. These are editorial and indexing controls, not access protection. Use an appropriately restricted host for internal materials. Before a public adaptation, review approved positioning and evidence, replace proposal-specific copy, and deliberately review the indexing settings. This task does not register, publish, or deploy a hosted website.

## Foundation scope

Included: responsive route scaffolds, shared content and visual primitives, conceptual diagram, maturity labels, and local presentation controls.

Deferred: full proposal narrative, case studies, customer evidence, confirmed partnerships, contact submission, live dashboards, backend services, authentication, Digital Twin behavior, device integration, predictive maintenance, and AI execution.
