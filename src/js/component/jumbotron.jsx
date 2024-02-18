// Jumbotron.jsx
import React from "react";
import "../../styles/jumbotron-style.css";
import backgroundImg from "../../img/main.jpg";

const Jumbotron = () => {
  return (
    <section className="homepage">
      <img
        className="background-img"
        src={backgroundImg}
        alt="backgorund imagen"
      ></img>
      <div className="content card-img-overlay">
        <div className="text">
          <h1> Gear Up for Adventure!</h1>
          <p>
            Welcome to our adventure gear store! Whether you're embarking on a
            thrilling quest or seeking new challenges, we've got everything you
            need to prepare for your journey. From sturdy armor to powerful
            weapons, and magical potions to essential accessories, our store is
            your one-stop destination for top-quality equipment. Get ready to
            conquer the unknown and make every adventure unforgettable with our
            carefully curated selection. Gear up and let the journey begin!
          </p>
        </div>
        <a className="home-page-btn" href="#cards-section-container">
          Call to Action!
        </a>
      </div>
    </section>
  );
};

export default Jumbotron;
