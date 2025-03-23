import { sendMessageToDiscord } from "../../actions"

const isDev = process.env.NODE_ENV === "development"
const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": isDev ? "http://localhost:3000" : "https://*.pixelbru.sh",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
}

export async function POST(request: Request) {
    try {
        const data = await request.json()

        const formData = new FormData()
        formData.set("name", data.name)
        formData.set("email", data.email)
        formData.set("company", data.company)
        formData.set("message", data.message)

        const resp = await sendMessageToDiscord({ status: "" }, formData)

        if (resp.status !== "") {
            throw new Error(resp.status)
        }

        return new Response(JSON.stringify({ status: "OK" }), {
            status: 200,
            headers,
        })
    } catch (err) {
        console.error("failed to send to discord", { err })
        return new Response(JSON.stringify({ status: "Bad request" }), {
            status: 400,
            headers,
        })
    }
}

export async function OPTIONS() {
    return new Response(JSON.stringify({ status: "OK" }), {
        status: 200,
        headers,
    })
}
