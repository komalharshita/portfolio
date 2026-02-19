"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Select all elements with animation classes
    const elements = document.querySelectorAll(
      ".reveal, .reveal-stagger, .reveal-left, .reveal-right, " +
      ".scroll-slide-left, .scroll-slide-right, .scroll-fade-up, " +
      ".heading-reveal, .text-reveal, .stagger-item"
    );

    // Create intersection observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add visible class to trigger animation
            entry.target.classList.add("visible");
            
            // Optional: Stop observing after animation completes
            // This prevents re-triggering on scroll back up
            // Uncomment if you want one-time animation:
            // observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px 0px -50px 0px", // Start animation slightly before full visibility
      }
    );

    // Observe all animation elements
    elements.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
