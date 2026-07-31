import type { Category } from "@/types/category";
import type { Difficulty } from "@/types/difficulty";
import type { LibrarySort } from "@/types/library";

import { LibrarySearch } from "../LibrarySearch";
import { LibraryFilters } from "../LibraryFilters";
import { DifficultyFilter } from "../DifficultyFilter";
import { LibrarySort as Sort } from "../LibrarySort";

interface LibraryToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;

  category: Category | "all";
  onCategoryChange: (category: Category | "all") => void;

  difficulty: Difficulty | "all";
  onDifficultyChange: (
    difficulty: Difficulty | "all"
  ) => void;

  sort: LibrarySort;
  onSortChange: (sort: LibrarySort) => void;

  counts: Record<string, number>;
}

export function LibraryToolbar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  difficulty,
  onDifficultyChange,
  sort,
  onSortChange,
  counts,
}: LibraryToolbarProps) {
  return (
    <div className="mb-10 space-y-6">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex-1">
          <LibrarySearch
            value={search}
            onChange={onSearchChange}
          />
        </div>

        <Sort
          value={sort}
          onChange={onSortChange}
        />

      </div>

      <LibraryFilters
        selectedCategory={category}
        onCategoryChange={onCategoryChange}
        counts={counts}
      />

      <DifficultyFilter
        selectedDifficulty={difficulty}
        onDifficultyChange={onDifficultyChange}
      />

    </div>
  );
}