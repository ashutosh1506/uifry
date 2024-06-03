import React from "react";
import Navbar from "../../components/navbar/Navbar";
import FeaturesSection from "./features-section/FeaturesSection";
import AdvantagesSection from "./advantages-section/AdvantagesSection";
import CustomizableSection from "./customizable-section/CustomizableSection";
import FaqSection from "./faq-setion/FaqSection";
import Footer from "../../components/footer/Footer";
import HeroStatsSection from "./heroStats-section/HeroStatsSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroStatsSection />
      <FeaturesSection />
      <AdvantagesSection />
      <CustomizableSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Home;
