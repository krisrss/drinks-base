import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IngredientsSearchBar from '../components/IngredientsSearchBar';
import IngredientsDrinkList from '../components/IngredientsDrinkList';

const IngredientsPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 text-center" style={{ padding: '2em 2em' }}>
                    <IngredientsSearchBar />
                </div>
            </div>

            <div className="row">
                <div className="col-md-2 text-center">
                    Side Bar
                </div>

                <div className="col-md-10 text-center">
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
            </div>

        </div>
    )
};

export default IngredientsPage;