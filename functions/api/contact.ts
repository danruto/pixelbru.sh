interface Env {
    DISCORD_WEBHOOK_URL: string
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://pixelbru.sh",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    try {
        const data = (await context.request.json()) as {
            name: string
            email: string
            company?: string
            message: string
        }

        if (!data.name || !data.email || !data.message) {
            return new Response(JSON.stringify({ status: "Not all required fields are present" }), {
                status: 400,
                headers,
            })
        }

        const payload = {
            content: "A new form has been submitted!",
            embeds: [
                {
                    title: `${data.name} - ${data.email} - ${data.company || "n/a"}`,
                    description: data.message,
                },
            ],
        }

        await fetch(context.env.DISCORD_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        })

        return new Response(JSON.stringify({ status: "OK" }), { status: 200, headers })
    } catch (err) {
        console.error("failed to send to discord", { err })
        return new Response(JSON.stringify({ status: "Bad request" }), { status: 400, headers })
    }
}

export const onRequestOptions: PagesFunction = async () => {
    return new Response(null, {
        status: 204,
        headers: {
            "Access-Control-Allow-Origin": "https://pixelbru.sh",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        },
    })
}
