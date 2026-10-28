import { ArrowDown, ArrowRight, FileText, Network, ScanLine, UserRoundCheck, Workflow } from "lucide-react";
import { platform } from "@/content/platform";

export function PlatformDiagram() {
  const d = platform.diagram;
  return <figure className="platform-diagram" aria-label="Conceptual platform architecture with prototype knowledge and workflows, engineer review, and unconnected future integrations">
    <div className="diagram-heading"><span className="eyebrow">{d.label}</span><span className="diagram-revision">CIP / A–01</span></div>
    <div className="diagram-inputs">{d.inputs.map(label => <div className="diagram-node" key={label}><FileText aria-hidden="true" /><span>{label}</span></div>)}</div>
    <div className="diagram-connector" aria-hidden="true"><span /><ArrowDown /><span /></div>
    <div className="diagram-core"><div className="core-icon"><Network aria-hidden="true" /></div><div><span className="diagram-micro">PROPOSED INTELLIGENCE LAYER</span><h3>{d.core}</h3><p>{d.coreNote}</p></div><Workflow className="core-workflow" aria-hidden="true" /></div>
    <div className="diagram-connector" aria-hidden="true"><span /><ArrowDown /><span /></div>
    <div className="diagram-inputs diagram-outputs"><div className="diagram-node"><UserRoundCheck aria-hidden="true" /><span>{d.outputs[0]}<small>Human in the loop</small></span></div><div className="diagram-node"><ScanLine aria-hidden="true" /><span>{d.outputs[1]}<small>Digital Twin in development</small></span></div></div>
    <div className="diagram-future"><span className="diagram-micro">{d.future}</span><div>{d.systems.map(label => <span key={label}>{label}</span>)}<ArrowRight aria-hidden="true" /></div><p>Real-time integration not established</p></div>
    <figcaption><span className="size-1.5 rounded-full bg-slate-400" aria-hidden="true" />{d.note}</figcaption>
  </figure>;
}
