"use client";

import RoomsGrid from "@/components/rooms/RoomsGrid"
import RoomFeature from "@/components/rooms/RoomFeature";
import HeroSection from "@/components/home/HeroSection";
import HomeRooms from "@/components/home/HomeRooms"

export default function Rooms() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection showHeading="false" welcomeHeading="Accommodation" />

      {/* Rooms Grid */}
      <HomeRooms />

      {/* Features Section */}
      <RoomFeature />
    </div>
  );
}
