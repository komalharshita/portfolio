import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] })

const metadata: Metadata = {
  title: "Komal Harshita - Portfolio",
  description: "Luxurious portfolio showcasing design and development excellence",
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
