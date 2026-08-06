import type { Metadata } from "next";
import WorkGrid from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Work | Pichakorn Chukiew Tuapennot",
  description:
    "Browse paintings, sculpture, and drawing by Pichakorn Chukiew Tuapennot, filterable by category.",
};

export default function WorkPage() {
  return <WorkGrid />;
}
