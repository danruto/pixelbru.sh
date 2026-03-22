"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { useToast } from "~/hooks/use-toast"

const formSchema = z.object({
    name: z.string().min(2).max(100),
    email: z.string().email().min(2),
    company: z.string().max(100).optional(),
    message: z.string().min(2).max(1000),
})

interface IProps {
    close: () => void
}

const ContactForm: React.FC<IProps> = ({ close }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            message: "",
        },
    })

    const { toast } = useToast()

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })

            if (!res.ok) {
                throw new Error("Failed to send message")
            }

            toast({
                title: "Thanks!",
                description: "Your message has been received.",
            })
            close()
        } catch {
            toast({
                title: "Error",
                description: "Failed to send your message. Please try again.",
                variant: "destructive",
            })
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2 pb-4">
                <Input {...register("name")} placeholder="Your name" />
                {errors?.name && <p className="text-red">{errors.name.message}</p>}
                <Input {...register("email")} placeholder="Your email" />
                {errors?.email && <p className="text-red">{errors.email.message}</p>}
                <Input {...register("company")} placeholder="Your company" />
                <Textarea {...register("message")} placeholder="Your contact request" rows={8} />
                {errors?.message && <p className="text-red">{errors.message.message}</p>}
            </div>
            <Button className="w-full" type="submit" variant={"outline"}>
                Send
            </Button>
        </form>
    )
}

export default ContactForm
export { ContactForm }
