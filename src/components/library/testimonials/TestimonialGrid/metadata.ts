// src/components/sections/heroes/AuroraHero/metadata.ts
import { SectionMetadata } from "@/types/section";
import { TestimonialGrid } from "./TestimonialGrid";

export const metadata: SectionMetadata = {
  id: "testimonial-grid",

  title: "Testimonial Grid",

  slug: "testimonial-grid",

  category: "testimonials",

  description:
    "A responsive grid for displaying customer testimonials.",

  component: TestimonialGrid,

  featured: true,

  version: "1.0.0",

  difficulty: "Beginner",

  technologies: [
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "React Three Fiber",
  ],

  tags: [
    "testimonials",
    "grid",
    "responsive",
    "customer-feedback",
  ],

  author: "SFG Web",

  updated: "2026-07-29",

  buildTime: "3 hours",
};