export type Maturity = "Prototype" | "In development" | "Not connected" | "Future vision";

export const platform = {
  name: "Commissioning Intelligence Platform",
  shortName: "Commissioning Intelligence",
  category: "DATA CENTER ENGINEERING",
  edition: "INTERNAL PROPOSAL / FOUNDATION 0.1",
  headline: "Engineering clarity.\nFrom commissioning\nto operations.",
  description: "A proposed intelligence layer for data center engineering. Connecting technical knowledge, commissioning workflows, and a future view of asset performance.",
  statement: "Built around engineering evidence.",
  statementDescription: "A foundation for discussing how knowledge and workflows could support the commissioning lifecycle. Capabilities below reflect their current maturity.",
  navigation: [
    { label: "Platform", href: "#platform" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Development", href: "#development" },
  ],
  capabilities: [
    { id: "01", icon: "knowledge", title: "Engineering knowledge", status: "Prototype", description: "RAG workflows explore retrieval from technical reference material. Source validation and engineering review remain essential." },
    { id: "02", icon: "workflow", title: "Commissioning workflows", status: "Prototype", description: "AI Agent workflows explore assistance with engineering tasks. These are prototypes, with human review required." },
    { id: "03", icon: "twin", title: "Asset context", status: "In development", description: "Digital Twin functionality is under development. Operational models and live asset connectivity are not established." },
  ] satisfies { id: string; icon: "knowledge" | "workflow" | "twin"; title: string; status: Maturity; description: string }[],
  development: {
    eyebrow: "DEVELOPMENT BOUNDARY",
    title: "A clear view of what comes next.",
    description: "This proposal separates working experiments from development priorities and longer-term ambitions.",
    items: [
      { title: "RAG & AI Agent workflows", status: "Prototype" },
      { title: "Digital Twin functionality", status: "In development" },
      { title: "Real-time PLC & sensor integration", status: "Not connected" },
      { title: "Predictive maintenance", status: "Future vision" },
    ] satisfies { title: string; status: Maturity }[],
  },
  diagram: {
    label: "PLATFORM CONCEPT",
    note: "Conceptual architecture · No live connections",
    inputs: ["Technical references", "Commissioning records"],
    core: "Engineering intelligence",
    coreNote: "Knowledge + workflow prototypes",
    outputs: ["Engineer review", "Asset context"],
    future: "Future integration boundary",
    systems: ["PLC & sensors", "Operational systems"],
  },
  footer: "Internal business proposal. Static foundation for discussion.",
  disclosure: "Illustrative architecture only. No customer data, live telemetry, or external AI services.",
} as const;

export const slides = [
  { id: "overview", label: "Platform overview", eyebrow: "01 / THE PROPOSAL", title: "Commissioning\nIntelligence\nPlatform", description: "An engineering foundation for the next chapter of data center commissioning.", kind: "cover" },
  { id: "architecture", label: "Concept architecture", eyebrow: "02 / THE CONCEPT", title: "From knowledge\nto engineering context.", description: "A conceptual relationship between reference material, workflow prototypes, and engineering review. Connections are illustrative.", kind: "architecture" },
  { id: "maturity", label: "Capability maturity", eyebrow: "03 / CURRENT MATURITY", title: "Make the boundary clear.", description: "A shared view of the present state. No production readiness, live integration, or performance outcomes are implied.", kind: "maturity" },
  { id: "next", label: "Proposal workspace", eyebrow: "04 / TO BE DEVELOPED", title: "The next discussion\nstarts here.", description: "Reserved for the next proposal phase. Define the engineering scope, evidence requirements, and review criteria before expanding the narrative.", kind: "placeholder" },
] as const;

export type SlideContent = (typeof slides)[number];

export const proposalPlaceholder = ["Engineering scope", "Validation approach", "Delivery priorities"];
