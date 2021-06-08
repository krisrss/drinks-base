import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { filterByQuery, updateDrinkDataValues } from '../functions/Utils';
import { getDrinksbyName } from '../api/thecocktaildb';
import ApplicationPage from './ApplicationPage';

const HomePage = () => {
    const [drinksData, setDrinksData] = useState([]);
    const urlTerm = useParams();
    const urlStats = useLocation();
    const queryList = queryString.parse(urlStats.search);
    const queryArray = Object.values(queryList).flat(1);

    const filteredDrinksData = filterByQuery(drinksData, queryArray)

    const history = useHistory();

    const setUrlTerm = () => {
        let term = null;

        if (urlTerm.urlTerm === undefined) {
            term = {};
        }
        else {
            term = { ...urlTerm.urlTerm }
        };

        return term;
    };

    const resetDrinkList = () => {
        setDrinksData([]);
    };

    useEffect(() => {
        if (history.location.pathname !== '/') {
            const getDrinks = async () => {
                const data = await getDrinksbyName('https://www.thecocktaildb.com/api/json/v1/1/search.php', urlTerm.urlTerm);
                updateDrinkDataValues(data.drinks);
                setDrinksData(data.drinks);
            };
            getDrinks();
        }
        else {
            resetDrinkList();
        }
    }, [urlTerm]);

    return (
        <ApplicationPage resetDrinkList={resetDrinkList} drinksData={filteredDrinksData} unfilteredDrinksData={drinksData} urlTerm={setUrlTerm()} initialData={drinksData} />
    )
};

export default HomePage;