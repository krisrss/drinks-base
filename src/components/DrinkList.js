import React from 'react';
import DrinkThumbnail from './DrinkThumbnail';

const DrinkList = ({ drinksData, urlTerm }) => {

    let drinks = null;

    if (urlTerm) {
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