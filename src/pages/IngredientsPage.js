import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IngredientsSearchBar from '../components/IngredientsSearchBar';
import IngredientsDrinkList from '../components/IngredientsDrinkList';

const IngredientsPage = () => {
    return (
        <div>
            <IngredientsSearchBar />

            <Switch>
                <Route path="/ingredients/:ing1/:ing2/:ing3">
                    <IngredientsDrinkList />
                </Route>

                <Route path="/ingredients/:ing1/:ing2">
                    <IngredientsDrinkList />
                </Route>

                <Route path="/ingredients/:ing1">
                    <IngredientsDrinkList />
                </Route>
            </ Switch>
        </div>
    )
};

export default IngredientsPage;