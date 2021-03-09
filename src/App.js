import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import DrinkList from './components/DrinkList';
import DrinkDetails from './components/DrinkDetails';
import IngredientsSearchBar from './components/IngredientsSearchBar';

const App = () => {
    return (
        <div>
            <Switch>
                <Route path="/ingredients/:ing1/:ing2/:ing3/:ing4">
                    <IngredientsSearchBar />
                    <h1>ACTIVATED 4</h1>
                </Route>
                <Route path="/ingredients/:ing1/:ing2/:ing3">
                    <IngredientsSearchBar />
                    <h1>ACTIVATED 3</h1>
                </Route>

                <Route path="/ingredients/:ing1/:ing2">
                    <IngredientsSearchBar />
                    <h1>ACTIVATED 2</h1>
                </Route>

                <Route path="/ingredients/:ing1">
                    <IngredientsSearchBar />
                    <h1>ACTIVATED 1</h1>
                </Route>


                <Route path="/ingredients">
                    <IngredientsSearchBar />
                </Route>

                <Route path="/details/:drinkId">
                    <DrinkDetails />
                </Route>

                <Route path="/:urlTerm">
                    <SearchBar />
                    <DrinkList />
                </Route>

                <Route path="/">
                    <SearchBar />
                </Route>

            </Switch>
        </div>
    );
};

export default App;