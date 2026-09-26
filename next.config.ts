import type { NextConfig } from "next";

// Validate env at build/dev start.
import "./src/env";

const nextConfig: NextConfig = {
  compiler: {
    // Strip console.* in production, keep error & warn.
    removeConsole: process.env.NODE_ENV === "production" && { exclude: ["error", "warn"] },
  },
};

export default nextConfig;
