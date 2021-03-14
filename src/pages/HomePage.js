import React from 'react';
import { Route } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import DrinkList from '../components/DrinkList';
import SideBar from '../components/SideBar';

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
                        <SideBar />
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