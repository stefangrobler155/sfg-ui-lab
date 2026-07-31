import { SectionMetadata } from "@/types/section";
import Link from "next/link";

interface SectionHeaderProps {
  section: SectionMetadata;
}

export function LibraryHeader({
  section,
}: SectionHeaderProps) {
  return (
    <header className="space-y-6">

      <Link
        href="/"
        className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Back to Gallery
      </Link>

      <div>

        <h1 className="text-5xl font-bold tracking-tight">
          {section.title}
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          {section.description}
        </p>

      </div>

      <div className="flex flex-wrap gap-3">

        <span className="rounded-full border px-3 py-1 text-sm">
          {section.category}
        </span>

        {section.difficulty && (
          <span className="rounded-full border px-3 py-1 text-sm">
            {section.difficulty}
          </span>
        )}

        {section.version && (
          <span className="rounded-full border px-3 py-1 text-sm">
            v{section.version}
          </span>
        )}

      </div>

    </header>
  );
}