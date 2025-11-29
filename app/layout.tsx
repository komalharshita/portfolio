import { Suspense } from "react";
import Script from "next/script";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import ScrollProgressBar from "@/components/ScrollReveal";
import LoadingScreen from "@/components/LoadingScreen";
import HireMePop from "@/components/HireMePop";
import GoogleAnalytics from "@/components/GoogleAnalytics";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Komal Harshita - Portfolio",
  description: "Data Analyst Portfolio",
    generator: 'v0.app'
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta
          name="google-site-verification"
          content="FpebaqQQXqlFniIPT3fiZQYAfiH63UoqX3SNO_o5PKg"
        />
      </head>
      <body
        className={`
          ${inter.variable}
          ${poppins.variable}
          font-sans antialiased
        `}
      >
        {/* --- Client components that may use next/navigation must be rendered inside Suspense --- */}
        <Suspense fallback={null}>
          <LoadingScreen />
        </Suspense>

        <Suspense fallback={null}>
          <HireMePop />
        </Suspense>

        {/* Google Analytics uses usePathname/useSearchParams (client hooks). Wrap it too. */}
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>

        {/* Scroll progress (client) */}
        <Suspense fallback={null}>
          <ScrollProgressBar />
        </Suspense>

        {/* Page Content */}
        {children}

        {/* cursor script — server-side script injection is okay, but prefer <Script> where possible */}
        <Script id="cursor-trail" dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("mousemove", function(e) {
              const dot = document.createElement("div");
              dot.className = "cursor-trail";
              dot.style.left = e.clientX + "px";
              dot.style.top = e.clientY + "px";
              document.body.appendChild(dot);
              setTimeout(() => dot.remove(), 600);
            });
          `,
        }} />

        <Script id="link-hover-heart" dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const links = Array.from(document.querySelectorAll("a"));
              links.forEach(link => {
                link.addEventListener("mouseenter", () => document.body.classList.add("cursor-heart"));
                link.addEventListener("mouseleave", () => document.body.classList.remove("cursor-heart"));
              });
            });
          `,
        }} />
      </body>
    </html>
  );
}
