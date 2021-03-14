import React from 'react';
import SearchBar from '../components/SearchBar';
import { Route } from 'react-router-dom';
import DrinkList from '../components/DrinkList';

const HomePage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 text-center" style={{ padding: '2em 2em' }}>
                    <SearchBar />
                </div>
            </div>

            <Route path="/:urlTerm">
                <div className="row">
                    <div className="col-md-2 text-center">
                        <h1>Side Bar</h1>
                    </div>
                    <div className="col-md-10 text-center">
                        <DrinkList />
                    </div>
                </div>
            </Route>

        </div>
    )
};

export default HomePage;