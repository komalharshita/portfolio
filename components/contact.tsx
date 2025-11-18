"use client"

import type React from "react"
import { useState } from "react"
import AnimatedDivider from "./animated-divider"
import HolographicText from "./holographic-text"
import GlassmorphicTooltip from "./glassmorphic-tooltip"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-32 px-4 max-w-4xl mx-auto relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #ff4da6 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      
      <div className="relative z-10">
        <AnimatedDivider />

        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold mb-6 text-white">
            <HolographicText>Let's Connect</HolographicText>
          </h2>
          <p className="text-xl text-white/90">
            Interested in data, storytelling, or collaboration? I'd love to hear from you.
          </p>
          <div
            className="mt-8 p-8 rounded-2xl border border-[#ff4da6]/30"
            style={{ background: "linear-gradient(135deg, rgba(255, 77, 166, 0.15), rgba(217, 167, 224, 0.15))" }}
          >
            <p className="text-white font-semibold mb-3">Open to Opportunities</p>
            <p className="text-[#ff4da6] font-medium">
              Currently seeking internships in Data Analytics and Business Intelligence. Also open to creative
              collaborations and writing projects!
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <GlassmorphicTooltip content="Send me an email anytime">
              <div className="flex gap-4 items-start">
                <div className="text-3xl">📧</div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:komal.sony234@gmail.com" className="text-[#ff4da6] hover:underline break-all">
                    komal.sony234@gmail.com
                  </a>
                </div>
              </div>
            </GlassmorphicTooltip>

            {/* Social links */}
            <div className="pt-8 border-t border-white/20">
              <p className="font-semibold text-white mb-4">Connect With Me</p>
              <div className="flex gap-3 tracking-normal leading-7 flex-row my-1 mx-0 py-1.5">
                <a
                  href="https://www.linkedin.com/in/komalharshita/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#ff4da6]/20 backdrop-blur rounded-full text-[#ff4da6] font-semibold hover:bg-[#ff4da6] hover:text-black transition-all inline-block w-fit border border-[#ff4da6]/30"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/komalharshita"
                  className="px-4 py-2 bg-[#ff4da6]/20 backdrop-blur rounded-full text-[#ff4da6] font-semibold hover:bg-[#ff4da6] hover:text-black transition-all inline-block w-fit border border-[#ff4da6]/30"
                >
                  GitHub
                </a>
                <a
                  href="https://www.facebook.com/komalxharshitaa/"
                  className="px-4 py-2 bg-[#ff4da6]/20 backdrop-blur rounded-full text-[#ff4da6] font-semibold hover:bg-[#ff4da6] hover:text-black transition-all inline-block w-fit border border-[#ff4da6]/30"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/15 backdrop-blur border border-white/20 text-white placeholder-white/50 focus:border-[#ff4da6] focus:outline-none transition-colors"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/15 backdrop-blur border border-white/20 text-white placeholder-white/50 focus:border-[#ff4da6] focus:outline-none transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-white/15 backdrop-blur border border-white/20 text-white placeholder-white/50 focus:border-[#ff4da6] focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project or opportunity..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 text-black rounded-full font-semibold hover:shadow-lg transition-all hover:shadow-[#ff4da6]/50 bg-[#ff4da6] hover:bg-[#ff1a7f] border border-[#ff4da6]"
            >
              Send Message ✨
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-white/20 text-center">
          <p className="text-white">© 2025 Komal Harshita</p>
        </div>
      </div>
    </section>
  )
}
