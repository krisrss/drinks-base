import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import DrinkList from './components/DrinkList';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const getInput = (input) => {
        setSearchTerm(input);
    };

    return (
        <div>
            <SearchBar getInput={getInput} />

            <BrowserRouter>
                <Switch>
                    <Route path="/:urlTerm">
                        <DrinkList searchTerm={searchTerm} />
                    </Route>
                </Switch>
            </BrowserRouter>

        </div>
    );
};

export default App;