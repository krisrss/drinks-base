import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DrinkDetails from './components/DrinkDetails';
import HomePage from './pages/HomePage';
import IngredientsPage from './pages/IngredientsPage';

const App = () => {
    return (
        <>
            <Switch>
                <Route path="/ingredients/:ing1/:ing2/:ing3">
                    <IngredientsPage />
                </Route>

                <Route path="/ingredients/:ing1/:ing2">
                    <IngredientsPage />
                </Route>

                <Route path="/ingredients/:ing1">
                    <IngredientsPage />
                </Route>

                <Route path="/ingredients">
                    <IngredientsPage />
                </Route>

                <Route path="/details/:drinkId">
                    <DrinkDetails />
                </Route>

                <Route path="/:urlTerm">
                    <HomePage />
                </Route>

                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </>
    );
};

export default App;