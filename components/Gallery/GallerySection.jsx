"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "@/public/Images/AllPhotos/DSC06389.webp";
import img2 from "@/public/Images/AllPhotos/DSC06396.webp";
import img3 from "@/public/Images/AllPhotos/DSC06399.webp";
import img4 from "@/public/Images/AllPhotos/DSC06434.webp";
import img5 from "@/public/Images/AllPhotos/DSC06460.webp";
import img6 from "@/public/Images/AllPhotos/DSC06475.webp";
import img7 from "@/public/Images/AllPhotos/DSC06521.webp";
import img8 from "@/public/Images/AllPhotos/about-us-1.jpg";
import img9 from "@/public/Images/AllPhotos/ayushDining.webp";
import img10 from "@/public/Images/AllPhotos/gardenView.webp";
import img11 from "@/public/Images/AllPhotos/indoorGame1.webp";
import img12 from "@/public/Images/AllPhotos/gardenView.webp";
import img13 from "@/public/Images/AllPhotos/mountainView.webp";
import img14 from "@/public/Images/AllPhotos/mud-house.webp";
import img15 from "@/public/Images/AllPhotos/outdoorDining.webp";
import img16 from "@/public/Images/AllPhotos/pool.webp";
import img17 from "@/public/Images/AllPhotos/swiss.webp";
import img18 from "@/public/Images/ayush-dining/1.jpg";
import img19 from "@/public/Images/ayush-dining/2.jpg";
import img20 from "@/public/Images/ayush-dining/3.jpg";
import img21 from "@/public/Images/ayush-dining/4.jpg";





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
].map(img => ({
    ...img,
    aspect: img.height / img.width
}));

export default function GallerySection() {
    const [visibleCount, setVisibleCount] = useState(6);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const loadMore = () => {
        setIsLoadingMore(true);
        setTimeout(() => {
            setVisibleCount(prev => Math.min(prev + 6, galleryImages.length));
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
                    className="text-4xl font-bold text-center mb-16 text-gray-800"
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
                                    stiffness: 100
                                }}
                                className={`relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
                                style={{
                                    gridRowEnd: `span ${Math.round(getRowSpan(img.aspect))}`
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
                            className={`px-8 py-3 bg-amber-600 text-white font-medium rounded-full transition-all ${isLoadingMore ? "opacity-75" : "hover:bg-amber-700 hover:shadow-lg"
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