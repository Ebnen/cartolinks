import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "AI Tools Gallery - Frontend",
  description: "Discover and explore the best AI tools for your projects",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable} antialiased min-h-screen w-full m-0 p-0`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="ai-gallery-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
