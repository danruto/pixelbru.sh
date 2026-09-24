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
            <a href="#top" className="group/logo text-xl" aria-label="Pixel Brush home">
                <Logo animated />
            </a>
            <nav className="flex items-center gap-1 md:gap-6">
                <ul className="text-muted-foreground hidden items-center gap-6 text-sm sm:flex">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="hover:text-foreground after:bg-brand relative py-1 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
                            >
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
