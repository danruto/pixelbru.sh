import { Contact } from "./contact"
import { Logo } from "./logo"

const NAV_LINKS = [
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
]

const Header: React.FC = () => (
    <header className="border-border/60 bg-background/70 sticky top-0 z-40 w-full border-b backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
            <a href="#top" className="text-xl" aria-label="Pixel Brush home">
                <Logo />
            </a>
            <nav className="flex items-center gap-1 md:gap-6">
                <ul className="text-muted-foreground hidden items-center gap-6 text-sm sm:flex">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="hover:text-foreground transition-colors">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <Contact size="sm" variant="outline" label="Get in touch" />
            </nav>
        </div>
    </header>
)

export { Header }
export default Header
