// ValuePropsSection.jsx – Ayush Dining (USPs moved to separate section)

"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  RiShieldStarFill,
} from "react-icons/ri";
import { GiIndianPalace, GiWorld, GiHerbsBundle } from "react-icons/gi";

import img1 from "@/public/Images/ayush-dining/1.jpg";
import img2 from "@/public/Images/ayush-dining/2.jpg";
import img3 from "@/public/Images/ayush-dining/3.jpg";
import img4 from "@/public/Images/ayush-dining/4.jpg";

const values = [
  {
    icon: GiIndianPalace,
    title: "Indian Vegan Menu for Wellness Programs",
    desc:
      "Dedicated to Indian tourists visiting the Ayurvedic Wellness Retreat in Uttarakhand. This menu blends traditional Indian flavors, regional specialties, and modern vegan cuisine while ensuring health-conscious options are available. All dishes are designed to align with the wellness retreat’s values, offering innovative, wholesome meals for Indian tourists.",
    img: img1.src,
  },
  {
    icon: GiWorld,
    title: "Global Vegan Delights for Wellness Programs",
    desc:
      "A curated menu featuring famous and innovative vegan dishes from around the world tailored for international guests visiting Uttarakhand. The menu blends wellness-focused meals, global flavours, and regional specialties, offering a balanced and inclusive dining experience.",
    img: img2.src,
  },
  {
    icon: GiHerbsBundle,
    title: "Ayurvedic Nutrition Plan",
    desc:
      "Customized dosha-based meals (Vata, Pitta, Kapha) incorporating seasonal Himalayan superfoods like moringa, amla, ashwagandha. Designed to restore internal balance and support daily Ayurvedic routines.",
    img: img3.src,
  },
  {
    icon: RiShieldStarFill,
    title: "Purity & Preparation Principles",
    desc:
      "All meals are prepared using copper utensils, spring water, and strictly natural ingredients — no refined sugar, no additives. Ganga-jal and traditional slow-cook techniques preserve nutrients and purity.",
    img: img4.src,
  },
];

export default function ValuePropsSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900">
            Sacred Food for <span style={{ color: "#A67A35" }}>Body &amp; Soul</span>
          </h2>
          <div
            className="mt-4 w-24 h-1 mx-auto"
            style={{ backgroundColor: "#A67A35" }}
          />
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600">
            Conscious vegan meals crafted with Himalayan purity — perfectly aligned with yoga &amp; Ayurveda.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map(({ icon: Icon, title, desc, img }, i) => (
            <article
              key={i}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="group bg-[#f9f6f2] rounded-2xl overflow-hidden border border-[#e0d5c5] shadow transition hover:shadow-xl flex flex-col md:flex-row"
            >
              <div className="relative md:w-2/5 h-full min-h-60">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <span className="h-11 w-11 flex items-center justify-center rounded-full bg-white shadow ring-2 ring-white/50 mr-4">
                    <Icon className="text-[#A67A35] text-2xl" />
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
