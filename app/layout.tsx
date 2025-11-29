import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
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

// Viewport MUST be outside metadata
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Site Verification */}
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
        {/* PAGE CONTENT (client scripts & components moved to page.tsx) */}
        {children}
      </body>
    </html>
  );
}
