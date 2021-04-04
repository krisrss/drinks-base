import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
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

    const filteredDrinksData = filterByUrlTerms(filterByQuery(drinksData, queryArray), urlTerm);
    const unfilteredDrinksData = filterByUrlTerms(drinksData, urlTerm)

    const [clickedTerm, setClickedTerm] = useState(null);
    const [currentTerm, setCurrentTerm] = useState(null);

    const getClicketTerm = (term) => {
        setClickedTerm(term)
    }

    useEffect(() => {
        if (Object.keys(urlTerm).length !== 0) {
            setCurrentTerm(Object.values(urlTerm)[0])
            if (drinksData.length === 0 || currentTerm === clickedTerm) {
                setDrinksData([]);
                setClickedTerm(null);
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
    }, [urlTerm]);

    return (
        <ApplicationPage drinksData={filteredDrinksData} unfilteredDrinksData={unfilteredDrinksData} urlTerm={urlTerm} getClicketTerm={getClicketTerm} initialData={drinksData} />
    )
};

export default IngredientsPage;