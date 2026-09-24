"use client"

import { useRef } from "react"

import { cn } from "~/lib/utils"

interface ISpotlightProps extends React.ComponentProps<"div"> {
    /** Radius in px of the brighter grid revealed around the cursor */
    radius?: number
}

/**
 * Tracks the pointer and exposes its position as `--x`/`--y` so the glow and
 * highlighted grid can follow it. Updates go straight to the DOM to avoid
 * re-rendering on every pointer move.
 */
const Spotlight: React.FC<ISpotlightProps> = ({ className, children, radius = 220, style, ...props }) => {
    const ref = useRef<HTMLDivElement>(null)

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        const el = ref.current
        if (!el || e.pointerType !== "mouse") return
        const rect = el.getBoundingClientRect()
        el.style.setProperty("--x", `${e.clientX - rect.left}px`)
        el.style.setProperty("--y", `${e.clientY - rect.top}px`)
    }

    return (
        <div
            ref={ref}
            onPointerMove={onPointerMove}
            className={cn("group/spotlight relative isolate", className)}
            style={{ "--spotlight-radius": `${radius}px`, ...style } as React.CSSProperties}
            {...props}
        >
            <div
                aria-hidden
                className="bg-grid-brand pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover/spotlight:opacity-100 motion-reduce:hidden"
                style={{
                    maskImage:
                        "radial-gradient(circle var(--spotlight-radius) at var(--x, 50%) var(--y, 50%), black, transparent)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover/spotlight:opacity-100 motion-reduce:hidden"
                style={{
                    background:
                        "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), color-mix(in oklch, var(--brand) 14%, transparent), transparent 70%)",
                }}
            />
            {children}
        </div>
    )
}

export { Spotlight }
export default Spotlight
