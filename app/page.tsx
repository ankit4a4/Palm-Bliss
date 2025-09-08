"use client";

import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection ";
import HomeRooms from "@/components/home/HomeRooms"
import HomeYoga from "@/components/home/HomeYoga";
import HomeWellness from "@/components/home/HomeWellness";
import HomeNaturalPool from "@/components/home/HomeNaturalPool";
import HomeGallery from "@/components/home/HomeGallery";
import Testimonials from "@/components/home/testimonials";
import FacilitiesGrid from "@/components/home/FacilitiesGrid";
import  Footer from "@/components/Footer"
import OurPackages from "@/components/home/OurPackages"
export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection showHeading="true" welcomeHeading="WELCOME" />
      <AboutSection />
      <HomeWellness />

    <OurPackages />
      {/* aur pagecages add karne hai yaha pe  */}
      {/* <HomeYoga /> */}
      <FacilitiesGrid />
      <HomeNaturalPool />
      <Testimonials />
      <Footer/>
      {/* <ViewsSection /> */}
      {/* <CuisineSection /> */}
      {/* <FacilitiesSection /> */}
    </div>
  );
}
