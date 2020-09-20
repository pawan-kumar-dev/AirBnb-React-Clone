import React from "react";
import "./Card.css";
const Card = ({ src, title, desc, price }) => {
  return (
    <div className="card">
      <img src={src} alt="images" />
      <div className="card__info">
        <h3>{title}</h3>
        <h4>{desc}</h4>
        <h5>{price}</h5>
      </div>
    </div>
  );
};

export default Card;
