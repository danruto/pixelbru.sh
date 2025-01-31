import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { Globe } from "lucide-react"
import { Button } from "~/components/ui/button"

interface IContactPoint {
    name: string
    url: string
    // biome-ignore lint/suspicious/noExplicitAny: Any child prop
    icon: (args?: any) => React.ReactNode
}

const CONTACT_POINTS: IContactPoint[] = [
    {
        name: "Github",
        url: "https://github.com/danruto",
        icon: GitHubLogoIcon,
    },
    {
        name: "Website",
        url: "https://pixelbru.sh",
        icon: Globe,
    },
    {
        name: "LinkedIn",
        url: "https://au.linkedin.com/in/dannysok",
        icon: LinkedInLogoIcon,
    },
]

const Footer = () => (
    <footer className="py-8 space-y-4 flex flex-col items-center">
        <div className="max-w-[144px] grid grid-cols-3 gap-2">
            {CONTACT_POINTS.map((cp) => (
                <a key={cp.name} href={cp.url} title={cp.name} target="_blank" rel="noreferrer">
                    <Button variant="outline" size="icon" type="button" className="cursor-pointer">
                        <cp.icon width={24} height={24} />
                    </Button>
                </a>
            ))}
        </div>

        <p className="text-slate-600">© Pixel Brush Pty. Ltd. {new Date().getUTCFullYear()}</p>
    </footer>
)

export default Footer
export { Footer }
