import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import DrinkList from '../components/DrinkList';
import SideBar from '../components/SideBar';

const HomePage = () => {
    const [drinksData, setDrinksData] = useState([]);
    const { urlTerm } = useParams();
    const urlStats = useLocation();
    const queryList = queryString.parse(urlStats.search);
    const queryArray = Object.values(queryList).flat(1);

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

    const cleanFilterName = (category) => {
        const removeSpace = category.split(' ').join('').toLowerCase();
        const filterType = removeSpace.split('/').join('');

        return filterType;
    }

    const filterByQuery = () => {
        const drinks = [...drinksData];
        const resultArr = [];

        if (queryArray.length !== 0) {

            drinks.forEach(drink => {
                const drinkFilters = [];

                drinkFilters.push(cleanFilterName(drink.strAlcoholic));
                drinkFilters.push(cleanFilterName(drink.strCategory));
                drinkFilters.push(cleanFilterName(drink.strGlass));

                const filterApplied = queryArray.every(v => drinkFilters.includes(v));
                if (filterApplied === true) {
                    resultArr.push(drink);
                }
            });

            return resultArr;
        }
        else {
            return drinks;
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 text-center" style={{ padding: '2em 2em' }}>
                    <SearchBar />
                </div>
            </div>

            <div className="row">
                <div className="col-md-2 text-center">
                    {drinksData.length !== 0 ? <SideBar drinksData={filterByQuery()} /> : null}
                </div>
                <div className="col-md-10 text-center">
                    <DrinkList drinksData={filterByQuery()} urlTerm={urlTerm} />
                </div>
            </div>

        </div>
    )
};

export default HomePage;