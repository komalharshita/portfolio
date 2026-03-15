import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Komal Harshita | Data Analyst Portfolio",
  description: "Excel-themed portfolio of Komal Harshita — CSE Student & ESG Analyst Intern skilled in Data Analytics, SQL, Python, Power BI, and Business Intelligence.",
  generator: "v0.app",
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
          h-screen overflow-hidden
        `}
      >
        {children}
      </body>
    </html>
  );
}
