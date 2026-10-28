import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return <main id="main-content" className="not-found"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>This page is outside the current scope.</h1><p>Return to the platform foundation or open the presentation.</p><div><Button asChild><Link href="/">Platform home</Link></Button><Button asChild variant="outline"><Link href="/presentation">Presentation</Link></Button></div></main>;
}
