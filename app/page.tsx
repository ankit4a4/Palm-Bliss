"use client";

import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection ";
import HomeWellness from "@/components/home/HomeWellness";
import HomeNaturalPool from "@/components/home/HomeNaturalPool";
import Testimonials from "@/components/home/testimonials";
import FacilitiesGrid from "@/components/home/FacilitiesGrid";
import Footer from "@/components/Footer"
import OurPackages from "@/components/home/OurPackages"
import Facilities from "@/components/home/Facilities";
export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection showHeading="true" welcomeHeading="WELCOME" />
      <AboutSection />
      <HomeWellness />
      <Facilities />
      <OurPackages />
      <FacilitiesGrid />
      <HomeNaturalPool />
      <Testimonials />
      <Footer />
    </div>
  );
}
