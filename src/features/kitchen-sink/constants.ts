export const BUTTON_VARIANTS = [
  "default",
  "secondary",
  "outline",
  "ghost",
  "destructive",
  "link",
] as const;

export const BADGE_VARIANTS = ["default", "secondary", "outline", "destructive"] as const;

export const FRAMEWORKS = [
  { label: "Next.js", value: "next" },
  { label: "Remix", value: "remix" },
  { label: "Astro", value: "astro" },
];

export const FAQ = [
  {
    value: "stack",
    question: "What stack is this?",
    answer: "Next.js 16, Convex, Tailwind v4 and shadcn on Base UI.",
  },
  {
    value: "theme",
    question: "Can I theme it?",
    answer: "Yes — edit the CSS variables in globals.css.",
  },
];
