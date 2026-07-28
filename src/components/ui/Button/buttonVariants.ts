import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:opacity-90",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",

        outline:
          "border border-border bg-background hover:bg-muted",

        ghost:
          "hover:bg-muted",

        glass:
          "border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
      },

      size: {
        sm: "h-9 px-3",

        md: "h-10 px-5",

        lg: "h-12 px-6",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);