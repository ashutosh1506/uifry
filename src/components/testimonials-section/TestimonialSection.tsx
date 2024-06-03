import React from "react";
import "./TestimonialSection.css";
import testimonialImage from "../../assets/combinedPerson.png"; // Replace with the correct path to your combined image
import person1 from "../../assets/smallPerson.png";
const Testimonials: React.FC = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <p className="header-subtitle">Testimonial</p>
        <h1 className="header-title">What Our Users</h1>
        <h1 className="header-title">Say About Us?</h1>
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
          <p>
            “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acumusan,
            Ultricies. In Ultrices Malesuada Elit Mauris Etlam Odio. Duis
            Tristique Lacus, Et Blandit Viverra Nisl Velt. Sed Mattis Rhoncus,
            Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor
            Neque Lorem Sapien, Suspendisse Aliquam.”
          </p>
          <div className="testimonial-footer">
            <div className="user-images">
              <img src={person1} alt="user1" />
              <img src={person1} alt="user2" />
              <img src={person1} alt="user3" />
              <img src={person1} alt="user4" />
              <img src={person1} alt="user5" />
            </div>
            <p>Nick Jonas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
