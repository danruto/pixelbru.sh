import { cn } from "~/lib/utils"

const Logo: React.FC<{ className?: string }> = ({ className }) => (
    <span
        className={cn(
            "font-pixel bg-linear-to-r from-indigo-200 to-indigo-400 bg-clip-text font-bold tracking-wide text-transparent",
            className,
        )}
    >
        PIXEL BRUSH
    </span>
)

export { Logo }
export default Logo
