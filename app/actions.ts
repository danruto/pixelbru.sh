"use server"

export const sendMessageToDiscord = async (currentState: { status: string }, formData: FormData) => {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const message = formData.get("message") as string

    if (!name || !email || !message) {
        return { status: "Not all required fields are present" }
    }

    const data = {
        content: "A new form has been submitted!",
        embeds: [
            {
                title: `${name} - ${email} - ${company || "n/a"}`,
                description: message,
            },
        ],
    }

    try {
        await fetch(process.env.DISCORD_WEBHOOK_URL!, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
    } catch {
        return { status: "Failed to send message" }
    }

    return currentState
}
