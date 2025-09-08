"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaHeart, FaSun } from "react-icons/fa";
import { GiMeditation, GiLotus, GiBowlOfRice } from "react-icons/gi";
import { MdSpa, MdNaturePeople } from "react-icons/md";

export default function AyushWellnessProgramSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-yellow-50/50 overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-yellow-700/90 font-alegreya  italic text-4xl lg:text-6xl font-bold leading-tight mb-4">
            Ayush Wellness Program
          </h1>
          <h2 className="text-yellow-600 font-alegreya  italic text-2xl lg:text-3xl font-alegreya italic  mb-8">
            A Journey Into Balance, Born From The Roots Of Nature
          </h2>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          
          {/* Introduction */}
          <div className="bg-[#fbf7f0]/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-lg border border-white/50">
            <p className="text-black text-lg lg:text-xl leading-relaxed mb-6">
              At Palm Bliss Resort & Atharva Ayurveda Wellness Retreat, the AYUSH Wellness Program is more than a retreat — it's a soulful reset, guided by India's timeless healing sciences:
              Ayurveda, Yoga, Unani, Siddha and Homeopathy.
            </p>
            
            <p className="text-black text-lg lg:text-xl leading-relaxed">
              Cradled in the serene lap of the Shivalik and Lesser Himalayan ranges, this immersive program reconnects you to your true essence — in stillness, in strength, in silence.
            </p>
          </div>

          {/* What Awaits You Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-yellow-600 font-alegreya  italic text-3xl lg:text-4xl font-semibold text-center mb-10">
             What Awaits You:
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Feature Item 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-[#fbf7f0]/60 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/40"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <MdSpa className="w-6 h-6 text-yellow-700" />
                  </div>
                  <div>
                    <h4 className="text-yellow-600 font-alegreya  italic font-semibold text-lg mb-2">
                       Personal Wellness Consultations
                    </h4>
                    <p className="text-black leading-relaxed mb-3">
                      Discover your inner balance through Ayurvedic diagnosis and ancient pulse reading
                    </p>
                    <p className="text-black/80 text-sm leading-relaxed mb-3">
                      Our experienced Ayurvedic practitioners will assess your unique dosha constitution and create a personalized healing plan that addresses your specific physical, mental and emotional needs through traditional diagnostic methods passed down through generations.
                    </p>
                    <p className="text-black/75 text-sm leading-relaxed mb-2">
                      Each consultation includes a comprehensive lifestyle analysis, dietary recommendations based on your constitutional type and guidance on daily routines (dinacharya) that align with natural rhythms.
                    </p>
                    {/* <p className="text-black/70 text-xs leading-relaxed">
                      Duration: 60-90 minutes per session | Follow-up consultations available throughout your stay
                    </p> */}
                  </div>
                </div>
              </motion.div>

              {/* Feature Item 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-[#fbf7f0]/60 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/40"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <GiMeditation className="w-6 h-6 text-yellow-700" />
                  </div>
                  <div>
                    <h4 className="text-yellow-600 font-alegreya  italic font-semibold text-lg mb-2">
                       Daily Yoga & Meditation
                    </h4>
                    <p className="text-black leading-relaxed mb-3">
                      Awaken your prana (life force) with sunrise yoga and sunset stillness
                    </p>
                    <p className="text-black/80 text-sm leading-relaxed mb-3">
                      Begin each day with gentle asanas overlooking the mountain peaks, followed by pranayama breathing exercises. Evening meditation sessions in our serene garden sanctuary help you find inner peace and mental clarity.
                    </p>
                    <p className="text-black/75 text-sm leading-relaxed mb-2">
                      Practice includes Hatha Yoga, Vinyasa flow, restorative poses and specialized breathing techniques like Anulom Vilom and Bhramari. All levels welcome with modifications provided by certified instructors.
                    </p>
                    {/* <p className="text-black/70 text-xs leading-relaxed">
                      Schedule: Morning sessions 6:30-8:00 AM | Evening meditation 7:00-8:00 PM
                    </p> */}
                  </div>
                </div>
              </motion.div>

              {/* Feature Item 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-[#fbf7f0]/60 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/40"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <GiLotus className="w-6 h-6 text-yellow-700" />
                  </div>
                  <div>
                    <h4 className="text-yellow-600 font-alegreya  italic font-semibold text-lg mb-2">
                       Detox Rituals & Panchakarma
                    </h4>
                    <p className="text-black leading-relaxed mb-3">
                      Cleanse your body and mind with traditional therapies guided by Vaidyas
                    </p>
                    <p className="text-black/80 text-sm leading-relaxed mb-3">
                      Experience the profound cleansing power of authentic Panchakarma treatments including Abhyanga oil massages, Shirodhara and herbal steam therapies that eliminate toxins and restore your natural vitality under expert guidance.
                    </p>
                    <p className="text-black/75 text-sm leading-relaxed mb-2">
                      Specialized treatments include Nasya (nasal cleansing), Basti (medicated enemas), Virechana (therapeutic purgation) and Raktamokshana (blood purification) - all customized to your individual needs and health goals.
                    </p>
                    {/* <p className="text-black/70 text-xs leading-relaxed">
                      Program duration: 7-21 days | Pre-treatment preparation required | Post-treatment care included
                    </p> */}
                  </div>
                </div>
              </motion.div>

              {/* Feature Item 4 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-[#fbf7f0]/60 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/40"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <GiBowlOfRice className="w-6 h-6 text-yellow-700" />
                  </div>
                  <div>
                    <h4 className="text-yellow-600 font-alegreya  italic font-semibold text-lg mb-2">
                       Ayush Dining
                    </h4>
                    <p className="text-black leading-relaxed mb-3">
                      Experience sattvic food that heals from within, served with love and mountain air
                    </p>
                    <p className="text-black/80 text-sm leading-relaxed mb-3">
                      Nourish your body with carefully prepared meals using natural, locally sourced ingredients that balance your doshas. Each dish is mindfully crafted according to Ayurvedic principles to support your healing journey and enhance digestive fire.
                    </p>
                    <p className="text-black/75 text-sm leading-relaxed mb-2">
                      Our kitchen follows traditional cooking methods using copper vessels, wood-fired stoves and seasonal ingredients. Meals include healing spices like turmeric, ginger and cumin, with options for various dietary restrictions and detox protocols.
                    </p>
                    {/* <p className="text-black/70 text-xs leading-relaxed">
                      Meal times: Breakfast 7:30-9:00 AM | Lunch 12:30-2:00 PM | Light dinner 6:30-8:00 PM
                    </p> */}
                  </div>
                </div>
              </motion.div>

              {/* Feature Item 5 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-[#fbf7f0]/60 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/40"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <FaLeaf className="w-6 h-6 text-yellow-700" />
                  </div>
                  <div>
                    <h4 className="text-yellow-600 font-alegreya  italic font-semibold text-lg mb-2">
                       Herbal Remedies & Healing Therapies
                    </h4>
                    <p className="text-black leading-relaxed mb-3">
                      Rooted in nature, aligned with your needs
                    </p>
                    <p className="text-black/80 text-sm leading-relaxed mb-3">
                      Discover the healing power of medicinal plants cultivated in our organic herb garden. Receive customized herbal formulations and natural remedies prepared fresh by our in-house herbalists to support your specific wellness goals.
                    </p>
                    <p className="text-black/75 text-sm leading-relaxed mb-2">
                      Our pharmacy includes over 200 medicinal herbs like Ashwagandha, Brahmi, Triphala and Guduchi. Treatments encompass herbal teas, kashayams (decoctions), ghrita preparations and external applications like lepas and ubtans.
                    </p>
                    {/* <p className="text-black/70 text-xs leading-relaxed">
                      Garden tours available | Herb preparation workshops | Take-home remedy packages
                    </p> */}
                  </div>
                </div>
              </motion.div>

              {/* Feature Item 6 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-[#fbf7f0]/60 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/40"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <MdNaturePeople className="w-6 h-6 text-yellow-700" />
                  </div>
                  <div>
                    <h4 className="text-yellow-600 font-alegreya  italic font-semibold text-lg mb-2">
                       Forest Walks, Mud Therapy, Sound Healing
                    </h4>
                    <p className="text-black leading-relaxed mb-3">
                      A curated blend of traditional and natural treatments
                    </p>
                    <p className="text-black/80 text-sm leading-relaxed mb-3">
                      Connect with nature through guided forest bathing sessions, therapeutic mud wraps using mineral-rich earth and transformative sound healing with singing bowls and traditional instruments that restore harmony to body and soul.
                    </p>
                    <p className="text-black/75 text-sm leading-relaxed mb-2">
                      Forest therapy includes mindful walking meditation, tree communication exercises and grounding practices. Mud therapy utilizes mineral-rich clay for detoxification, while sound baths feature Tibetan bowls, crystal bowls and ancient mantras.
                    </p>
                    {/* <p className="text-black/70 text-xs leading-relaxed">
                      Daily nature walks | Bi-weekly mud therapy sessions | Sound healing every evening
                    </p> */}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Inspirational Quote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-[#fbf7f0]/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-lg border border-white/60 text-center"
          >
            <p className="text-black text-lg lg:text-xl leading-relaxed font-alegreya italic mb-8">
              Here, time slows down, breath deepens and nature speaks — gently guiding you back to yourself.
            </p>
            
            <div className="border-t border-yellow-200 pt-8">
              <h4 className="text-yellow-600 text-2xl font-alegreya  italic lg:text-3xl font-semibold mb-4">
                Let The Ayush Wellness Program Be Your Sacred Pause.
              </h4>
              <p className="text-black/70 text-lg lg:text-xl leading-relaxed">
                A time to breathe. A space to heal. A path to wholeness.
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center"
          >
            <button className="px-10 py-4 bg-yellow-700/90 text-white rounded-2xl hover:bg-yellow-700 transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold text-lg">
              Begin Your Ayush Journey
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
