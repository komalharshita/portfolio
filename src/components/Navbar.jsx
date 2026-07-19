"use client";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[4px] z-[100]"
        style={{
          scaleX,
          background: "linear-gradient(90deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)",
          transformOrigin: "0%",
          boxShadow: "0 0 8px var(--accent-primary), 0 0 16px var(--accent-secondary)"
        }}
      />
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-50 p-4"
      >
        <nav className="liquid-glass mx-auto max-w-5xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="font-bold text-xl text-gradient tracking-tight">
            Komal Harshita.
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#about" className="text-sm font-medium hover:text-[var(--accent-primary)] transition-colors hidden md:block">About</Link>
            <Link href="/projects" className="text-sm font-medium hover:text-[var(--accent-primary)] transition-colors hidden md:block">Projects</Link>
            <Link href="/blog" className="text-sm font-medium hover:text-[var(--accent-primary)] transition-colors hidden md:block">Blog</Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="glass-button secondary hidden sm:block !py-2 !px-4 !text-sm">
              View Resume
            </a>
          </div>
        </nav>
      </motion.header>
    </>
  );
}

