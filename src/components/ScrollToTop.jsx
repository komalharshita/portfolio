"use client";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 200, delay: 0.5 }}
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] w-14 h-14 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_4px_8px_rgba(255,255,255,0.4),inset_0_-4px_8px_rgba(0,0,0,0.3)] text-[#FF61D2] hover:bg-white/15 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5),inset_0_6px_12px_rgba(255,255,255,0.6),inset_0_-4px_8px_rgba(0,0,0,0.4)] transition-all duration-300"
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} strokeWidth={2.5} />
    </motion.button>
  );
}
