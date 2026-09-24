import type * as React from "react"

import { cn } from "~/lib/utils"

interface MarqueeProps extends React.ComponentProps<"div"> {
    reverse?: boolean
    pauseOnHover?: boolean
    repeat?: number
}

function Marquee({ className, reverse = false, pauseOnHover = false, repeat = 4, children, ...props }: MarqueeProps) {
    return (
        <div
            data-slot="marquee"
            className={cn("group flex gap-(--gap) overflow-hidden p-2 [--duration:40s] [--gap:1rem]", className)}
            {...props}
        >
            {Array.from({ length: repeat }, (_, i) => (
                <div
                    key={i}
                    aria-hidden={i > 0}
                    className={cn(
                        "animate-marquee flex shrink-0 flex-row justify-around gap-(--gap) motion-reduce:animate-none",
                        pauseOnHover && "group-hover:[animation-play-state:paused]",
                        reverse && "[animation-direction:reverse]",
                    )}
                >
                    {children}
                </div>
            ))}
        </div>
    )
}

export { Marquee }
