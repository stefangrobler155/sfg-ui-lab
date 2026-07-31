import type { Category } from "@/types/category";
import { categories } from "@/config/categories";

interface LibraryFiltersProps {
  selectedCategory: Category | "all";
  onCategoryChange: (category: Category | "all") => void;

  counts: Record<string, number>;
}

export function LibraryFilters({
  selectedCategory,
  onCategoryChange,
  counts,
}: LibraryFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 p-4">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            selectedCategory === category.value
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          {category.label} ({counts[category.value] ?? 0})
        </button>
      ))}
    </div>
  );
}
