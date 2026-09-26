import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="flex flex-col items-center gap-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">Next.js Template</h1>
      <p className="max-w-md text-foreground/70">
        Next.js, Tailwind CSS, TypeScript, oxlint, Prettier and Zod env — ready to build.
      </p>
      <Button>Get started</Button>
    </section>
  );
}
