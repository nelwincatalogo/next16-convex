"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { BADGE_VARIANTS, BUTTON_VARIANTS } from "../constants";
import { Section } from "./section";

export function ActionsDemo() {
  return (
    <>
      <Section title="Buttons">
        {BUTTON_VARIANTS.map((variant) => (
          <Button key={variant} variant={variant} className="capitalize">
            {variant}
          </Button>
        ))}
      </Section>
      <Section title="Badges">
        {BADGE_VARIANTS.map((variant) => (
          <Badge key={variant} variant={variant} className="capitalize">
            {variant}
          </Badge>
        ))}
      </Section>
      <Section title="Toast & Tooltip">
        <Button
          variant="outline"
          onClick={() =>
            toast.add({ title: "Saved", description: "Your changes are live.", type: "success" })
          }
        >
          Show toast
        </Button>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" />}>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip content</TooltipContent>
        </Tooltip>
      </Section>
    </>
  );
}
