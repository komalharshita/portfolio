"use client";

import { Suspense } from "react";
import Script from "next/script";

import LoadingScreen from "@/components/LoadingScreen";
import HireMePop from "@/components/HireMePop";
import ScrollProgressBar from "@/components/ScrollReveal";
import GoogleAnalytics from "@/components/GoogleAnalytics";

import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Works from "@/components/works";
import Process from "@/components/Process";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import BackToTop from "@/components/back-to-top";
import Footer from "@/components/Footer";

// -------------------------------
// PAGE CONTENT (your sections)
// -------------------------------
function PageContent() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Works />
      <Process />
      <Experience />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

// -------------------------------
// MAIN PAGE COMPONENT
// -------------------------------
export default function Home() {
  return (
    <div className="min-h-screen bg-[#250e2c]">

      {/* 💜 Loading Screen */}
      <LoadingScreen />

      {/* 💖 Hire Me Popup */}
      <HireMePop />

      {/* 📊 Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* 📈 Google Analytics Loader */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />

      {/* 📈 Google Analytics Init */}
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

      {/* Custom GA Component (optional second handler) */}
      <GoogleAnalytics />

      {/* ------------------------------ */}
      {/*  PAGE RENDER WITH SUSPENSE     */}
      {/* ------------------------------ */}
      <Suspense fallback={<div className="text-center py-20 text-pink-200">Loading…</div>}>
        <PageContent />
      </Suspense>

      {/* --------------------------------------------- */}
      {/* ✨ Cursor Trail Script */}
      {/* --------------------------------------------- */}
      <Script id="cursor-trail" strategy="afterInteractive">
        {`
          document.addEventListener("mousemove", function(e) {
            const dot = document.createElement("div");
            dot.className = "cursor-trail";
            dot.style.left = e.clientX + "px";
            dot.style.top = e.clientY + "px";
            document.body.appendChild(dot);

            setTimeout(() => dot.remove(), 600);
          });
        `}
      </Script>

      {/* --------------------------------------------- */}
      {/* 💖 Heart Cursor on Link Hover */}
      {/* --------------------------------------------- */}
      <Script id="heart-hover" strategy="afterInteractive">
        {`
          const links = document.querySelectorAll("a");

          links.forEach(link => {
            link.addEventListener("mouseenter", () => {
              document.body.classList.add("cursor-heart");
            });

            link.addEventListener("mouseleave", () => {
              document.body.classList.remove("cursor-heart");
            });
          });
        `}
      </Script>

    </div>
  );
}
