import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "ibe:inline-flex ibe:items-center ibe:justify-center ibe:gap-2 ibe:whitespace-nowrap ibe:rounded-md ibe:text-sm ibe:font-medium ibe:transition-all ibe:disabled:pointer-events-none ibe:disabled:opacity-50 ibe:[&_svg]:pointer-events-none ibe:[&_svg:not([class*=size-])]:size-4 ibe:shrink-0 ibe:[&_svg]:shrink-0 ibe:outline-none ibe:focus-visible:border-ring ibe:focus-visible:ring-ring/50 ibe:focus-visible:ring-[3px] ibe:aria-invalid:ring-destructive/20 ibe:dark:aria-invalid:ring-destructive/40 ibe:aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "ibe:bg-primary ibe:text-primary-foreground ibe:shadow-xs ibe:hover:bg-primary/90",
        destructive:
          "ibe:bg-destructive ibe:text-white ibe:shadow-xs ibe:hover:bg-destructive/90 ibe:focus-visible:ring-destructive/20 ibe:dark:focus-visible:ring-destructive/40 ibe:dark:bg-destructive/60",
        outline:
          "ibe:border ibe:bg-background ibe:shadow-xs ibe:hover:bg-accent ibe:hover:text-accent-foreground ibe:dark:bg-input/30 ibe:dark:border-input ibe:dark:hover:bg-input/50",
        secondary:
          "ibe:bg-secondary ibe:text-secondary-foreground ibe:shadow-xs ibe:hover:bg-secondary/80",
        ghost:
          "ibe:hover:bg-accent ibe:hover:text-accent-foreground ibe:dark:hover:bg-accent/50",
        link: "ibe:text-primary ibe:underline-offset-4 ibe:hover:underline",
      },
      size: {
        default: "ibe:h-9 ibe:px-4 ibe:py-2 ibe:has-[>svg]:px-3",
        sm: "ibe:h-8 ibe:rounded-md ibe:gap-1.5 ibe:px-3 ibe:has-[>svg]:px-2.5",
        lg: "ibe:h-10 ibe:rounded-md ibe:px-6 ibe:has-[>svg]:px-4",
        icon: "ibe:size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
