import React from "react";

const Card = ({ category, description, date, imageUrl }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="category-name">{category}</h3>
        <div className="options">
          <button className="options-btn">•••</button>
        </div>
      </div>
      {imageUrl && <img src={`./images/${imageUrl}`} alt={category} className="card-image" />}
      <p className="description">{description}</p>
      <p className="date">{date}</p>
    </div>
  );
};

export default Card;
