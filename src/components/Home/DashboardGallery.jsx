"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen } from "lucide-react";
import FadeIn from "../FadeIn";

export default function DashboardGallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const dashboards = [
    { id: 1, label: "Sales & Revenue Analytics", color: "rgba(157, 78, 221, 0.4)" },
    { id: 2, label: "Customer Segmentation", color: "rgba(255, 97, 210, 0.4)" },
    { id: 3, label: "Supply Chain Operations", color: "rgba(0, 240, 255, 0.4)" },
  ];

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <div id="gallery-section">
      <div className="intro-section max-w-5xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Interactive Dashboards</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
            Scroll down to explore interactive BI visualizations built for business intelligence and reporting.
          </p>
        </FadeIn>
      </div>

      <div ref={containerRef} className="scroll-container">
        <div className="sticky-wrapper">
          <motion.div className="gallery" style={{ x }}>
            {dashboards.map((item) => {
              const isLoaded = loadedImages[item.id];
              return (
                <div
                  key={item.id}
                  className="gallery-item liquid-glass group"
                  style={{
                    "--item-color": item.color,
                    "--item-image": `url('/dashboard-${item.id}.jpg')`
                  }}
                >
                  {/* Hidden image element to detect if dashboard image exists/loads */}
                  <img
                    src={`/dashboard-${item.id}.jpg`}
                    alt=""
                    className="hidden"
                    onLoad={() => handleImageLoad(item.id)}
                  />

                  {!isLoaded && (
                    <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center z-0">
                      <span className="text-[var(--text-secondary)] font-medium flex items-center gap-2 opacity-50">
                        <BookOpen size={24} /> Dashboard {item.id} Placeholder
                      </span>
                    </div>
                  )}

                  <div className="item-content relative z-10">
                    <span className="item-number">0{item.id}</span>
                    <h2 className="text-3xl font-bold mb-2 text-white">{item.label}</h2>
                    {!isLoaded && (
                      <p className="text-[var(--text-secondary)] text-sm max-w-sm mt-4">
                        Upload your landscape image as <code className="text-white bg-[var(--glass-border)] px-1 py-0.5 rounded">/dashboard-{item.id}.jpg</code> to replace this placeholder.
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        #gallery-section {
          height: auto;
          overflow: visible;
          margin-top: 10vh;
        }

        .intro-section {
          padding-bottom: 40px;
        }

        .scroll-container {
          height: 300vh;
          position: relative;
        }

        .sticky-wrapper {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          overflow: hidden;
        }

        .gallery {
          display: flex;
          gap: 40px;
          padding-left: max(24px, calc((100vw - 64rem) / 2));
          padding-right: 50vw;
          will-change: transform;
        }

        .gallery-item {
          flex-shrink: 0;
          width: 90vw;
          max-width: 1080px;
          aspect-ratio: 16 / 9;
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          background-image: var(--item-image);
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: flex-end;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .gallery-item::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
              to bottom,
              transparent 30%,
              var(--item-color) 100%
          );
          z-index: 1;
        }

        .item-content {
          padding: 40px;
          width: 100%;
          background: linear-gradient(to top, rgba(11, 9, 20, 0.8), transparent);
        }

        .item-number {
          font-size: 16px;
          color: var(--accent-tertiary);
          font-family: "Inter", monospace;
          display: block;
          margin-bottom: 12px;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .gallery {
            gap: 20px;
            padding-left: 24px;
          }
          .gallery-item {
            width: 90vw;
            height: auto;
          }
          .item-content {
            padding: 24px;
          }
        }
      `}} />
    </div>
  );
}
