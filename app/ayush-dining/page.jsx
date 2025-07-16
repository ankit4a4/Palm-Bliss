import HeroSection from '@/components/home/HeroSection';
import ValuePropsSection from '@/components/ayush-dining/ValuePropsSection';
import USPSection from '@/components/ayush-dining/USPSection';

const page = () => {
    return (
        <>
            <HeroSection
                welcomeHeading="Ayush Dining"
                showHeading="false"
            />
            <ValuePropsSection />
            <USPSection />
        </>
    )
}

export default page
