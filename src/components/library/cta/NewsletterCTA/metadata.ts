// src/components/sections/heroes/AuroraHero/metadata.ts
import { SectionMetadata } from "@/types/section";
import { NewsletterCTA } from "./NewsletterCTA";

export const metadata: SectionMetadata = {
  id: "newsletter-cta",

  title: "Newsletter CTA",

  slug: "newsletter-cta",

  category: "cta",

  description:
    "A call-to-action section for subscribing to a newsletter.",

  component: NewsletterCTA,

  featured: false,

  version: "1.0.0",

  difficulty: "Intermediate",

  technologies: [
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "React Three Fiber",
  ],

  tags: [
    "cta",
    "newsletter",
    "subscription",
    "form",
  ],

  author: "SFG Web",

  updated: "2026-07-29",

  buildTime: "3 hours",
};