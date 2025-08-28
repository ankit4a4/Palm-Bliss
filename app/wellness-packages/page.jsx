import React from 'react'
import HeroSection from '../../components/home/HeroSection'
import WellnessPackagesSection from '../..//components/wellness-packages/WellnessPackagesSection'
import WellnessFacilitiesSection from '../..//components/wellness-packages/WellnessFacilitiesSection'
const page = () => {
  return (
    <>
       <HeroSection
                welcomeHeading="Wellness Packages"
                showHeading="false"
            />
       <WellnessPackagesSection />
       <WellnessFacilitiesSection />
    </>
  )
}

export default page
