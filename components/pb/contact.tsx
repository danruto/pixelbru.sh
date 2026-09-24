"use client"

import { Mail } from "lucide-react"
import { useState } from "react"

import { Button } from "~/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog"

import { ContactForm } from "./contact-form"
import { Spotlight } from "./spotlight"

interface IContactProps extends Pick<React.ComponentProps<typeof Button>, "size" | "variant" | "className"> {
    label?: string
}

const Contact: React.FC<IContactProps> = ({ label = "Get in touch", ...buttonProps }) => {
    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button {...buttonProps}>
                    <Mail />
                    {label}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Let&apos;s talk</DialogTitle>
                    <DialogDescription>
                        Fill in the form and I&apos;ll get back to you as soon as I can.
                    </DialogDescription>
                </DialogHeader>
                <ContactForm close={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    )
}

const ContactSection: React.FC = () => (
    <section id="contact" className="mx-auto max-w-6xl px-4 pb-24 md:px-6 md:pb-32">
        <Spotlight className="bg-card/50 overflow-hidden rounded-3xl border px-6 py-16 text-center md:px-16 md:py-24">
            <div
                aria-hidden
                className="bg-grid absolute inset-0 -z-10 mask-[radial-gradient(ellipse_at_center,black_10%,transparent_70%)]"
            />
            <div
                aria-hidden
                className="bg-brand/20 absolute -bottom-32 left-1/2 -z-10 size-96 -translate-x-1/2 rounded-full blur-3xl"
            />
            <p className="text-brand font-mono text-sm font-bold tracking-widest uppercase">03 / Contact</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-5xl">
                Have a project in mind?
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-pretty md:text-lg">
                Whether it&apos;s a greenfield build or a digital transformation, I&apos;d love to hear about it.
            </p>
            <div className="mt-8 flex justify-center">
                <Contact size="lg" variant="brand" />
            </div>
        </Spotlight>
    </section>
)

export default Contact
export { Contact, ContactSection }
