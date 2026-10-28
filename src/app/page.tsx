import Link from "next/link";
import { ArrowDown, ArrowRight, BookOpenText, Box, ExternalLink, Monitor, Workflow } from "lucide-react";
import { Brand } from "@/components/brand";
import { PlatformDiagram } from "@/components/platform-diagram";
import { Section } from "@/components/section";
import { StatusBadge } from "@/components/status-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { platform } from "@/content/platform";

const icons = { knowledge: BookOpenText, workflow: Workflow, twin: Box };

export default function Home() {
  return <>
    <div className="proposal-banner"><div className="site-width"><span>{platform.category}</span><span>Internal proposal <span className="banner-divider">/</span> Foundation 0.1</span></div></div>
    <header className="site-header site-width"><Brand /><nav aria-label="Main navigation">{platform.navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><Button asChild size="sm" variant="outline"><Link href="/presentation"><Monitor />Presentation<span className="hidden sm:inline"> mode</span><ArrowRight /></Link></Button></header>
    <main id="main-content">
      <section id="platform" className="hero site-width" aria-labelledby="hero-title">
        <div className="hero-copy"><Badge variant="outline"><span className="size-1.5 rounded-full bg-secondary" />ENGINEERING INTELLIGENCE / CONCEPT</Badge><h1 id="hero-title">{platform.headline}</h1><p className="hero-description">{platform.description}</p><div className="hero-actions"><Button asChild><Link href="/presentation">Explore the proposal<ArrowRight /></Link></Button><Button asChild variant="ghost"><a href="#capabilities">Platform foundations<ArrowDown /></a></Button></div><div className="hero-footnote"><span className="technical-mark" aria-hidden="true">+</span>From engineering knowledge to informed decisions.</div></div>
        <div className="hero-visual"><div className="visual-axis" aria-hidden="true">SYSTEM OVERVIEW / CONCEPTUAL</div><PlatformDiagram /></div>
      </section>
      <div className="foundation-strip"><div className="site-width"><p>ONE ENGINEERING CONTEXT</p><div><span>Knowledge</span><ArrowRight /><span>Workflows</span><ArrowRight /><span>Asset context</span></div><span className="strip-note">A proposed direction. Clearly defined boundaries.</span></div></div>
      <div className="site-width"><Section id="capabilities" eyebrow="01 / PLATFORM FOUNDATIONS" title={platform.statement} description={platform.statementDescription}>
        <div className="capability-grid">{platform.capabilities.map(item => { const Icon = icons[item.icon]; return <Card key={item.id} className="capability-card"><CardHeader><div className="card-topline"><Icon aria-hidden="true" /><span>{item.id}</span></div><CardTitle>{item.title}</CardTitle></CardHeader><CardContent><p>{item.description}</p><StatusBadge status={item.status} /></CardContent></Card>; })}</div>
      </Section>
      <Section id="development" eyebrow={`02 / ${platform.development.eyebrow}`} title={platform.development.title} description={platform.development.description} className="development-section">
        <div className="maturity-list">{platform.development.items.map((item, index) => <div className="maturity-row" key={item.title}><span className="maturity-index">0{index + 1}</span><h3>{item.title}</h3><StatusBadge status={item.status} /></div>)}</div>
        <div className="proposal-link"><div><span className="eyebrow">THE PROPOSAL WORKSPACE</span><p>Start with a shared engineering perspective.</p></div><Button asChild variant="outline"><Link href="/presentation">Open presentation<ExternalLink /></Link></Button></div>
      </Section></div>
    </main>
    <footer className="site-footer"><div className="site-width"><Brand compact /><p>{platform.footer}<br />{platform.disclosure}</p><span className="footer-revision">CIP / 0.1</span></div></footer>
  </>;
}
