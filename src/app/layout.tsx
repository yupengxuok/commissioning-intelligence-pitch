import type { Metadata } from "next";
import { platform } from "@/content/platform";
import "./globals.css";
import "./landing.css";

export const metadata: Metadata = {
  title: { default: platform.name, template: `%s | ${platform.name}` },
  description: "A data center engineering proposal. Static presentation foundation with clear prototype and development boundaries.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body><a className="skip-link" href="#main-content">Skip to content</a>{children}</body></html>;
}
