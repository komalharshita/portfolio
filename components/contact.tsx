"use client"

import type React from "react"
import { useState } from "react"
import AnimatedDivider from "./animated-divider"
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
    <section id="contact" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-7xl mx-auto">
      <div className="relative z-10">
        <AnimatedDivider />

        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h2 className="reveal section-title font-bold mb-8 sm:mb-10 text-center text-3xl sm:text-4xl lg:text-5xl" style={{ color: "#f6a5c0" }}>
            Let's Connect!
          </h2>

          <p className="reveal text-sm sm:text-base lg:text-lg px-2" style={{ color: "#b8a0b8" }}>
            Interested in data, storytelling, or collaboration? I'd love to hear from you.
          </p>

          {/* Responsive Card */}
          <div
            className="mt-6 sm:mt-8 p-4 sm:p-6 lg:p-8 rounded-2xl border mx-auto"
            style={{
              backgroundColor: "rgba(46, 22, 55, 0.6)",
              borderColor: "rgba(211, 195, 227, 0.3)",
            }}
          >
            <p className="reveal font-semibold mb-2 sm:mb-3 text-base sm:text-lg" style={{ color: "#f6a5c0" }}>
              Open to Opportunities
            </p>
            <p className="text-xs sm:text-sm lg:text-base" style={{ color: "#e0c3cc" }}>
              Currently seeking internships in Data Analytics and Business Intelligence. Also open to creative
              collaborations and writing projects!
            </p>
          </div>
        </div>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto">

          {/* ========== LEFT SIDE: CONTACT INFO ========== */}
          <div className="space-y-6 sm:space-y-8 mx-auto md:mx-0 w-full">

            {/* Responsive Avatar */}
            <img
              src="/images/p_talking.png"
              alt="Komal Harshita"
              className="rounded-full border shadow-lg mx-auto w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover"
            />

            {/* Social Links */}
            <div className="pt-8 border-t mx-2 sm:mx-0" style={{ borderColor: "rgba(211, 195, 227, 0.3)" }}>
              <p className="reveal font-semibold mb-4 text-center md:text-left" style={{ color: "#f6a5c0" }}>
                Connect With Me
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-5 pt-4">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/komalharshita/" target="_blank" className="px-4 py-2 rounded-lg font-semibold text-sm transition-all border flex items-center gap-2"
                  style={{
                    backgroundColor: "rgba(246, 165, 192, 0.1)",
                    color: "#f6a5c0",
                    borderColor: "rgba(246, 165, 192, 0.3)",
                  }}>
                  <img src="https://img.icons8.com/?size=100&id=MR3dZdlA53te&format=png&color=000000" className="w-5 h-5" />
                  LinkedIn
                </a>

                {/* GitHub */}
                <a href="https://github.com/komalharshita" target="_blank"
                  className="px-4 py-2 rounded-lg font-semibold text-sm transition-all border flex items-center gap-2"
                  style={{
                    backgroundColor: "rgba(246, 165, 192, 0.1)",
                    color: "#f6a5c0",
                    borderColor: "rgba(246, 165, 192, 0.3)",
                  }}>
                  <img src="https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000" className="w-5 h-5" />
                  GitHub
                </a>

                {/* Facebook */}
                <a href="https://www.facebook.com/komalxharshitaa/" target="_blank"
                  className="px-4 py-2 rounded-lg font-semibold text-sm transition-all border flex items-center gap-2"
                  style={{
                    backgroundColor: "rgba(246, 165, 192, 0.1)",
                    color: "#f6a5c0",
                    borderColor: "rgba(246, 165, 192, 0.3)",
                  }}>
                  <img src="https://img.icons8.com/?size=100&id=jZ0kw76QEzJU&format=png&color=000000" className="w-5 h-5" />
                  Facebook
                </a>

                {/* Instagram */}
                <a href="https://instagram.com/kokokomali" target="_blank"
                  className="px-4 py-2 rounded-lg font-semibold text-sm transition-all border flex items-center gap-2"
                  style={{
                    backgroundColor: "rgba(246, 165, 192, 0.1)",
                    color: "#f6a5c0",
                    borderColor: "rgba(246, 165, 192, 0.3)",
                  }}>
                  <img src="https://img.icons8.com/?size=100&id=nj0Uj45LGUYh&format=png&color=000000" className="w-5 h-5" />
                  Instagram
                </a>

                {/* Discord */}
                <a href="https://discord.com/users/prideandprejudice" target="_blank"
                  className="px-4 py-2 rounded-lg font-semibold text-sm transition-all border flex items-center gap-2"
                  style={{
                    backgroundColor: "rgba(246, 165, 192, 0.1)",
                    color: "#f6a5c0",
                    borderColor: "rgba(246, 165, 192, 0.3)",
                  }}>
                  <img src="https://img.icons8.com/?size=100&id=D2NqKl85S8Ye&format=png&color=000000" className="w-5 h-5" />
                  Discord
                </a>

                {/* Gmail */}
                <a href="mailto:komal.sony234@gmail.com"
                  className="px-4 py-2 rounded-lg font-semibold text-sm transition-all border flex items-center gap-2"
                  style={{
                    backgroundColor: "rgba(246, 165, 192, 0.1)",
                    color: "#f6a5c0",
                    borderColor: "rgba(246, 165, 192, 0.3)",
                  }}>
                  <img src="https://img.icons8.com/?size=100&id=eFPBXQop6V2m&format=png&color=000000" className="w-5 h-5" />
                  Gmail
                </a>

              </div>
            </div>
          </div>

          {/* ========== RIGHT SIDE: CONTACT FORM ========== */}
          <form onSubmit={handleSubmit} className="space-y-6 w-full mx-auto px-2 sm:px-0">
            <div>
              <label className="block font-semibold mb-2" style={{ color: "#f6a5c0" }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg transition-all"
                style={{
                  backgroundColor: "#1a0820",
                  border: "1px solid rgba(211, 195, 227, 0.3)",
                  color: "#f7c2ca",
                }}
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-2" style={{ color: "#f6a5c0" }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg transition-all"
                style={{
                  backgroundColor: "#1a0820",
                  border: "1px solid rgba(211, 195, 227, 0.3)",
                  color: "#f7c2ca",
                }}
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-2" style={{ color: "#f6a5c0" }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg transition-all resize-none"
                style={{
                  backgroundColor: "#1a0820",
                  border: "1px solid rgba(211, 195, 227, 0.3)",
                  color: "#f7c2ca",
                }}
                placeholder="Tell me about your project or opportunity..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 rounded-lg font-medium text-sm text-white transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #837ab6 0%, #cc8db3 50%, #f6a5c0 100%)",
                boxShadow: "0 0 20px rgba(246, 165, 192, 0.3)",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
