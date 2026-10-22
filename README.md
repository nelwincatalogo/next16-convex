# Next.js + Convex Template

## Use this template

```bash
npx create-next-app@latest --example https://github.com/nelwincatalogo/next16-convex [project-name-here]
```

## With Convex

```bash
npx create-next-app@latest --example https://github.com/nelwincatalogo/next16-convex/tree/with-convex [project-name-here]
```

Next.js 16 · Tailwind CSS 4 · TypeScript · oxlint · Prettier · Zod env

### Package Manager: `yarn`

## Use this template

```bash
yarn create next-app [project-name-here] -e https://github.com/nelwincatalogo/next16-convex
```

## With Shadcn

```bash
yarn create next-app [project-name-here] -e https://github.com/nelwincatalogo/next16-convex/tree/with-shadcn
```

## Convex with Auth

```bash
yarn create next-app [project-name-here] -e https://github.com/nelwincatalogo/next16-convex/tree/convex-with-auth
```

## Setup

```bash
yarn install
cp .env.example .env.local
yarn dev
```

## Scripts

| Script              | What                                                       |
| ------------------- | ---------------------------------------------------------- |
| `yarn lint`         | oxlint (unused imports = error)                            |
| `yarn lint:fix`     | oxlint --fix + Prettier (sorts imports & Tailwind classes) |
| `yarn format:check` | Prettier check                                             |
| `yarn typecheck`    | tsc                                                        |

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

## Convex

Run both in separate terminals:

```bash
yarn dev:convex        # first run: log in / pick a project, writes NEXT_PUBLIC_CONVEX_URL to .env.local
yarn dev
yarn convex:dashboard  # open the Convex dashboard
```

- Backend lives in `convex/`, one folder per module: `convex/<module>/{schema,queries,mutations}.ts`. Register each table in `convex/schema.ts`.
- Import the generated API via `@convex/_generated/api`.
- Provider: `src/core/providers/convex-provider.tsx`.
- Example: `src/features/todo` (hook = logic, view = UI) at `/todo`.

## Auth (Convex Auth — password)

Routes: `/sign-in`, `/sign-up`, `/forgot-password`, `/dashboard`.

- Backend: `convex/auth.ts` (Password provider), `convex/auth.config.ts`, `convex/http.ts`, `authTables` in `convex/schema.ts`.
- Frontend: `src/features/auth` (hooks = logic, components = UI).

On a new Convex deployment, set the auth env vars once:

```bash
npx @convex-dev/auth --web-server-url http://localhost:3000
```

This sets `SITE_URL`, `JWT_PRIVATE_KEY` and `JWKS` on the deployment.

## Deploy (Docker / Coolify)

Ships a multi-stage `Dockerfile` (Next.js standalone, Node 24, port 3000) and a `.nvmrc`.

The image builds the Next.js frontend only. `convex/` is deployed separately, by hand.

Prod checklist:

1. Deploy the backend first: `yarn deploy:convex`. It pushes functions and schema to the prod deployment, and needs `npx convex login` or `CONVEX_DEPLOY_KEY` set. Run it before redeploying Coolify whenever `convex/` changes.
2. Set the prod auth env once: `npx @convex-dev/auth --prod --web-server-url https://your-domain`. This sets `SITE_URL`, `JWT_PRIVATE_KEY` and `JWKS` on the prod deployment, so `SITE_URL` points at the production domain, not localhost.
3. In Coolify: build pack **Dockerfile**, exposed port `3000`, and set both `NEXT_PUBLIC_APP_URL` and `NEXT_PUBLIC_CONVEX_URL` as **build** variables — both are inlined into the client bundle at build time. Use the **prod** Convex URL from the Convex dashboard, not the dev one in `.env.local`.

Local build/run:

```bash
docker build --build-arg NEXT_PUBLIC_APP_URL=https://example.com --build-arg NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud -t next16-convex .
docker run -p 3000:3000 next16-convex
```
