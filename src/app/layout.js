import { Bricolage_Grotesque, Onest } from "next/font/google";
import "./globals.css";
import "./glass.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Grainient from "../components/Grainient/Grainient";
import { SmoothCursor } from "../components/ui/smooth-cursor";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
});

export const metadata = {
  title: "Komal Harshita | Data Analyst",
  description: "Portfolio of Komal Harshita Karanakota, an aspiring Data Analyst proficient in SQL, Python, Power BI, and Excel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className={`${bricolage.variable} ${onest.variable}`}>

      <body>
        <SmoothCursor />
        <Navbar />
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none', overflow: 'hidden' }}>
          <Grainient
            color1="#7C3AED"
            color2="#06001e"
            color3="#e4c3ec"
            timeSpeed={0.35}
            colorBalance={-0.09}
            warpStrength={1.05}
            warpFrequency={3.6}
            warpSpeed={1.6}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.14}
            rotationAmount={300}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>
        <main className="pt-32 pb-16 min-h-[calc(100vh-200px)]">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
