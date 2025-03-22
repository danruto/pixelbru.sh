import { sendMessageToDiscord } from "../../actions"

export async function POST(request: Request) {
    try {
        const data = await request.json()

        const formData = new FormData()
        formData.set("name", data.name)
        formData.set("email", data.email)
        formData.set("company", data.company)
        formData.set("message", data.message)

        const resp = await sendMessageToDiscord({ status: "" }, formData)

        if (resp.status === "") {
            throw new Error(resp.status)
        }

        return new Response(JSON.stringify({ status: "OK" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        })
    } catch {
        return new Response(JSON.stringify({ status: "Bad request" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        })
    }
}
