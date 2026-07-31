"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import Link from "next/link";

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

        <div className="mt-10 flex flex-wrap justify-center gap-4 pb-4">
          <Button><Link href="/library">Browse Library</Link></Button>
          <Button variant="outline">Playground</Button>
        </div>

      </section>

    </Container>
  );
}