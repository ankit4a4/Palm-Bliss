"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "@/public/Images/new Images/package1.jpg";
import img2 from "@/public/Images/new Images/package2.jpg";
import img3 from "@/public/Images/new Images/package3.jpg";
import img4 from "@/public/Images/new Images/package4.jpg";
import img5 from "@/public/Images/new Images/package5.jpg";
import img6 from "@/public/Images/new Images/package6.jpg";
import img7 from "@/public/Images/new Images/package7.jpg";
import img8 from "@/public/Images/new Images/package8.jpg";
import img9 from "@/public/Images/new Images/package9.jpg";
import img10 from "@/public/Images/new Images/package10.jpg";
import img11 from "@/public/Images/new Images/11.jpg";
import img12 from "@/public/Images/new Images/package12.jpg";
import img13 from "@/public/Images/new Images/package13.jpg";
import img14 from "@/public/Images/new Images/package14.jpg";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const OurPackages = () => {
  const packages = [
    { id: 1, name: "Diabetic Ayush Program", img: img1 },
    { id: 2, name: "Holistic Detox Program", img: img2 },
    { id: 3, name: "One-Day Ayurvedic And Panchakarma Wellness Program", img: img3 },
    { id: 4, name: "Pain Management Program", img: img4 },
    { id: 5, name: "Panchakarma Cleanse Program", img: img5 },
    { id: 6, name: "Skin Rejuvation Prog", img: img6 },
    { id: 7, name: "Sleep Management Program", img: img7 },
    { id: 8, name: "Spa And Facial Packages", img: img8 },
    { id: 9, name: "Stress Management Program", img: img9 },
    { id: 10, name: "Weight Management Program", img: img10 },
    { id: 11, name: "Yogic Detox Program", img: img11 },
    { id: 12, name: "Diabetic Ayush Program", img: img12 },
    { id: 13, name: "Holistic Detox Program", img: img13 },
    { id: 14, name: "One-Day Ayurvedic And Panchakarma Wellness Program", img: img14 },
  ];

  return (
    <div className="w-full py-10 "> 
      <div className="container mx-auto px-4 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-8 italic text-yellow-700/90">
          Our Packages
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {packages.map((pkg) => (
            <SwiperSlide key={pkg.id}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden text-center hover:shadow-lg transition flex flex-col h-[320px]">
                <img
                  src={pkg.img.src}
                  alt={pkg.name}
                  className="w-full h-48 object-cover"
                />
                <div className="flex-grow flex items-end justify-center p-4">
                  <h3 className="text-lg font-semibold italic text-yellow-700/90">
                    {pkg.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Swiper Styling */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: rgba(113, 63, 18, 0.9); /* yellow-900/90 */
        }
        .swiper-pagination-bullet {
          background: rgba(113, 63, 18, 0.4); /* light yellow */
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: rgba(113, 63, 18, 0.9); /* active bullet dark */
        }
      `}</style>
    </div>
  );
};

export default OurPackages;
