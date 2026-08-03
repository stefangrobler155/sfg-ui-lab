import type { ComponentType } from "react";
import { StaticImageData } from "next/image";

import type { Category } from "./category";
import type { Difficulty } from "./difficulty";
import type { Technology } from "./technology";

export type LibraryCategory = Category | "all";

export type LibrarySort =
  | "featured"
  | "newest"
  | "az"
  | "za";

export interface LibraryEntry {
  title: string;
  slug: string;

  category: Category;

  description: string;

  difficulty: Difficulty;

  technologies: Technology[];

  tags: string[];

  version: string;

  featured: boolean;

  preview: StaticImageData;

  author: string;

  updated: string;

  buildTime: string;

  component: ComponentType;
}