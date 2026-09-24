import { Globe } from "lucide-react"
import { siGithub } from "simple-icons"

import { Button } from "~/components/ui/button"

import { BrandIcon, LINKEDIN_ICON } from "./brand-icon"
import { Logo } from "./logo"

const CONTACT_POINTS = [
    {
        name: "GitHub",
        url: "https://github.com/danruto",
        icon: <BrandIcon icon={siGithub} />,
    },
    {
        name: "Website",
        url: "https://pixelbru.sh",
        icon: <Globe />,
    },
    {
        name: "LinkedIn",
        url: "https://au.linkedin.com/in/dannysok",
        icon: <BrandIcon icon={LINKEDIN_ICON} />,
    },
]

const Footer: React.FC = () => (
    <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
            <div className="flex flex-col items-center gap-1 md:items-start">
                <Logo className="text-lg" />
                <p className="text-muted-foreground text-sm">© Pixel Brush Pty. Ltd. {new Date().getUTCFullYear()}</p>
            </div>
            <ul className="flex gap-2">
                {CONTACT_POINTS.map((cp) => (
                    <li key={cp.name}>
                        <Button variant="ghost" size="icon" asChild>
                            <a href={cp.url} title={cp.name} aria-label={cp.name} target="_blank" rel="noreferrer">
                                {cp.icon}
                            </a>
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    </footer>
)

export default Footer
export { Footer }
