'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, Award, Users, Sparkles } from 'lucide-react';
import StorySection from '@/components/about/StorySection';
import ValuesSection from '@/components/about/ValuesSection';
import AwardsSection from '@/components/about/AwardsSection';
import HeroSection from '@/components/home/HeroSection';
import FounderVisions from "@/components/FounderVisions"

export default function About() {
const foundersData = [
  {
    name: 'Dr. Mira Chen',
    image: '/images/founder-mira.jpg', 
    vision: `Ayurveda is a return to balance.\nMy dream was to craft a sanctuary where every guest's journey is guided by ancient wisdom and heartfelt care.`
  },
  {
    name: 'Rajeev Singh',
    image: '/images/founder-rajeev.jpg',
    vision: `Healing is not just about the body, but the soul.\nAt our retreat, we embrace every path, honoring tradition while welcoming innovation.`
  }
];
  return (
    <>
      <HeroSection
        welcomeHeading="Our Legacy"
        showHeading="false"
      />
      <StorySection />
      <FounderVisions/>
      <ValuesSection />
      {/* <AwardsSection /> */}
    </>
  );
}