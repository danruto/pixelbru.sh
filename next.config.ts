import type { NextConfig } from "next"

const nextConfig = {
    // experimental: {
    //     ppr: true,
    // },
    experimental: {
        serverActions: {
            allowedOrigins: ["retro.pixelbru.sh"],
        },
    },
} satisfies NextConfig

export default nextConfig
