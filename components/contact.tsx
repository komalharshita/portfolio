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
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
      <AnimatedDivider />

      <div className="text-center mb-12">
        <h2 className="text-5xl font-serif font-bold mb-4 text-[#8b4a6d]">
          <HolographicText>Let's Connect</HolographicText>
        </h2>
        <p className="text-lg text-[#8b4a6d]">
          Interested in data, storytelling, or collaboration? I'd love to hear from you.
        </p>
        <div
          className="mt-6 p-6 rounded-2xl"
          style={{ background: "linear-gradient(135deg, rgba(255, 182, 193, 0.2), rgba(217, 167, 224, 0.2))" }}
        >
          <p className="text-[#8b4a6d] font-semibold mb-2">Open to Opportunities</p>
          <p className="text-[#ff4da6]">
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
                <p className="font-semibold text-[#8b4a6d]">Email</p>
                <a href="mailto:komal.harshita@example.com" className="text-[#ff4da6] hover:underline">
                  {"komal.sony234@gmail.com    \n"}
                </a>
              </div>
            </div>
          </GlassmorphicTooltip>

          <GlassmorphicTooltip content="Based in Pune, India">
            <div className="flex gap-4 items-start">
              
              
            </div>
          </GlassmorphicTooltip>

          {/* Social links */}
          <div className="pt-8 border-t border-[#ffb6c1]/30">
            <p className="font-semibold text-[#8b4a6d] mb-4">Connect With Me</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/komalharshita/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/60 backdrop-blur rounded-full text-[#ff4da6] font-semibold hover:bg-[#ff4da6] hover:text-white transition-all inline-block w-fit"
              >
                LinkedIn
              </a>
              <a
                href="https://www.linkedin.com/in/komalharshita/"
                className="px-4 py-2 bg-white/60 backdrop-blur rounded-full text-[#ff4da6] font-semibold hover:bg-[#ff4da6] hover:text-white transition-all inline-block w-fit"
              >
                GitHub
              </a>
              
              <a
                href="https://www.facebook.com/komalxharshitaa/"
                className="px-4 py-2 bg-white/60 backdrop-blur rounded-full text-[#ff4da6] font-semibold hover:bg-[#ff4da6] hover:text-white transition-all inline-block w-fit"
              >
                {"Facebook"}
              </a>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#8b4a6d] font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur border border-[#ffb6c1]/30 focus:border-[#ff4da6] focus:outline-none transition-colors"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block text-[#8b4a6d] font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur border border-[#ffb6c1]/30 focus:border-[#ff4da6] focus:outline-none transition-colors"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-[#8b4a6d] font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur border border-[#ffb6c1]/30 focus:border-[#ff4da6] focus:outline-none transition-colors resize-none"
              placeholder="Tell me about your project or opportunity..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 text-white rounded-full font-semibold hover:shadow-lg transition-all bubble-glow"
            style={{ background: "linear-gradient(to right, #ff4da6, #d9a7e0)" }}
          >
            Send Message ✨
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-12 border-t border-[#ffb6c1]/30 text-center">
        <p className="text-[#8b4a6d]">© 2025 Komal Harshita</p>
      </div>
    </section>
  )
}
