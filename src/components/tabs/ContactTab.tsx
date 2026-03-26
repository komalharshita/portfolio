import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, Send } from "lucide-react";

const socials = [
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/komal-harshita", href: "https://linkedin.com/in/komal-harshita-08aba2305" },
  { icon: Github, label: "GitHub", value: "github.com/komalharshita", href: "https://github.com/komalharshita" },
  { icon: Instagram, label: "Instagram", value: "@kokokomali", href: "https://instagram.com/kokokomali" },
  { icon: Mail, label: "Email", value: "komal.sony234@gmail.com", href: "mailto:komal.sony234@gmail.com" },
];

const ContactTab = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:komal.sony234@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
  };

  return (
    <div className="flex gap-6">
      {/* Social links - Left sidebar */}
      <div className="flex flex-col gap-3 w-full sm:w-48 lg:w-56 shrink-0">
        <h4 className="font-heading font-semibold text-foreground text-xs uppercase tracking-wider mb-1">Connect With Me</h4>
        {socials.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="stat-card flex items-center gap-3 no-underline hover:border-primary/40 transition-colors p-3"
          >
            <c.icon className="h-4 w-4 text-primary shrink-0" />
            <div className="min-w-0">
              <p className="font-heading font-semibold text-xs text-foreground truncate">{c.label}</p>
              <p className="text-[10px] text-muted-foreground truncate">{c.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Contact form - Right content */}
      <div className="flex-1 min-w-0 space-y-6">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="stat-card bg-gradient-to-r from-primary/5 to-accent/5">
          <h3 className="font-heading font-semibold text-foreground mb-1">Let&apos;s Connect</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I&apos;m open to conversations about Data Analytics, Business Intelligence, and creative collaborations. Feel free to reach out!
          </p>
          <p className="text-xs text-muted-foreground mt-1">500+ connections · 2,800+ followers on LinkedIn</p>
        </motion.div>

        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="stat-card space-y-4"
        >
          <h3 className="font-heading font-semibold text-foreground text-sm">Send a Message</h3>
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full h-9 px-3 rounded-lg border border-border bg-secondary/20 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="w-full h-9 px-3 rounded-lg border border-border bg-secondary/20 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows={4}
            className="w-full px-3 py-2 rounded-lg border border-border bg-secondary/20 text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium gradient-accent text-primary-foreground hover:brightness-110 transition-all"
          >
            <Send className="h-3.5 w-3.5" />
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactTab;
