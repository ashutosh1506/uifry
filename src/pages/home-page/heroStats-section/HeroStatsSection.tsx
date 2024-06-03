import React from "react";
import "./HeroStatsSection.css";
import spiral from "../../../assets/Spiral.png";
import combinedImage from "../../../assets/CombinedIphoneImage.png"; // Single image for all three phones
import achievementImage from "../../../assets/tag.png"; // New image for the achievements section

const HeroStatsSection: React.FC = () => {
  return (
    <div className="container">
      <div className="content-wrapper">
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
          <div className="achievement-section">
            <img
              src={achievementImage}
              alt="Achievements"
              className="achievement-image"
            />
          </div>
        </div>
        <div className="image-section">
          <img src={spiral} alt="Spiral" className="spiral-image" />
          <img
            src={combinedImage}
            alt="Combined iPhone"
            className="phones-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroStatsSection;
