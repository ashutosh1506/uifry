import React from "react";
import "./FeaturesSection.css";
import CombinedImage from "../../../assets/FeaturesImage.png"; // Update this path to where your combined image (iPhone + spiral) is located
import star1 from "../../../assets/star-05.png";
import cube1 from "../../../assets/cube-02.png";
import cube2 from "../../../assets/cube-04.png";
import { featuresSectionLabels } from "../../../utils/constant";

const FeaturesSection: React.FC = () => {
  return (
    <div className="features-container">
      <div className="image-container">
        <img
          src={CombinedImage}
          alt="Combined iPhone and Spiral"
          className="combined-image"
        />
      </div>
      <div className="text-container">
        <h2 className="title">Features</h2>
        <h3 className="subtitle">Uifry Premium</h3>
        <div className="feature-item">
          <div className="feature-icon">
            <img src={star1} alt="star" />
          </div>
          <div className="text">
            <h3 className="feature-title">Budgeting Intervals</h3>
            <p className="feature-description">
              {featuresSectionLabels.description}
            </p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <img src={cube1} alt="cube" />
          </div>
          <div className="text">
            <h3 className="feature-title">Budgeting Intervals</h3>
            <p className="feature-description">
              {featuresSectionLabels.description}
            </p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <img src={cube2} alt="cube" />
          </div>
          <div className="text">
            <h3 className="feature-title">Budgeting Intervals</h3>
            <p className="feature-description">
              {featuresSectionLabels.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
