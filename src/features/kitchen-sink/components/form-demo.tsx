"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

import { FRAMEWORKS } from "../constants";
import { Section } from "./section";

export function FormDemo() {
  return (
    <Section title="Form">
      <div className="grid w-full max-w-sm gap-4">
        <div className="grid gap-2">
          <Label htmlFor="ks-email">Email</Label>
          <Input id="ks-email" type="email" placeholder="you@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="ks-bio">Bio</Label>
          <Textarea id="ks-bio" placeholder="Tell us about yourself" />
        </div>
        <Select items={FRAMEWORKS}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Pick a framework" />
          </SelectTrigger>
          <SelectContent>
            {FRAMEWORKS.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Label>
          <Checkbox defaultChecked /> Accept terms
        </Label>
        <Label>
          <Switch /> Notifications
        </Label>
        <RadioGroup defaultValue="light">
          <Label>
            <RadioGroupItem value="light" /> Light
          </Label>
          <Label>
            <RadioGroupItem value="dark" /> Dark
          </Label>
        </RadioGroup>
        <Slider defaultValue={40} />
      </div>
    </Section>
  );
}
