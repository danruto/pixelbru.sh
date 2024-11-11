import { MagicCard, MagicContainer } from "~/components/ui/magic-card"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { ny } from "~/lib/utils"
import Marquee from "~/components/ui/marquee"
import { Globe } from "lucide-react"
import BoxReveal from "~/components/ui/box-reveal"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

interface IProject {
    name: string
    description: string
    period: string
    url?: string
    repository?: string
    image?: string
    stack: string[]
}

const PROJECT_LIST: IProject[] = [
    {
        name: "pixelbru.sh",
        description: "This website! The main branch is the NextJS version.",
        period: "2024",
        url: "https://pixelbru.sh",
        repository: "https://github.com/danruto/pixelbru.sh",
        stack: ["NextJS", "NyxbUI", "TailwindCSS"],
    },
    {
        name: "pixelbru.sh dioxus",
        description: "This website! The rust branch is the Dioxus version.",
        period: "2024",
        url: "https://rs.pixelbru.sh",
        repository: "https://github.com/danruto/pixelbru.sh/tree/rust",
        stack: ["Tailwind", "Dioxus", "Rust"],
    },
    {
        name: "Tracking the Pros - Worlds 2024",
        description: "A Solid-Start app to track the bootcamp accounts of League of Legends Worlds 2024 participants",
        period: "2024",
        url: "https://worlds2024.pixelbru.sh",
        repository: "https://github.com/danruto/track-the-pros",
        stack: ["Solid-Start", "Typescript", "Vite", "Vinxi", "Supabase", "Postgres", "Drizzle", "NodeJS"],
    },
    {
        name: "Raito-Zig",
        description: "A TUI Light Novel reader built in Zig with a custom built css parser",
        period: "2024",
        repository: "https://github.com/danruto/raito-zig",
        stack: ["Zig", "Tuile", "SQLite", "Xata"],
    },
    {
        name: "Reflectal",
        description: "A corporate mental health and wellbeing app",
        period: "2024",
        url: "https://reflectal.au",
        stack: [
            "NextJS",
            "Typescript",
            "Ladle",
            "Vercel",
            "Go",
            "Fiber",
            "Websockets",
            "Appwrite",
            "AWS",
            "AWS Cloudformation",
            "AWS Cloudwatch",
            "AWS ECS",
            "AWS ECR",
            "AWS IAM",
            "AWS RDS",
            "AWS S3",
            "Twilio",
            "Hotjar",
            "GA",
            "Postgres",
            "Docker",
            "Github Actions",
        ],
    },
    {
        name: "Retrotool",
        description:
            "A quick and easy ephemeral retro board that has some fun features like copy to clipboard for pasting in Confluence, ice breakers known as question time and no data is stored beyond the session.",
        period: "2024",
        url: "https://retro.pixelbru.sh",
        stack: ["Tailwind", "SolidJS", "Go", "Fiber", "Websockets", "Github Actions"],
    },
    {
        name: "GAF Digitisation",
        description:
            "Digitised the GAF calculators from https://piccc.org.au/resources/Tools.html specfiically the SB-GAF and G-GAFs. The project was built in Go and produced results for real-time calculations in under 100ms TRT",
        period: "2022-2024",
        stack: [
            "Go",
            "Fiber",
            "React",
            "Tailwind",
            "Hasura",
            "Postgres",
            "Tilt",
            "Kubernetes",
            "Docker",
            "Github Actions",
            "Storybook",
        ],
    },
    {
        name: "Mortgage Lending Management System",
        description:
            "A platform to help brokers and consumers to manage the loan that is being serviced for their mortgage.",
        period: "2021-2022",
        stack: [".NET Core", "Azure", "Azure DevOps", "Go", "React", "Storybook", "Docker", "PEXA"],
    },
    {
        name: "Waypass",
        description: "An early QR code check-in mobile application with geo-fencing during COVID lockdowns",
        period: "2020",
        stack: ["Flutter", "Python", "Firebase"],
    },
    {
        name: "eNVD",
        description: "A platform to help farmers track the movement and other vital information of their livestock.",
        period: "2019-2021",
        url: "https://envd.integritysystems.com.au",
        stack: [
            "CSS",
            "SASS",
            "React",
            ".NET Core",
            "GraphQL",
            "AWS",
            "AWS Cloudformation",
            "AWS Cloudwatch",
            "AWS ECS",
            "AWS ECR",
            "AWS IAM",
            "AWS Lambda",
            "AWS RDS",
            "AWS S3",
            "Bitbucket Pipelines",
            "Python",
            "Canvas/WebGL",
            "Storybook",
            "Docker",
        ],
    },
    {
        name: "Custom Bridesmaid Dresses",
        description:
            "Built a UI around the concept of building your own bridesmaid dresses. These dresses had multiple components that would change in compatibility based on other selections in any direction (that is a top half, bottom half, side etc). This solution could render the stiched drawing of the calculated dress in under 100ms with full lazy loading.",
        period: "2018-2019",
        stack: [
            "CSS",
            "SASS",
            "Typescript",
            "React",
            ".NET Core",
            "AWS Cloudformation",
            "AWS Cloudwatch",
            "AWS EB",
            "AWS IAM",
            "AWS Lambda",
            "AWS RDS",
            "AWS S3",
            "Ruby on Rails",
            "CircleCI",
            "Storybook",
            "Docker",
        ],
    },
    {
        name: "CyRisk",
        description:
            "Built the initial solution to CyRisk (later called eDNA) which was a cyber security risk assessment platform.",
        period: "2017-2018",
        stack: ["React", ".NET Core", "MSSQL", "Typescript", "Azure", "Azure DevOps", "Storybook"],
    },
]

const Projects = () => (
    <MagicContainer className="w-full lg:flex-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECT_LIST.map((project) => (
            <MagicCard
                key={project.name}
                className="w-full overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#c7d2fe_0,#818cf8_50%,transparent_100%)] p-4 shadow-2xl bg-indigo-300 dark:bg-indigo-600"
            >
                <div className="w-full h-full flex flex-col justify-between">
                    <div className="flex justify-between items-baseline">
                        <BoxReveal boxColor="#c7d2fe" duration={0.5}>
                            <h3 className="font-semibold text-xl">{project.name}</h3>
                        </BoxReveal>
                        <span
                            className={ny("grid gap-2", {
                                "grid-cols-1": project.url || project.repository,
                                // Replaces grid-cols-1 if both exist
                                "grid-cols-2": project.url && project.repository,
                            })}
                        >
                            {project.url && (
                                <a href={project.url} target="_blank" rel="noreferrer" title={project.name}>
                                    <Button variant={"outline"} size="icon" type="button">
                                        <Globe />
                                    </Button>
                                </a>
                            )}
                            {project.repository && (
                                <a href={project.repository} target="_blank" rel="noreferrer" title={project.name}>
                                    <Button variant={"outline"} size="icon" type="button">
                                        <GitHubLogoIcon width={24} height={24} />
                                    </Button>
                                </a>
                            )}
                        </span>
                    </div>

                    <BoxReveal boxColor="#c7d2fe" duration={0.5}>
                        <p className="text-md text-slate-400">{project.description}</p>
                    </BoxReveal>

                    <Marquee pauseOnHover>
                        {project.stack.map((s) => (
                            <Badge key={s} variant={"secondary"}>
                                {s}
                            </Badge>
                        ))}
                    </Marquee>
                </div>

                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
            </MagicCard>
        ))}
    </MagicContainer>
)

export default Projects
export { Projects }
