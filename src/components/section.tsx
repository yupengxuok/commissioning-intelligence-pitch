import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({ id, eyebrow, title, description, children, className }: { id: string; eyebrow: string; title: string; description?: string; children: ReactNode; className?: string }) {
  return <section id={id} className={cn("section", className)} aria-labelledby={`${id}-title`}>
    <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2 id={`${id}-title`}>{title}</h2></div>{description && <p className="section-description">{description}</p>}</div>
    {children}
  </section>;
}
