import { ArrowDown, MapPin } from "lucide-react"

import { Button } from "~/components/ui/button"

import { Contact } from "./contact"

const STATS = [
    { value: "10+", label: "years shipping software" },
    { value: "8", label: "open source projects" },
    { value: "3", label: "clouds: AWS, Azure & GCP" },
]

const Hero: React.FC = () => (
    <section id="top" className="relative isolate overflow-hidden">
        <div
            aria-hidden
            className="bg-grid absolute inset-0 -z-10 mask-[radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
        />
        <div
            aria-hidden
            className="bg-brand/20 absolute -top-40 left-1/2 -z-10 size-[40rem] -translate-x-1/2 rounded-full blur-3xl"
        />

        <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 pt-20 pb-24 duration-700 md:px-6 md:pt-32 md:pb-32">
            <p className="bg-card/60 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs backdrop-blur">
                <span className="bg-brand size-2 rounded-full" />
                Pixel Brush
                <span className="text-border">|</span>
                <MapPin className="size-3" /> Sydney, AU
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-balance md:text-7xl">
                Hi, I&apos;m <span className="text-brand">Danny</span> <span className="inline-block">👋🏾</span>
                <span className="text-muted-foreground mt-2 block">
                    I build software from greenfield to digital transformation.
                </span>
            </h1>

            <p className="text-muted-foreground max-w-2xl text-lg text-pretty">
                A full-stack software engineer with 10+ years of experience across product teams, consultancies and my
                own studio, <span className="text-foreground">Pixel Brush</span>. I care about fast, reliable systems
                and interfaces that feel great to use.
            </p>

            <div className="flex flex-wrap gap-3">
                <Contact size="lg" variant="brand" label="Get in touch" />
                <Button size="lg" variant="outline" asChild>
                    <a href="#projects">
                        See my work <ArrowDown />
                    </a>
                </Button>
            </div>

            <dl className="mt-8 grid w-full grid-cols-1 gap-6 border-t pt-8 sm:grid-cols-3">
                {STATS.map((stat) => (
                    <div key={stat.label} className="flex flex-col gap-1">
                        <dt className="text-muted-foreground order-2 text-sm">{stat.label}</dt>
                        <dd className="font-pixel text-foreground order-1 text-4xl">{stat.value}</dd>
                    </div>
                ))}
            </dl>
        </div>
    </section>
)

export { Hero }
export default Hero
