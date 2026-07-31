// src/components/sections/heroes/WinterWonder/metadata.ts
import { SectionMetadata } from "@/types/section";
import { WinterWonder } from "./WinterWonder";

export const metadata: SectionMetadata = {
  id: "winter-wonder",

  title: "Winter Wonder",

  slug: "winter-wonder",

  category: "heroes",

  description:
    "Elegant winter hero with animated snowfall using React Three Fiber.",

  component: WinterWonder,

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
    "winter",
    "snow",
    "glass",
    "3d",
  ],

  preview:
    "/preview.webp",
    
  author: "SFG Web",

  updated: "2026-07-29",

  buildTime: "3 hours",
};