import React from 'react';
import DrinkThumbnail from './DrinkThumbnail';

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
        <>
            {drinks}
        </>
    );
};

export default DrinksList;