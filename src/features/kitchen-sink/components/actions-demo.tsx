"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { BADGE_VARIANTS, BUTTON_VARIANTS, TOAST_TYPES } from "../constants";
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
      <Section title="Toasts">
        {TOAST_TYPES.map(({ type, title, description }) => (
          <Button
            key={type}
            variant="outline"
            className="capitalize"
            onClick={() => toast.add({ type, title, description })}
          >
            {type}
          </Button>
        ))}
      </Section>
      <Section title="Tooltip">
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" />}>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip content</TooltipContent>
        </Tooltip>
      </Section>
    </>
  );
}
