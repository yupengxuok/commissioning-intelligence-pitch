# Business presentation content review

Status: ten-section content draft complete; internal company approval and pilot evidence remain outstanding.

## Scope and preservation

The user-supplied brief, **Task: Create the Missing 10-Section Business Presentation**, authorizes creation after confirming the original repository contains only four starter slides. Its ten titles and sequence are preserved in `src/content/presentation.ts`. Each section includes a headline, subtitle, one business argument, 4–5 supporting points, visual description, takeaway, transition, 30–60-second speaker narrative, references where applicable, and maturity labels.

The original `src/content/platform.ts`, four slides, components, routes, styles, dependencies, and project brief are unchanged. The new content is not wired into the carousel: it is structured for the later continuous-scrolling presentation. No UI or operational product functionality is implemented here. The preliminary reference register has been extended; older references remain available, with historical cost figures held rather than used.

## Claims requiring company confirmation

| Area | Confirmation required |
| --- | --- |
| Engineering experience | Leadership approval of the brief-supplied power and liquid-cooling commissioning description; publishable evidence of scope without invented project names, customers, certifications, or results. |
| Records and commercial rights | Inventory and quality of issue logs, manuals, reports, and checklists; ownership, permitted retrieval/simulation use, redaction, customer separation, retention, and commercial reuse rights. Possession is not permission. No Delta/AWS data ownership or access is asserted. |
| Review capacity | Named engineers, authority, review effort, version control, case approval, and correction responsibilities. |
| Prototype demonstrations | Repeatable demonstrations and scope for document RAG, knowledge retrieval, Agent workflows, and Digital Twin elements. The latest brief reports demonstrations; this is not independent evaluation or production readiness. |
| Pilot feasibility | An available, authorized set of 10–20 verified historical scenarios; equipment scope, users, sponsor, cost ceiling, evaluation split, and acceptance criteria. The scenario count is proposed, not an assertion that a library exists. |
| Value and pricing | Baseline task effort, review/support cost, repeat work and delay records, willingness to pay, and an approved offer. Subscriptions and project workspaces are hypotheses; no price, savings, revenue, ROI, or payback is established. |
| Google discussion | Whether a meeting is arranged and what may be said publicly. No approved partnership, funding, credits, resources, introductions, selected stack, or commitments. |
| Operational data | Terms of exploratory manufacturer discussions; written rights for PLC, sensor, alarm, and time-series data. No working customer integration, autonomous control, or live operational twin is claimed. |
| Cross-site reuse | Aggregation permissions, comparable asset/exposure data, failure taxonomy, and confidentiality controls. Issue counts alone do not establish fleet failure rates or predictive performance. |

## Evidence classification and source checks

Supporting points distinguish `company-brief`, `industry-source`, `proposal`, and `illustrative` evidence. Source IDs resolve to `src/content/references.ts`. External evidence does not verify company capabilities. Illustrative cases are not customer incidents.

### Uptime Institute: 2025 evidence and denominator limits

Section 02 cites the May 6, 2025 release as historical context and uses **no Uptime percentages or cost amounts**. It does not call it the latest report. Direct retrieval of the requested canonical release returned 403; its indexed text and an official publisher-subdomain copy were available. The full report and survey instruments were not reviewed.

Candidate figures encountered in research are excluded from presentation copy:

| Candidate | Scope stated by the 2025 release | Denominator limit / decision |
| --- | --- | --- |
| Nearly 40% | Organizations reporting a major human-error-caused outage over the preceding three years. | Response count and detailed filters undisclosed. Not a percentage of all outages; omit. |
| 85% | Procedure non-adherence or process flaws within the human-error-related incidents discussed beforehand. | Conditional subset; underlying count, coding, and overlap rules undisclosed; omit. |

Do not multiply these figures, interpret them as an AI benefit, or blend them with the retained 2024-report findings. Establish report and survey years, event severity, population, question-specific sample size, time window, exclusions, and multiple-response rules before adding numerical charts. The financial case uses proposed company workflow measurements, not downtime estimates.

### ASHRAE

The requested Commissioning & Performance Validation page was reviewed for context on commissioning coordination and feedback. It is not endorsement of this software or proof of training effectiveness. AI data center describes a facility workload. No paid standard text, diagrams, or procedures are reproduced; no certification or compliance claim is made.

### Google Cloud

The requested manufacturing page was reviewed; supplemental official storage, search-access, and agent references are recorded. They describe vendor capabilities. Potential fit is our inference, not an approved company architecture. No vendor customer results are reused as our metrics. Confirm current product names, availability, regions, data terms, security configuration, and costs before an external technical proposal.

## Maturity and technical boundaries

- **CURRENT PROTOTYPE:** brief-supplied demonstrations of document retrieval, RAG, knowledge access, Agent workflows, and Digital Twin elements. Their coverage and fidelity require confirmation; broader Digital Twin functionality remains under development, consistent with the foundation brief.
- **PROPOSED PILOT:** approved cases, isolated rules-based training, document readiness checks, cited assistance, handover records, review, and evaluation. Training means engineer learning support, not permission to train models on customer/OEM material.
- **FUTURE VISION:** authorized operational-data integration, calibrated physics simulation, cross-site intelligence, predictive maintenance, and human-supervised optimization. All depend on new rights, data, and validation.
- Section 05's coolant distribution unit example is invented for illustration. A deterministic case defines observations and responses; AI explains references and may abstain. All indications are simulated. AI does not invent physics or change the hidden fault.
- Document checks do not authorize physical readiness. The passport is a record package, not certification or a live twin. Assistance does not authorize switching, energization, protection changes, equipment acceptance, or autonomous control.

## Pilot interpretation and bias controls

Use a narrow 10–20-scenario library with separate development and evaluation cases. Prevent solution leakage into retrieval or practice. Compare the same approved sources with and without AI; balance engineer experience/difficulty, counterbalance order using distinct matched cases, and blind assessor condition where practical. Define rubrics and quality gates beforehand; leadership must set numerical thresholds rather than adopt invented targets.

Measure diagnosis quality/time, procedure/evidence use, justified escalation, readiness omissions, training preparation effort, and delayed unseen-case retention. Record unsuccessful attempts, hints, abstentions, and unsupported suggestions. Exercise delay/rework measures are proxies; actual field outcomes require follow-up. Include preparation, expert review, learner effort, software/cloud, maintenance, and support in costs. Report paired outcomes and variation with participant/case counts; repeated attempts are not independent samples. This small feasibility pilot cannot prove fleet reliability, avoided outages, or generalizable ROI.

## Public adaptation gate

Leadership must approve company assertions, evidence rights, public wording, and Google references before B2B publication. Retain adjacent maturity disclosures and remove internal-only specifics after review. UI and publication are separate future tasks.

## Verification completed

- Exactly ten unique section IDs in the requested title order, each with all required content fields and 4–5 points; no TODO, TBD, lorem ipsum, or placeholder text.
- Ten matching Markdown speaker-note entries; spoken narratives contain 102–110 words each, suitable for roughly 45–55 seconds at 120–140 words per minute.
- All section/point citations resolve within eight unique source records; industry-source points have explicit citations. No numerical Uptime or ROI percentages appear in the presentation.
- Maturity labels validated; original platform content and all UI files compared against HEAD and unchanged.
- `npm run typecheck` and `npm run build` passed. The build still renders the existing foundation routes; the new content awaits the separate scrolling-UI implementation.
