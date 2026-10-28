import { ArrowDown, ArrowRight, BookOpenText, CheckCheck, CircuitBoard, ClipboardCheck, Database, FileCheck2, Network, Search, ShieldCheck, Workflow } from "lucide-react";
import { engineeringVisuals as visual } from "@/content/engineering-visuals";
import { presentationUi as ui } from "@/content/presentation-ui";

export function EquipmentSchematic() {
  const labels = visual.simulation.equipment;
  return <svg className="equipment-schematic" viewBox="0 0 640 230" role="img" aria-label="Conceptual isolated cooling loop with a pump, flow sensor, cooling load and supervisory signal path">
    <path d="M105 85H535V170H105Z" fill="none" stroke="#477aa3" strokeWidth="3" />
    <path d="m285 80 9 5-9 5m125 75-9 5 9 5" fill="none" stroke="#477aa3" strokeWidth="2" />
    <rect x="56" y="65" width="96" height="125" rx="4" fill="#f3f7fc" stroke="#8ba6c6" />
    <path d="M75 91h58m-58 16h58m-58 16h58m-58 16h58m-58 16h58" stroke="#9ab0cb" />
    <circle cx="215" cy="85" r="22" fill="white" stroke="#123b72" strokeWidth="2" /><path d="m205 72 22 13-22 13Z" fill="#123b72" />
    <circle cx="355" cy="85" r="17" fill="#e5effa" stroke="#123b72" strokeWidth="2" /><path d="m346 92 18-14m-9 7v11" stroke="#123b72" strokeWidth="2" />
    <rect x="487" y="64" width="70" height="126" rx="3" fill="#f3f7fc" stroke="#8ba6c6" /><path d="M501 80v94m14-94v94m14-94v94m14-94v94" stroke="#9ab0cb" />
    <path d="M355 67V24H475" fill="none" stroke="#bd9146" strokeWidth="1.5" strokeDasharray="5 4" /><rect x="475" y="9" width="134" height="29" rx="3" fill="#fff6e6" stroke="#dac49f" />
    <g fill="#193e68" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle"><text x="104" y="211">{labels[0]}</text><text x="215" y="126">{labels[1]}</text><text x="355" y="126">{labels[2]}</text><text x="522" y="211">{labels[3]}</text><text x="542" y="28" fontSize="10">{labels[4]}</text></g>
  </svg>;
}

export function ProductPreview() {
  const preview = visual.preview;
  return <figure className="product-preview"><div className="preview-heading"><CircuitBoard aria-hidden="true" /><span>{preview.title}</span><small>{preview.label}</small></div><EquipmentSchematic /><div className="preview-anomaly"><span aria-hidden="true">!</span>{preview.anomaly}</div><div className="preview-intelligence"><Search aria-hidden="true" /><p>{preview.guidance}</p></div><figcaption>{preview.note}</figcaption></figure>;
}

export function DiagnosticWorkspace({ compact = false }: { compact?: boolean }) {
  const sim = visual.simulation;
  return <figure className={`diagnostic-workspace ${compact ? "workspace-compact" : ""}`}>
    <div className="workspace-top"><span><CircuitBoard aria-hidden="true" />{compact ? sim.compactTitle : sim.exercise}</span><span className="simulation-tag">{sim.label}</span></div>
    <div className="workspace-body"><div className="workspace-equipment"><div className="workspace-caption">{sim.system}<span>SCHEMATIC / CDU</span></div><EquipmentSchematic /><div className="reading-grid">{sim.readings.map(reading => <div className={`reading reading-${reading.state}`} key={reading.label}><span>{reading.label}</span><strong>{reading.value}</strong></div>)}</div><div className="alarm-context"><span aria-hidden="true">!</span>{sim.alarm}</div></div>
      <div className="instructor-panel"><div className="instructor-title"><BookOpenText aria-hidden="true" />{sim.instructor}</div><p>{sim.hint}</p>{!compact && <><span className="choices-caption">{sim.choicesLabel}</span><ol className="diagnostic-choices">{sim.choices.map((choice, index) => <li key={choice}><span>{String(index + 1).padStart(2, "0")}</span>{choice}<ArrowRight aria-hidden="true" /></li>)}</ol></>}<div className="instructor-source"><FileCheck2 aria-hidden="true" />{sim.guidance}</div></div></div>
    {!compact && <div className="simulation-responsibilities">{[sim.rules, sim.guidance, sim.review].map((label, index) => <span key={label}><span>{index + 1}</span>{label}</span>)}</div>}
    <figcaption>{sim.disclaimer}</figcaption>
  </figure>;
}

export function ExpertiseLayers() {
  const icons = [Database, Network, ShieldCheck];
  return <figure className="expertise-layers"><div className="layer-track">{visual.advantage.map((layer, index) => { const Icon = icons[index]; return <div className="expertise-layer" key={layer.title}><span className="layer-number">0{index + 1}</span><Icon aria-hidden="true" /><h3>{layer.title}</h3><p>{layer.note}</p>{index < 2 && <ArrowRight className="layer-arrow" aria-hidden="true" />}</div>; })}</div><figcaption><ShieldCheck aria-hidden="true" />{visual.knowledgeGate}</figcaption></figure>;
}

export function TrainingComparison() {
  return <figure className="training-paths">{visual.training.map((label, index) => <div key={label}><span className="training-path-icon">{index === 0 ? <BookOpenText aria-hidden="true" /> : <Workflow aria-hidden="true" />}</span><h3>{label}</h3><ol>{visual.trainingPaths[index].map((item, step) => <li key={item}><span>0{step + 1}</span>{item}{step < 2 && <ArrowDown aria-hidden="true" />}</li>)}</ol></div>)}</figure>;
}

export function EngineeringLoop({ compact = false }: { compact?: boolean }) {
  const icons = [CircuitBoard, CheckCheck, Database, Workflow, Network, ClipboardCheck];
  return <figure className="engineering-loop"><ol>{ui.loop.map((label, index) => { const Icon = icons[index]; return <li key={label}><span className="loop-step-index">0{index + 1}</span><Icon aria-hidden="true" /><span>{label}</span><ArrowRight className="direction-arrow" aria-hidden="true" /></li>; })}</ol>{!compact && <figcaption><ShieldCheck aria-hidden="true" />{visual.loopGate}</figcaption>}</figure>;
}

export function PilotScorecard() {
  const score = visual.scorecard;
  return <figure className="pilot-scorecard"><div className="scorecard-heading"><h3>{score.title}</h3><span>{score.scope}</span></div><p className="scorecard-scroll-hint">{score.scrollHint}</p><div className="scorecard-table-wrap" tabIndex={0} role="region" aria-label={score.title}><table><thead><tr>{score.headers.map(label => <th key={label} scope="col">{label}</th>)}</tr></thead><tbody>{score.rows.map(([name, definition]) => <tr key={name}><th scope="row">{name}</th><td>{definition}</td><td><span className="unmeasured">{score.unmeasured}</span></td><td><span className="unmeasured">{score.unmeasured}</span></td></tr>)}</tbody></table></div><div className="pilot-conditions">{score.conditions.map(label => <span key={label}><CheckCheck aria-hidden="true" />{label}</span>)}</div><figcaption>{score.note}</figcaption></figure>;
}

export function ComplementarityDiagram() {
  const c = visual.complement;
  return <figure className="complementarity-diagram"><div className="complementarity-columns"><div><CircuitBoard aria-hidden="true" /><h3>{c.left}</h3><ul>{c.ours.map(item => <li key={item}><CheckCheck aria-hidden="true" />{item}</li>)}</ul></div><div><Network aria-hidden="true" /><h3>{c.right}</h3><ul>{c.cloud.map(item => <li key={item}><Search aria-hidden="true" />{item}</li>)}</ul></div></div><div className="complementarity-junction"><span /><ArrowDown aria-hidden="true" /><span /></div><div className="scoping-outcome">{c.center}<ArrowRight aria-hidden="true" /></div><figcaption>{c.disclaimer}</figcaption></figure>;
}
