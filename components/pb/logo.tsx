import { cn } from "~/lib/utils"

interface ILogoProps {
    className?: string
    /**
     * Ripple the letters and sweep the colour when a parent `group/logo` is hovered.
     * The letters are hidden from assistive tech, so the parent must label itself.
     */
    animated?: boolean
}

const WORDMARK = "pixel_brush"

// The wordmark from the brand kit: Space Mono Bold, lowercase, followed by a block cursor
const Logo: React.FC<ILogoProps> = ({ className, animated = false }) => (
    <span className={cn("text-brand inline-flex items-center font-mono font-bold tracking-tight", className)}>
        {animated ? (
            <span aria-hidden className="inline-flex">
                {[...WORDMARK].map((char, idx) => (
                    <span
                        // oxlint-disable-next-line react/no-array-index-key -- static wordmark, never reordered
                        key={idx}
                        className="inline-block transition-[translate,color] duration-300 ease-out group-hover/logo:-translate-y-[0.15em] group-hover/logo:text-white motion-reduce:transition-none"
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
                "ml-[0.06em] inline-block h-[0.95em] w-[0.55em] bg-white",
                animated &&
                    "group-hover/logo:bg-brand group-hover/logo:animate-blink transition-colors duration-300 motion-reduce:animate-none",
            )}
        />
    </span>
)

export { Logo }
export default Logo
