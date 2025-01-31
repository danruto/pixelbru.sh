import Marquee from "~/components/ui/marquee"
import { Badge } from "../ui/badge"

const TECH_SKILLS = [
    // Programming Languages
    "Rust",
    "Go",
    "C#",
    "Python",
    "Zig",
    "TypeScript",

    // Frameworks
    "Solid",
    "NextJS",
    "React",
    "Tailwind",

    // DevOps
    "AWS",
    "Azure",
    "DevOps",
    "Nix",

    // Misc
    "WebExt",
    "Storybook",
    "Ladle",
    "Hotjar",
    "SEO",
    "eCommerce",
]
const OTHER_SKILLS = [
    "Communication",
    "Client management",
    "JIRA",
    "Storyboarding",
    "User stories",
    "Confluence",
    "Documentation",
]

const SkillsMarquee: React.FC = () => (
    <div className="relative flex size-full flex-col items-center justify-center overflow-hidden py-4">
        <Marquee pauseOnHover className="[--duration:20s]">
            {TECH_SKILLS.map((row) => (
                <Badge key={row}>{row}</Badge>
            ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
            {OTHER_SKILLS.map((row) => (
                <Badge key={row}>{row}</Badge>
            ))}
        </Marquee>
    </div>
)

export { SkillsMarquee }
export default SkillsMarquee
