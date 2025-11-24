"use client"
import { motion } from "framer-motion"

export default function DashboardGallery() {
  const dashboards = [
    "/dashboard  (1).png",
    "/dashboard  (2).png",
    "/dashboard  (3).png",
    "/dashboard  (4).png",
    "/dashboard  (5).png",
  ]

  return (
    <div className="mt-32 relative z-20">
      <h3 className="text-4xl font-serif font-bold text-white mb-8">
        Dashboard Gallery
      </h3>

      <div className="horizontal-gallery flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6">
        {dashboards.map((src, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="min-w-[360px] snap-start"
          >
            <img
              src={src}
              alt={`Dashboard ${idx + 1}`}
              className="w-[360px] h-[230px] rounded-xl object-cover border border-white/20 glass-effect 
                         hover:shadow-xl hover:shadow-[#ff4da6]/40 transition-all"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
