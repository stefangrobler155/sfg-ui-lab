import { SectionMetadata } from "@/types/section";
import Image from "next/image";
import Link from "next/link";

interface SectionCardProps {
  section: SectionMetadata;
}

export function LibraryCard({ section }: SectionCardProps) {
  return (
    <Link href={`/library/${section.category}/${section.slug}`}>
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Preview */}
      <div className="aspect-video bg-muted flex items-center justify-center">
        <div className="h-full relative aspect-video overflow-hidden">
        <Image
            src={section.preview ?? "/placeholder.webp"}
            alt={section.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="eager"
        />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">

        <div className="flex items-center justify-between">

          <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium uppercase tracking-wide">
            {section.category}
          </span>

          {section.difficulty && (
            <span className="text-xs text-muted-foreground">
              {section.difficulty}
            </span>
          )}

        </div>

        <div>

          <h3 className="text-xl font-semibold">
            {section.title}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            {section.description}
          </p>

        </div>

        {section.technologies && (
          <div className="flex flex-wrap gap-2">

            {section.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-muted px-2 py-1 text-xs"
              >
                {tech}
              </span>
            ))}

          </div>
        )}

        <button className="font-medium transition-colors hover:text-primary">
          View Component →
        </button>

      </div>

    </article>
    </Link>
  );
}