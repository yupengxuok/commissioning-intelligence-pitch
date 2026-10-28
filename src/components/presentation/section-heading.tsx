import { executiveView, type PageSection } from "@/lib/presentation-view";
import { CapabilityLabel } from "./capability-label";

export function SectionHeading({ section, hero = false }: { section: PageSection; hero?: boolean }) {
  const Heading = hero ? "h1" : "h2";
  const count = executiveView.counts.find(item => item.section === section.id);
  return <header className="business-heading"><p className="section-kicker"><span>{section.id}</span>{section.title}</p><Heading id={`heading-${section.id}`}>{section.headline}</Heading><p className="business-subtitle">{section.subtitle}</p>{count && <div className="scope-count"><strong>{count.value}</strong><span>{count.label}</span></div>}{section.id !== "09" && section.maturityLabels.length > 0 && <div className="maturity-labels">{section.maturityLabels.map(maturity => <CapabilityLabel key={maturity} maturity={maturity} />)}</div>}</header>;
}
