import type { SupportingPoint } from "@/content/presentation";
import { presentationUi as ui } from "@/content/presentation-ui";
import { CapabilityLabel } from "./capability-label";
import { Citations } from "./citations";
import { cn } from "@/lib/utils";

export function ContentCard({ point, index, className, showMaturity = false }: { point: SupportingPoint; index: number; className?: string; showMaturity?: boolean }) {
  return <li className={cn("content-card", className)}><div className="point-topline"><span className="point-index">{String(index + 1).padStart(2, "0")}</span><span className="evidence-basis">{ui.evidenceLabels[point.basis]}</span></div><h3>{point.title}</h3><p className="point-detail">{point.detail}</p>{((showMaturity && point.maturity) || point.referenceIds?.length) ? <div className="point-meta">{showMaturity && point.maturity && <CapabilityLabel maturity={point.maturity} />}{point.referenceIds && <Citations ids={point.referenceIds} compact />}</div> : null}</li>;
}

// Evidence may be qualitative. A number is never inferred from a source or diagram.
export function EvidenceStatistic({ point, index }: { point: SupportingPoint; index: number }) {
  return <ContentCard point={point} index={index} className="evidence-statistic" />;
}
