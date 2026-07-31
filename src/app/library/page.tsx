"use client";
import type { Category } from "@/types/category";
import type { LibrarySort } from "@/types/library";
import { library } from "@/catalog/library";
import { LibraryGrid } from "@/components/library/browser/LibraryGrid/LibraryGrid";
import { useState } from "react";
import { EmptyState } from "@/components/library/browser/EmptyState";
import { LibraryToolbar } from "@/components/library/browser/LibraryToolbar/LibraryToolbar";
import type { Difficulty } from "@/types/difficulty";
import { ActiveFilters } from "@/components/library/browser/ActiveFilters";

export default function LibraryPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sort, setSort] = useState<LibrarySort>("featured");
  const [difficulty, setDifficulty] =
    useState<Difficulty | "all">("all");
  const counts: Record<string, number> = {
    all: library.length,
      };

    library.forEach((section) => {
      counts[section.category] = (counts[section.category] ?? 0) + 1;
    });

  const filteredSections = library.filter((section) => {
    const query = search.toLowerCase();

    const matchesCategory =
      category === "all" || section.category === category;

    const matchesDifficulty =
      difficulty === "all" ||
      section.difficulty === difficulty;
        const matchesSearch =
      section.title.toLowerCase().includes(query) ||
      section.description.toLowerCase().includes(query) ||
      section.tags?.some((tag) =>
        tag.toLowerCase().includes(query)
      );

    return matchesCategory && matchesSearch && matchesDifficulty;
  });

  const visibleSections = [...filteredSections];

      if (sort === "featured") {
        visibleSections.sort((a, b) => {
          if (a.featured === b.featured) return 0;

          return a.featured ? -1 : 1;
        });
      }

      if (sort === "az") {
        visibleSections.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      }

      if (sort === "za") {
        visibleSections.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
      }
      
      if (sort === "newest") {
        visibleSections.sort(
          (a, b) =>
            new Date(b.updated ?? 0).getTime() -
            new Date(a.updated ?? 0).getTime()
        );
      }

    return (
    <main className="mx-auto max-w-7xl px-6 py-12">

      <header className="mb-12">
        <h1 className="text-4xl font-bold">
          Component Library
        </h1>

        <p className="mt-4 text-muted-foreground">
          Browse all reusable UI sections.
        </p>
      </header>
      
      <LibraryToolbar
        search={search}
        onSearchChange={setSearch}

        category={category}
        onCategoryChange={setCategory}

        difficulty={difficulty}
        onDifficultyChange={setDifficulty}

        sort={sort}
        onSortChange={setSort}

        counts={counts}
      />

      <ActiveFilters
        search={search}
        category={category}
        difficulty={difficulty}

        onClearSearch={() => setSearch("")}
        onClearCategory={() => setCategory("all")}
        onClearDifficulty={() => setDifficulty("all")}

        onClearAll={() => {
          setSearch("");
          setCategory("all");
          setDifficulty("all");
          setSort("featured");
        }}
      />

      <p className="mb-6 text-sm text-muted-foreground">
        {visibleSections.length} component
        {visibleSections.length !== 1 && "s"} found
      </p>
      {visibleSections.length > 0 ? (
        <LibraryGrid sections={visibleSections} />
      ) : (
        <EmptyState
          title="No components found"
          description="Try changing your search or selecting a different category."
        />
      )}

    </main>
  );
}