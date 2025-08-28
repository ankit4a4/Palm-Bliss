"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const systems = [
  {
    title: "Personal Wellness Consultations",
    image:
      "https://cdn.pixabay.com/photo/2020/06/05/11/33/glass-5262911_1280.jpg",
    description:
      "Discover your inner balance through Ayurvedic diagnosis and ancient pulse reading",
  },
  {
    title: "Daily Yoga & Meditation",
    image:
      "https://cdn.pixabay.com/photo/2021/03/27/10/43/yoga-6128116_1280.jpg",
    description:
      "Awaken your prana (life force) with sunrise yoga and sunset stillness",
  },
  {
    title: "Detox Rituals & Panchakarma",
    image:
      "https://images.onlymyhealth.com/only-my-health-english/images/2024/10/29/article/image/mn-Ayurvedic-Panchakarma-1730196755805.jpg",
    description:
      "Cleanse your body and mind with traditional therapies guided by Vaidyas",
  },
  {
    title: "Ayush Dining",
    image:
      "/images/gallery/13.webp",
    description:
      "Experience sattvic food that heals from within, served with love and mountain air",
  },
  {
    title: "Herbal Remedies & Healing Therapies",
    image:
      "https://cdn.pixabay.com/photo/2016/05/23/15/16/herbal-tea-1410565_1280.jpg",
    description:
      " Rooted in nature, aligned with your needs",
  },
  {
    title: "Forest Walks, Mud Therapy, Sound Healing",
    image:
      "https://cdn.pixabay.com/photo/2019/10/30/12/10/singing-bowl-4589417_1280.jpg",
    description:
      "A curated blend of traditional and natural treatments",
  },
];

const AyushWellnessSection = () => {
  return (
    <section className="py-20 bg-[#FBF7F0]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}


        {/* What Awaits You Header */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold font-playfair text-yellow-700 mb-4">
            🌼 What Awaits You:
          </h3>
        </motion.div> */}

        {/* Wellness Systems Grid */}
        <div className="flex flex-col gap-12">
          {systems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-sm overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="relative h-[450px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                <div className="py-5 absolute bottom-0 left-5 right-2 bg-transparent backdrop-blur-sm">
                  <div className="relative">
                    <h3 className="absolute -top-10 left-0 text-2xl font-playfair font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inspirational Quote Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 rounded-sm py-10 border text-center bg-white"
        >
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-8 italic">
            Here, time slows down, breath deepens, and nature speaks — gently guiding you back to yourself.
          </p>
          
          <div className="border-t border-yellow-200 pt-8 max-w-3xl mx-auto">
            <h4 className="text-2xl md:text-3xl font-bold font-playfair text-yellow-700 mb-4">
              Let The Ayush Wellness Program Be Your Sacred Pause.
            </h4>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              1 time to breathe. A space to heal. A path to wholeness.
            </p>
          </div>
        </motion.div> */}

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <Link
            href="/contact"
            className="text-xl flex items-center gap-2 md:text-2xl font-sans font-medium mb-2 border rounded-sm my-2 px-6 border-yellow-700 py-3 hover:bg-yellow-700 hover:text-white transition-all duration-300 mx-auto w-fit"
          >
            Begin Your Ayush Journey
            <ExternalLink />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AyushWellnessSection;
