"use client";
import { useEffect } from "react";
import { FaSpa, FaHandsHelping } from "react-icons/fa";
import {
  GiMeditation,
  GiStoneStack,
  GiHerbsBundle,
  GiHealing,
  GiLotus,
} from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    icon: FaSpa,
    title: "Abhyanga & Dosha Balance",
    desc: "Warm herbal oils, traditional Abhyanga massage and personalized dosha balancing to awaken your senses and restore holistic harmony.",
  },
  {
    icon: GiStoneStack,
    title: "Ancient Healing Therapies",
    desc: "Release deep-seated stress with warm Ayurvedic stone treatments and herbal detox wraps. Drawn from centuries-old traditions for deep purification.",
  },
  {
    icon: GiMeditation,
    title: "Body, Mind & soulRejuvenation",
    desc: "Step into our Ayurvedic sanctuary — from meditative garden walks to Himalayan salt chamber sessions — each experience realigns and revitalizes your energy.",
  },
  {
    icon: GiHerbsBundle,
    title: "Organic Herb Rituals",
    desc: "Treatments with tulsi, ashwagandha, neem and more — freshly picked from our in-house Ayurvedic garden.",
  },
  {
    icon: GiHealing,
    title: "Personal Wellness Consults",
    desc: "1-on-1 guidance with certified Vaidyas to craft a plan suited for your current body constitution and long-term healing.",
  },
  {
    icon: GiLotus,
    title: "Sacred Serenity Spaces",
    desc: "Private relaxation zones designed for silence, sound healing, or journaling post-therapy. A spiritual refuge within nature.",
  },
];

export default function WellnessFacilitiesSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out-cubic",
      mirror: true,
    });
  }, []);

  return (
    <section className="bg-[#A67A35] py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-[#f3e9cb]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-alegreya  italic font-semibold">
            Holistic Wellness Treatments
          </h2>
          <div
            className="mt-4 w-24 h-1 mx-auto bg-[#fbf7f0]/50"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1200"
          />
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, index) => (
            <div
              key={index}
              data-aos="flip-up"
              data-aos-delay={index * 50}
              data-aos-duration="800"
              className="bg-[#fbf7f0]/10 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white/20 hover:border-white/40 hover:bg-[#fbf7f0]/15 group transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#fbf7f0] text-[#A67A35] text-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <Icon className="group-hover:text-[#8a5c1a]" />
                </div>
                <h3 className="text-lg font-alegreya  italic font-semibold group-hover:text-gold-100">
                  {title}
                </h3>
              </div>
              <p className="text-sm text-[#f3e9cb]/90 leading-relaxed group-hover:text-[#f3e9cb] transition-colors duration-300">
                {desc}
              </p>

              {/* Animated border effect on hover */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 transition-all duration-700 rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
