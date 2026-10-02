import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.VERCEL ? undefined : "standalone",
  allowedDevOrigins: ['172.23.96.1', "10.1.2.119", 'isds.uz']
};

export default nextConfig;
