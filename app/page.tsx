import Contact from "~/components/pb/contact"
import { CV } from "~/components/pb/cv"
import { Hero } from "~/components/pb/hero"
import ProjectsBento from "~/components/pb/projects-bento"

export default () => (
    <div className="flex min-h-[1000px] flex-col items-center justify-center">
        <Hero />

        <h2 className="thick-masked-underline tw-stroke font-[family-name:Var(--font-pixelify-sans)] text-6xl">
            PROJECTS 📂
        </h2>
        <h4 className="py-8 text-lg">Here are some open source projects of mine</h4>
        <ProjectsBento />

        <h2 className="thick-masked-underline tw-stroke pt-20 font-[family-name:Var(--font-pixelify-sans)] text-6xl">
            RESUME 🏆
        </h2>
        <CV />

        <div className="py-8">
            <Contact />
        </div>
    </div>
)
