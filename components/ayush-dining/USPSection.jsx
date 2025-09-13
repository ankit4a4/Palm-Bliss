"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiPlantFill, RiCalendarTodoFill } from "react-icons/ri";
import { LuCookingPot } from "react-icons/lu";
export default function USPSection() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-back',
            offset: 120
        });
    }, []);

    const usps = [
        {
            icon: RiPlantFill,
            title: "Natural food",
            desc: "Every ingredient is handpicked from our certified natural permaculture gardens. We use zero chemical fertilizers or pesticides, ensuring pure nutrition and environmental sustainability in every bite.",
            hoverEffect: "hover:shadow-organic",
            iconColor: "text-[#4CAF50]",
            bgColor: "bg-[#E8F5E9]"
        },
        {
            icon: RiCalendarTodoFill,
            title: "Seasonal Menus",
            desc: "Our chefs craft weekly changing menus based on peak harvest seasons. This ensures maximum nutritional value and flavor while supporting local ecosystems and reducing food miles.",
            hoverEffect: "hover:shadow-seasonal",
            iconColor: "text-[#FF9800]",
            bgColor: "bg-[#FFF3E0]"
        },
        {
            icon: LuCookingPot,
            title: "Healing Foods",
            desc: "Specially formulated meals combining Ayurvedic wisdom and modern nutrition science. Each dish supports detoxification, gut health and cellular regeneration using therapeutic ingredients.",
            hoverEffect: "hover:shadow-healing",
            iconColor: "text-[#F44336]",
            bgColor: "bg-[#FFEBEE]"
        },
    ];

    return (
        <section className="bg-gradient-to-b from-[#A67A35] to-[#8E6C34] py-24 px-4 sm:px-6 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-[#fbf7f0]"
                        style={{
                            width: `${Math.random() * 10 + 5}px`,
                            height: `${Math.random() * 10 + 5}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <h2
                    className="text-4xl md:text-5xl font-alegreya  italic font-bold text-[#f3e9cb] mb-6"
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    Our Core <span className="text-[#f3e9cb]/90">Wellness Principles</span>
                </h2>
                <div
                    className="w-24 h-1.5 mx-auto bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
                    data-aos="fade-down"
                    data-aos-delay="200"
                />

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {usps.map(({ icon: Icon, title, desc, hoverEffect, iconColor, bgColor }, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in"
                            data-aos-delay={300 + index * 100}
                            className={`group relative bg-[#fbf7f0] rounded-2xl p-8 border-2 border-transparent transition-all duration-500 hover:border-[#A67A35] hover:-translate-y-3 ${hoverEffect}`}
                        >
                            {/* Floating icon background */}
                            <div className={`absolute -top-8 left-1/2 -translate-x-1/2 h-16 w-16 rounded-full ${bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md`} />

                            <div className="flex justify-center mb-6 relative z-10">
                                <div className={`h-16 w-16 flex items-center justify-center rounded-full ${bgColor} transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}>
                                    <Icon className={`text-3xl ${iconColor} transition-transform duration-500 group-hover:scale-125`} />
                                </div>
                            </div>
                            <h4 className="text-2xl font-alegreya  italic font-extrabold text-gray-800 mb-4 transition-colors duration-300 group-hover:text-[#A67A35]">
                                {title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                                {desc}
                            </p>
                            <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-[#A67A35] to-[#8E6C34] transition-all duration-500 group-hover:w-full mx-auto" />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                @keyframes float {
                    0% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                    100% { transform: translateY(0) rotate(0deg); }
                }
                
                .hover\:shadow-organic:hover {
                    box-shadow: 0 20px 40px -10px rgba(76, 175, 80, 0.4);
                }
                .hover\:shadow-seasonal:hover {
                    box-shadow: 0 20px 40px -10px rgba(255, 152, 0, 0.4);
                }
                .hover\:shadow-healing:hover {
                    box-shadow: 0 20px 40px -10px rgba(244, 67, 54, 0.4);
                }
                
                /* Glow effect on hover */
                .hover\:shadow-organic:hover .icon-wrapper {
                    box-shadow: 0 0 15px rgba(76, 175, 80, 0.6);
                }
                .hover\:shadow-seasonal:hover .icon-wrapper {
                    box-shadow: 0 0 15px rgba(255, 152, 0, 0.6);
                }
                .hover\:shadow-healing:hover .icon-wrapper {
                    box-shadow: 0 0 15px rgba(244, 67, 54, 0.6);
                }
            `}</style>
        </section>
    );
}