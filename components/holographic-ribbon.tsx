"use client"

export default function HolographicRibbon() {
  return (
    <>
      {/* Holographic Ribbon 1 */}
      <div
        className="absolute top-1/4 left-0 w-96 h-32 opacity-40"
        style={{
          background: "linear-gradient(90deg, transparent, #ff4da6, #ffd3b6, #d9a7e0, transparent)",
          filter: "blur(40px)",
          animation: "ribbonFlow 8s ease-in-out infinite",
          transform: "skewY(-20deg)",
        }}
      />

      {/* Holographic Ribbon 2 */}
      <div
        className="absolute bottom-1/3 right-0 w-96 h-32 opacity-35"
        style={{
          background: "linear-gradient(90deg, transparent, #d9a7e0, #ffb6c1, #ffd3b6, transparent)",
          filter: "blur(40px)",
          animation: "ribbonFlow 10s ease-in-out infinite reverse",
          transform: "skewY(20deg)",
        }}
      />

      {/* Holographic Ribbon 3 */}
      <div
        className="absolute top-1/2 left-1/4 w-80 h-24 opacity-30"
        style={{
          background: "linear-gradient(45deg, transparent, #ff4da6, #d9a7e0, transparent)",
          filter: "blur(35px)",
          animation: "ribbonFlow 12s ease-in-out infinite",
          transform: "rotate(45deg)",
        }}
      />
    </>
  )
}
