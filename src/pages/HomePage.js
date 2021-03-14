import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import DrinkList from '../components/DrinkList';
import SideBar from '../components/SideBar';

const HomePage = () => {

    const [drinksData, setDrinksData] = useState([]);

    const getData = (data) => {
        setDrinksData(data);
    };

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
                        <DrinkList drinksData={drinksData} getData={getData} />
                    </div>
                </div>
            </Route>

        </div>
    )
};

export default HomePage;