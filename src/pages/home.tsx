import React from "react";

import HeroStats from "../components/heroStats/HeroStats";
import Features from "../components/features/Features";
import Advantages from "../components/advantages/Advantages";
import Navbar from "../components/navbar/Navbar";
import Customizable from "../components/customizable/Customizable";
import Faq from "../components/faq/Faq";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroStats />
      <Features />
      <Advantages />
      <Customizable />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
