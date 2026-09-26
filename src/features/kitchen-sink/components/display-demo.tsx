"use client";

import { InfoIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { FAQ } from "../constants";
import { Section } from "./section";

export function DisplayDemo() {
  return (
    <>
      <Section title="Card">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Project</CardTitle>
            <CardDescription>Deploy in one click.</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={66} />
          </CardContent>
          <CardFooter>
            <Button className="w-full">Deploy</Button>
          </CardFooter>
        </Card>
      </Section>
      <Section title="Alert">
        <Alert className="max-w-sm">
          <InfoIcon />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>You can add components with the CLI.</AlertDescription>
        </Alert>
      </Section>
      <Section title="Avatar & Skeleton">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Separator orientation="vertical" className="h-8" />
        <Skeleton className="size-10 rounded-full" />
        <Skeleton className="h-4 w-40" />
      </Section>
      <Section title="Tabs">
        <Tabs defaultValue="account" className="w-full max-w-sm">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Manage your account.</TabsContent>
          <TabsContent value="password">Change your password.</TabsContent>
        </Tabs>
      </Section>
      <Section title="Accordion">
        <Accordion className="w-full max-w-sm">
          {FAQ.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </>
  );
}
