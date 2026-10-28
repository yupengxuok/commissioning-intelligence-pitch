import type { Metadata } from "next";
import { PresentationDeck } from "@/components/presentation/presentation-deck";

export const metadata: Metadata = { title: "Presentation" };

export default function PresentationPage() {
  return <PresentationDeck />;
}
