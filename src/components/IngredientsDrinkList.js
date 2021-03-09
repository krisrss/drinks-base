import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import IngredientsList from './IngredientsDisplay';

const IngredientsDrinkList = () => {
    const [drinksData, setDrinksData] = useState([]);
    const ingredients = useParams();
    const firstIngrItem = ingredients[Object.keys(ingredients)[0]];
    const [filteredDrinksData, setFilteredDrinksData] = useState([]);

    useEffect(() => {
        const getDrinks = async () => {
            const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php', {
                params: {
                    i: firstIngrItem
                }
            });
            setDrinksData(data.drinks);
        };
        getDrinks();

    }, [firstIngrItem]);

    useEffect(() => {
        let filteredDrinks = [];
        const getDrinks = async () => {
            for (let i = 0; i < drinksData.length; i++) {
                const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php', {
                    params: {
                        i: drinksData[i].idDrink
                    }
                });
                filteredDrinks.push(data.drinks[0]);
            };
            setFilteredDrinksData(filteredDrinks);
        }
        getDrinks();

    }, [drinksData]);

    return (
        <div>
            {console.log(filteredDrinksData)}
            <IngredientsList ingredients={ingredients} />
        </div>
    );
};

export default IngredientsDrinkList;