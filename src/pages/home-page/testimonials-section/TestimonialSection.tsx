import React from "react";
import "./TestimonialSection.css";
import testimonialImage from "../../../assets/combinedPerson.png"; // Replace with the correct path to your combined image
import person1 from "../../../assets/smallPerson.png";
import person2 from "../../../assets/person1.png";
import person3 from "../../../assets/person2.png";
import person4 from "../../../assets/person3.png";
import person5 from "../../../assets/person4.png";
import { testimonialSectionLabels } from "../../../utils/constant";
const Testimonials: React.FC = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <p className="header-subtitle">Testimonial</p>
        <h1 className="header-title1">What Our Users</h1>
        <h1 className="header-title2">Say About Us?</h1>
      </div>
      <div className="testimonial-content">
        <div className="testimonial-left">
          <img
            src={testimonialImage}
            className="testimonial-img"
            alt="testimonial"
          />
        </div>
        <div className="testimonial-right">
          <h3>The Best Financial Accounting App Ever!</h3>
          <p>{testimonialSectionLabels.description}</p>
          <div className="testimonial-footer">
            <div className="user-images">
              <img className="person-img1" src={person1} alt="user1" />
              <img className="person-img2" src={person2} alt="user2" />
              <img className="person-img3" src={person3} alt="user3" />
              <img className="person-img4" src={person4} alt="user4" />
              <img className="person-img5" src={person5} alt="user5" />
            </div>
            <p>Nick Jonas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
