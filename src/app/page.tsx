import { sections } from "@/catalog/sections";

import { SectionCard } from "@/components/preview/SectionCard/SectionCard";
import { SectionGrid } from "@/components/preview/SectionGrid/SectionGrid";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { getFeaturedSections } from "@/catalog";

const featuredSections = getFeaturedSections();

export default function HomePage() {
  return (
    <Container>
      <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">

        <Typography as="h1" variant="display">
          SFG UI Lab
        </Typography>

        <Typography
          variant="lead"
          className="mt-6 max-w-2xl"
        >
          A growing collection of premium website sections,
          reusable UI components, animations and effects built
          with Next.js, Tailwind CSS, Framer Motion and
          React Three Fiber.
        </Typography>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button>Browse Sections</Button>
          <Button variant="outline">Playground</Button>
        </div>

      </section>

      {/* Gallery */}

      <section className="py-20">

        <Typography
          as="h2"
          variant="h2"
          className="mb-8"
        >
          Featured Sections
        </Typography>

        <SectionGrid sections={featuredSections} />

      </section>

    </Container>
  );
}