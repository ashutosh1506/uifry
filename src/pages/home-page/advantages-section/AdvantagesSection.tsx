import React from "react";
import "./AdvantagesSection.css";
import bell from "../../../assets/bell-02.png";
import iphone1 from "../../../assets/CombinedImage.png";

const AdvantagesSection = () => {
  return (
    <div className="advantages-container">
      <div className="advantages-text">
        <h2>ADVANTAGES</h2>
        <h1>Why Choose Uifry?</h1>
        <div className="advantages-item">
          <div className="icon">
            <img src={bell} alt="Notification Icon" />
          </div>
          <div className="text">
            <h3>Clever Notifications</h3>
            <p>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultrices. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
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
