import { library } from "./library";

export function getAllSections() {
  return library;
}

export function getFeaturedSections() {
  return library.filter((section) => section.featured);
}

export function getSectionsByCategory(category: string) {
  return library.filter(
    (section) => section.category === category
  );
}

export function getSectionBySlug(slug: string) {
  return library.find((section) => section.slug === slug);
}

export function getRelatedSections(
  category: string,
  currentSlug: string,
  limit = 3
) {
  return library
    .filter(
      (section) =>
        section.category === category &&
        section.slug !== currentSlug
    )
    .slice(0, limit);
}