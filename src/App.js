import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DrinkDetails from './components/DrinkDetails';
import HomePage from './pages/HomePage';
import IngredientsPage from './pages/IngredientsPage';

const App = () => {
    return (
        <>
            <Switch>
                <Route path="/ingredients">
                    <IngredientsPage />
                </Route>

                <Route path="/details/:drinkId">
                    <DrinkDetails />
                </Route>

                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </>
    );
};

export default App;