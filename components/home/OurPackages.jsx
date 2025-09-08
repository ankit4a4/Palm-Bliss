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

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    <div className="w-full py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-amber-900 relative inline-block">
            Our Packages
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-amber-700/90 rounded-full"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated wellness programs designed to rejuvenate your body, mind and spirit.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          loop={true}
          speed={800}
        >
          {packages.map((pkg) => (
            <SwiperSlide key={pkg.id}>
              <div className="group bg-[#fbf7f0] rounded-xl shadow-lg overflow-hidden text-center h-[300px] transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={pkg.img.src}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-5 flex flex-col flex-grow justify-center">
                  <h3 className="text-lg font-semibold text-amber-700/90">
                    {pkg.name}
                  </h3>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <div className="flex justify-center items-center mt-10 space-x-4">
          <div className="swiper-button-prev custom-swiper-button">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next custom-swiper-button">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Custom Swiper Styling */}
      <style jsx global>{`
        .swiper {
          padding: 20px 10px 40px;
        }

        .custom-swiper-button {
          position: relative;
          top: auto;
          left: auto;
          right: auto;
          margin-top: 0;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          color: rgba(120, 53, 15, 0.9);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .custom-swiper-button:hover {
          background: rgba(120, 53, 15, 0.9);
          color: white;
          transform: scale(1.05);
        }

        .custom-swiper-button::after {
          content: none;
        }

        .swiper-pagination {
          position: relative;
          bottom: auto;
          width: auto;
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(180, 83, 9, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: rgba(120, 53, 15, 0.9);
          transform: scale(1.2);
        }

        .swiper-slide {
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default OurPackages;
