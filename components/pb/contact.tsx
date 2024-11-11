"use client"

import { sendMessageToDiscord } from "~/app/actions"
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
import { useToast } from "~/hooks/use-toast"

const Contact = () => {
    const { toast } = useToast()

    return (
        <>
            <Dialog>
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
                        <form
                            action={async (formData: FormData) => {
                                await sendMessageToDiscord(formData)
                                toast({
                                    title: "Thanks!",
                                    description: "Your request has been submitted.",
                                })
                            }}
                        >
                            <ContactForm />

                            <DialogClose className="mt-4" asChild>
                                <Button className="w-full" type="submit" variant={"outline"}>
                                    Send
                                </Button>
                            </DialogClose>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Contact
export { Contact }
