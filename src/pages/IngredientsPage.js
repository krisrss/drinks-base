import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { filterByQuery, filterByUrlTerms, setDifficultyAndIngredients } from '../functions/Utils';
import NavigationBar from '../components/NavigationBar';
import DrinksDisplay from '../components/DrinksDisplay';
import SearchBar from '../components/SearchBar';
import { getDrinksbyIngredient } from '../api/thecocktaildb';

const IngredientsPage = () => {
    const [drinksData, setDrinksData] = useState([]);
    const urlTerm = useParams();
    const urlStats = useLocation();
    const queryList = queryString.parse(urlStats.search);
    const queryArray = Object.values(queryList).flat(1);

    useEffect(() => {
        if (Object.keys(urlTerm).length !== 0) {
            if (drinksData.length === 0) {
                const getDrinks = async () => {
                    const searchTerm = Object.values(urlTerm)[0];
                    const data = await getDrinksbyIngredient('https://www.thecocktaildb.com/api/json/v1/1/filter.php', searchTerm);

                    let drinkList = [];
                    let promises = [];
                    for (let i = 0; i < data.drinks.length; i++) {
                        const searchTermEach = data.drinks[i].idDrink;
                        promises.push(
                            getDrinksbyIngredient('https://www.thecocktaildb.com/api/json/v1/1/lookup.php', searchTermEach).then(response => {
                                drinkList.push(response.drinks[0]);
                            })
                        )
                    }
                    Promise.all(promises).then(() => {
                        setDifficultyAndIngredients(drinkList);
                        setDrinksData(drinkList)

                    });

                };
                getDrinks();
            };
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

            {drinksData.length ?
                <div className="row">
                    <DrinksDisplay
                        drinksData={filterByUrlTerms(filterByQuery(drinksData, queryArray), urlTerm)}
                        unfilteredDrinksData={filterByUrlTerms(drinksData, urlTerm)}
                    />
                </div>
                : null}
        </div>
    )
};

export default IngredientsPage;