import type { Category } from "@/types/category";
import type { Difficulty } from "@/types/difficulty";

interface ActiveFiltersProps {
  search: string;
  category: Category | "all";
  difficulty: Difficulty | "all";

  onClearSearch: () => void;
  onClearCategory: () => void;
  onClearDifficulty: () => void;

  onClearAll: () => void;
}

export function ActiveFilters({
  search,
  category,
  difficulty,
  onClearSearch,
  onClearCategory,
  onClearDifficulty,
  onClearAll,
}: ActiveFiltersProps) {
  const hasFilters =
    search ||
    category !== "all" ||
    difficulty !== "all";

  if (!hasFilters) return null;

    return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">

        <div className="flex flex-wrap gap-2">

        {search && (
            <button
            onClick={onClearSearch}
            className="rounded-full bg-muted px-3 py-1 text-sm hover:bg-muted/80"
            >
            Search: "{search}" ✕
            </button>
        )}

        {category !== "all" && (
            <button
            onClick={onClearCategory}
            className="rounded-full bg-muted px-3 py-1 text-sm hover:bg-muted/80"
            >
            {category} ✕
            </button>
        )}

        {difficulty !== "all" && (
            <button
            onClick={onClearDifficulty}
            className="rounded-full bg-muted px-3 py-1 text-sm hover:bg-muted/80"
            >
            {difficulty} ✕
            </button>
        )}

        </div>

        <button
        onClick={onClearAll}
        className="text-sm font-medium text-primary hover:underline"
        >
        Clear all
        </button>

    </div>
    );
}