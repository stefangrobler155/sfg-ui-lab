// app/library/[category]/[slug]/page.tsx
import { notFound } from "next/navigation";

import { getRelatedSections, getSectionBySlug } from "@/catalog";
import { LibraryHeader } from "@/components/library/details/LibraryHeader/LibraryHeader";
import { ComponentPreview } from "@/components/library/details/ComponentPreview/ComponentPreview";
import { TechnologyList } from "@/components/library/details/TechnologyList/TechnologyList";
import { LibraryInfo } from "@/components/library/details/LibraryInfo/LibraryInfo";
import { RelatedComponents } from "@/components/library/details/RelatedComponents/RelatedComponents";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default async function SectionPage({ params }: PageProps) {
  const { slug } = await params;

  const section = getSectionBySlug(slug);

  if (!section) {
    notFound();
  }

const relatedSections = getRelatedSections(
  section.category,
  section.slug
);
    return (
    <main className="mx-auto max-w-7xl px-6 py-12">

        <LibraryHeader section={section} />

        <ComponentPreview section={section} />

        <TechnologyList section={section} />

        <LibraryInfo section={section} />
        
        <RelatedComponents
          sections={relatedSections}
        />

    </main>
    );
}