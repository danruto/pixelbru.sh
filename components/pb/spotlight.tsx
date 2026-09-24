"use client"

import { useRef } from "react"

import { cn } from "~/lib/utils"

interface ISpotlightProps extends React.ComponentProps<"div"> {
    /** Radius in px of the brighter grid revealed around the cursor */
    radius?: number
}

/**
 * Tracks the pointer and exposes its position as `--x`/`--y` so the glow and
 * highlighted grid can follow it. The variables are written to the overlay
 * layer only, never to an ancestor of the content, so buttons and links are
 * not restyled on every pointer move (which can make browsers drop the hover
 * cursor). Updates are batched to one per animation frame.
 */
const Spotlight: React.FC<ISpotlightProps> = ({ className, children, radius = 220, ...props }) => {
    const overlayRef = useRef<HTMLDivElement>(null)
    const frame = useRef<number | null>(null)

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.pointerType !== "mouse" || frame.current !== null) return
        const { clientX, clientY, currentTarget } = e
        frame.current = requestAnimationFrame(() => {
            frame.current = null
            const overlay = overlayRef.current
            if (!overlay) return
            const rect = currentTarget.getBoundingClientRect()
            overlay.style.setProperty("--x", `${clientX - rect.left}px`)
            overlay.style.setProperty("--y", `${clientY - rect.top}px`)
        })
    }

    return (
        <div onPointerMove={onPointerMove} className={cn("group/spotlight relative isolate", className)} {...props}>
            <div
                ref={overlayRef}
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover/spotlight:opacity-100 motion-reduce:hidden"
                style={{ "--spotlight-radius": `${radius}px` } as React.CSSProperties}
            >
                <div
                    className="bg-grid-brand absolute inset-0"
                    style={{
                        maskImage:
                            "radial-gradient(circle var(--spotlight-radius) at var(--x, 50%) var(--y, 50%), black, transparent)",
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), color-mix(in oklch, var(--brand) 14%, transparent), transparent 70%)",
                    }}
                />
            </div>
            {children}
        </div>
    )
}

export { Spotlight }
export default Spotlight
