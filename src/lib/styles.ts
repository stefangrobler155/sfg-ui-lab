// src/lib/styles.ts

export const styles = {
  // ===== Layout =====

  section: "py-24",

  container: "mx-auto max-w-7xl px-6 lg:px-8",

  sectionHeader: "mx-auto mb-16 max-w-3xl text-center",

  sectionGrid: "grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-8",

  // ===== Typography =====

  eyebrow:
    "text-sm font-semibold uppercase tracking-[0.2em] text-primary",

  heading:
    "mt-4 text-4xl font-bold tracking-tight lg:text-5xl",

  description:
    "mt-6 text-lg leading-8 text-muted-foreground",

  cardTitle:
    "mt-6 text-xl text-left font-semibold",

  cardDescription:
    "mt-3 leading-7 text-left text-muted-foreground",

  // ===== Cards =====

  card:
    "rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg",

  iconContainer:
    "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300",
  
  cardContent: 
    "flex flex-col gap-4",

  // ===== Buttons =====

  buttonGroup:
    "mt-10 flex flex-wrap items-center justify-center gap-4",
  // ===== LOGOS =====
  logoGrid:
  "grid grid-cols-2 gap-8 md:grid-cols-4"
};