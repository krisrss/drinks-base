import React from 'react';
import DrinkThumbnail from './DrinkThumbnail';

const DrinksList = ({ drinksData }) => {

    const drinks = drinksData.map((drink) => {
        return (
            <DrinkThumbnail key={drink.idDrink} drink={drink} />
        )
    });

    return (
        <>
            {drinks}
        </>
    );
};

export default DrinksList;