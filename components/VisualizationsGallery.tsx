"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

interface Visualization {
  id: number;
  title: string;
  image: string;
  alt: string;
}

const visualizations: Visualization[] = [
  {
    id: 1,
    title: "IMDB Movies Dashboard",
    image:
      "/dashboard  (1).png",
    alt: "IMDB Movies Dashboard Dark UI Themed",
  },
  {
    id: 2,
    title: "Sales and Profit Dashboard",
    image:
      "/dashboard  (2).png",
    alt: "Sales and Profit Dashboard",
  },
  {
    id: 3,
    title: "Sales Analytics Dashboard",
    image:
      "/dashboard  (3).png",
    alt: "Sales Analytics Dashboard",
  },
  {
    id: 4,
    title: "Exploratory Data Analysis",
    image:
      "/dashboard  (5).png",
    alt: "Exploratory Data Analysis Dashboard",
  },
];

export default function VisualizationsGallery() {
  const [selectedImage, setSelectedImage] = useState<Visualization | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };

    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedImage]);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(37, 14, 44, 0.5) 0%, rgba(61, 40, 71, 0.3) 50%, rgba(246, 165, 192, 0.05) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Visualizations Gallery
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#ff4da6] to-transparent mx-auto" />
        </div>

        {/* Gallery container - horizontal scroll */}
        <div className="w-full overflow-x-auto pb-4 scroll-smooth" style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}>
          <style>{`
            .gallery-scroll::-webkit-scrollbar {
              height: 6px;
            }
            .gallery-scroll::-webkit-scrollbar-track {
              background: transparent;
            }
            .gallery-scroll::-webkit-scrollbar-thumb {
              background: rgba(255, 77, 166, 0.3);
              border-radius: 3px;
            }
            .gallery-scroll::-webkit-scrollbar-thumb:hover {
              background: rgba(255, 77, 166, 0.5);
            }
          `}</style>

          <div className="gallery-scroll flex gap-6 px-4 pb-2 min-w-min">
            {visualizations.map((viz) => (
              <div
                key={viz.id}
                className="flex-shrink-0 group cursor-pointer"
                style={{
                  width: "clamp(280px, calc((100vw - 48px - 24px) / 3.5), 380px)",
                }}
                onClick={() => setSelectedImage(viz)}
              >
                {/* Card */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#2a1a3d] to-[#1a0f25] border border-[#ff4da6]/20 group-hover:border-[#ff4da6]/50 transition-all duration-300 h-72 sm:h-96 shadow-lg group-hover:shadow-xl group-hover:shadow-[#ff4da6]/10">
                  {/* Image */}
                  <Image
                    src={viz.image || "/placeholder.svg"}
                    alt={viz.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) calc((100vw - 48px - 24px) / 1.5), (max-width: 1024px) calc((100vw - 48px - 24px) / 2.5), calc((100vw - 48px - 24px) / 3.5)"
                    priority={viz.id === 1}
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-[#ff4da6] rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                      <ZoomIn size={28} className="text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <p className="text-white text-sm font-medium mt-3 px-1 text-center">
                  {viz.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal/Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-[#ff4da6] hover:bg-[#ff4da6]/80 rounded-full p-2 transition-colors duration-200 shadow-lg"
              aria-label="Close modal"
            >
              <X size={24} className="text-white" strokeWidth={2.5} />
            </button>

            {/* Modal content */}
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <Image
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.alt}
                width={1400}
                height={900}
                className="w-full h-auto max-h-[calc(90vh-60px)] object-contain"
                sizes="100vw"
                priority
              />

              {/* Title in modal */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
                <p className="text-white text-lg font-semibold">
                  {selectedImage.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
