import type { Metadata } from "next";

import { ActionsDemo, DisplayDemo, FormDemo, OverlayDemo } from "@/features/kitchen-sink";

export const metadata: Metadata = {
  title: "Kitchen Sink",
};

export default function KitchenSinkPage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-10 px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Kitchen Sink</h1>
      <ActionsDemo />
      <OverlayDemo />
      <FormDemo />
      <DisplayDemo />
    </main>
  );
}
