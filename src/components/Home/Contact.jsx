"use client";
import { motion } from "framer-motion";
import portfolioData from "../../data/portfolio.json";
import { Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaMedium, FaKaggle } from "react-icons/fa";

export default function Contact() {
  const socialLinks = [
    { name: "LinkedIn", url: portfolioData.personal.links.linkedin, icon: <FaLinkedin size={24} /> },
    { name: "GitHub", url: portfolioData.personal.links.github, icon: <FaGithub size={24} /> },
    { name: "Kaggle", url: portfolioData.personal.links.kaggle, icon: <FaKaggle size={24} /> },
    { name: "Medium Blog", url: portfolioData.personal.links.blog, icon: <FaMedium size={24} /> },
    { name: "Instagram", url: portfolioData.personal.links.instagram, icon: <FaInstagram size={24} /> },
    { name: "YouTube", url: portfolioData.personal.links.youtube, icon: <FaYoutube size={24} /> }
  ];

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto" id="contact">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
          Interested in collaborating or have a data-driven project in mind? I'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8"
        >
          <form className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-[var(--text-secondary)]">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-[var(--glass-border)] border border-[var(--glass-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-primary)] transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--text-secondary)]">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-[var(--glass-border)] border border-[var(--glass-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-primary)] transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--text-secondary)]">Message</label>
              <textarea 
                id="message" 
                rows="4"
                className="w-full bg-[var(--glass-border)] border border-[var(--glass-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-primary)] transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>
            <button 
              type="button" 
              className="glass-button w-full flex items-center justify-center gap-2 mt-2"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col h-full"
        >
          <div className="glass-card p-8 h-full flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-6 text-center md:text-left">Connect with me online</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-border)] hover:bg-[var(--glass-bg)] hover:border-[var(--accent-primary)] transition-all duration-300 group"
                >
                  <span className="text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-colors">
                    {link.icon}
                  </span>
                  <span className="font-medium text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
