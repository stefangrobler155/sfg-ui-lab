import { cva } from "class-variance-authority";

export const typographyVariants = cva("", {
  variants: {
    variant: {
      display:
        "scroll-m-20 text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl",

      h1:
        "scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl",

      h2:
        "scroll-m-20 text-3xl font-semibold tracking-tight",

      h3:
        "scroll-m-20 text-2xl font-semibold tracking-tight",

      lead:
        "text-xl text-muted-foreground",

      body:
        "leading-7 text-muted-foreground",

      caption:
        "text-sm text-muted-foreground",

      code:
        "rounded bg-muted px-1.5 py-0.5 font-mono text-sm",
    },
  },

  defaultVariants: {
    variant: "body",
  },
});