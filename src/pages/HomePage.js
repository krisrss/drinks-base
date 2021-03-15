import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import DrinkList from '../components/DrinkList';
import SideBar from '../components/SideBar';

const HomePage = () => {
    const [drinksData, setDrinksData] = useState([]);
    const { urlTerm } = useParams();

    useEffect(() => {
        const getDrinks = async () => {
            const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php', {
                params: {
                    s: urlTerm
                }
            });
            data.drinks ? setDrinksData(data.drinks) : setDrinksData([]);
        };
        getDrinks();
    }, [urlTerm]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 text-center" style={{ padding: '2em 2em' }}>
                    <SearchBar />
                </div>
            </div>

            <div className="row">
                <div className="col-md-2 text-center">
                    {drinksData.length !== 0 ? <SideBar drinksData={drinksData} /> : null}
                </div>
                <div className="col-md-10 text-center">
                    <DrinkList drinksData={drinksData} urlTerm={urlTerm} />
                </div>
            </div>

        </div>
    )
};

export default HomePage;