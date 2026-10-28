import { ArrowUpRight } from "lucide-react";
import type { ReferenceId } from "@/content/references";
import { presentationUi as ui } from "@/content/presentation-ui";
import { pageReferences, referenceNumber } from "@/lib/presentation-view";

export function Citations({ ids, compact = false }: { ids: readonly ReferenceId[]; compact?: boolean }) {
  if (!ids.length) return null;
  return <ul className={compact ? "citations citations-compact" : "citations"} aria-label={ui.sources}>{ids.map(id => {
    const reference = pageReferences.find(item => item.id === id);
    if (!reference) return null;
    return <li key={id}><a href={reference.url} target="_blank" rel="noreferrer" aria-label={`${reference.title} (opens in a new tab)`}><span>[{referenceNumber(id)}]</span>{!compact && <span>{reference.publisher}</span>}<ArrowUpRight aria-hidden="true" /></a></li>;
  })}</ul>;
}

export function ReferenceList() {
  return <details className="source-register" id="sources"><summary>{ui.sources}<span>{String(pageReferences.length).padStart(2, "0")}</span></summary><ol>{pageReferences.map(reference => <li key={reference.id}><span className="source-number">{referenceNumber(reference.id)}</span><div><a href={reference.url} target="_blank" rel="noreferrer">{reference.title}<ArrowUpRight aria-hidden="true" /></a><p>{reference.publisher}</p></div></li>)}</ol></details>;
}
