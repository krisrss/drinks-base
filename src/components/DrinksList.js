import React from 'react';
import DrinkThumbnail from './DrinkThumbnail';
import '../css/DrinksList.css';


const DrinksList = ({ drinksData, imageLoaded }) => {

    const drinks = drinksData.map((drink) => {
        return (
            <DrinkThumbnail
                key={drink.idDrink}
                drink={drink}
                imageLoaded={imageLoaded}
            />
        )
    });

    return (
        <div className='DrinksList'>
            {drinks}
        </div>
    );
};

export default DrinksList;