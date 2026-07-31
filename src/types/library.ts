import { Category } from "./category";

export type LibraryCategory = Category | "all";

export type LibrarySort =
  | "featured"
  | "newest"
  | "az"
  | "za";