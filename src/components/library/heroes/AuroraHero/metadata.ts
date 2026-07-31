// src/components/sections/heroes/AuroraHero/metadata.ts
import { SectionMetadata } from "@/types/section";
import { Aurora } from "./AuroraHero";

export const metadata: SectionMetadata = {
  id: "aurora-hero",

  title: "Aurora Hero",

  slug: "aurora-hero",

  category: "heroes",

  description:
    "A hero section with an aurora effect for a modern website.",

  component: Aurora,

  featured: true,

  version: "1.0.0",

  difficulty: "Advanced",

  technologies: [
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "React Three Fiber",
  ],

  tags: [
    "hero",
    "aurora",
    "modern",
    "3d",
  ],

  preview:
    "/preview.webp",
    
  author: "SFG Web",

  updated: "2026-07-29",

  buildTime: "3 hours",
};