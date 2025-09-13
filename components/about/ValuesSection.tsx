"use client";

import { motion } from "framer-motion";
import { Flower, HeartPulse, Smile, Leaf } from "lucide-react";
import n1 from "../../public/Images/n1.jpg";
import n2 from "../../public/Images/n2.jpg";
import n3 from "../../public/Images/n3.jpg";
import n4 from "../../public/Images/n4.jpg";
import n5 from "../../public/Images/n5.jpg";
import n6 from "../../public/Images/n6.jpg";
import s1 from "../../public/Images/s1.jpg";
import s2 from "../../public/Images/s2.jpg";
import s3 from "../../public/Images/s3.jpg";
import m1 from "../../public/Images/m1.webp";
import m2 from "../../public/Images/m2.webp";
import m3 from "../../public/Images/s3.jpg";

const values = [
  {
    icon: HeartPulse,
    title: "Stress-Free Living",
    description:
      "Step into a world where time slows down and serenity takes over. At a wellness retreat, stress-free living means waking up to the sounds of nature, moving gently through yoga or meditation and nourishing your body with wholesome meals prepared with care. There's no rush, no pressure—just space to breathe, reflect and heal.\n\nHere, your mind unwinds, your body restores and your soul reconnects. Digital distractions fade, replaced by deep rest, mindful practices and heart-centered community. Every moment invites you to live lightly, joyfully and with intention.\n\nIt's not just a break—it's a gentle reset to help you return to your life more centered, more grounded and more you.",
    images: [s1.src, s2.src, s3.src],
  },
  {
    icon: Smile,
    title: "Calm & Comfort: A Mud-House Escape",
    description:
      "Tucked away from the rush of the world, there's a quiet kind of magic in mud houses. Earthy, grounding and deeply peaceful — they hold the soul of wellness retreats.\n\nStep inside and the walls breathe coolness. The air feels soft, the silence kind. No harsh edges, no loud colors — just the gentle hum of nature. Mud homes aren't just structures; they're sanctuaries built from the earth itself.\n\nHere, calm isn't an idea — it's a feeling. You wake up to birdsong, stretch under open skies and let time slow down. The comfort isn't from luxury, but from simplicity. Natural materials, soft lighting and cozy corners make you feel held — like home, but lighter.\n\nIn a world that runs fast, the mud house reminds you how to pause. How to listen to your breath. How to just be.\n\nAnd that's the gift of this wellness retreat — calm and comfort, one breath at a time.",
    images: [m1.src, m2.src, m3.src],
  },
  {
    icon: Leaf,
    title: "Nature-Aligned Healing",
    description:
      "Where the Earth Heals and You Reconnect\n\nStep into a world where nature is not just a backdrop, but a vital force in your healing journey. Nestled amidst the serene Shivalik foothills and the lesser Himalayas, Palm Bliss Resort offers a sanctuary where every element — air, water, earth and light — is aligned to restore your natural balance.\n\nHere, healing begins with the rustle of leaves, the purity of mountain air, the grounding touch of mud houses and the rhythmic wisdom of Ayurveda. Our treatments and rituals are designed to flow in harmony with nature's cycles — guiding you gently back to your inner calm, strength and wholeness.\n\nLet the forested stillness, oxygen-rich atmosphere and soul-soothing therapies help you slow down, breathe deeply and live with intention.",
    images: [n2.src, n1.src, n3.src],
    images2: [n4.src, n5.src, n6.src],
  },
];

const ValuesSection = () => (
  <section className="relative py-24 bg-[#a17633] border-b-2 border-white">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-alegreya italic font-bold text-[#f3e9cb] mb-4">
          Our <span className="text-[#f3e9cb]/80 drop-shadow-md">Core Values</span>
        </h2>
        <p className="text-lg text-[#f3e9cb]/90 max-w-2xl mx-auto">
          Rooted in wellness, nature and inner balance — the essence of Palm Bliss.
        </p>
      </motion.div>

      <div className="space-y-[100px] relative">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className={`relative z-10 ${index % 2 === 0 ? "md:pl-32 md:pr-4" : "md:pr-32 md:pl-4"
              }`}
          >
            <div className="bg-white/80 relative backdrop-blur-md border-none shadow-xl hover:shadow-2xl transition duration-300 rounded-2xl">
              <div className="p-8 relative">
                {/* Desktop images absolute positioned */}
                <div className="hidden md:block">
                  {value.images.map((img, imgIndex) => {
                    let positionClass = "";

                    if (index === 0) {
                      positionClass =
                        imgIndex === 0
                          ? "top-[-25%] left-[-18%] z-20"
                          : imgIndex === 1
                            ? "top-[16%] left-[-13%]"
                            : "bottom-[-10%] left-[-18%]";
                    } else if (index === 1) {
                      positionClass =
                        imgIndex === 0
                          ? "top-[-7%] right-[-12%] z-20"
                          : imgIndex === 1
                            ? "top-[28%] right-[-17%]"
                            : "bottom-[-3%] right-[-13%]";
                    } else if (index === 2) {
                      if (imgIndex === 0) positionClass = "top-[-10%] left-[-18%] z-10";
                      else if (imgIndex === 1) positionClass = "top-[24%] left-[-13%]";
                      else positionClass = "bottom-[-12%] left-[-18%]";
                    }

                    return (
                      <img
                        key={imgIndex}
                        src={img}
                        alt=""
                        className={`absolute h-[200px] w-[200px] rounded-lg transition-all duration-500 ${positionClass}`}
                      />
                    );
                  })}

                  {index === 2 &&
                    value.images2?.map((img, imgIndex) => {
                      let rightPositionClass = "";
                      if (imgIndex === 0) rightPositionClass = "top-[-10%] right-[-7%] z-10";
                      else if (imgIndex === 1) rightPositionClass = "top-[29%] right-[-2%]";
                      else rightPositionClass = "bottom-[-12%] right-[-7%]";

                      return (
                        <img
                          key={`right-${imgIndex}`}
                          src={img}
                          alt=""
                          className={`absolute h-[190px] w-[150px] rounded-lg transition-all duration-500 ${rightPositionClass}`}
                        />
                      );
                    })}
                </div>

                {/* Mobile images normal stacked */}
                <div className="grid grid-cols-2 gap-4 md:hidden mb-6">
                  {value.images.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={img}
                      alt=""
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  ))}
                  {index === 2 &&
                    value.images2?.map((img, imgIndex) => (
                      <img
                        key={`m-${imgIndex}`}
                        src={img}
                        alt=""
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    ))}
                </div>

                <div className="pl-0 md:pl-12">
                  <h3 className="text-2xl flex gap-5 items-center font-alegreya italic font-semibold text-yellow-700/90 mb-2">
                    {value.title}
                    <div className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center ring-4 ring-white z-20">
                      <value.icon className="h-7 w-7 text-royal-gold" />
                    </div>
                  </h3>
                  <p
                    className={`text-gray-600 leading-relaxed whitespace-pre-line ${index == 2 ? "pr-[0px] md:pr-[120px]" : "pr-0 md:pr-20"
                      }`}
                  >
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Vertical Line for Timeline Effect (only desktop) */}
        <div className="absolute top-0 left-8 w-1 h-full bg-white/60 hidden md:block" />
      </div>
    </div>
  </section>
);

export default ValuesSection;
