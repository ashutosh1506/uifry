import React from "react";
import "./CustomizableSection.css";
import iphoneImage from "../../../assets/FeaturesImage.png";
import star1 from "../../../assets/star2.png";
import { customizableSectionLabels } from "../../../utils/constant";
const Customizable: React.FC = () => {
  return (
    <div className="customizable-container">
      <div className="image-container">
        <img
          src={iphoneImage}
          alt="iPhone"
          className="iphone-image first-iphone"
        />
      </div>
      <div className="text-container">
        <div className="title-container">
          <div className="icon-Customizable">
            <span className="icon-circle">
              <img src={star1} alt="star" />
            </span>
          </div>
          <h2>Fully Customizable</h2>
        </div>
        <p>{customizableSectionLabels.description}</p>
      </div>
    </div>
  );
};

export default Customizable;
