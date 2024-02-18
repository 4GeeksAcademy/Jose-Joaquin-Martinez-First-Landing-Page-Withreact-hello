import React from "react";
import "./../../styles/footer-style.css";
import wandImage from "../../img/wand.png";

const Footer = () => {
  return (
    <div className="footer-container bg-dark">
      <img src={wandImage}></img>
      <p>Magical Contract My First Website 2024</p>
    </div>
  );
};
export default Footer;
