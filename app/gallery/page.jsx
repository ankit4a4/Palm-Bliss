import React from 'react'
import GallerySection from '@/components/Gallery/GallerySection'
import HeroSection from '@/components/home/HeroSection';
const page = () => {
    return (
        <>
            <HeroSection
                welcomeHeading="Gallery"
                showHeading="false"
            />
            <GallerySection />
        </>
    )
}

export default page
