# Next.js Template

Next.js 16 · Tailwind CSS 4 · TypeScript · oxlint · Prettier · Zod env

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
