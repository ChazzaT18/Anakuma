import React from "react";

const DishCardPortrait = ({ dish }) => {

  return (
    <li className="dish-card">
      <div className="name-dietary-container">
      <p style={{fontWeight: 'bold'}} className="dish-name-price">{dish.dish_name} - £{dish.price.toFixed(2)}</p>
        <div className="dietary-container">
          {dish.vegan && (
            <img
              className="vegan-symbol"
              src="/Images/MenuPage/vg-black.png"
              alt="Vegan"
            />
          )}
          {dish.vegetarian && (
            <img
              className="vegetarian-symbol"
              src="https://halisco.s3.eu-west-2.amazonaws.com/letter-v.png"
              alt="Vegetarian"
            />
          )}
          {dish.gluten_free && (
            <img
              className="gluten-free-symbol"
              src="https://halisco.s3.eu-west-2.amazonaws.com/gluten-free.png"
              alt="Gluten Free"
            />
          )}
                   {dish.vegan_option && (
            <img
              className="vegan-option-symbol"
              src="/Images/MenuPage/vgo-black.png"
              alt="vegan option"
            />
          )}
        </div>
      </div>
        {dish.description && <p className="dish-description">{dish.description}</p>}
    </li>
  );
};

export default DishCardPortrait;
