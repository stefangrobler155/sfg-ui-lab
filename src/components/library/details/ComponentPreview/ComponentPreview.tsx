import { SectionMetadata } from "@/types/section";

interface SectionPreviewProps {
  section: SectionMetadata;
}

export function ComponentPreview({
  section,
}: SectionPreviewProps) {
  const Component = section.component;

  return (
    <section className="mt-12">

      <div className="mb-4 flex items-center justify-between">

        <h2 className="text-xl font-semibold">
          Live Preview
        </h2>

        <span className="rounded-full border px-3 py-1 text-xs">
          React Component
        </span>

      </div>

      <div className="overflow-hidden rounded-2xl border bg-background">

        <Component />

      </div>

    </section>
  );
}