import { SectionHeading } from "./section-heading"

interface IRole {
    company: string
    title: string
    period: string
    location: string
    current?: boolean
    highlights: React.ReactNode[]
}

const ExternalLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a
        className="text-foreground decoration-brand/50 hover:decoration-brand underline underline-offset-4 transition-colors"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
    >
        {children}
    </a>
)

const ROLES: IRole[] = [
    {
        company: "Nearmap",
        title: "Senior Software Engineer",
        period: "Nov 2025 - Present",
        location: "Sydney",
        current: true,
        highlights: [
            <>
                Building large data processing pipelines in{" "}
                <ExternalLink href="https://temporal.io">Temporal</ExternalLink> for geospatial data applications
            </>,
            <>
                Implementing and designing best practices for distributed systems using{" "}
                <ExternalLink href="https://temporal.io">Temporal</ExternalLink>
            </>,
            "Implemented microservices for interacting with large data efficiently",
        ],
    },
    {
        company: "Pixel Brush",
        title: "Director",
        period: "Oct 2017 - Present",
        location: "Sydney",
        current: true,
        highlights: ["Current project is implementing an AI-powered cancer detection system"],
    },
    {
        company: "Terem",
        title: "Senior Golang Engineer",
        period: "Mar 2025 - Oct 2025",
        location: "Sydney",
        highlights: [
            <>
                Building large data processing pipelines in{" "}
                <ExternalLink href="https://temporal.io">Temporal</ExternalLink> for geospatial data applications
            </>,
            <>
                Implementing and designing best practices for distributed systems using{" "}
                <ExternalLink href="https://temporal.io">Temporal</ExternalLink>
            </>,
            "Implemented microservices for interacting with large data efficiently",
        ],
    },
    {
        company: "Hello Human",
        title: "Principal Full Stack Software Engineer",
        period: "Oct 2017 - Oct 2024",
        location: "Sydney",
        highlights: [
            <>
                Implemented a custom system that was able to generate <em>INFINITE (300 million)</em> customisable
                bridesmaid dresses on the fly with very fast UX, achieving page speeds of &gt;90
            </>,
            "Built the Agriculture Industry's first GraphQL API, reducing developer complexity from chaining multiple different REST endpoints for the dataset",
            "Transformed existing systems to use said GraphQL API which improved user productivity manyfold. As evident by NPS surveys and collected metrics, users were able to finish within minutes rather than hours",
            "Researched and developed a multitude of PoCs for different scenarios in different stacks such as a geo-aware mapping solution and a custom compression for transferring offline data or data in slow/bad internet environments",
            <>
                Built out a digitised version of{" "}
                <ExternalLink href="https://www.piccc.org.au/resources/Tools">PICCC GAFs</ExternalLink> that can produce
                almost instant results with fewer errors
            </>,
            "Built custom design systems for each client that required one",
            "Participated in multiple product transitions and knowledge handover sessions with clients",
            "Helped a legal firm migrate an existing product from an old WPF application to a modern .NET Core stack with a Next.js frontend",
            "Architected, built and deployed a variety of products onto AWS, Azure and GCP. The infrastructure was all IaC consuming the cloud providers' SDKs to ensure easy and deterministic deployments of multiple environments",
            <>
                Built the initial offering for <ExternalLink href="https://reflectal.io">Reflectal</ExternalLink>, a
                full stack near real time collaboration platform
            </>,
        ],
    },
    {
        company: "Aleron Security",
        title: "Full Stack Software Engineer",
        period: "Jul 2017 - Oct 2017",
        location: "Sydney",
        highlights: ["Built out the initial version of EdNA (CyRisk)"],
    },
    {
        company: "Vivant",
        title: "Full Stack Software Engineer",
        period: "May 2016 - Jul 2017",
        location: "Sydney",
        highlights: [
            "Implemented smart building access via mobile phone bluetooth for HID controlled systems such as elevators",
            "Built R&D tooling to support smart building functionality",
            "Built the landing page and partner portal for the smart building",
        ],
    },
    {
        company: "Citrix",
        title: "Software Engineer",
        period: "Jan 2014 - Feb 2016",
        location: "Sydney",
        highlights: [
            "Liaised with clients to build internal tooling for supporting Citrix products",
            "R&D on Windows 10 changes for the Citrix product suite such as inspecting the new Metro App structures",
            "Developed PoC and R&D technologies for Citrix Healthcare verticals",
        ],
    },
    {
        company: "Orion Integration",
        title: "Software Development Intern",
        period: "Jul 2010 - Feb 2011",
        location: "Sydney",
        highlights: ["Troubleshooting and fixing software issues on-site", "Client liaising and support"],
    },
]

const Experience: React.FC = () => (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
        <SectionHeading
            eyebrow="02 / Experience"
            title="Where I've worked"
            description="Over a decade across enterprise, agencies, startups and my own consultancy."
        />
        <ol className="relative flex flex-col">
            {ROLES.map((role) => (
                <li
                    key={`${role.company}-${role.period}`}
                    className="grid grid-cols-[auto_1fr] gap-x-6 md:grid-cols-[12rem_auto_1fr] md:gap-x-8"
                >
                    <p className="text-muted-foreground hidden pt-0.5 text-right font-mono text-xs tracking-tight uppercase md:block">
                        {role.period}
                    </p>
                    <div className="flex flex-col items-center">
                        <span
                            className={
                                role.current
                                    ? "bg-brand ring-brand/20 mt-1 size-3 shrink-0 rounded-full ring-4"
                                    : "border-muted-foreground/40 bg-background mt-1 size-3 shrink-0 rounded-full border-2"
                            }
                        />
                        <span className="bg-border w-px flex-1" />
                    </div>
                    <div className="flex flex-col gap-3 pb-12">
                        <div className="flex flex-col gap-1">
                            <p className="text-muted-foreground font-mono text-xs uppercase md:hidden">{role.period}</p>
                            <h3 className="text-lg font-semibold tracking-tight">
                                {role.title} <span className="text-muted-foreground">@</span>{" "}
                                <span className="text-brand">{role.company}</span>
                            </h3>
                            <p className="text-muted-foreground text-sm">{role.location}</p>
                        </div>
                        <ul className="text-muted-foreground marker:text-brand/60 flex max-w-3xl list-disc flex-col gap-1.5 pl-4 text-sm text-pretty">
                            {role.highlights.map((highlight, idx) => (
                                // oxlint-disable-next-line react/no-array-index-key -- static content, never reordered
                                <li key={idx}>{highlight}</li>
                            ))}
                        </ul>
                    </div>
                </li>
            ))}
        </ol>
    </section>
)

export { Experience }
export default Experience
