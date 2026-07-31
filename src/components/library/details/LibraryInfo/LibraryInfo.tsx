import { SectionMetadata } from "@/types/section";

interface SectionInfoProps {
  section: SectionMetadata;
}

export function LibraryInfo({
  section,
}: SectionInfoProps) {
  return (
    <section className="mt-12">

      <h2 className="mb-6 text-2xl font-semibold">
        Component Information
      </h2>

      <div className="grid gap-4 md:grid-cols-2">

        <InfoItem
          label="Category"
          value={section.category}
        />

        <InfoItem
          label="Difficulty"
          value={section.difficulty}
        />

        <InfoItem
          label="Version"
          value={section.version}
        />

        <InfoItem
          label="Author"
          value={section.author}
        />

        <InfoItem
          label="Updated"
          value={section.updated}
        />

        <InfoItem
          label="Estimated Build Time"
          value={section.buildTime}
        />

      </div>

    </section>
  );
}

interface InfoItemProps {
  label: string;
  value?: string;
}

function InfoItem({
  label,
  value,
}: InfoItemProps) {
  if (!value) return null;

  return (
    <div className="rounded-xl border p-4">

      <p className="text-sm text-muted-foreground">
        {label}
      </p>

      <p className="mt-2 font-medium">
        {value}
      </p>

    </div>
  );
}