import { z } from "zod";

const serverSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
});

const clientSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.url().default("http://localhost:3000"),
  NEXT_PUBLIC_CONVEX_URL: z.url(),
});

// Helper to trim strings and convert empty values to undefined
const normalize = (value: string | undefined) => (value?.trim() ? value : undefined);

// Client vars must be referenced explicitly so Next.js can inline them.
const clientEnv = {
  NEXT_PUBLIC_APP_URL: normalize(process.env.NEXT_PUBLIC_APP_URL),
  NEXT_PUBLIC_CONVEX_URL: normalize(process.env.NEXT_PUBLIC_CONVEX_URL),
};

const isServer = typeof window === "undefined";

const schema = isServer ? serverSchema.extend(clientSchema.shape) : clientSchema;
const parsed = schema.safeParse(isServer ? { ...process.env, ...clientEnv } : clientEnv);

if (!parsed.success) {
  console.error("❌ Invalid environment variables:", z.treeifyError(parsed.error));
  throw new Error("Invalid environment variables");
}

export const env = parsed.data as z.infer<typeof serverSchema> & z.infer<typeof clientSchema>;
