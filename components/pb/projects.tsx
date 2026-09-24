import { ArrowUpRight, BookOpen, Globe, Joystick, Presentation, Snowflake, Sparkles, Type } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Image from "next/image"

import { Badge } from "~/components/ui/badge"
import { cn } from "~/lib/utils"

import { SectionHeading } from "./section-heading"

interface IProject {
    name: string
    description: string
    href: string
    kind: "Source" | "Live site"
    Icon: LucideIcon
    stack: string[]
    image?: string
    // Spans two columns on large screens
    wide?: boolean
}

const OPEN_SOURCE_PROJECTS: IProject[] = [
    {
        name: "Retrotool",
        description:
            "A quick and easy ephemeral retro board with copy to clipboard for pasting into Confluence and ice breakers known as question time. No data is stored beyond the session.",
        href: "https://retro.pixelbru.sh",
        kind: "Live site",
        Icon: Presentation,
        stack: ["SolidJS", "Go", "Websockets", "TailwindCSS", "Docker", "GitHub Actions"],
        image: "/retrotool.png",
        wide: true,
    },
    {
        name: "Tracking the Pros - Worlds 2024",
        description: "A Solid-Start app to track the bootcamp accounts of League of Legends Worlds 2024 participants.",
        href: "https://worlds2024.pixelbru.sh",
        kind: "Live site",
        Icon: Joystick,
        stack: ["Solid-Start", "TypeScript", "Vite", "Supabase", "Postgres", "Drizzle"],
        image: "/ttp-min.png",
    },
    {
        name: "Raito-Zig",
        description: "A TUI light novel reader built in Zig with a custom built CSS parser.",
        href: "https://github.com/danruto/raito-zig",
        kind: "Source",
        Icon: BookOpen,
        stack: ["Zig", "Tuile", "SQLite", "Postgres"],
        image: "/raito-zig.png",
    },
    {
        name: "pixelbru.sh",
        description: "This website! The main branch is the Next.js version.",
        href: "https://github.com/danruto/pixelbru.sh",
        kind: "Source",
        Icon: Globe,
        stack: ["Next.js", "shadcn/ui", "TailwindCSS", "Cloudflare"],
    },
    {
        name: "pixelbru.sh dioxus",
        description: "This website again! The rust branch is the Dioxus version.",
        href: "https://github.com/danruto/pixelbru.sh/tree/rust",
        kind: "Source",
        Icon: Sparkles,
        stack: ["Rust", "Dioxus", "TailwindCSS"],
    },
    {
        name: "Nix Dotfiles",
        description: "In case you are also a nerd and want to see my configuration for whatever reason, here they are.",
        href: "https://github.com/danruto/dotfiles-nixos",
        kind: "Source",
        Icon: Snowflake,
        stack: ["Nix", "Lua", "KDL", "TOML"],
    },
    {
        name: "Contentful Client Go",
        description:
            "A helper library for consuming Contentful GraphQL in a typed manner with some light types and utility methods.",
        href: "https://github.com/danruto/contentful-client-go",
        kind: "Source",
        Icon: Type,
        stack: ["Go", "GraphQL"],
    },
    {
        name: "Friendly Words Go",
        description:
            "A little library to help you generate unique word lists for things like short urls, ids or any other friendly name scheme.",
        href: "https://github.com/danruto/friendly-words-go",
        kind: "Source",
        Icon: Type,
        stack: ["Go"],
    },
]

const ProjectCard: React.FC<{ project: IProject }> = ({ project }) => (
    <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
            "group bg-card/50 relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300",
            "hover:border-brand/40 hover:bg-card hover:shadow-brand/10 hover:-translate-y-1 hover:shadow-2xl",
            "focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none",
            project.wide && "lg:col-span-2",
        )}
    >
        {project.image && (
            <div
                className={cn(
                    "bg-muted relative aspect-video overflow-hidden border-b",
                    project.wide && "lg:aspect-auto lg:min-h-48 lg:flex-1",
                )}
            >
                <Image
                    src={project.image}
                    alt={`Screenshot of ${project.name}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
            </div>
        )}
        <div className="flex flex-1 flex-col gap-4 p-6">
            <div className="flex items-start justify-between gap-4">
                <div className="bg-background text-brand flex size-10 items-center justify-center rounded-lg border">
                    <project.Icon className="size-5" />
                </div>
                <span className="text-muted-foreground group-hover:text-foreground flex items-center gap-1 text-xs transition-colors">
                    {project.kind}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
                <p className="text-muted-foreground text-sm text-pretty">{project.description}</p>
            </div>
            <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {project.stack.map((tech) => (
                    <li key={tech}>
                        <Badge variant="secondary">{tech}</Badge>
                    </li>
                ))}
            </ul>
        </div>
    </a>
)

const Projects: React.FC = () => (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
        <SectionHeading
            eyebrow="01 / Projects"
            title="Things I've built in the open"
            description="A mix of side projects, tools and libraries. Most of them are open source, so feel free to poke around."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {OPEN_SOURCE_PROJECTS.map((project) => (
                <ProjectCard key={project.name} project={project} />
            ))}
        </div>
    </section>
)

export { Projects }
export default Projects
