import type { NextConfig } from "next"

const nextConfig = {
    output: "export",
    images: {
        // Static export has no image optimisation server
        unoptimized: true,
    },
} satisfies NextConfig

export default nextConfig
