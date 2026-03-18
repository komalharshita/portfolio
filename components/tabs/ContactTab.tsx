'use client';

import { Mail, Linkedin, Github, Send } from 'lucide-react';

const socials = [
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/komal-harshita-08aba2305', icon: Linkedin },
  { platform: 'GitHub', url: 'https://github.com/komalharshita', icon: Github },
  { platform: 'Email', url: 'mailto:komal.sony234@gmail.com', icon: Mail },
];

export default function ContactTab() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    const subject = `Message from ${name}`;
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:komal.sony234@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="stat-card">
        <h3 className="font-semibold mb-6 text-lg" style={{ color: 'hsl(var(--primary))' }}>Get in Touch</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input type="text" name="name" required placeholder="Your name" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2" style={{ borderColor: 'hsl(var(--border))', backgroundColor: 'hsl(var(--secondary) / 0.2)', focusRing: 'hsl(var(--primary) / 0.5)' }} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" name="email" required placeholder="your@email.com" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2" style={{ borderColor: 'hsl(var(--border))', backgroundColor: 'hsl(var(--secondary) / 0.2)' }} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea name="message" required rows={5} placeholder="Your message..." className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 resize-none" style={{ borderColor: 'hsl(var(--border))', backgroundColor: 'hsl(var(--secondary) / 0.2)' }} />
          </div>
          <button type="submit" className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all" style={{ backgroundColor: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}>
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </form>
      </div>

      <div className="stat-card">
        <h3 className="font-semibold mb-4 text-lg" style={{ color: 'hsl(var(--primary))' }}>Connect with Me</h3>
        <div className="grid grid-cols-3 gap-4">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" className="glass-card p-4 flex flex-col items-center gap-2 hover:scale-105 transition-transform">
                <Icon className="w-6 h-6" style={{ color: 'hsl(var(--primary))' }} />
                <span className="text-xs font-semibold text-center">{social.platform}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
