"use server"

// const DiscordComponentTypes = {
//     ActionRow: 1,
//     Button: 2,
//     StringSelect: 3,
//     TextInput: 4,
//     UserSelect: 5,
//     RoleSelect: 6,
//     MentionableSelect: 7,
//     ChannelSelect: 8
// } as const

export const sendMessageToDiscord = async (formData: FormData) => {
    console.log("sendMessageToDiscord")
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const message = formData.get("message") as string

    const data = {
        content: "A new form has been submitted!",
        embeds: [
            {
                title: `${name} - ${email} - ${company ?? "n/a"}`,
                description: message,
            },
        ],
    }

    const r = await fetch(process.env.DISCORD_WEBHOOK_URL!, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })

    console.log({ r })
}
