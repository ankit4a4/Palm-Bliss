"use client";

import Slider from "react-slick";
import { motion } from "framer-motion";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "SK Yadav",
    rated: "5/5",
    title: "Yoga Enthusiast",
    image: "/Images/reviews/2.png",
    message:
      "It was a great experience in Palm Bliss resort with a peaceful environment, the staff was very cooperative, humble and helpful, the quality of food was very good, the rooms were very comfortable and clean, it is located in a lush green environment and there were so many things to do like tracking, cycling and game activities.overall it was a great experience to stay at palm bliss resort.",
  },
  {
    name: "Aman Bhatt",
    title: "Wellness Blogger",
    rated: "5/5",
    image: "/Images/reviews/3.png",
    message:
      "The place was good, entire property was covered with nature. It`s for completely family and friends group resort for stay vacation in the beauty of hills. Food and service was also good.",
  },
  {
    name: "Rohan Singh",
    rated: "4/5",
    title: "Corporate Trainer",
    image: "/Images/reviews/4.png",
    message: `Very beautiful place
Cozy and warm experience
Delicious Food
Good service
Love it very much
Nice ambience❤️`,
  },
  {
    rated: "5/5",
    name: "Shweta Verma",
    title: "Travel Influencer",
    image: "/Images/reviews/5.png",
    message:
      "Very cozy and warm hospitality, delicious food, middle of jungle and Relaxing spa facilities",
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-10 md:py-[10vh] bg-white">
      <div className="w-[90vw] max-w-[120vw] mx-auto px-[2vw]">
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-[6vh]"
        >
          <h2 className="text-[6vw] md:text-[3vw] font-playfair font-bold text-yellow-700/90 mb-[1.5vh]">
            What People <span className="">Say</span>
          </h2>
          <p className="text-[3.5vw] md:text-[1.3vw] text-gray-700 max-w-[80vw] md:max-w-[50vw] mx-auto">
            Hear from our valued guests who have experienced peace, beauty, and
            rejuvenation
          </p>
        </motion.div>

        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="px-[2vw] h-full"
            >
              <div className="bg-white rounded-[2vw] p-[4vw] md:p-[2vw] shadow-lg h-[450px] md:h-[350px] flex flex-col">
                <div className="flex items-center gap-[2vw] mb-[2vh] flex-shrink-0">
                  <div className="w-[10vw] h-[10vw] md:w-[3vw] md:h-[3vw] rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-[4vw] md:text-[1.2vw] h-max font-semibold text-black">
                      {t.name}
                    </h4>
                    <p className="text-[3vw] md:text-[0.9vw] text-gray-500">
                      {t.rated}
                    </p>
                  </div>
                </div>
                <div className="flex-grow overflow-hidden">
                  <p className="text-gray-700 text-[3.5vw] md:text-[1.1vw] leading-relaxed h-full">
                    {t.message}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
