"use client";

import Image from "next/image";
import poolImage from "@/public/Images/AllPhotos/pool.webp";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HomeNaturalPool() {
  const router = useRouter();

  return (
    <section className="py-12 md:py-20 bg-[#FBF7F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl capitalize font-bold font-playfair text-yellow-700/90 mb-6">
            Refresh by the <span>Pool</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            At The Palm Bliss, our cosy jungle-fringed pools invite both
            children and adults to unwind amidst nature’s embrace. Surrounded by
            whispering trees and the songs of birds, these pools offer a
            refreshing dip under dappled sunlight, a playful splash for little
            ones, or a quiet moment to soak in the wild serenity around you.
            Here, every swim becomes a gentle communion with nature.
          </p>
          <Button
            onClick={() => router.push("/natural-pool")}
            className="bg-yellow-700/90 text-white hover:bg-yellow-600 px-6 py-3 text-base md:text-lg"
          >
            Book Now
          </Button>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={poolImage}
            alt="Palm Bliss Pool"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
