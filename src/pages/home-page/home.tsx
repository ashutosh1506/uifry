import React from "react";
import Navbar from "../../components/navbar/Navbar";
import FeaturesSection from "./features-section/FeaturesSection";
import AdvantagesSection from "./advantages-section/AdvantagesSection";
import CustomizableSection from "./customizable-section/CustomizableSection";
import FaqSection from "./faq-section/FaqSection";
import Footer from "../../components/footer/Footer";
import HeroStatsSection from "./heroStats-section/HeroStatsSection";
import TestimonialSection from "./testimonials-section/TestimonialSection";
import FrameImage from "../../assets/BigFrame.png";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroStatsSection />
      <FeaturesSection />
      <AdvantagesSection />
      <CustomizableSection />
      <TestimonialSection />
      <FaqSection />
      <img className="FrameImageContainer" src={FrameImage} alt="Frame" />
      <Footer />
    </div>
  );
};

export default Home;
