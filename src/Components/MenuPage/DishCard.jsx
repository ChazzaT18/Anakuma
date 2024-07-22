import React from 'react';

const DishCard = ({ dish, isPortrait }) => {
    return (
        <li className="dish-card">
            <div className="dietary-container">
            <p className="dish-name-price">{dish.dish_name} - £{dish.price.toFixed(2)}</p>
                {dish.vegan && (
                    <div className='tooltip-container'>
                        <img className='vegan-symbol' src='/Images/MenuPage/vg.png' alt='Vegan' />
                        {!isPortrait? <span className='tooltip'>Vegan</span> : null}
                    </div>
                )}
                {dish.vegetarian && (
                    <div className='tooltip-container'>
                        <img className='vegetarian-symbol' src='https://halisco.s3.eu-west-2.amazonaws.com/letter-v.png' alt='Vegetarian' />
                        {!isPortrait? <span className='tooltip'>Vegetarian</span> : null}
                    </div>
                )}
                {dish.gluten_free && (
                    <div className='tooltip-container'>
                        <img className='gluten-free-symbol' src='https://halisco.s3.eu-west-2.amazonaws.com/gluten-free.png' alt='Gluten Free' />
                        {!isPortrait? <span className='tooltip'>Gluten Free</span> : null}
                    </div>
                )}
                {dish.vegan_option && (
                    <div className='tooltip-container'>
                        <img className='vegan-option-symbol' src='/Images/MenuPage/vgo.png' alt='vegan option available' />
                        {!isPortrait? <span className='tooltip'>Vegan Option</span> : null}
                    </div>
                )}
            </div>
            {dish.description && <p className="dish-description">{dish.description}</p>}
        </li>
    );
};

export default DishCard;

