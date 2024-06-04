import React from "react";
import "./Footer.css";
import Frame from "../../assets/Frame.png";
import mssg from "../../assets/mssg.png";
import call from "../../assets/call.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-info">
          <div className="contact-item">
            <img src={Frame} alt="logo" className="contact-logo" />
            <p className="contact-text-icon">uifry</p>
          </div>
          <div className="contact-item">
            <img src={mssg} alt="email" className="contact-icon" />
            <p className="contact-text">Help@Frybix.Com</p>
          </div>
          <div className="contact-item">
            <img src={call} alt="phone" className="contact-icon" />
            <p className="contact-text">+1234 456 678 89</p>
          </div>
        </div>
        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Bookings</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>Terms Of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Product</h4>
          <ul>
            <li>Take Tour</li>
            <li>Live Chat</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Stay Up To Date</p>
          <div className="newsletter">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2022 Uifry.Com All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
