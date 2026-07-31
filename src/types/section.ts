import { ComponentType } from "react";

import type { Category } from "./category";
import type { Difficulty } from "./difficulty";
import type { Technology } from "./technology";

export interface SectionMetadata {
  id: string;

  title: string;

  slug: string;

  category: Category;

  description: string;

  component: ComponentType;

  featured?: boolean;

  version?: string;

  difficulty?: Difficulty;

  technologies?: Technology[];

  tags?: string[];

  preview?: string;

  author?: string;

  updated?: string;

  buildTime?: string;
}