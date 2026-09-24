import { ContactSection } from "~/components/pb/contact"
import { Experience } from "~/components/pb/experience"
import { Hero } from "~/components/pb/hero"
import { Projects } from "~/components/pb/projects"
import { Skills } from "~/components/pb/skills"

export default function Home() {
    return (
        <>
            <Hero />
            <Skills />
            <Projects />
            <Experience />
            <ContactSection />
        </>
    )
}
