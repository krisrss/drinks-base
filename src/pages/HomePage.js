import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import DrinkList from '../components/DrinkList';
import SideBar from '../components/SideBar';

const HomePage = () => {
    const [drinksData, setDrinksData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getSearchTerm = (term) => {
        setSearchTerm(term);
    }

    useEffect(() => {
        const getDrinks = async () => {
            const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php', {
                params: {
                    s: searchTerm
                }
            });
            data.drinks ? setDrinksData(data.drinks) : setDrinksData([]);
        };
        getDrinks();
    }, [searchTerm]);

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
                        <DrinkList drinksData={drinksData} getSearchTerm={getSearchTerm} />
                    </div>
                </div>
            </Route>

        </div>
    )
};

export default HomePage;