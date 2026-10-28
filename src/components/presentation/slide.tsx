import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { PlatformDiagram } from "@/components/platform-diagram";
import { StatusBadge } from "@/components/status-badge";
import { platform, proposalPlaceholder, type SlideContent } from "@/content/platform";

export function Slide({ slide, index, total }: { slide: SlideContent; index: number; total: number }) {
  return <article className={`slide slide-${slide.kind}`} aria-labelledby={`slide-${slide.id}-title`}>
    <header className="slide-header"><span>{platform.category}</span><span>INTERNAL BUSINESS PROPOSAL</span></header>
    <div className="slide-content"><div className="slide-copy"><p className="eyebrow">{slide.eyebrow}</p><h1 id={`slide-${slide.id}-title`}>{slide.title}</h1><p className="slide-description">{slide.description}</p>{slide.kind === "cover" && <div className="slide-cover-note"><span />CONCEPT FOUNDATION <span className="note-slash">/</span> VERSION 0.1</div>}</div>
      {(slide.kind === "cover" || slide.kind === "architecture") && <div className="slide-diagram"><PlatformDiagram /></div>}
      {slide.kind === "maturity" && <div className="capability-matrix">{platform.development.items.map(item => <div key={item.title}><h2>{item.title}</h2><StatusBadge status={item.status} /></div>)}</div>}
      {slide.kind === "placeholder" && <div className="proposal-placeholder"><MoveUpRight aria-hidden="true" /><span className="eyebrow">CONTENT PLACEHOLDERS</span>{proposalPlaceholder.map((item, i) => <div key={item}><span>0{i + 1}</span><h2>{item}</h2><ArrowUpRight aria-hidden="true" /></div>)}</div>}
    </div>
    <footer className="slide-footer"><span>{platform.name}</span><span>{slide.kind === "cover" || slide.kind === "architecture" ? "Illustrative architecture · No live connections" : "Foundation content · For discussion"}</span><span>{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span></footer>
  </article>;
}
