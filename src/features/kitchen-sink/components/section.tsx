import { cn } from "@/lib/utils";

export function Section({ title, className, children }: React.ComponentProps<"section">) {
  return (
    <section className={cn("flex flex-col gap-4", className)}>
      <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </section>
  );
}
