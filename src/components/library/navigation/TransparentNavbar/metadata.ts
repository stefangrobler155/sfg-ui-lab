// src/components/sections/heroes/AuroraHero/metadata.ts
import { SectionMetadata } from "@/types/section";
import { TransparentNavbar } from "./TransparentNavbar";

export const metadata: SectionMetadata = {
  id: "transparent-navbar",

  title: "Transparent Navbar",

  slug: "transparent-navbar",

  category: "navigation",

  description:
    "A transparent navigation bar for a modern website.",

  component: TransparentNavbar,

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
    "navigation",
    "navbar",
    "transparent",
    "modern",
  ],

  author: "SFG Web",

  updated: "2026-07-29",

  buildTime: "3 hours",
};