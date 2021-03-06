import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import DrinkList from './components/DrinkList';
import DrinkDetails from './components/DrinkDetails';

const App = () => {
    return (
        <div>
            <Switch>
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