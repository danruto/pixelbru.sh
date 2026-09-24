import { ArrowUpRight, BookOpen, Globe, Joystick, Presentation, Snowflake, Sparkles, Type } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Image from "next/image"
import { siGithub } from "simple-icons"

import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { cn } from "~/lib/utils"

import { BrandIcon } from "./brand-icon"
import { SectionHeading } from "./section-heading"

interface IProject {
    name: string
    description: string
    site?: string
    source?: string
    Icon: LucideIcon
    stack: string[]
    image?: string
    // Spans two columns on large screens
    wide?: boolean
}

export const OPEN_SOURCE_PROJECTS: IProject[] = [
    {
        name: "Retrotool",
        description:
            "A quick and easy ephemeral retro board with copy to clipboard for pasting into Confluence and ice breakers known as question time. No data is stored beyond the session.",
        site: "https://retro.pixelbru.sh",
        Icon: Presentation,
        stack: ["SolidJS", "Go", "Websockets", "TailwindCSS", "Docker", "GitHub Actions"],
        image: "/retrotool.png",
        wide: true,
    },
    {
        name: "Tracking the Pros - Worlds 2024",
        description: "A Solid-Start app to track the bootcamp accounts of League of Legends Worlds 2024 participants.",
        site: "https://worlds2024.pixelbru.sh",
        source: "https://github.com/danruto/track-the-pros",
        Icon: Joystick,
        stack: ["Solid-Start", "TypeScript", "Vite", "Supabase", "Postgres", "Drizzle"],
        image: "/ttp-min.png",
    },
    {
        name: "Raito-Zig",
        description: "A TUI light novel reader built in Zig with a custom built CSS parser.",
        source: "https://github.com/danruto/raito-zig",
        Icon: BookOpen,
        stack: ["Zig", "Tuile", "SQLite", "Postgres"],
        image: "/raito-zig.png",
    },
    {
        name: "pixelbru.sh",
        description: "This website! The main branch is the Next.js version.",
        site: "https://pixelbru.sh",
        source: "https://github.com/danruto/pixelbru.sh",
        Icon: Globe,
        stack: ["Next.js", "shadcn/ui", "TailwindCSS", "Cloudflare"],
    },
    {
        name: "pixelbru.sh dioxus",
        description: "This website again! The rust branch is the Dioxus version.",
        site: "https://rs.pixelbru.sh",
        source: "https://github.com/danruto/pixelbru.sh/tree/rust",
        Icon: Sparkles,
        stack: ["Rust", "Dioxus", "TailwindCSS"],
    },
    {
        name: "Nix Dotfiles",
        description: "In case you are also a nerd and want to see my configuration for whatever reason, here they are.",
        source: "https://github.com/danruto/dotfiles-nixos",
        Icon: Snowflake,
        stack: ["Nix", "Lua", "KDL", "TOML"],
    },
    {
        name: "Contentful Client Go",
        description:
            "A helper library for consuming Contentful GraphQL in a typed manner with some light types and utility methods.",
        source: "https://github.com/danruto/contentful-client-go",
        Icon: Type,
        stack: ["Go", "GraphQL"],
    },
    {
        name: "Friendly Words Go",
        description:
            "A little library to help you generate unique word lists for things like short urls, ids or any other friendly name scheme.",
        source: "https://github.com/danruto/friendly-words-go",
        Icon: Type,
        stack: ["Go"],
    },
]

const ProjectCard: React.FC<{ project: IProject }> = ({ project }) => {
    // The whole card links to the live site when there is one, otherwise the source
    const primary = project.site ?? project.source

    return (
        <article
            className={cn(
                "group bg-card/50 relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300",
                "hover:border-brand/40 hover:bg-card hover:shadow-brand/10 hover:-translate-y-1 hover:shadow-2xl",
                "has-[a:focus-visible]:ring-ring/50 has-[a:focus-visible]:ring-[3px]",
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
                <div className="bg-background text-brand flex size-10 items-center justify-center rounded-lg border">
                    <project.Icon className="size-5" />
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold tracking-tight">
                        <a
                            href={primary}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="outline-none after:absolute after:inset-0"
                        >
                            {project.name}
                        </a>
                    </h3>
                    <p className="text-muted-foreground text-sm text-pretty">{project.description}</p>
                </div>
                <ul className="flex flex-wrap gap-1.5 pt-2">
                    {project.stack.map((tech) => (
                        <li key={tech}>
                            <Badge variant="secondary">{tech}</Badge>
                        </li>
                    ))}
                </ul>
                <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-2">
                    {project.site && (
                        <Button size="sm" variant="outline" asChild>
                            <a href={project.site} target="_blank" rel="noopener noreferrer">
                                <Globe /> Live site <ArrowUpRight className="text-muted-foreground" />
                            </a>
                        </Button>
                    )}
                    {project.source && (
                        <Button size="sm" variant="outline" asChild>
                            <a href={project.source} target="_blank" rel="noopener noreferrer">
                                <BrandIcon icon={siGithub} /> Source <ArrowUpRight className="text-muted-foreground" />
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </article>
    )
}

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
