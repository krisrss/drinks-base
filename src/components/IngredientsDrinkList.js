import React from 'react';
import IngredientsList from './IngredientsDisplay';
import { useParams } from 'react-router-dom';

const IngredientsDrinkList = () => {
    const ingredients = useParams();

    return (
        <div>
            <IngredientsList ingredients={ingredients} />
        </div>
    );
};

export default IngredientsDrinkList;