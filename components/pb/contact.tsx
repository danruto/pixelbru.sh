"use client"

import { useState } from "react"
import ContactForm from "~/components/pb/contact-form"
import { Button } from "~/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog"
import PulsatingButton from "~/components/ui/pulsating-button"

const Contact = () => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <PulsatingButton
                    text="Get in contact!"
                    pulseColor="150, 0, 255"
                    backgroundColor="#9945FF"
                    textColor="#ffffff"
                    animationDuration="1.5s"
                    buttonWidth="200px"
                    buttonHeight="50px"
                />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Contact Us!</DialogTitle>
                    <DialogDescription>Fill in the form and we'll get right back to you ASAP</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <ContactForm close={() => setOpen(false)} />
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default Contact
export { Contact }
