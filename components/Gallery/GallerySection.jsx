"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "@/public/Images/gallery/1.webp";

import img2 from "@/public/Images/gallery/2.webp";
import img3 from "@/public/Images/gallery/3.webp";
import img4 from "@/public/Images/gallery/4.webp";
import img5 from "@/public/Images/gallery/5.webp";
import img6 from "@/public/Images/gallery/6.webp";
import img7 from "@/public/Images/gallery/7.webp";
import img8 from "@/public/Images/gallery/8.webp";
import img9 from "@/public/Images/gallery/9.webp";
import img10 from "@/public/Images/gallery/10.webp";
import img11 from "@/public/Images/gallery/11.webp";
import img12 from "@/public/Images/gallery/12.webp";
import img13 from "@/public/Images/gallery/13.webp";
import img14 from "@/public/Images/gallery/14.webp";
import img15 from "@/public/Images/gallery/15.webp";
import img16 from "@/public/Images/gallery/16.webp";
import img17 from "@/public/Images/gallery/17.webp";
import img18 from "@/public/Images/gallery/18.webp";
import img19 from "@/public/Images/familyRoom/5.webp";
import img20 from "@/public/Images/familyRoom/3.webp";
import img21 from "@/public/Images/gallery/2.webp";
import img22 from "@/public/Images/mudHouse/1.jpg";
import img23 from "@/public/Images/mudHouse/2.jpg";
import img24 from "@/public/Images/mudHouse/3.jpg";
import img25 from "@/public/Images/gallery/19.jpg";
import img26 from "@/public/Images/gallery/20.jpg";
import img27 from "@/public/Images/gallery/21.jpg";
import img28 from "@/public/Images/gallery/22.jpg";
import img29 from "@/public/Images/gallery/23.jpg";
import img30 from "@/public/Images/gallery/24.jpg";
import img31 from "@/public/Images/gallery/25.jpg";
import img32 from "@/public/Images/gallery/26.jpg";
import img33 from "@/public/Images/gallery/27.jpg";
import img34 from "@/public/Images/gallery/28.jpg";
import img35 from "@/public/Images/gallery/29.jpg";
import img36 from "@/public/Images/gallery/30.jpg";
import img37 from "@/public/Images/gallery/31.jpg";
import img38 from "@/public/Images/gallery/32.jpg";

const galleryImages = [
  { src: img1, width: 800, height: 600, size: "medium" },
  { src: img2, width: 600, height: 900, size: "tall" },
  { src: img3, width: 800, height: 500, size: "wide" },
  { src: img4, width: 700, height: 700, size: "medium" },
  { src: img5, width: 600, height: 800, size: "tall" },
  { src: img6, width: 900, height: 600, size: "wide" },
  { src: img7, width: 800, height: 800, size: "large" },
  { src: img8, width: 700, height: 500, size: "medium" },
  { src: img9, width: 600, height: 600, size: "medium" },
  { src: img10, width: 800, height: 600, size: "medium" },
  { src: img11, width: 700, height: 900, size: "tall" },
  { src: img12, width: 800, height: 600, size: "medium" },
  { src: img13, width: 900, height: 600, size: "wide" },
  { src: img14, width: 600, height: 800, size: "tall" },
  { src: img15, width: 800, height: 500, size: "wide" },
  { src: img16, width: 700, height: 700, size: "medium" },
  { src: img17, width: 900, height: 600, size: "wide" },
  { src: img18, width: 800, height: 600, size: "medium" },
  { src: img19, width: 700, height: 900, size: "tall" },
  { src: img20, width: 800, height: 600, size: "medium" },
  { src: img21, width: 700, height: 900, size: "tall" },
  { src: img22, width: 900, height: 600, size: "wide" },
  { src: img23, width: 800, height: 600, size: "medium" },
  { src: img24, width: 700, height: 900, size: "tall" },
  { src: img25, width: 700, height: 900, size: "tall" },
  { src: img26, width: 700, height: 900, size: "tall" },
  { src: img27, width: 900, height: 600, size: "wide" },
  { src: img28, width: 800, height: 600, size: "medium" },
  { src: img29, width: 700, height: 900, size: "tall" },
  { src: img30, width: 700, height: 900, size: "tall" },
  { src: img31, width: 900, height: 600, size: "wide" },
  { src: img32, width: 800, height: 600, size: "medium" },
  { src: img33, width: 900, height: 600, size: "wide" },
  { src: img34, width: 800, height: 600, size: "medium" },
  { src: img35, width: 700, height: 900, size: "tall" },
  { src: img36, width: 700, height: 900, size: "tall" },
  { src: img37, width: 900, height: 600, size: "wide" },
  { src: img38, width: 800, height: 600, size: "medium" },
].map((img) => ({
  ...img,
  aspect: img.height / img.width,
}));

export default function GallerySection() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 6, galleryImages.length));
      setIsLoadingMore(false);
    }, 500);
  };

  const getRowSpan = (aspect) => {
    if (aspect > 1.5) return 2;
    if (aspect < 0.7) return 1;
    return 1.5;
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-yellow-700/90"
        >
          Our Gallery
        </motion.h2>

        {/* Perfect Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
          <AnimatePresence>
            {galleryImages.slice(0, visibleCount).map((img, i) => (
              <motion.div
                key={`${img.src}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  damping: 15,
                  stiffness: 100,
                }}
                className={`relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
                style={{
                  gridRowEnd: `span ${Math.round(getRowSpan(img.aspect))}`,
                }}
              >
                <div className="w-full h-full">
                  <Image
                    src={img.src}
                    width={img.width}
                    height={img.height}
                    alt="Gallery image"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={i < 9}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <motion.div
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white"
                    >
                      {/* Optional caption */}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visibleCount < galleryImages.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <button
              onClick={loadMore}
              disabled={isLoadingMore}
              className={`px-8 py-3 bg-amber-600 text-white font-medium rounded-full transition-all ${
                isLoadingMore
                  ? "opacity-75"
                  : "hover:bg-amber-700 hover:shadow-lg"
              }`}
            >
              {isLoadingMore ? (
                <span className="flex items-center justify-center">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="inline-block mr-2"
                  >
                    ↻
                  </motion.span>
                  Loading...
                </span>
              ) : (
                "Load More"
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
