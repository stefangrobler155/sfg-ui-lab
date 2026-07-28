// types/section.ts
import { ComponentType } from "react";

export type Difficulty =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export interface SectionMetadata {
  id: string;

  title: string;

  slug: string;

  category: string;

  description: string;

  component: ComponentType;

  featured?: boolean;

  version?: string;

  difficulty?: Difficulty;

  technologies?: string[];

  tags?: string[];

  preview?: string;
}