'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Instagram, Send, Sparkles } from 'lucide-react';
import { useState } from 'react';

const SOCIALS = [
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/komal-harshita-08aba2305', icon: Linkedin, color: '#0A66C2' },
  { platform: 'GitHub', url: 'https://github.com/komalharshita', icon: Github, color: '#1F2937' },
  { platform: 'Instagram', url: 'https://instagram.com/komalharshita', icon: Instagram, color: '#E1306C' },
  { platform: 'Email', url: 'mailto:komal.sony234@gmail.com', icon: Mail, color: 'hsl(var(--primary))' },
];

export default function ContactTab() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Message from ${name}`;
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:komal.sony234@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-4xl space-y-6">
      {/* Opportunity Card with Gradient */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 rounded-lg border"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--primary) / 0.05), hsl(var(--accent) / 0.05))',
          borderColor: 'hsl(var(--border))',
        }}
      >
        <div className="flex items-start gap-4">
          <Sparkles className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'hsl(var(--primary))' }} />
          <div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: 'hsl(var(--primary))' }}>Open to Opportunities</h3>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              I'm actively seeking internships and full-time roles in data analytics, business intelligence, and ESG analytics. Whether it's building dashboards, conducting analyses, or turning data into insights, I'm ready to contribute to your team.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Data Analytics', 'BI Development', 'ESG Analysis', 'SQL Optimization'].map((opp) => (
                <span
                  key={opp}
                  className="px-3 py-1 rounded-full text-xs"
                  style={{
                    backgroundColor: 'hsl(var(--primary) / 0.1)',
                    color: 'hsl(var(--primary))',
                  }}
                >
                  {opp}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-2 stat-card"
        >
          <h3 className="font-semibold mb-6 text-lg" style={{ color: 'hsl(var(--primary))' }}>Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                style={{
                  borderColor: 'hsl(var(--border))',
                  backgroundColor: 'hsl(var(--secondary) / 0.2)',
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                style={{
                  borderColor: 'hsl(var(--border))',
                  backgroundColor: 'hsl(var(--secondary) / 0.2)',
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Your message..."
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 resize-none transition-all"
                style={{
                  borderColor: 'hsl(var(--border))',
                  backgroundColor: 'hsl(var(--secondary) / 0.2)',
                }}
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all"
              style={{
                background: submitted ? 'hsl(var(--accent))' : 'hsl(var(--primary))',
                color: 'hsl(var(--primary-foreground))',
              }}
            >
              <Send className="w-4 h-4" />
              {submitted ? 'Message Sent!' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links Grid - 2x2 */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <h3 className="font-semibold text-lg" style={{ color: 'hsl(var(--primary))' }}>Connect</h3>
          <div className="grid grid-cols-2 gap-3">
            {SOCIALS.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stat-card p-4 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all"
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  animationDelay={idx * 0.1}
                >
                  <Icon className="w-5 h-5" style={{ color: social.color }} />
                  <span className="text-xs font-semibold text-center">{social.platform}</span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Quick Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-3 gap-4"
      >
        <div className="stat-card p-4 text-center">
          <Mail className="w-5 h-5 mx-auto mb-2" style={{ color: 'hsl(var(--primary))' }} />
          <p className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>Email</p>
          <p className="text-sm font-semibold">komal.sony234@gmail.com</p>
        </div>
        <div className="stat-card p-4 text-center">
          <Linkedin className="w-5 h-5 mx-auto mb-2" style={{ color: 'hsl(var(--primary))' }} />
          <p className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>LinkedIn</p>
          <p className="text-sm font-semibold">Komal Harshita</p>
        </div>
        <div className="stat-card p-4 text-center">
          <Github className="w-5 h-5 mx-auto mb-2" style={{ color: 'hsl(var(--primary))' }} />
          <p className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>GitHub</p>
          <p className="text-sm font-semibold">@komalharshita</p>
        </div>
      </motion.div>
    </div>
  );
}
