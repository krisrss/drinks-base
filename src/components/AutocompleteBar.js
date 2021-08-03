import React from 'react';
import { ingredientsList } from '../functions/IngredientsList';
import AutocompleteSearch from './AutocompleteSearch';

const AutocompleteBar = ({ spinnerLoading, resetDrinkList, resetSpinner }) => {
    return (
        <>
            <AutocompleteSearch
                ingredientsList={ingredientsList}
                spinnerLoading={spinnerLoading}
                resetDrinkList={resetDrinkList}
                resetSpinner={resetSpinner}
            />
        </>
    );
};


export default AutocompleteBar;