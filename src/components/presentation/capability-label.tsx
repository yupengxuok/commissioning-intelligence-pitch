import type { CapabilityMaturity } from "@/content/presentation";
import { cn } from "@/lib/utils";

export function CapabilityLabel({ maturity }: { maturity: CapabilityMaturity }) {
  return <span className={cn("capability-label", {
    "label-current": maturity === "CURRENT PROTOTYPE",
    "label-pilot": maturity === "PROPOSED PILOT",
    "label-future": maturity === "FUTURE VISION",
  })}><span aria-hidden="true" />{maturity}</span>;
}
