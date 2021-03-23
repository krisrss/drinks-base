import React from 'react';
import IngredientsList from './IngredientsDisplay';
import DrinkThumbnail from './DrinkThumbnail';

const IngredientsDrinkList = ({ drinksData, ingredients }) => {

    let drinks = drinksData.map((drink) => {
        return (
            <DrinkThumbnail key={drink.idDrink} drink={drink} />
        )
    });

    return (
        <div>
            <div className='row' style={{ paddingLeft: '200px' }}>
                <IngredientsList ingredients={ingredients} />
            </div>
            <div className='row'>
                <div className='card-deck'>
                    {drinks}
                </div>
            </div>
        </div>

    );
};

export default IngredientsDrinkList;