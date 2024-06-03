import React from "react";
import "./Features.css";
import IphoneImage from "../../assets/iphone1.png"; // Update this path to where your iPhone image is located
import SpiralImage from "../../assets/Spiral.png"; // Update this path to where your spiral image is located
import star1 from "../../assets/star-05.png";
import cube1 from "../../assets/cube-02.png";
import cube2 from "../../assets/cube-04.png";

const Features: React.FC = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={SpiralImage} alt="Spiral" className="spiral" />
        <img src={IphoneImage} alt="iPhone" className="iphone iphone1" />
        {/* <img src={IphoneImage} alt="iPhone" className="iphone iphone2" /> */}
      </div>
      <div className="text-container">
        <h2 className="title">Features</h2>
        <h3 className="subtitle">Uifry Premium</h3>
        <div className="feature-item">
          <div className="icon">
            <img src={star1} alt="star" />
          </div>
          <div className="text">
            <h4 className="feature-title">Budgeting Intervals</h4>
            <p className="feature-description">
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
        </div>
        <div className="feature-item">
          <div className="icon">
            <img src={cube1} alt="cube" />
          </div>
          <div className="text">
            <h4 className="feature-title">Budgeting Intervals</h4>
            <p className="feature-description">
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
        </div>
        <div className="feature-item">
          <div className="icon">
            <img src={cube2} alt="cube" />
          </div>
          <div className="text">
            <h4 className="feature-title">Budgeting Intervals</h4>
            <p className="feature-description">
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
