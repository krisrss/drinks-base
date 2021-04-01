import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { filterByQuery, filterByUrlTerms, setDifficultyAndIngredients } from '../functions/Utils';
import { getDrinksbyIngredient } from '../api/thecocktaildb';
import ApplicationPage from './ApplicationPage';

const IngredientsPage = () => {
    const [drinksData, setDrinksData] = useState([]);
    const urlTerm = useParams();
    const urlStats = useLocation();
    const queryList = queryString.parse(urlStats.search);
    const queryArray = Object.values(queryList).flat(1);

    const history = useHistory();


    const filteredDrinksData = filterByUrlTerms(filterByQuery(drinksData, queryArray), urlTerm);
    const unfilteredDrinksData = filterByUrlTerms(drinksData, urlTerm)

    useEffect(() => {
        let renderData = false;

        if (history.location.state !== undefined) {
            var previousUrlCore = history.location.state.state.split('/');
            var currentUrlCore = history.location.pathname.split('/');

            if (previousUrlCore[2] !== currentUrlCore[2]) {
                console.log('RE-RENDER!')
                renderData = true;
            }
        }

        if (Object.keys(urlTerm).length !== 0) {
            if (drinksData.length === 0 || renderData === true) {

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
        <ApplicationPage drinksData={filteredDrinksData} unfilteredDrinksData={unfilteredDrinksData} urlTerm={urlTerm} />
    )
};

export default IngredientsPage;