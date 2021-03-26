import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import SearchBar from '../components/SearchBar';
import DrinksDisplay from '../components/DrinksDisplay';
import NavigationBar from '../components/NavigationBar';
import { filterByQuery, ingredientCount } from '../functions/Utils';
import { getDrinksbyName } from '../api/thecocktaildb';

const HomePage = () => {
    const [drinksData, setDrinksData] = useState([]);
    const { urlTerm } = useParams();
    const urlStats = useLocation();
    const queryList = queryString.parse(urlStats.search);
    const queryArray = Object.values(queryList).flat(1);

    useEffect(() => {
        if (urlTerm) {
            const getDrinks = async () => {
                const data = await getDrinksbyName('https://www.thecocktaildb.com/api/json/v1/1/search.php', urlTerm);
                Object.keys(data.drinks).forEach(function (index) {
                    data.drinks[index].ingredientCount = ingredientCount(data.drinks, index).length;
                });

                data.drinks ? setDrinksData(data.drinks) : setDrinksData([]);
            };
            getDrinks();
        }
        else {
            setDrinksData([]);
        }
    }, [urlTerm]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 text-center" style={{ padding: '2em 2em' }}>
                    <SearchBar />
                </div>
            </div>
            <div className='text-center' style={{ paddingBottom: '40px' }}>
                <NavigationBar />
            </div>

            {urlTerm ?
                <div className="row">
                    <DrinksDisplay
                        drinksData={filterByQuery(drinksData, queryArray)}
                        unfilteredDrinksData={drinksData}
                    />
                </div>
                : null
            }
        </div>
    )
};

export default HomePage;