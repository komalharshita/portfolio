import Script from "next/script";
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import ScrollProgressBar from "@/components/ScrollReveal"
import LoadingScreen from "@/components/LoadingScreen"
import HireMePop from "@/components/HireMePop"
import GoogleAnalytics from "@/components/GoogleAnalytics";

import "./globals.css"
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="google-site-verification" content="FpebaqQQXqlFniIPT3fiZQYAfiH63UoqX3SNO_o5PKg" />
      </head>
      <body
        className={`
          ${inter.variable}
          ${poppins.variable}
          font-sans antialiased
        `}
      >
        <LoadingScreen />
        <HireMePop />

        {/* Google Analytics Loader */}
        {/* Google Analytics Loader */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />

        {/* Google Analytics Init */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true
            });
          `}
        </Script>

        {/* Scroll Progress Bar */}
        <ScrollProgressBar />

        <GoogleAnalytics />

        {/* Page Content */}
        {children}

        {/* --------------------------------------------- */}
        {/* ✨ Cursor Trail Script */}
        {/* --------------------------------------------- */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("mousemove", function(e) {
                const dot = document.createElement("div");
                dot.className = "cursor-trail";
                dot.style.left = e.clientX + "px";
                dot.style.top = e.clientY + "px";
                document.body.appendChild(dot);

                setTimeout(() => {
                  dot.remove();
                }, 600);
              });
            `,
          }}
        />

        {/* --------------------------------------------- */}
        {/* 💖 Heart Cursor on Link Hover */}
        {/* --------------------------------------------- */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const links = document.querySelectorAll("a");

              links.forEach(link => {
                link.addEventListener("mouseenter", () => {
                  document.body.classList.add("cursor-heart");
                });

                link.addEventListener("mouseleave", () => {
                  document.body.classList.remove("cursor-heart");
                });
              });
            `,
          }}
        />

      </body>
    </html>
  )
}
