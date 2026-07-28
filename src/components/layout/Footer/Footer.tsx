import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>

        <div className="flex flex-col gap-2 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>

          <p>
            Built with Next.js, Tailwind CSS, Framer Motion & Three.js
          </p>

        </div>

      </Container>
    </footer>
  );
}