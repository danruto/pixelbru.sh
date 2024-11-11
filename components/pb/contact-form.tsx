"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"

const formSchema = z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    company: z.string().min(2).max(100),
    message: z.string().min(2).max(1000),
})

const ContactForm = () => {
    const { register } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            message: "",
        },
    })

    return (
        <div className="grid gap-2">
            <Input {...register("name")} placeholder="Your name" />
            <Input {...register("email")} placeholder="Your email" />
            <Input {...register("company")} placeholder="Your company" />
            <Textarea {...register("message")} placeholder="Your contact request" rows={8} />
        </div>
    )
}

export default ContactForm
export { ContactForm }
