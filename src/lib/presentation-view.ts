// Build-time/server component input only. Never pass the source records to a client component.
// Explicitly omit internal narratives and transitions from rendered page data.
import { executiveContent, presentation, presentationSections } from "@/content/presentation";
import { references } from "@/content/references";

export const pageMeta = {
  title: presentation.title,
  status: presentation.status,
  companyEvidence: presentation.companyEvidence,
  terminology: presentation.terminology,
  productBoundary: presentation.productBoundary,
  decision: executiveContent.decision,
};

export const executiveView = executiveContent;

export const pageSections = presentationSections.map(section => ({
  id: section.id,
  title: section.title,
  headline: section.headline,
  subtitle: section.subtitle,
  businessArgument: section.businessArgument,
  points: section.points,
  visual: section.visual,
  keyTakeaway: section.keyTakeaway,
  referenceIds: section.referenceIds,
  maturityLabels: section.maturityLabels,
}));

export type PageSection = (typeof pageSections)[number];

const usedIds = new Set<string>(pageSections.flatMap(section => [...section.referenceIds]));
export const pageReferences = references.filter(reference => usedIds.has(reference.id));

export function referenceNumber(id: string) {
  return pageReferences.findIndex(reference => reference.id === id) + 1;
}
