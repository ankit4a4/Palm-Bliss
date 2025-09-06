"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  FaSpa,
  FaSeedling,
  FaBrain,
  FaLeaf,
  FaFire,
  FaPrayingHands,
  FaRegSmileBeam,
  FaFeatherAlt,
  FaRegLightbulb,
  FaYinYang,
  FaHotTub,
  FaTint,
  FaLungs,
  FaHandsHelping,
  FaBalanceScale,
} from "react-icons/fa";
import { PiFlowerLotus } from "react-icons/pi";
import { GiLotusFlower, GiMeditation } from "react-icons/gi";

import { MdOutlineSelfImprovement } from "react-icons/md";

export default function HomeWellness() {
  const router = useRouter();
  return (
    <section className="md:py-[10vh] py-10 bg-[#A67A35]">
      <div className="mx-auto lg:px-6 md:px-[8vw]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-[10vh]"
        >
          <h2 className="text-[6vw] md:text-[2.8vw] capitalize font-playfair font-semibold text-white leading-tight">
            Discover The <span className="text-white">healing power </span> of
            wellness
          </h2>
          <p className="text-[2.3vh] md:text-[1.1vw] text-gray-200 mx-auto mt-4 font-medium">
            Immerse yourself in an oasis of serenity. Our wellness offerings
            combine ancient healing techniques with modern comfort to deliver a
            truly revitalizing experience.
          </p>
        </motion.div>

        <div className="space-y-[6vh]">
          {[1, 2, 3].map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                } items-center gap-10 bg-white shadow-xl rounded-3xl overflow-hidden p-6 md:p-12`}
            >
              <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-md">
                {index === 2 ? (
                  // Three images grid for the last section
                  <div className="space-y-4">
                    {/* Main large image */}
                    <div className="w-full">
                      <Image
                        src="https://images.pexels.com/photos/3985254/pexels-photo-3985254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Body Mind soulRejuvenation"
                        width={800}
                        height={400}
                        className="object-cover bg-center w-full h-[20vh] md:h-[50vh] rounded-xl"
                      />
                    </div>

                    {/* Two smaller images in a grid */}
                    <div className="grid grid-cols-1 gap-4">
                      <Image
                        src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Wellness Treatment 1"
                        width={400}
                        height={300}
                        className="object-cover bg-center w-full h-[15vh] md:h-[50vh] rounded-xl"
                      />
                      <Image
                        src="https://images.pexels.com/photos/3985263/pexels-photo-3985263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Wellness Treatment 2"
                        width={400}
                        height={300}
                        className="object-cover bg-center w-full h-[15vh] md:h-[50vh] rounded-xl"
                      />
                    </div>
                  </div>
                ) : (
                  // Single image for other sections
                  <Image
                    src={
                      index === 0
                        ? "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        : "https://images.pexels.com/photos/3985263/pexels-photo-3985263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    }
                    alt="Wellness Treatment"
                    width={800}
                    height={500}
                    className="object-cover bg-center w-full h-[25vh] md:h-[45vh] rounded-xl"
                  />
                )}
              </div>




              <div className="w-full md:w-1/2">
                <h3 className="text-[4.8vw]  md:text-[2.2vw] italic  font-playfair font-[800] text-yellow-700/90 mb-4 flex items-center gap-2">
                  {index === 0 ? (
                    <>
                      <FaSpa className="text-[#A67A35] mb-1 w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />
                      Signature Ayurvedic Rituals
                    </>
                  ) : index === 1 ? (
                    <>
                      <FaSeedling className="text-[#A67A35] mb-1 w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />
                      Ancient Healing Therapies
                    </>
                  ) : (
                    <>
                      <PiFlowerLotus className="text-[#A67A35] mb-1 w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />
                      Body, Mind & Soul Rejuvenation
                    </>
                  )}
                </h3>
                <p className="text-[2vh] md:text-[1.05vw] text-[#5c5344] leading-relaxed mb-4 font-medium whitespace-pre-line">
                  {index === 0 ? (
                    <><h2 className="text-yellow-900/90 text-lg my-3">Ancient Healing for the Modern Soul</h2>

                      <p>Step into a sanctuary where time-honored Ayurvedic wisdom meets contemporary wellness. Our Signature Ayurvedic Rituals are more than treatments — they are soulful experiences designed to restore balance, energize the body and soothe the spirit.</p>

                      <p>   Rooted in centuries-old practices, each ritual is thoughtfully customized to your unique dosha (body constitution) and guided by our seasoned Ayurvedic practitioners. Using pure, natural ingredients, therapeutic oils and traditional techniques, these rituals invoke deep healing from within.</p>

                      <p> Each journey begins with a personalized consultation to understand your body's needs, followed by rituals crafted using traditional methods and plant-based remedies that honor the authentic soul of Ayurveda.
                      </p>
                      <h2 className="text-yellow-900/90 text-lg my-3"> Reconnect. Rebalance. Rejuvenate.</h2>

                      Let our Signature Ayurvedic Rituals guide you back to your natural state of wellness — where ancient traditions meet modern serenity.</>
                  ) : index === 1 ? (
                    `
At Palm Bliss Resort and Atharva Ayurveda Wellness Retreat, we don’t offer therapies — we offer sacred healing journeys. Rooted in the divine knowledge of Ayurveda, our Ancient Healing Therapies are time-honored rituals of purification, renewal, and inner awakening — meticulously preserved and passed down through generations of Ayurvedic masters.

These are not fleeting indulgences, but soul-touching experiences that realign your energies, detoxify the body and elevate the spirit. Each ritual is artfully tailored to your unique prakriti (constitutional blueprint), harmonizing your doshas and restoring your connection with the five elements — earth, water, fire, air and ether.

In the calm silence of the Shivalik foothills, where prana (life force) pulses through the air and nature whispers in every breeze these therapies become transformational ceremonies, guiding you gently back to your original balanced self.`
                  ) : (
                    <>
                      A Journey Back to Wholeness at The Palm Bliss Resort &
                      Atharva Ayurveda Wellness Retreat Step into a sacred space
                      where ancient Ayurvedic wisdom meets nature’s serenity.
                      Here, healing is not just a treatment — it is a gentle
                      unfolding, a return to your most authentic, vibrant self.
                      Our Signature Rejuvenation Rituals are crafted to realign
                      the body, calm the mind, and reawaken the soul — creating
                      a harmonious balance that radiates from within.
                      <div className="mt-4 mb-3">
                        <div className="flex items-center gap-2 text-yellow-700/90 italic  text-[18px]">
                          <FaLeaf className="text-[#A67A35]   w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />{" "}
                          Body Renewal
                        </div>
                      </div>
                      Ground yourself in physical harmony. Through touch, herbal
                      medicine, and rhythmic flow, our body therapies release
                      what no longer serves you.
                      <div className="mt-2 mb-2 flex flex-col gap-1">
                        <div className="">
                          {/* <MdOutlineSelfImprovement className="text-[#A67A35] w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" /> */}
                          <div className="flex items-center gap-2 text-yellow-700/90 italic  my-4 text-[18px]">
                            <GiLotusFlower className="text-[#A67A35]   w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                            Abhyanga
                          </div>
                          A full-body synchronized
                          oil massage to detoxify, nourish, and energize.
                        </div>
                        <div className="">
                          {/* <FaFeatherAlt className="text-[#A67A35] w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" /> */}
                          <div className="flex items-center gap-2 my-4 text-yellow-700/90 italic  text-[18px]">
                            <FaLeaf className="text-[#A67A35]   w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                            Udwarthanam
                          </div>
                          A dry herbal
                          exfoliation that stimulates metabolism and tones the
                          skin.
                        </div>
                        <div className="">
                          {/* <FaPrayingHands className="text-[#A67A35] w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" /> */}
                          <div className="flex items-center gap-2 my-4 text-yellow-700/90 italic  text-[18px]">
                            <FaHotTub className="text-[#A67A35]   w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                            Pinda Sweda
                          </div>
                          Warm herbal poultices
                          applied to relieve joint pain, muscular stiffness, and
                          fatigue.
                        </div>
                      </div>
                      Let your body feel light, open, and deeply nourished.
                      <div className="mt-4 mb-3">
                        <div className="flex items-center gap-2  text-yellow-700/90 italic  text-[18px]">
                          <FaBrain className="text-[#A67A35] w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />{" "}
                          Mind Clarity
                        </div>
                      </div>
                      Settle the mind, awaken inner stillness. Calm the nervous
                      system and lift the fog of stress with rituals that speak
                      directly to your mind’s center.
                      <div className="mt-2 mb-2 flex flex-col gap-1">
                        <div className="">
                          <div className="flex items-center gap-2 my-4 text-yellow-700/90 italic  text-[18px]">
                            <FaTint className="text-[#A67A35]   w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                            Shirodhara
                          </div>
                          {/* <FaRegLightbulb className="text-[#A67A35] w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" /> */}

                          A gentle stream of
                          medicated oil over the third eye to ease anxiety and
                          restore clarity.
                        </div>
                        <div className="">
                          {/* <FaRegSmileBeam className="text-[#A67A35] w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" /> */}
                          <div className="flex items-center gap-2 my-4 text-yellow-700/90 italic  text-[18px]">
                            <FaLungs className="text-[#A67A35]   w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                            Nasya Karma
                          </div>
                          Purification of the
                          nasal passages to awaken the senses and relieve
                          emotional congestion.
                        </div>
                      </div>
                      A gentle reset for your thoughts, your focus, and your
                      emotional peace.
                      <div className="mt-4 mb-3">
                        <div className="flex items-center gap-2 text-yellow-700/90  italic  text-[18px]">
                          <GiMeditation className="text-[#A67A35] w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 italic  text-[18px]" />{" "}
                          Soul Nourishment
                        </div>
                      </div>
                      Reconnect with your essence. In sacred silence, subtle
                      rituals invite spiritual alignment and inner joy.
                      <div className="mt-2 mb-2 flex flex-col gap-1">
                        <div className="">
                          {/* <FaYinYang className="text-[#A67A35] w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" /> */}
                          <div className="flex items-center my-4 gap-2 text-yellow-700/90 italic  text-[18px]">
                            <FaHandsHelping className="text-[#A67A35]   w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                            Marma Chikitsa
                          </div>
                          Activation of vital
                          energy points to unlock deep healing and restore
                          pranic flow.
                        </div>
                        <div className="">
                          {/* <FaLeaf className="text-[#A67A35] w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" /> */}

                          <div className="flex items-center my-4 gap-2 text-yellow-700/90 italic  text-[18px]">
                            Breathwork & Aromatherapy
                          </div>
                          Guided
                          breathing paired with healing scents to ground and
                          uplift the spirit.
                        </div>
                      </div>
                      Feel joy rise, purpose return, and your soul realign with
                      serenity.
                      <div className="flex items-center my-4 gap-2 text-yellow-700/90 italic  text-[18px]">
                        <FaBalanceScale className="text-[#A67A35] w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 font-tangerine  text-[18px]" />{" "}
                        Personalized for Your Inner Balance
                      </div>
                      Every journey begins with a one-on-one Ayurvedic
                      consultation, where your dosha (constitution) and
                      elemental imbalances are assessed. Your treatments are
                      then carefully tailored using pure, organic, and ethically
                      sourced ingredients, prepared according to ancient
                      Ayurvedic texts and seasonal rhythms.
                      <div className="flex items-center gap-2 text-yellow-700/90 italic my-4  text-[18px]">
                        <PiFlowerLotus className="text-[#A67A35] w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 font-tangerine  text-[18px]" />
                        This is not just therapy — it’s your sacred return.
                      </div>
                      Let go of the noise. Breathe in stillness. Heal
                      completely.
                    </>
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-[8vh]"
        >
          <Button
            onClick={() => router.push("/wellness")}
            className="bg-[#3c2f23] hover:bg-[#2c241b] text-white text-[2.1vh] md:text-[1.2vw] font-medium px-8 py-3 md:px-[3vw] md:py-[1.2vw] rounded-full transition duration-200"
          >
            Explore Wellness
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
