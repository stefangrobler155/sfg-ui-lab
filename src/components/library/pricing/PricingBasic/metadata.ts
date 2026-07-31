// src/components/sections/heroes/AuroraHero/metadata.ts
import { SectionMetadata } from "@/types/section";
import { PricingBasic } from "./PricingBasic";

export const metadata: SectionMetadata = {
  id: "pricing-basic",

  title: "Pricing Basic",

  slug: "pricing-basic",

  category: "pricing",

  description:
    "A simple pricing section for displaying basic pricing options.",

  component: PricingBasic,

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
    "pricing",
    "basic",
    "options",
    "simple",
  ],

  author: "SFG Web",

  updated: "2026-07-29",

  buildTime: "3 hours",
};