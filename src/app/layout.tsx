import "./globals.css";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import GAAnalytics from "@/components/Analytics";
import { ThemeProvider } from "@/components/theme-provider";
import MobileNav from "@/components/layout/MobileNav";

const GA_ID = process.env.GA_TRACKING_ID;

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RTR Technologies – WordPress Growth Partner",
  description:
    "We design, build, and optimize WordPress websites powered by SEO and analytics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
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
