"use client";

import Link from "next/link";

import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">

          <Link
            href="/"
            className="text-lg font-semibold tracking-tight"
          >
            {siteConfig.name}
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

        </div>
      </Container>
    </header>
  );
}