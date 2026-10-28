/**
 * Source register for the ten-section business presentation.
 * Vendor/industry evidence is distinct from company assertions and proposed results.
 * Historical references are retained; only section-linked references support the new text.
 */
export type ReviewReference = {
  id: string;
  publisher: string;
  title: string;
  url: string;
  reviewedOn: string;
  supports: string;
  limitations: readonly string[];
};

export const references = [
  {
    id: "uptime-outage-analysis-2025",
    publisher: "Uptime Institute",
    title: "Uptime Announces Annual Outage Analysis Report 2025",
    url: "https://uptimeinstitute.com/about-ui/press-releases/uptime-announces-annual-outage-analysis-report-2025",
    reviewedOn: "2026-10-27",
    supports: "The May 6, 2025 release reports nearly 40% of organizations with a major human-error-caused outage over three years, and 85% within that incident subset involving procedure non-adherence or process flaws. Used with those scopes in the owner-review edition.",
    limitations: [
      "The canonical URL returned 403 on direct retrieval; its indexed release text and the publisher-hosted copy below were checked. The full report was not reviewed.",
      "Publisher copy: https://professionalservices.uptimeinstitute.com/about-ui/press-releases/uptime-announces-annual-outage-analysis-report-2025",
      "Percentages are publisher-reported, not independently reconstructed. The release does not provide question-level response counts, exact survey filters, or overlap/coding details. Do not infer a universal rate or a product-preventable fraction.",
      "A 2025 report is historical evidence, not a claim about the latest 2026 findings or company performance.",
    ],
  },
  {
    id: "ashrae-performance-validation",
    publisher: "ASHRAE",
    title: "Commissioning & Performance Validation — AI Data Center Energy Performance Framework",
    url: "https://www.ashrae.org/technical-resources/topics-and-initiatives/ai-data-center/commissioning-performance-validation",
    reviewedOn: "2026-10-27",
    supports: "ASHRAE's framework discusses accelerated power/cooling deployment, commissioning coordination, and timely feedback to design and operations.",
    limitations: [
      "This public framework page is contextual guidance, not certification of this platform or evidence that AI training improves commissioning outcomes.",
      "Its use of AI data center refers to the facility workload; it does not establish endorsement of an AI commissioning assistant.",
      "No paid standard text, diagrams, quotations, or operational procedures are reproduced.",
    ],
  },
  {
    id: "google-cloud-manufacturing",
    publisher: "Google Cloud",
    title: "Google Cloud for manufacturing",
    url: "https://cloud.google.com/solutions/manufacturing",
    reviewedOn: "2026-10-27",
    supports: "Google presents cloud infrastructure, enterprise AI, search, agents, and industrial data capabilities for manufacturing. Potential fit is our proposal.",
    limitations: [
      "Do not transfer vendor customer stories, performance numbers, partner status, or predictive capabilities to our company.",
      "No Google approval, credits, funding, technical staffing, customer introductions, or service commitments have been agreed.",
      "Specific products, availability, regions, architecture, costs, and data governance require a separate technical discussion.",
    ],
  },
  {
    id: "uptime-outage-analysis-2024",
    publisher: "Uptime Institute",
    title: "Annual outage analysis 2024 — Executive summary and sample pages",
    url: "https://datacenter.uptimeinstitute.com/rs/711-RIA-145/images/2024.Resiliency.Survey.ExecSum.pdf",
    reviewedOn: "2026-10-27",
    supports: "Historical industry context about outage consequences and process-related risk; not company-specific evidence.",
    limitations: [
      "The March 2024 report includes findings from the 2023 survey. Report year is not survey year.",
      "The executive summary's 54% and 16% cost findings concern respondents reporting the cost of their most recent significant, serious or severe outage. They do not describe all outages or all facilities.",
      "The cost-response sample size and exact filtering cannot be established from the executive summary. Hold numerical publication until the underlying cost figure and question are checked.",
      "Do not substitute n=781 from the separate outage-severity figure as the cost denominator.",
      "The four-in-five preventability statement is respondent opinion about the most recent serious outage, not a measured causal reduction from AI or commissioning.",
      "Do not combine thresholds from different survey years, derive company ROI, or claim that human error solely causes 80% of outages.",
    ],
  },
  {
    id: "ashrae-commissioning-scope",
    publisher: "ASHRAE",
    title: "Commissioning — official publication descriptions",
    url: "https://www.ashrae.org/technical-resources/bookstore/commissioning",
    reviewedOn: "2026-10-27",
    supports: "ASHRAE describes commissioning in relation to Owner's Project Requirements, documented verification, and operations training.",
    limitations: [
      "Public publication descriptions were reviewed, not the full paid standards or guidelines.",
      "Distinguish Guideline 0-2019 from Standard 202-2024. Do not claim ASHRAE endorsement, product certification, AI validation, or demonstrated savings.",
      "A commissioning-process reference does not validate a proposed software workflow or replace equipment-specific approved procedures.",
    ],
  },
  {
    id: "google-cloud-storage",
    publisher: "Google Cloud",
    title: "Cloud Storage overview",
    url: "https://docs.cloud.google.com/storage/docs/introduction",
    reviewedOn: "2026-10-27",
    supports: "Google Cloud documents managed object storage as an infrastructure capability.",
    limitations: [
      "Considering storage for a pilot is our architectural proposal, not a Google recommendation or a deployed company capability.",
      "Data rights, region, retention, identity controls, service costs, and procurement remain to be evaluated.",
    ],
  },
  {
    id: "google-enterprise-search-access",
    publisher: "Google Cloud",
    title: "Configure access controls for custom data sources",
    url: "https://docs.cloud.google.com/gemini/enterprise/docs/identity",
    reviewedOn: "2026-10-27",
    supports: "Google documents data-source access controls for enterprise search applications.",
    limitations: [
      "Source permissions require deliberate configuration and testing; no permission-preserving integration is established in this project.",
      "Confirm current product names, supported sources, region, licensing, and access-control behavior with Google specialists before specifying a pilot stack.",
    ],
  },
  {
    id: "google-agent-platform",
    publisher: "Google Cloud",
    title: "Scale your agents — Gemini Enterprise Agent Platform",
    url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/scale",
    reviewedOn: "2026-10-27",
    supports: "Google documents managed agent runtime, evaluation, and observability capabilities.",
    limitations: [
      "The former Vertex AI Agent Engine overview URL currently redirects here; verify naming and availability for the intended discussion date.",
      "Potential technical alignment is our inference. No Google partnership, funding, endorsement, implemented integration, or commissioning-specific accuracy is established.",
    ],
  },
] as const satisfies readonly ReviewReference[];

export type ReferenceId = (typeof references)[number]["id"];

export const referenceReviewStatus = {
  stage: "CONTENT_DRAFT_COMPLETE_COMPANY_APPROVAL_PENDING",
  presentationClaimsAudited: true,
  uptimeStatisticsApprovedForPublication: false,
  uptimeStatisticsUsedInOwnerReview: true,
  reason: "Executive owner-review edition uses scoped publisher-reported Uptime figures following explicit editorial direction. Sample-count limitations remain documented; public publication is not approved. No demonstrated ROI, deployed pilot products, or Google commitment is claimed.",
} as const;
