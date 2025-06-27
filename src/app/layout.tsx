import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/header/Navbar";
import AppBreadcrumb from "@/components/ui/AppBreadcrumb";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Steven Sousa",
  description: "Welcome to my personal website",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gradient-to-b from-white via-white via-60% to-gray-300 dark:bg-gradient-to-b dark:from-black dark:via-black dark:via-60% dark:to-gray-800`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow flex flex-col max-w-5xl w-full" style={{ position: 'relative', left: '50vw', transform: 'translateX(-50%)' }}>
            <AppBreadcrumb />
            {children}
          </main>
          <Footer />
          <Toaster  />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
