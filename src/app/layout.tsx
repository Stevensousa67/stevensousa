import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/header/Navbar";
import Footer from "@/app/components/footer/Footer";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-white via-white via-60% to-gray-300 dark:bg-gradient-to-b dark:from-black dark:via-black dark:via-60% dark:to-gray-800 `}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow flex flex-col max-w-5xl" style={{ position: 'relative', left: '50vw', transform: 'translateX(-50%)' }}>
            <ThemeProvider attribute="class" defaultTheme="system">{children}</ThemeProvider>
          </main>
          <div className="max-w-5xl mx-auto w-full">
            <Footer />
          </div>
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
