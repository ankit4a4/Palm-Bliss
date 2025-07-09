"use client";

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-[#fbf7f0] md:py-[14vh] py-12 px-6 md:px-[10vw] font-inter">
      <div className="max-w-6xl mx-auto text-center space-y-12">

        {/* Brand Section */}
        <div className="space-y-2">
          <p className="text-xl md:text-2xl text-gray-600 font-semibold">
            <span className="text-3xl md:text-4xl font-bold text-black tracking-tight">
              THE PALM 🌴 BLISS RESORT
            </span>
          </p>
          <p className="text-3xl md:text-5xl font-tangerine text-[#7c6b56] leading-none">
            Adventure in jungle
          </p>
          <p className="text-2xl md:text-3xl font-bold text-gray-800">
            Atharva Ayurvedic Wellness Retreat
          </p>
        </div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[8vw] md:text-[2.5vw] font-playfair font-bold text-[#3c2f23] leading-snug tracking-tight"
        >
          Experience the soul of Shivalik ranges & Lesser HIMALAYAN <br />
          <span className="text-[#C9A062] block mt-1">
            Ayurveda, Nature & Wellness in Harmony
          </span>
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-base md:text-lg text-[#5c5344] leading-relaxed max-w-6xl mx-auto"
        >
          Nestled in the sacred foothills of the Himalayas, our retreat is more
          than a place — it’s an experience. Discover inner balance through the
          timeless wisdom of Ayurveda, pristine nature, and soulful living.
          Whether you're seeking physical rejuvenation, mental clarity or
          spiritual awakening, every element here is aligned to support your
          transformation.
        </motion.p>

        {/* Founders Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-[#4a3b2a] leading-relaxed max-w-6xl mx-auto"
        >
          Founder <strong>Ms. Shivani Agarwal</strong>, along with co-founder{" "}
          <strong>Mr. Path Garg</strong> and strategic insights from{" "}
          <strong>Mr. Kamlesh Singh</strong>, leads Atharva Ayurvedic Wellness Retreat — a space rooted in
          holistic healing, conscious design, and a deep reverence for ancient
          Ayurvedic wisdom. Our vision is to help guests not only unwind but
          also awaken to a higher state of being.
        </motion.p>

        {/* Optional Quote Block */}
        {/* 
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="border-l-4 border-[#C9A062] bg-[#fff8ec] text-[#4a3b2a] p-6 md:p-8 rounded-md shadow-md text-base md:text-lg italic max-w-3xl mx-auto"
        >
          “You don’t just stay here —{" "}
          <span className="text-[#C9A062] font-semibold not-italic">
            you return to yourself
          </span>
          . Every space is crafted to reconnect you with nature, with healing,
          and with peace.”
        </motion.blockquote>
        */}
      </div>
    </section>
  );
};

export default AboutSection;
