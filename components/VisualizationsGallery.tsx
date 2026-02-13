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
    title: "Exploratory Data Analysis",
    image:
      "/dashboard  (1).png",
    alt: "Exploratory Data Analysis Dashboard",
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
    title: "IMDB Movies Dashboard",
    image:
      "/dashboard  (3).png",
    alt: "IMDB Movies Dashboard",
  },
  {
    id: 4,
    title: "Sales Analytics Dashboard",
    image:
      "/dashboard  (5).png",
    alt: "Sales Analytics Dashboard",
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
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
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
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: "#f6a5c0" }}>
            Visualizations Gallery
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-transparent via-[#f6a5c0] to-transparent mx-auto" />
        </div>

        {/* Gallery container - horizontal scroll */}
        <div className="w-full overflow-x-auto pb-3 sm:pb-4 scroll-smooth" style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}>
          <style>{`
            .gallery-scroll::-webkit-scrollbar {
              height: 6px;
            }
            .gallery-scroll::-webkit-scrollbar-track {
              background: transparent;
            }
            .gallery-scroll::-webkit-scrollbar-thumb {
              background: rgba(246, 165, 192, 0.3);
              border-radius: 3px;
            }
            .gallery-scroll::-webkit-scrollbar-thumb:hover {
              background: rgba(246, 165, 192, 0.5);
            }
          `}</style>

          <div className="gallery-scroll flex gap-4 sm:gap-6 px-2 sm:px-4 pb-2 min-w-min">
            {visualizations.map((viz) => (
              <div
                key={viz.id}
                className="flex-shrink-0 group cursor-pointer"
                style={{
                  width: "clamp(240px, calc((100vw - 32px - 16px) / 1.3), 380px)",
                  minWidth: "240px",
                }}
                onClick={() => setSelectedImage(viz)}
              >
                {/* Card */}
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl bg-gradient-to-br from-[#2a1a3d] to-[#1a0f25] border border-[#f6a5c0]/20 group-hover:border-[#f6a5c0]/50 transition-all duration-300 h-56 sm:h-72 md:h-96 shadow-lg group-hover:shadow-xl group-hover:shadow-[#f6a5c0]/10">
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
                    <div className="bg-[#f6a5c0] rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                      <ZoomIn size={28} className="text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <p className="text-white text-xs sm:text-sm font-medium mt-2 sm:mt-3 px-1 text-center break-words line-clamp-2">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-4 animate-in fade-in duration-200 overflow-y-auto"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[95vh] sm:max-h-[90vh] bg-black rounded-lg sm:rounded-xl overflow-hidden shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 bg-[#f6a5c0] hover:bg-[#f6a5c0]/80 rounded-full p-1.5 sm:p-2 transition-colors duration-200 shadow-lg"
              aria-label="Close modal"
            >
              <X size={20} className="text-white sm:w-6 sm:h-6" strokeWidth={2.5} />
            </button>

            {/* Modal content */}
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <Image
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.alt}
                width={1400}
                height={900}
                className="w-full h-auto max-h-[calc(95vh-80px)] sm:max-h-[calc(90vh-80px)] object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 95vw"
                priority
              />

              {/* Title in modal */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3 sm:p-4 md:p-6">
                <p className="text-white text-sm sm:text-base md:text-lg font-semibold break-words">
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
