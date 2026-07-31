import { SectionMetadata } from "@/types/section";
import { LibraryGrid } from "@/components/library/browser/LibraryGrid/LibraryGrid";

interface RelatedSectionsProps {
  sections: SectionMetadata[];
}

export function RelatedComponents({
  sections,
}: RelatedSectionsProps) {
  if (!sections.length) {
    return null;
  }

  return (
    <section className="mt-20">

      <h2 className="mb-8 text-2xl font-semibold">
        Related Components
      </h2>

      <LibraryGrid sections={sections} />

    </section>
  );
}