import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import DrinkList from './components/DrinkList';

const App = () => {
    return (
        <div>
            <SearchBar />
            <Switch>
                <Route path="/:urlTerm">
                    <DrinkList />
                </Route>
            </Switch>
        </div>
    );
};

export default App;