"use client";
import Treatments from "@/components/wellness/Treatments";
import HeroSection from "@/components/home/HeroSection";
import Facilities from "@/components/wellness/Facilities";
import Packages from "@/components/wellness/Packages";
import AyushWellnessProgramSection from "@/components/wellness/AyushWellnessProgramSection";
import AyushWellnessSection from "@/components/wellness/AyushWellnessSection";

export default function Wellness() {
  return (
    <div>
      <HeroSection welcomeHeading="AYUSH WELLNESS" />
      <AyushWellnessProgramSection />
      <AyushWellnessSection />
      {/* <Treatments /> */}
      {/* <Packages /> */}
      {/* <Facilities /> */}
    </div>
  );
}
