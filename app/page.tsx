import Contact from "~/components/pb/contact"
import Footer from "~/components/pb/footer"
import Logo from "~/components/pb/logo"
import Projects from "~/components/pb/projects"
import WordRotate from "~/components/ui/word-rotate"

export default () => (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
        <main className="min-h-[1000px] flex flex-col items-center justify-center">
            <div className="py-40">
                <Logo />

                <p className="text-lg">
                    Full-stack Software Engineer with <span className="text-indigo-200">10+ years</span> experience
                </p>

                <p className="text-lg">Well equiped to help you from greenfield projects to digital transformations</p>

                <div className="flex items-center justify-center sm:justify-start w-full md:w-[500px] pt-4 pb-8">
                    <span className="text-xl sm:text-3xl">Experienced with</span>
                    <WordRotate
                        className="pl-4 text-xl sm:text-3xl font-bold text-black dark:text-white"
                        words={[
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
                        ]}
                    />
                </div>

                <Contact />
            </div>

            <Projects />

            <Footer />
        </main>
    </div>
)
