"use client";

import { motion } from "framer-motion";
import { GiLotus } from "react-icons/gi";
import { WiDaySunny } from "react-icons/wi";
import { PiDiamondsFourFill } from "react-icons/pi";


const AboutSection = () => {
  return (
    <section className="bg-[#fbf7f0] md:py-[14vh] py-12 px-6 md:px-[10vw] font-inter">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Brand Section */}
        <div className="space-y-3">
          <p className="text-xl md:text-2xl text-gray-700 font-semibold">
            <span className="text-3xl md:text-4xl font-playfair text-yellow-700/90">
              THE PALM BLISS RESORT
            </span>
          </p>
          <p className="text-3xl md:text-5xl font-tangerine text-black leading-none">
            {/* <GiFlowerPot className="inline-block mb-1 mr-2 text-yellow-700" size={38}/>  */}
            Adventure in jungle
          </p>
          <p className="text-2xl md:text-3xl text-yellow-700/90  italic   text-gray-900">
            Atharva Ayurvedic Wellness Retreat
          </p>
        </div>

        {/* Main Heading */}
        {/* Uncomment if needed, updated colors for modern feel
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[8vw] md:text-[2.5vw] font-playfair font-bold text-[#3c2f23] leading-snug tracking-tight"
        >
          Experience The Soul Of Shivalik Ranges & Lesser Himalyan <br />
          <span className="text-black block mt-1">
            Ayurveda, Nature & Wellness In Harmony
          </span>
        </motion.h2>
        */}

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-base md:text-lg text-[#4b3e2f] font-alegreya  leading-relaxed max-w-6xl mx-auto font-medium"
        >
          {/* <FaLeaf className="inline-block mb-1 mr-1 text-yellow-700" size={24}/> */}
          Welcome to Palm Bliss Resort & Atharva Ayurveda Wellness Retreat Where
          Harmony Finds a Home Tucked away in the green folds of the Shivalik
          ranges, Palm Bliss and Atharva Retreat invite you to a space where the
          soul exhales, the body renews and the mind gently quiets. Here,
          luxury breathes through simplicity and every detail — from mud
          cottages to healing rituals — is woven with love, nature and ancient
          wisdom.
        </motion.p>

        <h1 className="text-xl text-yellow-700/90   italic font-medium md:text-2xl  tracking-normal  flex items-center justify-center gap-2">
          <GiLotus className="text-yellow-700 " size={26} /> <span className=" md:text-3xl">A </span>  <span><span className=" md:text-3xl">J</span  >ourney <span className=" md:text-3xl">I</span>nto <span className=" md:text-3xl">T</span>ranquility</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-base md:text-lg text-[#4b3e2f] font-alegreya  leading-relaxed max-w-6xl mx-auto font-medium"
        >
          Wake to birdsong and the golden touch of sunrise. Feel the cool earth
          underfoot as you walk through gardens of soft grasses and sacred
          silence. Surrender to the rhythm of Abhyanga, Shirodhara and warm
          herbal oils. Dine on pure, Natural food that nourishes from within —
          grown with care, served with love.
        </motion.p>

        <h1 className="text-xl md:text-2xl  text-yellow-700/90  italic font-medium tracking-normal  flex items-center justify-center gap-2">
          <WiDaySunny className="text-yellow-700" size={26} />
          <span>
            <span className=" md:text-3xl">S</span>tay,  <span className=" md:text-3xl">B</span>reathe, <span className=" md:text-3xl">B</span>ecome
          </span>

        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-base md:text-lg font-alegreya  text-[#4b3e2f] leading-relaxed max-w-6xl mx-auto font-medium"
        >
          At Palm Bliss, your stay is more than a getaway — It’s a return to
          your natural self. Let the mud walls embrace you in comfort, Let the
          winds whisper peace through every breath. Here every sunset is a
          reminder to rest And every dawn a promise of renewal.
        </motion.p>

        <h1 className="text-xl md:text-2xl  text-yellow-700/90  italic font-medium tracking-normal flex items-center justify-center gap-2">
          <PiDiamondsFourFill className="text-yellow-700" size={26} />
          <span>
            <span className=" md:text-3xl">O</span>ur <span className=" md:text-3xl">P</span>hilosophy
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-base md:text-lg text-[#4b3e2f] font-alegreya  leading-relaxed max-w-6xl mx-auto font-medium"
        >
          We believe in the silent strength of nature, The wisdom of Ayurveda,
          The healing touch of simplicity and the power of syndrome silence — a
          state where stillness speaks and stress dissolves.
          <ul>
            <p>Palm Bliss and Atharva wellness are not just destinations —</p>
            <li className="font-alegreya italic text-xl font-light mt-2">They are experiences.</li>
            <li className="font-alegreya italic text-xl font-light">They are memories waiting to be lived,</li>
            <li className="font-alegreya italic text-xl font-light">Stories written in soil, soul and serenity.</li>
          </ul>
        </motion.p>

      </div>
    </section>
  );
};

export default AboutSection;
