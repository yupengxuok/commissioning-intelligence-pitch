import type { ReferenceId } from "./references";

// Public-safe landing copy only. The detailed ten-section proposal stays separate.
export const landingContent = {
  navigation: [
    { id: "opportunity", label: "Overview" },
    { id: "industry", label: "The problem" },
    { id: "product", label: "The product" },
    { id: "advantage", label: "Why us" },
    { id: "business", label: "Pilot to product" },
    { id: "google-cloud", label: "Google Cloud" },
  ],
  hero: {
    eyebrow: "DATA CENTER ENGINEERING / AI PRODUCT CONCEPT",
    headline: "Turn Field Failures Into Engineering Intelligence.",
    subtitle: "Transform real commissioning experience into smarter training, AI-assisted troubleshooting, and reusable engineering knowledge.",
    action: "Explore the product",
    previewLabel: "ENGINEERING INTELLIGENCE / CONCEPT",
    previewNodes: ["Field signals", "Engineering context", "Reviewed decisions"],
    previewFootnote: "Illustrative flow · Engineer supervised",
  },
  industry: {
    eyebrow: "THE INDUSTRY PROBLEM",
    headline: "Human error. Procedural gaps. Real exposure.",
    statistics: [
      { value: "~40%", label: "Organizations reporting major human-error-related outages over the previous three years." },
      { value: "85%", label: "Of those human-error-related incidents, the share involving procedural noncompliance or flawed procedures." },
    ],
    scope: "Publisher-reported research; detailed sample counts are not disclosed. These are not product-preventable outage rates.",
    takeaway: "Real failures are expensive. Realistic training opportunities are limited.",
    referenceIds: ["uptime-outage-analysis-2025"] satisfies readonly ReferenceId[],
  },
  product: {
    eyebrow: "THE PRODUCT",
    headline: "See the engineering reasoning.",
    statement: "A proposed training exercise: compare local readings and timestamps before assuming a hydraulic fault.",
    maturity: "PROPOSED PILOT",
    capabilities: [
      { verb: "Train", label: "Realistic failure simulation" },
      { verb: "Validate", label: "Pre-commissioning readiness" },
      { verb: "Troubleshoot", label: "AI-assisted diagnostics" },
      { verb: "Preserve", label: "Digital equipment knowledge" },
    ],
  },
  advantage: {
    eyebrow: "WHY US",
    headline: "Real Engineering Experience Is Our Competitive Advantage.",
    pillars: ["Real Field Cases", "Tacit Engineering Knowledge", "Expert Validation"],
    takeaway: "Every verified resolution can improve the next engineering decision.",
  },
  business: {
    eyebrow: "THE BUSINESS OPPORTUNITY",
    headline: "From pilot to product.",
    scopeValue: "10–20",
    scopeLabel: "Verified Failure Scenarios — Proposed Pilot",
    buyersLabel: "POTENTIAL BUYERS",
    buyers: ["Commissioning Contractors", "Equipment Manufacturers", "Data Center Operators"],
    valueLabel: "POTENTIAL VALUE",
    values: ["Less training effort", "Faster troubleshooting", "Fewer avoidable delays", "Reduced expert escalation"],
    path: ["Proposed Paid Pilot", "Customer Validation", "Potential Recurring Software Licensing"],
    note: "One authorized equipment scope. Measure quality, effort, and cost before expanding. Benefits and licensing remain hypotheses, not achieved results or signed contracts.",
  },
  google: {
    eyebrow: "THE PROPOSED NEXT STEP",
    headline: "Explore a Joint AI Commissioning Pilot.",
    columns: [
      { label: "OUR STRENGTH", text: "Field experience, troubleshooting records, engineering validation." },
      { label: "POTENTIAL GOOGLE CLOUD VALUE", text: "Cloud infrastructure, enterprise AI/search, agent technologies, technical consultation." },
    ],
    action: "Define one pilot scope. Validate the architecture. Measure business value.",
    note: "A proposed discussion, with no partnership, funding, support, or resource commitments agreed.",
    referenceIds: ["google-cloud-manufacturing"] satisfies readonly ReferenceId[],
  },
  sourcesLabel: "References",
  boundariesLabel: "Proposal boundaries",
  boundaries: "Proposed, engineer-reviewed products. Simulated states are fictional. No live PLC/sensor integration, autonomous control, deployed customer solution, or demonstrated ROI is claimed. Data reuse requires permission.",
  top: "Back to top",
} as const;
