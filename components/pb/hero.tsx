// "use client"

import { Contact } from "./contact"
import { Logo } from "./logo"
import { SkillsCloud } from "./skills-cloud"

// import dynamic from "next/dynamic"

// const SkillsCloud = dynamic(() => import("./skills-cloud"), {
//     ssr: false,
// })

const Hero: React.FC = () => (
    <section className="py-20 md:py-60">
        <Logo />

        <section className="grid grid-cols-1 px-8 py-2 md:grid-cols-2">
            <article className="flex flex-col justify-center rounded-xl bg-slate-950/85 p-8">
                <h1 className="thick-masked-underline tw-stroke self-center font-[family-name:Var(--font-pixelify-sans)] text-7xl italic">
                    HELLO 👋🏾
                </h1>

                <p className="mb-4 text-lg">
                    Nice to meet you! My name is <span className="text-indigo-200">Danny</span>
                </p>

                <p className="text-sm text-slate-400">
                    I am a <span className="font-bold text-indigo-200">Fullstack Software Engineer</span> with{" "}
                    <span className="font-bold text-indigo-200">10+ years</span> of experience
                </p>
                <p className="text-sm text-slate-400">
                    Well equiped to help you from greenfield projects to digital transformations
                </p>

                <span className="mb-8" />
                <Contact />
            </article>
            <article>
                <SkillsCloud />
            </article>
        </section>
    </section>
)

export { Hero }
export default Hero
