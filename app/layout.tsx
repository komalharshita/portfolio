import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from 'next/font/google'
import ScrollProgressBar from "@/components/scroll-progress-bar"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Data Portfolio | Komal Harshita",
  description: "Aspring Data and Business Analyst",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${playfair.variable} ${poppins.variable} font-sans antialiased`}>
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  )
}
