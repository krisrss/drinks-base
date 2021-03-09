import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import IngredientsList from './IngredientsDisplay';

const IngredientsDrinkList = () => {
    const ingredients = useParams();
    const [drinksData, setDrinksData] = useState([]);

    useEffect(() => {
        const getDrinks = async () => {
            const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php', {
                params: {
                    i: Object.values(ingredients)[0]
                }
            });
            setDrinksData(data.drinks);
        };
        getDrinks();

    }, [ingredients]);

    return (
        <div>
            {console.log(drinksData)}
            <IngredientsList ingredients={ingredients} />
        </div>
    );
};

export default IngredientsDrinkList;