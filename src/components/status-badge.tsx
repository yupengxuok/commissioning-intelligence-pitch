import { Badge } from "@/components/ui/badge";
import type { Maturity } from "@/content/platform";

export function StatusBadge({ status }: { status: Maturity }) {
  return <Badge variant={status === "Prototype" ? "default" : status === "In development" ? "secondary" : "outline"}><span className="size-1 rounded-full bg-current" aria-hidden="true" />{status}</Badge>;
}
