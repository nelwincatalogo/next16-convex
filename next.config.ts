import type { NextConfig } from "next";

// Validate env at build/dev start.
import "./src/env";

const nextConfig: NextConfig = {
  // Next.js 16.4 recommended model (default in new apps).
  cacheComponents: true,
  partialPrefetching: true,
  compiler: {
    // Strip console.* in production, keep error & warn.
    removeConsole: process.env.NODE_ENV === "production" && { exclude: ["error", "warn"] },
  },
  experimental: {
    // Nudge on upgrades that fix known vulnerabilities.
    agentUpgrade: "security",
  },
};

export default nextConfig;
