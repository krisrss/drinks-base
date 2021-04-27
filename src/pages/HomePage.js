import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { filterByQuery, updateDrinkDataValues } from '../functions/Utils';
import { getDrinksbyName } from '../api/thecocktaildb';
import ApplicationPage from './ApplicationPage';

const HomePage = () => {
    const [drinksData, setDrinksData] = useState([]);
    const { urlTerm } = useParams();
    const urlStats = useLocation();
    const queryList = queryString.parse(urlStats.search);
    const queryArray = Object.values(queryList).flat(1);

    const filteredDrinksData = filterByQuery(drinksData, queryArray)

    const history = useHistory();

    const resetDrinkList = () => {
        setDrinksData([]);
    }

    useEffect(() => {
        if (history.location.pathname !== '/') {
            if (drinksData.length === 0) {
                const getDrinks = async () => {
                    const data = await getDrinksbyName('https://www.thecocktaildb.com/api/json/v1/1/search.php', urlTerm);
                    updateDrinkDataValues(data.drinks);
                    data.drinks ? setDrinksData(data.drinks) : resetDrinkList();
                };
                getDrinks();
            }
        }
    }, [history.location.pathname, drinksData]);

    return (
        <ApplicationPage drinksData={filteredDrinksData} unfilteredDrinksData={drinksData} urlTerm={{ ...urlTerm }} resetDrinkList={resetDrinkList} initialData={drinksData} />
    )
};

export default HomePage;