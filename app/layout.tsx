import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import ScrollProgressBar from "@/components/scroll-progress-bar"
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
      <body
        className={`
          ${inter.variable}
          ${poppins.variable}
          font-sans antialiased
        `}
      >
        {/* Scroll Progress Bar */}
        <ScrollProgressBar />

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
