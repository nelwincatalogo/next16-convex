# Next.js Template

Next.js 16 · Tailwind CSS 4 · TypeScript · oxlint · Prettier · Zod env

### Package Manager: `yarn`

## Use this template

```bash
npx create-turbo@latest --example https://github.com/nelwincatalogo/next16-convex [project-name-here]
```

## With Shadcn

```
npx create-turbo@latest --example https://github.com/nelwincatalogo/next16-convex/tree/with-shadcn [project-name-here]
```

## Convex with Auth

```
npx create-turbo@latest --example https://github.com/nelwincatalogo/next16-convex/tree/convex-with-auth [project-name-here]
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
