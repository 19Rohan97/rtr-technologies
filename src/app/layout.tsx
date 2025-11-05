import "./globals.css";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import GAAnalytics from "@/components/Analytics";
import { ThemeProvider } from "@/components/theme-provider";
import MobileNav from "@/components/layout/MobileNav";

const GA_ID = process.env.GA_TRACKING_ID;

export const metadata: Metadata = {
  title: "RTR Technologies – WordPress Growth Partner",
  description:
    "We design, build, and optimize WordPress websites powered by SEO and analytics.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased pb-[calc(env(safe-area-inset-bottom)+4rem)] sm:pb-0">
        <ThemeProvider defaultTheme="dark" storageKey="rtr-ui-theme">
          {GA_ID && (
            <>
              <Script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              />
              <Script
                id="ga-init"
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `,
                }}
              />
              <Suspense fallback={null}>
                <GAAnalytics id={GA_ID} />
              </Suspense>
            </>
          )}
          {children}
          <VercelAnalytics />
          <SpeedInsights/>
          <MobileNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
