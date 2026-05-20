"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <nav className="glass-panel mx-auto max-w-5xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-bold text-xl text-gradient tracking-tight">
          Komal Harshita.
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/#about" className="text-sm font-medium hover:text-[var(--accent-primary)] transition-colors hidden md:block">About</Link>
          <Link href="/projects" className="text-sm font-medium hover:text-[var(--accent-primary)] transition-colors hidden md:block">Projects</Link>
          <Link href="/blog" className="text-sm font-medium hover:text-[var(--accent-primary)] transition-colors hidden md:block">Blog</Link>
          <ThemeToggle />
          <Link href="/#contact" className="glass-button secondary hidden sm:block !py-2 !px-4 !text-sm">
            Let's Talk
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
