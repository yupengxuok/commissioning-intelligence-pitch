import { CheckCheck } from "lucide-react";
import { presentationUi as ui } from "@/content/presentation-ui";
import { engineeringVisuals as visual } from "@/content/engineering-visuals";
import { executiveView, type PageSection } from "@/lib/presentation-view";
import { ContentCard } from "./content-card";
import { Citations } from "./citations";
import { CapabilityLabel } from "./capability-label";
import { ComplementarityDiagram, DiagnosticWorkspace, EngineeringLoop, ExpertiseLayers, PilotScorecard, ProductPreview, TrainingComparison } from "./engineering-diagrams";

export function HeroDiagram() {
  return <ProductPreview />;
}

function SupportingPoints({ section, offset = 0 }: { section: PageSection; offset?: number }) {
  return <ol className="supporting-points">{section.points.slice(offset).map((point, index) => <ContentCard key={point.title} point={point} index={index + offset} showMaturity={section.maturityLabels.length > 1} />)}</ol>;
}

function Roadmap({ section }: { section: PageSection }) {
  const phases = section.points.map(point => [point]);
  const maturity = ["CURRENT PROTOTYPE", "PROPOSED PILOT", "FUTURE VISION"] as const;
  return <div className="roadmap-phases">{phases.map((points, index) => <div className="roadmap-phase" key={visual.roadmap[index]}><div className="phase-marker">0{index + 1}<span /></div><CapabilityLabel maturity={maturity[index]} /><ol>{points.map((point, pointIndex) => <ContentCard key={point.title} point={point} index={pointIndex} />)}</ol><p className="phase-gate">{visual.gates[index]}</p></div>)}</div>;
}

function PlatformArchitecture({ section }: { section: PageSection }) {
  return <div className="platform-architecture"><ol className="platform-capabilities">{section.points.slice(0, 4).map((point, index) => <ContentCard key={point.title} point={point} index={index} />)}</ol><div className="platform-bus" aria-hidden="true"><i /><i /><i /><i /></div><ol className="platform-engine"><ContentCard point={section.points[4]!} index={4} /></ol><p className="capability-boundary">{executiveView.capabilityNote}</p></div>;
}

export function SectionVisual({ section }: { section: PageSection }) {
  const layout = section.visual.type;
  const compactDetail = ["01", "02", "03", "04", "05", "07", "08", "10"].includes(section.id);
  return <div className={`section-visual visual-${layout}`}>
    {layout === "risk-chain" && <figure className="industry-statistics"><div>{executiveView.evidence.statistics.map(stat => <div className="industry-stat" key={stat.value}><strong>{stat.value}</strong><p>{stat.label}</p><small>{stat.scope}</small></div>)}</div><figcaption><Citations ids={executiveView.evidence.referenceIds} /><p>{executiveView.evidence.scopeNote}</p></figcaption></figure>}
    {layout === "learning-comparison" && <TrainingComparison />}
    {layout === "evidence-stack" && <ExpertiseLayers />}
    {layout === "training-interaction" && <DiagnosticWorkspace />}
    {layout === "platform-layers" && <PlatformArchitecture section={section} />}
    {layout === "review-loop" && <EngineeringLoop />}
    {layout === "pilot-scorecard" && <div className="commercial-opportunity"><p className="commercial-kicker">{ui.valueLabel}</p><ul className="value-drivers">{executiveView.valueDrivers.map(value => <li key={value}><CheckCheck aria-hidden="true" />{value}</li>)}</ul><p className="commercial-kicker">{ui.commercialLabel}</p><div className="commercial-models">{executiveView.commercialization.map(model => <div key={model.title}><h3>{model.title}</h3><p>{model.detail}</p></div>)}</div><p className="commercial-note">{executiveView.commercialNote}</p></div>}
    {layout === "pilot-scorecard" && <PilotScorecard />}
    {layout === "gated-roadmap" && <Roadmap section={section} />}
    {layout === "complementary-strengths" && <ComplementarityDiagram />}
    {layout === "complementary-strengths" && <div className="discussion-topics"><p className="commercial-kicker">{ui.discussionLabel}</p><ol>{executiveView.discussionTopics.map((topic, index) => <li key={topic}><span>0{index + 1}</span>{topic}</li>)}</ol></div>}
    {compactDetail && <details className="engineering-detail"><summary><span>{visual.detailLabel}</span><span>{visual.detailHint}<span aria-hidden="true"> +</span></span></summary><SupportingPoints section={section} offset={section.id === "01" ? 1 : 0} /></details>}
  </div>;
}
