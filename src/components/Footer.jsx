import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import portfolioData from "../data/portfolio.json";

export default function Footer() {
  return (
    <footer className="mt-auto py-12 px-6">
      <div className="max-w-5xl mx-auto glass-panel p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-gradient mb-2">Komal Harshita</h2>
          <p className="text-sm text-[var(--text-secondary)]">{portfolioData.personal.role}</p>
        </div>
        
        <div className="flex gap-4">
          <a href={portfolioData.personal.links.github} target="_blank" rel="noopener noreferrer" className="p-2 glass-pill hover:text-[var(--accent-primary)] transition-colors flex items-center justify-center">
            <FaGithub size={20} />
          </a>
          <a href={portfolioData.personal.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 glass-pill hover:text-[var(--accent-primary)] transition-colors flex items-center justify-center">
            <FaLinkedin size={20} />
          </a>
          <a href={`mailto:${portfolioData.personal.email}`} className="p-2 glass-pill hover:text-[var(--accent-primary)] transition-colors flex items-center justify-center">
            <Mail size={20} />
          </a>
        </div>
      </div>
      <div className="text-center mt-6 text-sm text-[var(--text-secondary)]">
        &copy; {new Date().getFullYear()} Komal Harshita Karanakota. Built with Next.js.
      </div>
    </footer>
  );
}
