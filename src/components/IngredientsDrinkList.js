import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import IngredientsList from './IngredientsDisplay';
import DrinkThumbnail from './DrinkThumbnail';

const IngredientsDrinkList = () => {
    const ingredients = useParams();
    const [drinksData, setDrinksData] = useState([]);

    useEffect(() => {
        if (drinksData.length === 0) {
            const getDrinks = async () => {
                const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php', {
                    params: {
                        i: Object.values(ingredients)[0]
                    }
                });

                let drinkList = [];
                let promises = [];
                for (let i = 0; i < data.drinks.length; i++) {
                    promises.push(
                        axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php', {
                            params: {
                                i: data.drinks[i].idDrink
                            }
                        }).then(response => {
                            drinkList.push(response.data.drinks[0]);
                        })
                    )
                }
                Promise.all(promises).then(() => setDrinksData(drinkList));
            }
            getDrinks();
        }
    }, [ingredients, drinksData]);



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