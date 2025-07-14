import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "ibe:inline-flex ibe:items-center ibe:justify-center ibe:gap-2 ibe:whitespace-nowrap ibe:rounded-md ibe:text-sm ibe:font-medium ibe:transition-all ibe:disabled:pointer-events-none ibe:disabled:opacity-50 ibe:[&_svg]:pointer-events-none ibe:[&_svg:not([class*=size-])]:size-4 ibe:shrink-0 ibe:[&_svg]:shrink-0 ibe:outline-none ibe:focus-visible:border-neutral-950 ibe:focus-visible:ring-neutral-950/50 ibe:focus-visible:ring-[3px] ibe:aria-invalid:ring-red-500/20 ibe:dark:aria-invalid:ring-red-500/40 ibe:aria-invalid:border-red-500 ibe:dark:focus-visible:border-neutral-300 ibe:dark:focus-visible:ring-neutral-300/50 ibe:dark:aria-invalid:ring-red-900/20 ibe:dark:dark:aria-invalid:ring-red-900/40 ibe:dark:aria-invalid:border-red-900",
  {
    variants: {
      variant: {
        default:
          "ibe:bg-neutral-900 ibe:text-neutral-50 ibe:shadow-xs ibe:hover:bg-neutral-900/90 ibe:dark:bg-neutral-50 ibe:dark:text-neutral-900 ibe:dark:hover:bg-neutral-50/90",
        destructive:
          "ibe:bg-red-500 ibe:text-white ibe:shadow-xs ibe:hover:bg-red-500/90 ibe:focus-visible:ring-red-500/20 ibe:dark:focus-visible:ring-red-500/40 ibe:dark:bg-red-500/60 ibe:dark:bg-red-900 ibe:dark:hover:bg-red-900/90 ibe:dark:focus-visible:ring-red-900/20 ibe:dark:dark:focus-visible:ring-red-900/40 ibe:dark:dark:bg-red-900/60",
        outline:
          "ibe:border ibe:bg-white ibe:shadow-xs ibe:hover:bg-neutral-100 ibe:hover:text-neutral-900 ibe:dark:bg-neutral-200/30 ibe:dark:border-neutral-200 ibe:dark:hover:bg-neutral-200/50 ibe:dark:bg-neutral-950 ibe:dark:hover:bg-neutral-800 ibe:dark:hover:text-neutral-50 ibe:dark:dark:bg-neutral-800/30 ibe:dark:dark:border-neutral-800 ibe:dark:dark:hover:bg-neutral-800/50",
        secondary:
          "ibe:bg-neutral-100 ibe:text-neutral-900 ibe:shadow-xs ibe:hover:bg-neutral-100/80 ibe:dark:bg-neutral-800 ibe:dark:text-neutral-50 ibe:dark:hover:bg-neutral-800/80",
        ghost:
          "ibe:hover:bg-neutral-100 ibe:hover:text-neutral-900 ibe:dark:hover:bg-neutral-100/50 ibe:dark:hover:bg-neutral-800 ibe:dark:hover:text-neutral-50 ibe:dark:dark:hover:bg-neutral-800/50",
        link: "ibe:text-neutral-900 ibe:underline-offset-4 ibe:hover:underline ibe:dark:text-neutral-50",
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
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
