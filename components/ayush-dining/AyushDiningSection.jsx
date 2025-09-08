"use client";

import { motion } from "framer-motion";
import {
  FaLeaf,
  FaHeart,
  FaSun,
  FaUtensils,
  FaSeedling,
  FaMountain,
} from "react-icons/fa";
import {
  GiMeditation,
  GiLotus,
  GiBowlOfRice,
  GiFlowerPot,
  GiTreeBranch,
  GiDew,
} from "react-icons/gi";
import { MdSpa, MdNaturePeople, MdOutlineEco } from "react-icons/md";
import { BiLeaf } from "react-icons/bi";
import Link from "next/link";

export default function AyushDiningSection() {
  return (
    <section className="relative min-h-screen flex py-16 items-center justify-center bg-yellow-50/50 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section with Side Layout */}
        <div className="flex justify-center items-center text-center">
          {/* Left Side - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            {/* Main Heading */}
            <div className="space-y-6 flex justify-center items-center flex-col">
              <h1 className="text-yellow-700/90 text-5xl font-alegreya  italic lg:text-7xl font-bold leading-[0.9] tracking-tight">
                Ayush Dining
              </h1>
              <GiLotus className="text-3xl text-yellow-700/90" />
              <div className="space-y-2">
                <h2 className="text-yellow-700/80 text-2xl font-alegreya  italic lg:text-3xl font-semibold leading-tight">
                  A Sacred Meal
                </h2>
                <h2 className="text-yellow-700/80 text-2xl font-alegreya  italic lg:text-3xl font-semibold leading-tight">
                  A Healing Moment
                </h2>
              </div>
            </div>

            {/* Main Description */}
            <div className="bg-white/60 backdrop-blur-sm px-8 py-3 rounded-2xl shadow-lg border border-white/70 max-w-4xl">
              <p className="text-gray-800 text-lg lg:text-xl leading-relaxed tracking-wide">
                Step into Ayush Dining, where food becomes healthy, memory, and
                meditation.
              </p>
              <p className="text-gray-800  text-lg lg:text-xl leading-relaxed mt-6 font-light tracking-wide">
                At Ayush Dining, every meal is a soulful ritual. Set against the
                tranquil embrace of the Shivalik ranges, our open-air dining
                space welcomes you with the scent of fresh herbs, the golden
                glow of evening light, and the gentle hum of nature
              </p>
              <p className="text-gray-800  text-lg lg:text-xl leading-relaxed mt-6 font-light tracking-wide">
                Each plate is a work of art—organic vegetables picked at their
                freshest, whole grains rich in earth’s energy, and spices chosen
                for their healing touch. Guided by the ancient wisdom of
                Ayurveda, our chefs craft dishes that balance body, awaken the
                senses, and uplift the spirit.
              </p>
              <p className="text-gray-800  text-lg lg:text-xl leading-relaxed mt-6 font-light tracking-wide">
                Here, dining becomes a meditation. You savor slowly, listen
                deeply—to the laughter around you, the rustle of leaves, and the
                whisper of the mountain breeze. Every sip of herbal tea warms
                the soul, every bite nourishes from within, and every shared
                moment becomes a memory of peace.
              </p>
              <p className="text-yellow-700 text-lg lg:text-xl leading-relaxed mt-6 font-light tracking-wide">
                At Palm Bliss, we believe a meal should not just fill the
                stomach, but also heal the heart.
              </p>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-to-r from-yellow-600 to-yellow-700/90 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg tracking-wide"
            >
              <a href="/contact">Experience Ayush Dining</a>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Section - Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 text-center"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24"
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-6 mb-8">
              <MdSpa className="w-8 h-8 text-yellow-600" />
              <h3 className="text-yellow-700/90 text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Nourishment for Body & Soul
              </h3>
              <MdSpa className="w-8 h-8 text-yellow-600" />
            </div>
            <p className="text-gray-800 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed tracking-wide">
              Immerse yourself in a culinary journey where every dish is crafted
              with fresh, local ingredients and ancient wellness wisdom.
            </p>
          </div>

          <div className="space-y-16">

            {/* First Card - Image on Left, Content on Right */}
            {/* <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg border border-white/50 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-5 flex items-center justify-center bg-gradient-to-br from-yellow-50/50 to-yellow-100/30">
                  <img
                    src="/Images/ayush-dining/11.png"
                    className="h-[14rem] w-full object-cover"
                    alt="a"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-yellow-700/90 font-alegreya  italic text-2xl font-bold leading-tight mb-6">
                    Indian Vegan Menu for Wellness Programs
                  </h4>
                  <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
                    This menu blends traditional Indian flavors, regional specialties, and modern vegan cuisine while ensuring health-conscious options are available. All dishes are designed to align with the wellness retreat’s values, offering innovative, wholesome meals for Indian tourists.
                  </p>
                </div>
              </div>
            </motion.div> */}

            {/* Second Card - Content on Left, Image on Right */}
            {/* <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg border border-white/50 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-5">
                  <h4 className="text-yellow-700/90 font-alegreya  italic text-2xl font-bold leading-tight mb-6">
                    Global Vegan Delights for Wellness Programs
                  </h4>
                  <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
                    A curated menu featuring famous and innovative vegan dishes from around the world tailored for international guests visiting Uttarakhand. The menu blends wellness-focused meals, global flavours, and regional specialties, offering a balanced and inclusive dining experience.
                  </p>
                </div>
                <div className="p-5 flex items-center justify-center bg-gradient-to-br from-yellow-50/50 to-yellow-100/30">
                  <img
                    src="https://images.pexels.com/photos/5182119/pexels-photo-5182119.jpeg"
                    className="h-[14rem] w-full object-cover"
                    alt="a"
                  />
                </div>
              </div>
            </motion.div> */}

            {/* First Card - Image on Left, Content on Right */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg border border-white/50 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-5 flex items-center justify-center bg-gradient-to-br from-yellow-50/50 to-yellow-100/30">
                  <img
                    src="/Images/ayush-dining/11.png"
                    className="h-[14rem] w-full object-cover"
                    alt="a"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-yellow-700/90 font-alegreya  italic text-2xl font-bold leading-tight mb-6">
                    Pure, Wholesome, Natural
                  </h4>
                  <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
                    Experience the goodness of nature on your plate – pure
                    vegetarian, natural, and soul-satisfying meals that
                    celebrate the art of mindful eating.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Second Card - Content on Left, Image on Right */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg border border-white/50 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-5">
                  <h4 className="text-yellow-700/90 font-alegreya  italic text-2xl font-bold leading-tight mb-6">
                    Where Wellness Meets Flavors
                  </h4>
                  <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
                    Each meal is a quiet symphony of nature's bounty, infused
                    with the wisdom of Ayurveda and the purity of organic
                    harvests.
                  </p>
                </div>
                <div className="p-5 flex items-center justify-center bg-gradient-to-br from-yellow-50/50 to-yellow-100/30">
                  <img
                    src="https://images.pexels.com/photos/5182119/pexels-photo-5182119.jpeg"
                    className="h-[14rem] w-full object-cover"
                    alt="a"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Flavors & Harmony Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20"
        >
          <div className="space-y-16">
            {/* First Card - Image on Left, Content on Right */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white/80 to-yellow-50/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-5 flex items-center justify-center bg-gradient-to-br from-yellow-50/50 to-yellow-100/30">
                  <img
                    src="https://images.pexels.com/photos/6694164/pexels-photo-6694164.jpeg"
                    className="h-[14rem] w-full object-cover"
                    alt="a"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-yellow-700/90 font-alegreya  italic text-xl font-bold leading-tight mb-6">
                    Flavors That Heal
                  </h4>
                  <p className="text-gray-800 text-base leading-relaxed tracking-wide">
                    Here, every bite whispers wellness, every sip carries the
                    breath of the mountains, and every plate is a poem of
                    nourishment.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Second Card - Content on Left, Image on Right */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white/80 to-yellow-50/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-5">
                  <h4 className="text-yellow-700/90 font-alegreya  italic text-xl font-bold leading-tight mb-6">
                    Dining in Harmony
                  </h4>
                  <p className="text-gray-800 text-base leading-relaxed tracking-wide">
                    Beneath the gentle embrace of the Shivalik ranges, we serve
                    not just food, but a celebration of balance, vitality, and
                    peace.
                  </p>
                </div>
                <div className="p-5 flex items-center justify-center bg-gradient-to-br from-yellow-50/50 to-yellow-100/30">
                  <img
                    src="/Images/gallery/13.webp"
                    className="h-[14rem] w-full object-cover"
                    alt="a"
                  />
                </div>
              </div>
            </motion.div>

            {/* Third Card - Image on Left, Content on Right */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white/80 to-yellow-50/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-5 flex items-center justify-center bg-gradient-to-br from-yellow-50/50 to-yellow-100/30">
                  <img
                    src="https://cdn.pixabay.com/photo/2021/06/28/14/06/rice-6371739_1280.jpg"
                    className="h-[14rem] w-full object-cover"
                    alt="a"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-yellow-700/90 font-alegreya  italic text-xl font-bold leading-tight mb-6">
                    A Feast for the Senses
                  </h4>
                  <p className="text-gray-800 text-base leading-relaxed tracking-wide">
                    From the first aroma to the final taste, Ayush Dining is a
                    mindful journey—where flavors bloom, hearts feel lighter,
                    and the soul feels at home.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Final Wellness Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 mb-16"
        >
          <div className="space-y-16">
            {/* First Card - Image on Left, Content on Right */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/70 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-5 flex items-center justify-center bg-gradient-to-br from-yellow-50/50 to-yellow-100/30">
                  <img
                    src="/Images/ayush-dining/11.png"
                    className="h-[14rem] w-full object-cover"
                    alt="a"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-yellow-700/90 font-alegreya  italic text-2xl font-bold leading-tight mb-6">
                    A Taste of Wellness
                  </h4>
                  <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
                    From sunrise breakfasts to serene sunset dinners, Ayush
                    Dining offers flavors that heal, energize, and delight.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Second Card - Content on Left, Image on Right */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/70 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-5">
                  <h4 className="text-yellow-700/90 font-alegreya  italic text-2xl font-bold leading-tight mb-6">
                    Nature-Inspired Flavors
                  </h4>
                  <p className="text-gray-800 text-lg leading-relaxed tracking-wide">
                    Savor food prepared with love, guided by Ayurveda and served
                    in the calming ambience of our wellness retreat.
                  </p>
                </div>
                <div className="p-5 flex items-center justify-center bg-gradient-to-br from-yellow-50/50 to-yellow-100/30">
                  <img
                    src="https://cdn.pixabay.com/photo/2022/02/25/22/59/pestle-7034940_1280.jpg"
                    className="h-[14rem] w-full object-cover"
                    alt="a"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
