import React from "react";
import "./HeroStatsSection.css";
import spiral from "../../../assets/Spiral.png";
import iphone1 from "../../../assets/iphone1.png";
import iphone2 from "../../../assets/iphone2.png";
import iphone3 from "../../../assets/iphone3.png";

const HeroStatsSection: React.FC = () => {
  return (
    <div className="container">
      <div className="text-section">
        <h1>Make The Best Financial Decisions</h1>
        <p>
          Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
          Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
        </p>
        <div className="buttons">
          <button className="get-started">Get Started</button>
          <button className="watch-video">Watch Video</button>
        </div>
      </div>
      <div className="image-section">
        <img src={spiral} alt="Spiral" className="spiral-image" />
        <div className="phones">
          <img src={iphone1} alt="iPhone 1" className="phone" />
          <img src={iphone2} alt="iPhone 2" className="phone" />
          <img src={iphone3} alt="iPhone 3" className="phone" />
        </div>
      </div>
    </div>
  );
};

export default HeroStatsSection;
