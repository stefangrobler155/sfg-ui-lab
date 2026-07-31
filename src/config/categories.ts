import type { Category } from "@/types/category";

export const categories: {
  value: "all" | Category;
  label: string;
}[] = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "heroes",
    label: "Heroes",
  },
  {
    value: "features",
    label: "Features",
  },
  {
    value: "pricing",
    label: "Pricing",
  },
  {
    value: "cta",
    label: "CTA",
  },
  {
    value: "navigation",
    label: "Navigation",
  },
  {
    value: "footers",
    label: "Footers",
  },
  {
    value: "testimonials",
    label: "Testimonials",
  },
];