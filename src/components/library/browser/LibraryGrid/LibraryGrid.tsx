import { SectionMetadata } from "@/types/section";
import { LibraryCard } from "@/components/library/browser/LibraryCard/LibraryCard";

interface SectionGridProps {
  sections: SectionMetadata[];
}

export function LibraryGrid({ sections }: SectionGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {sections.map((section) => (
        <LibraryCard
          key={section.id}
          section={section}
        />
      ))}
    </div>
  );
}