import React from 'react';
import DrinkThumbnail from './DrinkThumbnail';

const DrinkList = ({ drinksData, urlParams }) => {

    let drinks = null;

    if (urlParams) {
        drinks = drinksData.map((drink) => {
            return (
                <DrinkThumbnail key={drink.idDrink} drink={drink} />
            )
        });
    }

    return (
        <div className='row'>
            <div className='card-deck'>
                {drinks}
            </div>
        </div>

    );
};

export default DrinkList;