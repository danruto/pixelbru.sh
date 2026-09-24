import {
    siCloudflare,
    siDocker,
    siDotnet,
    siGo,
    siGooglecloud,
    siGraphql,
    siKubernetes,
    siNeovim,
    siNextdotjs,
    siNixos,
    siNodedotjs,
    siPostgresql,
    siPython,
    siReact,
    siRust,
    siSolid,
    siSqlite,
    siSupabase,
    siTailwindcss,
    siTemporal,
    siTypescript,
    siZig,
} from "simple-icons"

import { Marquee } from "~/components/ui/marquee"

import { BrandIcon } from "./brand-icon"

const SKILLS = [
    siGo,
    siRust,
    siTypescript,
    siZig,
    siPython,
    siDotnet,
    siReact,
    siNextdotjs,
    siSolid,
    siTailwindcss,
    siNodedotjs,
    siGraphql,
    siTemporal,
    siPostgresql,
    siSqlite,
    siSupabase,
    siDocker,
    siKubernetes,
    siGooglecloud,
    siCloudflare,
    siNixos,
    siNeovim,
]

const Skills: React.FC = () => (
    <section aria-label="Technologies I work with" className="bg-card/30 border-y py-6">
        <Marquee pauseOnHover repeat={2} className="mask-x-from-85% [--duration:60s] [--gap:2.5rem]">
            {SKILLS.map((icon) => (
                <span
                    key={icon.slug}
                    className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
                >
                    <BrandIcon icon={icon} className="size-5" />
                    <span className="text-sm font-medium">{icon.title}</span>
                </span>
            ))}
        </Marquee>
    </section>
)

export { Skills }
export default Skills
