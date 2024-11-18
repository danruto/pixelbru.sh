import type { Metadata } from "next"
import localFont from "next/font/local"
import { Pixelify_Sans } from "next/font/google"
import "./globals.css"
import { Toaster } from "~/components/ui/toaster"
import Footer from "~/components/pb/footer"

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
})
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
})
const pixelifySans = Pixelify_Sans({
    subsets: ["latin"],
    variable: "--font-pixelify-sans",
})

const DEFAULT_TITLE = "Pixel Brush | Danny Sok | Full-stack Software Engineer | 10+ years experience"
const DEFAULT_DESCRIPTION =
    "Full-stack Software Engineer with 10+ years experience from greenfield to digital transformation ready to help you!"
export const metadata: Metadata = {
    title: {
        template: "%s | Pixel Brush",
        default: DEFAULT_TITLE,
    },
    description: DEFAULT_DESCRIPTION,
    keywords: ["Full stack", "Full-stack", "Software Engineer", "Contractor", "Hiring", "Senior", "Lead"],
    authors: [{ name: "Danny", url: "https://pixelbru.sh" }],
    openGraph: {
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        type: "website",
    },
    twitter: {
        card: "summary",
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html className="dark" lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${pixelifySans.variable} bg-gradient-to-br from-slate-900 to-slate-950 antialiased flex flex-col items-center justify-center`}
            >
                <main className="container px-2 md:max-w-[1200px] min-h-screen font-[family-name:var(--font-geist-sans)] ">
                    {children}
                </main>
                <Toaster />
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    )
}
