"use client";

import { useEffect } from "react";

/**
 * ScrollReveal Component
 * Handles all scroll-triggered animations using IntersectionObserver
 * Optimized for performance with proper cleanup and error handling
 */
export default function ScrollReveal() {
  useEffect(() => {
    // Elements that should trigger animations on scroll
    const animatedElements = document.querySelectorAll(
      ".reveal, " +
      ".reveal-stagger, " +
      ".reveal-left, " +
      ".reveal-right, " +
      ".scroll-slide-left, " +
      ".scroll-slide-right, " +
      ".scroll-fade-up, " +
      ".heading-reveal, " +
      ".text-reveal, " +
      ".stagger-item, " +
      ".bg-hero-pattern, " +
      ".bg-about-pattern, " +
      ".bg-skills-pattern, " +
      ".bg-works-pattern, " +
      ".bg-visualizations-pattern, " +
      ".bg-process-pattern, " +
      ".bg-experience-pattern, " +
      ".bg-contact-pattern, " +
      ".bg-footer-pattern"
    );

    if (animatedElements.length === 0) return;

    // Configuration for IntersectionObserver
    const observerOptions = {
      threshold: 0.15, // Trigger when 15% of element is visible
      rootMargin: "0px 0px -50px 0px", // Start animation 50px before full visibility
    };

    // Callback function when elements enter viewport
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add visible class to trigger CSS animation
          entry.target.classList.add("visible");
        }
      });
    };

    // Create and setup observer
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Observe all animated elements
    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array - run once on mount

  // This component doesn't render anything
  return null;
}
