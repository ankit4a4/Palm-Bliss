import HeroSection from "@/components/home/HeroSection";
import ValuePropsSection from "@/components/ayush-dining/ValuePropsSection";
import USPSection from "@/components/ayush-dining/USPSection";
import AyushDiningSection from "@/components/ayush-dining/AyushDiningSection";
import AyushDishesShowcase  from "@/components/AyushDishesShowcase"

const page = () => {
  return (
    <>
      <HeroSection welcomeHeading="Ayush Dining" showHeading="false" />

      <AyushDiningSection />
      <AyushDishesShowcase />
      <ValuePropsSection />
      <USPSection />
    </>
  );
};

export default page;
