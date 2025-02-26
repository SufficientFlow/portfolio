import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import ThemeProviderButton from "@/components/ui/theme-provider-button"
import BackgroundProvider from "@/components/background-provider";
import { Github, Linkedin } from "lucide-react";
import { Footer } from "@/components/ui/footer";
import { Toaster } from "@/components/ui/toaster";


export const metadata: Metadata = {
  metadataBase: new URL('https://jessevandervoet.vercel.app'),
  title: "Jesse | Portfolio",
  description: "Software Engineer portfolio showcasing React, TypeScript, and Next.js projects. Explore my work in web development, software engineering, and UI/UX design.",
  keywords: [
    "next.js", "react", "typescript", "web development",
    "portfolio", "full-stack developer", "software engineer",
    "UI/UX design", "frontend development", "Jesse van der Voet"
  ],
  authors: [{ name: "Jesse van der Voet", url: "https://github.com/SufficientFlow" }],
  creator: "Jesse van der Voet",
  publisher: "Jesse van der Voet",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jessevandervoet.vercel.app",
    title: "Jesse van der Voet | Software Engineer Portfolio",
    description: "Software Engineer portfolio showcasing React, TypeScript, and Next.js projects. Explore my work in web development, software engineering, and UI/UX design.",
    siteName: "Jesse's Portfolio",
    images: [{
      url: "/thumbnail.png",
      width: 1200,
      height: 630,
      alt: "Jesse van der Voet - Portfolio Preview",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesse van der Voet | Software Engineer Portfolio",
    description: "Software Engineer portfolio showcasing React, TypeScript, and Next.js projects. Explore my work in web development, software engineering, and UI/UX design.",
    images: ["/thumbnail.png"],
  },
  category: "Technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  appleWebApp: {
    capable: true,
    title: "Jesse's Portfolio",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased lg:px-56 md:px-32 sm:px-16"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundProvider />
        <header 
          className="flex items-center justify-between py-4 border-b border-border px-4"
        >
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/166910768?v=4" />
            <AvatarFallback>Jesse</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-4 border-r border-border pr-4">
              <a
                href="https://github.com/SufficientFlow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-md p-1 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/jesse-van-der-voet-2658ba32b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-md p-1 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </nav>
            <ThemeProviderButton />
          </div>
        </header>
        <main>
          {children}
          <SpeedInsights />
          <Analytics />
        </main>
        <Footer 
            logo={<Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/166910768?v=4" />
              <AvatarFallback>Jesse</AvatarFallback>
            </Avatar>}
            brandName="Jesse van der Voet"
            socialLinks={[
              {
                icon: <Linkedin className="h-5 w-5" />,
                href: "https://www.linkedin.com/in/jesse-van-der-voet-2658ba32b/",
                label: "LinkedIn",
              },
              {
                icon: <Github className="h-5 w-5" />,
                href: "https://github.com/SufficientFlow",
                label: "GitHub",
              },
            ]}
            mainLinks={[
              { href: "/", label: "Home" },
              { href: "/contact", label: "Contact" },
            ]}
            copyright={{
              text: "© 2025 Jesse van der Voet",
              license: "All rights reserved",
            }} legalLinks={[]}        />
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
