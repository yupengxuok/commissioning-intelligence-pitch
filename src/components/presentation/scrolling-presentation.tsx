import { ArrowDown, ArrowRight, ArrowUpRight, Layers3 } from "lucide-react";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { presentationUi as ui } from "@/content/presentation-ui";
import { pageMeta, pageSections } from "@/lib/presentation-view";
import { Citations, ReferenceList } from "./citations";
import { SectionHeading } from "./section-heading";
import { HeroDiagram, SectionVisual } from "./section-visual";

// Server component: source content, private narratives, and notes are never client props.
export function ScrollingPresentation() {
  return <div className="business-presentation" id="top">
    <div className="review-banner"><div className="presentation-width"><span>{pageMeta.status}</span><span>01 — 10</span></div></div>
    <header className="presentation-nav"><div className="presentation-width nav-top"><Brand /><a className="nav-opportunity" href="#section-10">{ui.opportunity}<ArrowUpRight aria-hidden="true" /></a></div><nav className="presentation-width anchor-nav" aria-label={ui.navigationLabel}>{pageSections.map((section, index) => <a key={section.id} href={`#section-${section.id}`} title={section.title}><span>{section.id}</span>{ui.shortNavigation[index]}</a>)}</nav></header>
    <main id="main-content">
      {pageSections.map((section, index) => {
        const hero = index === 0;
        const dark = hero || index === pageSections.length - 1;
        return <section key={section.id} id={`section-${section.id}`} className={`business-section ${dark ? "section-dark" : index % 2 ? "section-light" : "section-white"} section-${section.id}`} aria-labelledby={`heading-${section.id}`}>
          <div className="presentation-width">
            <div className={hero ? "hero-layout" : "section-intro"}>
              <div>{hero && <p className="product-eyebrow"><Layers3 aria-hidden="true" />{ui.eyebrow}</p>}<SectionHeading section={section} hero={hero} />{hero && <><div className="hero-credibility"><h3>{section.points[0].title}</h3><p>{section.points[0].detail}</p></div><div className="opening-actions"><Button asChild><a href="#section-06">{ui.explore}<ArrowRight /></a></Button><a href="#section-02" className="read-proposal">{ui.shortNavigation[1]}<ArrowDown aria-hidden="true" /></a></div></>}</div>
              {hero ? <HeroDiagram /> : <p className="business-argument">{section.businessArgument}</p>}
            </div>
            {hero && <p className="business-argument hero-argument">{section.businessArgument}</p>}
            <SectionVisual section={section} />
            <div className={`section-conclusion ${section.id === "10" ? "executive-conclusion" : ""}`}><div><p className="takeaway-label">{ui.takeaway}</p><p className="takeaway-text">{section.keyTakeaway}</p>{section.id === "10" && <div className="owner-decision"><span>{ui.decisionLabel}</span><p>{pageMeta.decision}</p></div>}</div><Citations ids={section.referenceIds} /></div>
          </div>
        </section>;
      })}
    </main>
    <footer className="presentation-footer"><div className="presentation-width"><div className="footer-heading"><Brand compact /><a href="#top">{ui.top}<ArrowUpRight aria-hidden="true" /></a></div><ReferenceList /><details className="proposal-boundaries"><summary>{ui.disclosure}</summary><p>{pageMeta.companyEvidence}</p><p>{pageMeta.terminology}</p><p>{pageMeta.productBoundary}</p></details><p className="footer-disclosure">{ui.reviewNotice}</p></div></footer>
  </div>;
}
