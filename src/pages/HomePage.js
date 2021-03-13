import React from 'react';
import SearchBar from '../components/SearchBar';
import { Route } from 'react-router-dom';
import DrinkList from '../components/DrinkList';

const HomePage = () => {
    return (
        <div>
            <SearchBar />

            <Route path="/:urlTerm">
                <DrinkList />
            </Route>

        </div>
    )
};

export default HomePage;