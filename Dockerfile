# syntax=docker/dockerfile:1
# Float on the major so rebuilds get Node security patches.
FROM node:24-bookworm-slim AS base

# Enable corepack so pnpm (from the packageManager field) is available in every stage.
FROM base AS base-with-pnpm
RUN corepack enable pnpm

# Install dependencies from the lockfile only.
FROM base-with-pnpm AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
# Cache pnpm's store across builds.
RUN --mount=type=cache,target=/pnpm/store pnpm install --frozen-lockfile --store-dir /pnpm/store

# Build the standalone bundle.
FROM base-with-pnpm AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Inlined into the client bundle at build time.
ARG NEXT_PUBLIC_APP_URL
ENV NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL
ARG NEXT_PUBLIC_CONVEX_URL
ENV NEXT_PUBLIC_CONVEX_URL=$NEXT_PUBLIC_CONVEX_URL
ENV NEXT_TELEMETRY_DISABLED=1

# Cache Next's build output across builds.
RUN --mount=type=cache,target=/app/.next/cache pnpm build

# Minimal runtime image.
FROM base-with-pnpm AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN groupadd --system --gid 1001 nodejs \
  && useradd --system --uid 1001 --gid nodejs --no-create-home nextjs

# Standalone output ships without public/ and .next/static.
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
