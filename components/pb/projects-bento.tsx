import { BookOpenIcon, Globe, Joystick, Presentation, TerminalIcon } from "lucide-react"
import { BentoCard, BentoGrid } from "~/components/ui/bento-grid"
import { AnimatedList } from "~/components/ui/animated-list"
import { Badge } from "../ui/badge"

const OPEN_SOURCE_PROJECTS = [
    {
        id: "1",
        Icon: Globe,
        name: "pixelbru.sh",
        description: "This website! The main branch is the NextJS version.",
        href: "https://github.com/danruto/pixelbru.sh",
        cta: "See the source code!",
        className: "col-span-1 bg-background",
        background: (
            <div className="absolute top-10 bottom-10 [--duration:5s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] px-20">
                <AnimatedList>
                    {Array.from({ length: 10 }, () => ["NextJS", "NyxbUI", "TailwindCSS", "Biome", "Vercel", "PNPM"])
                        .flat()
                        .map((item, idx) => (
                            // biome-ignore lint/suspicious/noArrayIndexKey: As we need to repeat the array, unique id's don't exist
                            <Badge key={idx}>{item}</Badge>
                        ))}
                </AnimatedList>
            </div>
        ),
    },
    {
        id: "2",
        Icon: Joystick,
        name: "Tracking the Pros - Worlds 2024",
        description: "A Solid-Start app to track the bootcamp accounts of League of Legends Worlds 2024 participants",
        href: "https://worlds2024.pixelbru.sh",
        cta: "Visit the site!",
        className: "col-span-1 lg:col-span-2 bg-background",
        background: (
            <div className="absolute top-10 bottom-10 [--duration:5s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] px-20">
                <AnimatedList>
                    {Array.from({ length: 10 }, () => [
                        "Solid-Start",
                        "Typescript",
                        "Vite",
                        "Vinxi",
                        "Supabase",
                        "Postgres",
                        "Drizzle",
                        "NodeJS",
                        "Vercel",
                        "Biome",
                        "PNPM",
                    ])
                        .flat()
                        .map((item, idx) => (
                            // biome-ignore lint/suspicious/noArrayIndexKey: As we need to repeat the array, unique id's don't exist
                            <Badge key={idx}>{item}</Badge>
                        ))}
                </AnimatedList>
            </div>
        ),
    },
    {
        id: "3",
        name: "Raito-Zig",
        description: "A TUI Light Novel reader built in Zig with a custom built css parser",
        Icon: BookOpenIcon,
        href: "https://github.com/danruto/raito-zig",
        cta: "See the source code!",
        className: "col-span-1 lg:col-span-2 bg-background",
        background: (
            <div className="absolute top-10 bottom-10 [--duration:5s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] px-20">
                <AnimatedList>
                    {Array.from({ length: 10 }, () => ["Zig", "Tuile", "SQLite", "Xata"])
                        .flat()
                        .map((item, idx) => (
                            // biome-ignore lint/suspicious/noArrayIndexKey: As we need to repeat the array, unique id's don't exist
                            <Badge key={idx}>{item}</Badge>
                        ))}
                </AnimatedList>
            </div>
        ),
    },
    {
        id: "4",
        Icon: Globe,
        name: "pixelbru.sh dioxus",
        description: "This website! The rust branch is the Dioxus version.",
        href: "https://github.com/danruto/pixelbru.sh/tree/rust",
        cta: "See the source code!",
        className: "col-span-1 bg-background",
        background: (
            <div className="absolute top-10 bottom-10 [--duration:5s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] px-20">
                <AnimatedList>
                    {Array.from({ length: 10 }, () => ["TailwindCSS", "Dioxus", "Rust"])
                        .flat()
                        .map((item, idx) => (
                            // biome-ignore lint/suspicious/noArrayIndexKey: As we need to repeat the array, unique id's don't exist
                            <Badge key={idx}>{item}</Badge>
                        ))}
                </AnimatedList>
            </div>
        ),
    },
    {
        id: "5",
        name: "Nix Dotfiles",
        description: "In case you are also a nerd and want to see my configuration for whatever reason, here they are",
        Icon: TerminalIcon,
        href: "https://github.com/danruto/dotfiles-nixos",
        cta: "See the source code!",
        className: "col-span-1 bg-background",
        background: (
            <div className="absolute top-10 bottom-10 [--duration:5s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] px-20">
                <AnimatedList>
                    {Array.from({ length: 10 }, () => ["Nix", "Lua", "KDL", "TOML"])
                        .flat()
                        .map((item, idx) => (
                            // biome-ignore lint/suspicious/noArrayIndexKey: As we need to repeat the array, unique id's don't exist
                            <Badge key={idx}>{item}</Badge>
                        ))}
                </AnimatedList>
            </div>
        ),
    },
    {
        id: "6",
        name: "Retrotool",
        description:
            "A quick and easy ephemeral retro board that has some fun features like copy to clipboard for pasting in Confluence, ice breakers known as question time and no data is stored beyond the session.",
        Icon: Presentation,
        href: "https://retro.pixelbru.sh",
        cta: "Visit the site!",
        className: "col-span-1 lg:col-span-2 bg-background",
        background: (
            <div className="absolute top-10 bottom-10 [--duration:5s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] px-20">
                <AnimatedList>
                    {Array.from({ length: 10 }, () => ["TailwindCSS", "SolidJS", "Go", "Websockets", "Github Actions"])
                        .flat()
                        .map((item, idx) => (
                            // biome-ignore lint/suspicious/noArrayIndexKey: As we need to repeat the array, unique id's don't exist
                            <Badge key={idx}>{item}</Badge>
                        ))}
                </AnimatedList>
            </div>
        ),
    },
]

const ProjectsBento: React.FC = () => (
    <BentoGrid className="grid-cols-1 md:grid-cols-3">
        {OPEN_SOURCE_PROJECTS.map((row) => (
            <BentoCard key={row.id} {...row} />
        ))}
    </BentoGrid>
)

export { ProjectsBento }
export default ProjectsBento
