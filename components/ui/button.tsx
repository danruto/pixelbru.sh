import { type VariantProps, cva } from "class-variance-authority"
import { Slot } from "radix-ui"
import type * as React from "react"

import { cn } from "~/lib/utils"

const buttonVariants = cva(
    "focus-visible:ring-ring/50 inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs",
                brand: "bg-brand text-brand-foreground hover:bg-brand/90 shadow-xs",
                destructive: "bg-destructive hover:bg-destructive/90 text-white shadow-xs",
                outline:
                    "bg-background/50 hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/20 dark:hover:bg-input/40 border shadow-xs backdrop-blur",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-xs",
                ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
                lg: "h-11 rounded-lg px-6 text-base has-[>svg]:px-4",
                icon: "size-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
)

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
    const Comp = asChild ? Slot.Root : "button"
    return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }
