"use client"
import { motion } from "framer-motion"

export default function DashboardGallery() {
  const dashboards = [
    "/dashboards/dashboard1.png",
    "/dashboards/dashboard2.png",
    "/dashboards/dashboard3.png",
    "/dashboards/dashboard4.png",
    "/dashboards/dashboard5.png",
  ]

  return (
    <div className="mt-24 relative z-10">
      <h3 className="text-4xl font-serif font-bold text-white mb-8">
        Dashboard Gallery
      </h3>

      <div className="horizontal-gallery flex gap-6 overflow-x-auto pb-6">
        {dashboards.map((src, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="min-w-[350px]"
          >
            <img
              src={src}
              alt={`Dashboard ${idx + 1}`}
              className="w-[350px] h-[220px] object-cover rounded-xl border border-white/20 glass-effect hover:shadow-xl hover:shadow-[#ff4da6]/30 transition-all"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
