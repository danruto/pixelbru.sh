import type { Metadata, Viewport } from "next"
import { Geist, Space_Mono } from "next/font/google"

// oxlint-disable-next-line import/no-unassigned-import
import "./globals.css"
import { Footer } from "~/components/pb/footer"
import { Header } from "~/components/pb/header"
import { Toaster } from "~/components/ui/sonner"

import { PostHogProvider } from "./providers"

const geistSans = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
})
// Space Mono Bold is the Pixel Brush wordmark face
const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space-mono",
})

const DEFAULT_TITLE = "Pixel Brush | Danny Sok | Full-stack Software Engineer | 10+ years experience"
const DEFAULT_DESCRIPTION =
    "Full-stack Software Engineer with 10+ years experience from greenfield to digital transformation ready to help you!"
export const viewport: Viewport = {
    themeColor: "#0f1424",
    colorScheme: "dark",
}

export const metadata: Metadata = {
    metadataBase: new URL("https://pixelbru.sh"),
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
        <html className={`dark ${geistSans.variable} ${spaceMono.variable}`} lang="en">
            <body className="flex min-h-screen flex-col">
                <PostHogProvider>
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                    <Toaster />
                </PostHogProvider>
            </body>
        </html>
    )
}
