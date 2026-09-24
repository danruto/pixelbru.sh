"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"

const formSchema = z.object({
    name: z.string().trim().min(2, "Please enter your name").max(100),
    email: z.email("Please enter a valid email address"),
    company: z.string().max(100).optional(),
    message: z.string().trim().min(2, "Please tell me a little about your project").max(1000),
})

type FormValues = z.infer<typeof formSchema>

interface IProps {
    close: () => void
}

const FieldError: React.FC<{ message?: string }> = ({ message }) =>
    message ? <p className="text-destructive text-sm">{message}</p> : null

const ContactForm: React.FC<IProps> = ({ close }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            message: "",
        },
    })

    const onSubmit = async (data: FormValues) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })

            if (!res.ok) {
                throw new Error("Failed to send message")
            }

            toast.success("Thanks!", { description: "Your message has been received." })
            close()
        } catch {
            toast.error("Error", { description: "Failed to send your message. Please try again." })
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4" noValidate>
            <div className="grid gap-3">
                <Input {...register("name")} placeholder="Your name" aria-invalid={!!errors.name} />
                <FieldError message={errors.name?.message} />
                <Input {...register("email")} type="email" placeholder="Your email" aria-invalid={!!errors.email} />
                <FieldError message={errors.email?.message} />
                <Input {...register("company")} placeholder="Your company (optional)" />
                <Textarea
                    {...register("message")}
                    placeholder="Tell me about your project"
                    rows={6}
                    className="min-h-32"
                    aria-invalid={!!errors.message}
                />
                <FieldError message={errors.message?.message} />
            </div>
            <Button className="w-full" type="submit" variant="brand" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="animate-spin" />}
                Send message
            </Button>
        </form>
    )
}

export default ContactForm
export { ContactForm }
