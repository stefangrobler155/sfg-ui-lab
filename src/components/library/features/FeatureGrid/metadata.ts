import type { LibraryEntry } from "@/types/library";
import { FeatureGrid } from "./FeatureGrid";
import preview from "./preview.webp";

export const metadata: LibraryEntry = {
  title: "Feature Grid",

  slug: "feature-grid",
  
  category: "features",

  description:
    "A responsive feature section with six feature cards.",

  version: "1.0.0",

  difficulty: "Beginner",

  technologies: [
    "React",
    "Tailwind CSS",
    "Lucide React",
  ],

  tags: [
    "Features",
    "Marketing",
    "Landing Page",
    "Responsive",
  ],

  featured: true,
  author: "SFG UI Lab",
  updated: "2025-08-02",
  buildTime: "2025-08-02T00:00:00.000Z",

  preview: preview,

  component: FeatureGrid,
};