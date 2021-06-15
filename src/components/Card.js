import React from "react";

const Card = ({ food, onButtonClick }) => {
  return (
    <div className="ui card">
      <div className="image">
        <img
          alt={food.title}
          src={process.env.PUBLIC_URL + `/assets/imgs/${food.imageSrc}`}
        />
      </div>
      <div className="content">
        <h3 className="header">{food.title}</h3>
        <div className="description">{food.description}</div>
      </div>
      <div className="extra content alined">
        <button onClick={onButtonClick} className="positive ui button">
          Add To Shop
        </button>
      </div>
    </div>
  );
};
export default Card;
