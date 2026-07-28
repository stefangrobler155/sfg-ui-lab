import { SectionMetadata } from "@/types/section";
import { SectionCard } from "../SectionCard/SectionCard";

interface SectionGridProps {
  sections: SectionMetadata[];
}

export function SectionGrid({ sections }: SectionGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {sections.map((section) => (
        <SectionCard
          key={section.id}
          section={section}
        />
      ))}
    </div>
  );
}