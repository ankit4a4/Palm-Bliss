"use client";
import Image from "next/image";

export default function Facilities() {
    const items = [
        {
            img: "/Images/icon/ayush.jpg",
            title: "IN-HOUSE AYUSH STORE",
        },
        {
            img: "/Images/icon/booking.png",
            title: "ONLINE BOOKING FACILITY",
        },
        {
            img: "/Images/icon/pickdrop.png",
            title: "FREE PICK & DROP",
        },
        {
            img: "/Images/icon/doctor.jpg",
            title: "ON-CALL DOCTOR CONSULTATION",
        },
    ];

    return (
        <section className="py-12" style={{ backgroundColor: "#fffcee" }}>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center bg-[#fffcee] rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Icon Image */}
                        <div className="w-28 h-28 relative mb-4 ">
                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="rounded-lg"
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                        {/* Title */}
                        <h3 className="mt-2 text-base italic text-[#a67a35] sm:text-lg font-medium text-black uppercase">
                            {item.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
