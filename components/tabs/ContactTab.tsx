'use client';

import React, { useState } from 'react';
import { Mail, Linkedin, Github, Instagram, Send } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    platform: 'LinkedIn',
    value: 'komal-harshita-08aba2305',
    url: 'https://linkedin.com/in/komal-harshita-08aba2305',
    icon: Linkedin,
  },
  {
    platform: 'GitHub',
    value: 'komalharshita',
    url: 'https://github.com/komalharshita',
    icon: Github,
  },
  {
    platform: 'Instagram',
    value: '@kokokomali',
    url: 'https://instagram.com/kokokomali',
    icon: Instagram,
  },
  {
    platform: 'Email',
    value: 'komal.sony234@gmail.com',
    url: 'mailto:komal.sony234@gmail.com',
    icon: Mail,
  },
];

export default function ContactTab() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Message from ${formData.name}`;
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:komal.sony234@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-3xl space-y-8">
      {/* CONTACT FORM */}
      <div className="stat-card">
        <h3 className="font-semibold mb-6">Get in Touch</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border transition-colors focus:ring-2"
              style={{
                backgroundColor: `hsl(var(--secondary) / 0.2)`,
                borderColor: `hsl(var(--border))`,
              }}
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border transition-colors focus:ring-2"
              style={{
                backgroundColor: `hsl(var(--secondary) / 0.2)`,
                borderColor: `hsl(var(--border))`,
              }}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border transition-colors focus:ring-2 resize-none"
              style={{
                backgroundColor: `hsl(var(--secondary) / 0.2)`,
                borderColor: `hsl(var(--border))`,
              }}
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all hover:shadow-glow"
            style={{
              backgroundColor: `hsl(var(--primary))`,
              color: `hsl(var(--primary-foreground))`,
            }}
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </form>
      </div>

      {/* SOCIAL LINKS */}
      <div>
        <h3 className="font-semibold mb-4">Connect with Me</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="stat-card hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6" style={{ color: `hsl(var(--primary))` }} />
                  <div>
                    <p className="text-sm font-medium">{social.platform}</p>
                    <p className="text-xs text-muted-foreground">{social.value}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
