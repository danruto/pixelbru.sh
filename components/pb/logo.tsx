import { cn } from "~/lib/utils"

interface ILogoProps {
    className?: string
    /**
     * Type the wordmark out on load with a blinking cursor, and ripple the letters when a
     * parent `group/logo` is hovered. The letters are hidden from assistive tech, so the
     * parent must label itself.
     */
    animated?: boolean
}

const WORDMARK = "pixel_brush"
const TYPE_DELAY_MS = 300
const TYPE_DURATION_MS = 1100

// The wordmark from the brand kit: Space Mono Bold, lowercase, followed by a block cursor
const Logo: React.FC<ILogoProps> = ({ className, animated = false }) => (
    <span
        className={cn("text-brand inline-flex items-center font-mono font-bold", className)}
        style={
            {
                "--chars": WORDMARK.length,
                "--type-delay": `${TYPE_DELAY_MS}ms`,
                "--type-duration": `${TYPE_DURATION_MS}ms`,
            } as React.CSSProperties
        }
    >
        {animated ? (
            // overflow-x-clip hides untyped letters while still letting them lift on hover
            <span aria-hidden className="animate-type inline-flex overflow-x-clip motion-reduce:animate-none">
                {[...WORDMARK].map((char, idx) => (
                    <span
                        // oxlint-disable-next-line react/no-array-index-key -- static wordmark, never reordered
                        key={idx}
                        className="inline-block w-[1ch] shrink-0 transition-[translate,color] duration-300 ease-out group-hover/logo:-translate-y-[0.15em] group-hover/logo:text-white motion-reduce:transition-none"
                        style={{ transitionDelay: `${idx * 30}ms` }}
                    >
                        {char}
                    </span>
                ))}
            </span>
        ) : (
            WORDMARK
        )}
        <span
            aria-hidden
            className={cn(
                "ml-[0.06em] inline-block h-[0.95em] w-[0.55em] shrink-0 bg-white",
                // Solid while typing, then blinks like a terminal prompt; holds solid in brand colour on hover
                animated &&
                    "animate-blink group-hover/logo:bg-brand transition-colors duration-300 group-hover/logo:animate-none motion-reduce:animate-none",
            )}
            style={animated ? { animationDelay: `${TYPE_DELAY_MS + TYPE_DURATION_MS}ms` } : undefined}
        />
    </span>
)

export { Logo }
export default Logo
