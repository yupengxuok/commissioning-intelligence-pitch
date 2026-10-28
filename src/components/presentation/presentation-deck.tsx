"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Maximize, Minimize, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { Slide } from "@/components/presentation/slide";
import { slides } from "@/content/platform";
import { cn } from "@/lib/utils";

export function PresentationDeck() {
  const [current, setCurrent] = useState(0);
  const [outline, setOutline] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [fullscreenMessage, setFullscreenMessage] = useState("");
  const root = useRef<HTMLDivElement>(null);
  const go = useCallback((next: number) => setCurrent(Math.max(0, Math.min(slides.length - 1, next))), []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest("button, a, input, select, textarea") || event.altKey || event.ctrlKey || event.metaKey) return;
      if (["ArrowRight", "PageDown", " "].includes(event.key)) { event.preventDefault(); go(current + 1); }
      if (["ArrowLeft", "PageUp"].includes(event.key)) { event.preventDefault(); go(current - 1); }
      if (event.key === "Home") { event.preventDefault(); go(0); }
      if (event.key === "End") { event.preventDefault(); go(slides.length - 1); }
    };
    const onFullscreen = () => setFullscreen(document.fullscreenElement === root.current);
    window.addEventListener("keydown", onKey);
    document.addEventListener("fullscreenchange", onFullscreen);
    return () => { window.removeEventListener("keydown", onKey); document.removeEventListener("fullscreenchange", onFullscreen); };
  }, [current, go]);

  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (root.current?.requestFullscreen) await root.current.requestFullscreen();
      else { setFullscreenMessage("Fullscreen is unavailable in this browser. The slide remains 16:9."); return; }
      setFullscreenMessage("");
    } catch { setFullscreenMessage("Fullscreen is unavailable in this browser. The slide remains 16:9."); }
  }

  return <div className="deck-shell" ref={root}>
    <header className="deck-toolbar"><Brand compact /><span className="deck-toolbar-label">INTERNAL PROPOSAL <span>/</span> FOUNDATION 0.1</span><Button asChild variant="ghost" size="sm"><Link href="/"><ArrowLeft />Website mode</Link></Button></header>
    <div className={cn("deck-body", !outline && "outline-hidden")}>
      {outline && <aside className="deck-outline" aria-label="Presentation outline"><p className="eyebrow">PRESENTATION</p><h2>The engineering<br />perspective.</h2><ol>{slides.map((slide, index) => <li key={slide.id}><button onClick={() => go(index)} aria-current={index === current ? "step" : undefined}><span>0{index + 1}</span><span>{slide.label}</span>{index === current && <span className="active-indicator" aria-hidden="true" />}</button></li>)}</ol><div className="outline-note"><Check aria-hidden="true" /><span>Static proposal foundation<br /><small>No live systems connected</small></span></div></aside>}
      <main id="main-content" className="deck-workspace"><div className="deck-stage-label"><span>COMMISSIONING INTELLIGENCE PLATFORM</span><span>16:9 <span className="mx-2">/</span> {slides[current].label}</span></div><div className="slide-stage"><Slide slide={slides[current]} index={current} total={slides.length} /></div><div className="deck-stage-bottom"><span className="keyboard-hint">Use ← → to navigate</span><p aria-live="polite" aria-atomic="true">Slide {current + 1} of {slides.length} · {slides[current].label}</p></div><p role="status" className="fullscreen-message">{fullscreenMessage}</p></main>
    </div>
    <footer className="deck-controls"><Button variant="ghost" size="sm" onClick={() => setOutline(!outline)} aria-label={outline ? "Hide outline" : "Show outline"} aria-expanded={outline}>{outline ? <PanelLeftClose /> : <PanelLeftOpen />}<span className="hidden sm:inline">Outline</span></Button><div className="deck-navigation"><Button variant="outline" size="icon" onClick={() => go(current - 1)} disabled={current === 0} aria-label="Previous slide"><ArrowLeft /></Button><div className="slide-dots">{slides.map((slide, index) => <button key={slide.id} className={cn(index === current && "is-active")} onClick={() => go(index)} aria-label={`Go to slide ${index + 1}: ${slide.label}`} aria-current={index === current ? "step" : undefined} />)}</div><Button variant="outline" size="icon" onClick={() => go(current + 1)} disabled={current === slides.length - 1} aria-label="Next slide"><ArrowRight /></Button></div><Button variant="ghost" size="sm" onClick={toggleFullscreen} aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}>{fullscreen ? <Minimize /> : <Maximize />}<span className="hidden sm:inline">{fullscreen ? "Exit fullscreen" : "Fullscreen"}</span></Button></footer>
  </div>;
}
