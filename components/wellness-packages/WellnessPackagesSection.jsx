"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const packages = [
    {
        title: "7‑Day Detox & Yoga Retreat",
        desc:
            "Cleanse your body and mind with guided yoga, organic meals, and herbal therapies.",
        image:
            "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1470&q=80",
        duration: "7 Days",
        price: "₹24,999",
        highlight: "Most Popular",
    },
    // {
    //     title: "Rejuvenation & Panchakarma",
    //     desc:
    //         "A deeply restorative program using authentic Panchakarma cleansing rituals and sattvic meals.",
    //     image:
    //         "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1470&q=80",
    //     duration: "14 Days",
    //     price: "₹58,999",
    //     highlight: "Best Value",
    // },
    {
        title: "Weekend Mindfulness Escape",
        desc:
            "Perfect for working professionals — weekend escape with meditation and holistic cuisine.",
        image:
            "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1587&q=80",
        duration: "3 Days",
        price: "₹15,999",
    },
    {
        title: "Ayurvedic Weight Management",
        desc:
            "Scientific weight control via Ayurveda herbs, yoga routines & detox meals.",
        image:
            "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?auto=format&fit=crop&w=1470&q=80",
        duration: "21 Days",
        price: "₹40,999",
        highlight: "Comprehensive",
    },
    // {
    //     title: "Holistic Wellness for Seniors",
    //     desc:
    //         "Safe and relaxing wellness for 60+ with arthritis yoga, soft diet, and Ayurveda massage.",
    //     image:
    //         "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1470&q=80",
    //     duration: "10 Days",
    //     price: "₹20,999",
    // },
    // {
    //     title: "Youth Vitality Program",
    //     desc:
    //         "For teens and young adults – improve posture, energy, clarity through mindful eating and yoga.",
    //     image:
    //         "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1520&q=80",
    //     duration: "5 Days",
    //     price: "₹58,999",
    // },
    // {
    //     title: "Wellness for Couples",
    //     desc:
    //         "Reconnect with your partner through spa rituals, couple yoga & candlelight sattvic dining.",
    //     image:
    //         "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1469&q=80",
    //     duration: "4 Days",
    //     price: "₹34,999",
    // },
    // {
    //     title: "Digital Detox & Nature Immersion",
    //     desc:
    //         "Unplug from screens, walk barefoot on Ganga shores, forest bathing & herbal teas.",
    //     image:
    //         "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1632&q=80",
    //     duration: "6 Days",
    //     price: "₹24,999",
    // },
    // {
    //     title: "Postpartum Wellness Program",
    //     desc:
    //         "Ayurvedic support for new mothers — body strengthening, lactation food & rest routine.",
    //     image:
    //         "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=1470&q=80",
    //     duration: "12 Days",
    //     price: "₹26,999",
    // },
];

export default function WellnessPackagesSection() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: 'ease-in-out-back',
            mirror: true
        });
    }, []);

    return (
        <section className="bg-gradient-to-b from-[#f9f6f2] to-[#f0e9df] py-20 px-4 sm:px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div
                    className="text-center mb-16"
                    data-aos="fade-down"
                    data-aos-delay="50"
                    data-aos-anchor-placement="top-bottom"
                >
                    <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-yellow-700/90 mb-4">
                        Wellness Packages
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our carefully curated wellness programs designed to nourish your body, mind, and soul
                    </p>
                    <div className="mt-6 w-24 h-1.5 mx-auto bg-gradient-to-r from-[#A67A35] to-[#D4AF37] rounded-full" />
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {packages.map(({ title, desc, image, duration, price, highlight }, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in-up"
                            data-aos-delay={index * 100}
                            data-aos-anchor-placement="top-bottom"
                            className="group relative bg-white rounded-xl shadow-lg overflow-hidden border border-[#e0d5c5] hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                        >
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#A67A35]/10 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                            
                            {/* Card */}
                            <div className="relative h-full flex flex-col">
                                {/* Image container with parallax effect */}
                                <div className="relative h-64 w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-[#8B5A2B] mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10" />
                                    <Image
                                        src={image}
                                        alt={title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        priority={index < 3}
                                    />
                                    {highlight && (
                                        <div 
                                            className="absolute top-4 right-4 bg-[#A67A35] text-white text-xs font-bold px-3 py-1 rounded-full z-10 
                                            transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300"
                                        >
                                            {highlight}
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                    <div className="absolute bottom-4 left-4 text-white z-10">
                                        <span className="text-sm font-medium bg-[#A67A35] px-2 py-1 rounded 
                                            group-hover:bg-[#D4AF37] transition-colors duration-300">
                                            {duration}
                                        </span>
                                        <h3 className="text-xl font-bold mt-2 drop-shadow-md group-hover:text-[#F5E6C8] transition-colors duration-300">
                                            {title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Content with sliding up effect */}
                                <div className="p-6 flex-grow flex flex-col transform group-hover:-translate-y-2 transition-transform duration-500">
                                    <p className="text-gray-700 mb-5 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                                        {desc}
                                    </p>
                                    <div className="mt-auto flex justify-between items-center">
                                        <span className="text-lg font-bold text-[#8B5A2B] group-hover:text-[#A67A35] transition-colors duration-300">
                                            {price}
                                        </span>
                                        <button className="px-4 py-2 bg-[#A67A35] hover:bg-[#8B5A2B] text-white text-sm font-medium rounded-lg 
                                            transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#A67A35]/30">
                                            Book Now
                                            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Border animation */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4AF37]/30 rounded-xl pointer-events-none transition-all duration-700" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}