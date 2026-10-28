import Link from "next/link";
import { platform } from "@/content/platform";

export function Brand({ compact = false }: { compact?: boolean }) {
  return <Link href="/" className="brand" aria-label={`${platform.name} home`}>
    <span className="brand-symbol" aria-hidden="true"><i /><i /><i /></span>
    <span className="brand-name">{platform.shortName}{!compact && <span>PLATFORM</span>}</span>
  </Link>;
}
