import React from "react";

const DrinkCardPortrait = ({ drink }) => {

  return (
    <li className="dish-card">
      <div className="name-dietary-container">
      <p style={{fontWeight: 'bold'}} className="dish-name-price">{drink.drink_name} - £{drink.price.toFixed(2)}</p>
      </div>
        {drink.description && <p className="dish-description">{drink.description}</p>}
    </li>
  );
};

export default DrinkCardPortrait;
