import { SectionMetadata } from "@/types/section";

interface TechnologyListProps {
  section: SectionMetadata;
}

export function TechnologyList({
  section,
}: TechnologyListProps) {
  if (!section.technologies?.length) {
    return null;
  }

  return (
    <section className="mt-12">

      <h2 className="mb-6 text-2xl font-semibold">
        Technologies
      </h2>

      <div className="flex flex-wrap gap-3">

        {section.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border-2 bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300 transform transition duration-300 ease-in-out hover:scale-105"
          >
            {technology}
          </span>
        ))}

      </div>

    </section>
  );
}