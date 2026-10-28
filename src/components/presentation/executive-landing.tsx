import { ArrowDown, ArrowRight, ArrowUpRight, CheckCheck, CircuitBoard, FileCheck2, Network } from "lucide-react";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { landingContent as content } from "@/content/landing";
import { references, type ReferenceId } from "@/content/references";
import { DiagnosticWorkspace, EngineeringLoop } from "./engineering-diagrams";

const sourceIds = new Set<string>([...content.industry.referenceIds, ...content.google.referenceIds]);
const usedReferences = references.filter(reference => sourceIds.has(reference.id));

function LandingCitations({ ids }: { ids: readonly ReferenceId[] }) {
  return <aside className="landing-citation" data-citation>{ids.map(id => {
    const source = usedReferences.find(reference => reference.id === id);
    if (!source) return null;
    return <a href={source.url} key={id} target="_blank" rel="noreferrer" aria-label={`${source.title} (opens in a new tab)`}>{source.publisher}{id.startsWith("uptime") ? " · Annual Outage Analysis 2025" : " · Manufacturing"}<ArrowUpRight aria-hidden="true" /></a>;
  })}</aside>;
}

function ConceptPreview() {
  const icons = [CircuitBoard, Network, FileCheck2];
  return <figure className="landing-concept"><figcaption>{content.hero.previewLabel}</figcaption><div className="concept-flow">{content.hero.previewNodes.map((label, index) => { const Icon = icons[index]; return <div key={label}><span className="concept-icon"><Icon aria-hidden="true" /></span><span>{label}</span>{index < 2 && <ArrowDown className="concept-connector" aria-hidden="true" />}</div>; })}</div><p>{content.hero.previewFootnote}</p></figure>;
}

export function ExecutiveLanding() {
  return <div className="landing" id="top">
    <header className="landing-header"><div className="landing-width"><Brand /><nav aria-label="Main navigation">{content.navigation.map(item => <a href={`#${item.id}`} key={item.id}>{item.label}</a>)}</nav></div></header>
    <main id="main-content">
      <section id="opportunity" className="landing-hero landing-dark" aria-labelledby="opportunity-title"><div className="landing-width hero-grid"><div><p className="landing-kicker">{content.hero.eyebrow}</p><h1 id="opportunity-title">{content.hero.headline}</h1><p className="landing-lead">{content.hero.subtitle}</p><Button asChild><a href="#product">{content.hero.action}<ArrowRight /></a></Button></div><ConceptPreview /></div></section>
      <section id="industry" className="landing-section" aria-labelledby="industry-title"><div className="landing-width"><div className="landing-heading"><p className="landing-kicker">{content.industry.eyebrow}</p><h2 id="industry-title">{content.industry.headline}</h2></div><div className="landing-statistics">{content.industry.statistics.map(stat => <div key={stat.value}><strong>{stat.value}</strong><p>{stat.label}</p></div>)}</div><p className="landing-scope">{content.industry.scope}</p><LandingCitations ids={content.industry.referenceIds} /><p className="landing-takeaway">{content.industry.takeaway}</p></div></section>
      <section id="product" className="landing-section landing-gray" aria-labelledby="product-title"><div className="landing-width"><div className="landing-heading heading-with-status"><div><p className="landing-kicker">{content.product.eyebrow}</p><h2 id="product-title">{content.product.headline}</h2><p className="landing-summary">{content.product.statement}</p></div><span className="landing-status">{content.product.maturity}</span></div><DiagnosticWorkspace /><div className="landing-capabilities">{content.product.capabilities.map(capability => <div key={capability.verb}><h3>{capability.verb}</h3><p>{capability.label}</p></div>)}</div></div></section>
      <section id="advantage" className="landing-section" aria-labelledby="advantage-title"><div className="landing-width"><div className="landing-heading"><p className="landing-kicker">{content.advantage.eyebrow}</p><h2 id="advantage-title">{content.advantage.headline}</h2></div><div className="landing-pillars">{content.advantage.pillars.map((pillar,index) => <div key={pillar}><span aria-hidden="true">0{index+1}</span><h3>{pillar}</h3></div>)}</div><EngineeringLoop compact /><p className="landing-takeaway">{content.advantage.takeaway}</p></div></section>
      <section id="business" className="landing-section landing-gray" aria-labelledby="business-title"><div className="landing-width"><div className="landing-heading"><p className="landing-kicker">{content.business.eyebrow}</p><h2 id="business-title">{content.business.headline}</h2></div><div className="landing-pilot"><strong>{content.business.scopeValue}</strong><p>{content.business.scopeLabel}</p></div><div className="landing-commercial"><div><p className="landing-label">{content.business.buyersLabel}</p><ul className="landing-buyers">{content.business.buyers.map(buyer => <li key={buyer}>{buyer}</li>)}</ul></div><div><p className="landing-label">{content.business.valueLabel}</p><ul className="landing-values">{content.business.values.map(value => <li key={value}><CheckCheck aria-hidden="true" />{value}</li>)}</ul></div></div><ol className="landing-path">{content.business.path.map((step,index) => <li key={step}><span>{step}</span>{index < 2 && <ArrowRight aria-hidden="true" />}</li>)}</ol><p className="landing-business-note">{content.business.note}</p></div></section>
      <section id="google-cloud" className="landing-section landing-dark" aria-labelledby="google-title"><div className="landing-width"><div className="landing-heading"><p className="landing-kicker">{content.google.eyebrow}</p><h2 id="google-title">{content.google.headline}</h2></div><div className="landing-google-columns">{content.google.columns.map(column => <div key={column.label}><p className="landing-label">{column.label}</p><p>{column.text}</p></div>)}</div><p className="landing-conditional">{content.google.note}</p><LandingCitations ids={content.google.referenceIds} /><p className="landing-next-action">{content.google.action}</p></div></section>
    </main>
    <footer className="landing-footer"><div className="landing-width"><div className="landing-footer-top"><Brand compact /><a href="#top">{content.top}<ArrowUpRight aria-hidden="true" /></a></div><details><summary>{content.sourcesLabel}</summary><ol>{usedReferences.map(source => <li key={source.id}><a href={source.url} target="_blank" rel="noreferrer">{source.title}<ArrowUpRight aria-hidden="true" /></a></li>)}</ol></details><details><summary>{content.boundariesLabel}</summary><p>{content.boundaries}</p></details></div></footer>
  </div>;
}
