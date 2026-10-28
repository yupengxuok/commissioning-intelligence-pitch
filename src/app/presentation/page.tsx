import type { Metadata } from "next";
import { ExecutiveLanding } from "@/components/presentation/executive-landing";

export const metadata: Metadata = { title: "Presentation" };

export default function PresentationPage() {
  return <ExecutiveLanding />;
}
