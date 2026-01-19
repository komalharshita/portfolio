"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Works from "@/components/works";
import VisualizationsGallery from "@/components/VisualizationsGallery";
import Process from "@/components/Process";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import BackToTop from "@/components/back-to-top";
import Footer from "@/components/Footer";

// ⭐ Load GoogleAnalytics only on the client (NO SSR)
const GoogleAnalytics = dynamic(() => import("@/components/GoogleAnalytics"), {
  ssr: false,
});

// ⭐ Load ScrollReveal only on the client as well (optional safety)
const ScrollReveal = dynamic(() => import("@/components/ScrollReveal"), {
  ssr: false,
});

function PageContent() {
  return (
    <>
      <Header />
      <div id="hero" className="section-animate">
        <Hero />
      </div>
      <div id="about" className="section-animate">
        <About />
      </div>
      <div id="skills" className="section-animate">
        <Skills />
      </div>
      <div id="projects" className="section-animate">
        <Works />
      </div>
      <div id="visualizations" className="section-animate">
        <VisualizationsGallery />
      </div>
      <div id="process" className="section-animate">
        <Process />
      </div>
      <div id="experience" className="section-animate">
        <Experience />
      </div>
      <div id="contact" className="section-animate">
        <Contact />
      </div>
      <div id="footer" className="section-animate-fade">
        <Footer />
      </div>
      <BackToTop />
    </>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#250e2c]">
      {/* Wrap client-only components in Suspense */}
      <Suspense fallback={null}>
        <GoogleAnalytics />
      </Suspense>

      <Suspense fallback={null}>
        <ScrollReveal />
      </Suspense>

      {/* Main Page Content */}
      <Suspense fallback={<div className="text-center text-pink-200 py-20">Loading…</div>}>
        <PageContent />
      </Suspense>
    </div>
  );
}
