import { useID } from '@dothq/id';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: process.env.HTML ? "export" : undefined,
    distDir: "dist",
    webpack: (config, ctx) => {
        return config;
    },
    generateBuildId: async () => {
        return useID(1);
    },
}

export default nextConfig
