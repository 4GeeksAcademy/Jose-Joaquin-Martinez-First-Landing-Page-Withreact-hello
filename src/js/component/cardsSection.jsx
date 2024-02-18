import React from "react";
import "../../styles/cardSection.style.css";
const CardsSection = (props) => {
  return (
    <div className="card">
      <img src={props.imgUrl} className="card-img-top" alt={props.imgAlt} />
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">{props.cardText}</p>
      </div>
      <a href="#" className=" shop-btn btn">
        {props.buttonLabel}
      </a>
    </div>
  );
};

export default CardsSection;
