import React from "react";
import "./CustomizableSection.css";
import iphoneImage from "../../../assets/FeaturesImage.png";
import star1 from "../../../assets/star2.png";
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
        <p>
          Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acoumsan, Ultricies.
          In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et
          Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit
          Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien,
          Suspendisse Aliquam.
        </p>
      </div>
    </div>
  );
};

export default Customizable;
