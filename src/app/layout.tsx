import { ThemeProvider } from "@/components/providers/theme-provider"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"

import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat"
})

export const metadata: Metadata = {
  title: "MessMania",
  description: "A modern messaging platform",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
