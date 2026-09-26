import { ViewTransition } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";

import { Toaster } from "@/components/ui/toast";
import { siteConfig } from "@/config/site";
import { ConvexClientProvider } from "@/core/providers/convex-provider";
import { UiProviders } from "@/core/providers/ui-providers";
import { env } from "@/env";
import { cn } from "@/lib/utils";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    // images: '/banner.png',
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html
        lang="en"
        className={cn(geistSans.variable, geistMono.variable, "font-sans antialiased")}
      >
        <body>
          <ConvexClientProvider>
            <UiProviders>
              <Toaster>
                <ViewTransition>{children}</ViewTransition>
              </Toaster>
            </UiProviders>
          </ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
