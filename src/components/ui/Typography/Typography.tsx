import * as React from "react";
import { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { typographyVariants } from "./typographyVariants";

type TypographyProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyVariants> & {
    as?: React.ElementType;
  };

export function Typography({
  as: Component = "p",
  variant,
  className,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        typographyVariants({
          variant,
        }),
        className
      )}
      {...props}
    />
  );
}