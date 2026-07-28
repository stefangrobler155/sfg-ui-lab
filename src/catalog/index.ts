import { sections } from "./sections";

export function getAllSections() {
  return sections;
}

export function getFeaturedSections() {
  return sections.filter((section) => section.featured);
}

export function getSectionsByCategory(category: string) {
  return sections.filter(
    (section) => section.category === category
  );
}