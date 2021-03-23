import React from 'react';
import IngredientsList from './IngredientsDisplay';
import DrinkThumbnail from './DrinkThumbnail';

const IngredientsDrinkList = ({ drinksData, ingredients }) => {

    const filteredData = () => {
        let tempDrinkStore = [];
        const ingrList = Object.values(ingredients);

        if (ingrList.length > 1) {
            for (let i = 0; i < drinksData.length; i++) {
                let ingList = [];

                for (let x = 1; x <= 15; x++) {
                    let ing = drinksData[i]['strIngredient' + x];

                    if (ing !== null && ing !== '') {
                        ingList.push(ing.toLowerCase());
                    }
                }
                if (ingrList.every(elem => ingList.includes(elem))) {
                    tempDrinkStore.push(drinksData[i])
                }
            };
            return tempDrinkStore;
        }
        else {
            return drinksData;
        }
    };

    let drinks = filteredData().map((drink) => {
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