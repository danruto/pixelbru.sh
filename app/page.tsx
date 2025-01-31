import { Hero } from "~/components/pb/hero"
import ProjectsBento from "~/components/pb/projects-bento"

import { CV } from "~/components/pb/cv"
import Contact from "~/components/pb/contact"

export default () => (
    <div className="min-h-[1000px] flex flex-col items-center justify-center">
        <Hero />

        <h2 className="text-6xl font-[family-name:Var(--font-pixelify-sans)] thick-masked-underline tw-stroke">
            PROJECTS 📂
        </h2>
        <h4 className="text-lg py-8">Here are some open source projects of mine</h4>
        <ProjectsBento />

        <h2 className="text-6xl font-[family-name:Var(--font-pixelify-sans)] thick-masked-underline tw-stroke pt-20">
            RESUME 🏆
        </h2>
        <CV />

        <div className="py-8">
            <Contact />
        </div>
    </div>
)
