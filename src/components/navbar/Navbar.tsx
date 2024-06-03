import React from "react";
import "./Navbar.css";
import frame from "../../assets/Frame.png"; // Replace with the path to your logo

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={frame} alt="Logo" />
        <span className="navbar-brand">uifry</span>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item active">Home</li>
        <li className="navbar-item">About Us</li>
        <li className="navbar-item">Pricing</li>
        <li className="navbar-item">Features</li>
      </ul>
      <button className="navbar-button">Download</button>
    </nav>
  );
};

export default Navbar;
