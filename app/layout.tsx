import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import ScrollReveal from "@/components/ScrollReveal";

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] })

const metadata: Metadata = {
  title: "Komal Harshita - Portfolio",
  description: "Data Analyst Portfolio",
  generator: "v0.app",
  viewport: {
    width: "device-width",
    initialScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-deep-purple text-light-blush antialiased`}>
        <ScrollReveal />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
