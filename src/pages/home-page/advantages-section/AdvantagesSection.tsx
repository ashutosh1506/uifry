import React from "react";
import "./AdvantagesSection.css";
import bell from "../../../assets/bell-02.png";
import iphone1 from "../../../assets/CombinedImage.png";
import { advantagesSectionLabels } from "../../../utils/constant";

const AdvantagesSection = () => {
  return (
    <div className="advantages-container">
      <div className="advantages-text">
        <h2>ADVANTAGES</h2>
        <h1>Why Choose Uifry?</h1>
        <div className="advantages-item">
          <div className="icon-Advantages">
            <img src={bell} alt="Notification Icon" />
          </div>
          <div className="text">
            <h3>Clever Notifications</h3>
            <p>{advantagesSectionLabels.description}</p>
          </div>
        </div>
      </div>
      <div className="advantages-image">
        <img src={iphone1} alt="iPhone" />
      </div>
    </div>
  );
};

export default AdvantagesSection;
