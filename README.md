# Next.js Template

Next.js 16 · Tailwind CSS 4 · TypeScript · oxlint · Prettier · Zod env

### Package Manager: `pnpm`

## Use this template

```bash
pnpm create next-app [project-name-here] -e https://github.com/nelwincatalogo/next16-convex
```

## With Shadcn

```bash
pnpm create next-app [project-name-here] -e https://github.com/nelwincatalogo/next16-convex/tree/with-shadcn
```

## Convex with Auth

```bash
pnpm create next-app [project-name-here] -e https://github.com/nelwincatalogo/next16-convex/tree/convex-with-auth
```

## Setup

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

## Scripts

| Script               | What                                                       |
| -------------------- | ---------------------------------------------------------- |
| `pnpm lint`          | oxlint (unused imports = error)                            |
| `pnpm lint:fix`      | oxlint --fix + Prettier (sorts imports & Tailwind classes) |
| `pnpm format:check`  | Prettier check                                             |
| `pnpm typecheck`     | tsc                                                        |

## Structure

```
src/
  app/                 # routes only
  components/ui/       # shared, reusable UI
  features/<name>/     # feature-owned code
    components/
    hooks/ lib/ types/ # add as needed
    index.ts           # public exports
  lib/utils.ts         # cn()
  env.ts               # Zod-validated env
```

Import with `@/` (e.g. `import { env } from "@/env"`).

## Env

Add vars to the schemas in `src/env.ts`. Client vars need the `NEXT_PUBLIC_` prefix and must be added to `clientEnv`. Invalid env fails at startup.

## Deploy (Docker / Coolify)

Ships a multi-stage `Dockerfile` (Next.js standalone, Node 24, port 3000) and a `.nvmrc`.

In Coolify: build pack **Dockerfile**, exposed port `3000`, and set `NEXT_PUBLIC_APP_URL` as a **build** variable — it is inlined into the client bundle at build time.

```bash
docker build --build-arg NEXT_PUBLIC_APP_URL=https://example.com -t next16-convex .
docker run -p 3000:3000 next16-convex
```
