import type { Metadata } from "next"
import localFont from "next/font/local"
import { Pixelify_Sans } from "next/font/google"
import "./globals.css"
import { Toaster } from "~/components/ui/toaster"

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

export const metadata: Metadata = {
    title: "Pixel Brush | Danny Sok | Full-stack Engineer | 10+ years experience",
    description: "Portfolio for Pixel Brush (Danny Sok)",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html className="dark" lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${pixelifySans.variable}  bg-gradient-to-br from-slate-900 to-slate-950 antialiased flex justify-center`}
            >
                <main className="container px-2 md:max-w-[1200px]">{children}</main>
                <Toaster />
            </body>
        </html>
    )
}
