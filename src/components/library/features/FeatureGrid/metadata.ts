// src/components/sections/heroes/AuroraHero/metadata.ts
import { SectionMetadata } from "@/types/section";
import { FeatureGrid } from "./FeatureGrid";

export const metadata: SectionMetadata = {
  id: "feature-grid",

  title: "Feature Grid",

  slug: "feature-grid",

  category: "features",

  description:
    "A responsive grid for displaying features and benefits.",

  component: FeatureGrid,

  featured: false,

  version: "1.0.0",

  difficulty: "Advanced",

  technologies: [
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "React Three Fiber",
  ],

  tags: [
    "features",
    "grid",
    "responsive",
    "benefits",
  ],

  
    author: "SFG Web",

  updated: "2026-07-29",

  buildTime: "3 hours",
};