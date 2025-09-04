// ValuePropsSection.jsx – Ayush Dining (USPs moved to separate section)

"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import { RiShieldStarFill } from "react-icons/ri";
import { GiIndianPalace, GiWorld, GiHerbsBundle } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";

import img1 from "@/public/Images/ayush-dining/1.jpg";
import img2 from "@/public/Images/ayush-dining/2.jpg";
import img3 from "@/public/Images/ayush-dining/3.jpg";
import img4 from "@/public/Images/ayush-dining/4.jpg";

const values = [
  {
    icon: FaLeaf,
    title: "Traditional Pahadi Thalis & Sattvic Delicacies",
    desc: "Savor traditional Pahadi thalis, sattvic delicacies, and herbal infusions — all prepared with fresh, local ingredients, infused with healing intent.",
    img: "https://i.pinimg.com/1200x/de/12/58/de125845a48533cfa066aedb279bf5db.jpg",
  },
  {
    icon: GiHerbsBundle,
    title: "Ancient Wisdom & Mindful Living",
    desc: "Every detail—from ingredient selection to preparation methods—honors ancient wisdom and mindful living, transforming each meal into a healing journey rooted in Ayush traditions.",
    img: "https://i.pinimg.com/736x/58/dd/63/58dd6391d028266da2b5483556cc3775.jpg",
  },
  {
    icon: GiWorld,
    title: "Sacred Dining Experience",
    desc: "Dine under the open sky or in calming, earth-toned interiors — where every bite restores your body, quiets your mind, and uplifts your soul.",
    img: "/Images/open-dining.webp",
  },
  {
    icon: RiShieldStarFill,
    title: "Nourishment Aligned with Nature",
    desc: "This isn't just dining. It's nourishment aligned with nature, culture, and your inner rhythm. Welcome to Ayush — where you eat to heal, live to glow.",
    img: "https://i.pinimg.com/736x/e8/df/88/e8df8852e2ff81c6d9669e15f6af1023.jpg",
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
          <h2 className="text-4xl md:text-5xl font-alegreya  italic  font-semibold text-yellow-700">
            Nourishment for Body
          </h2>
          <h2 className="text-4xl md:text-5xl pt-1 font-alegreya  italic font-semibold text-yellow-700">
            Medicine for Soul
          </h2>

          <div
            className="mt-4 w-24 h-1 mx-auto"
            style={{ backgroundColor: "#A67A35" }}
          />
          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
            Experience the art of mindful dining where every meal is a
            meditation, every ingredient carries healing wisdom, and every bite
            connects you deeper to nature's abundance and your inner well-being.
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
              <div className="relative w-full md:w-2/5 h-full min-h-60">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover border-r-2 border-black transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <span className="h-11 w-11 flex items-center justify-center rounded-full bg-white shadow ring-2 ring-white/50 mr-4">
                    <Icon className="text-[#A67A35] text-2xl" />
                  </span>
                  <h3 className="text-xl font-semibold font-alegreya  italic text-yellow-700/90">
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
