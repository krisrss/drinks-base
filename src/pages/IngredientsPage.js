import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import { filterByQuery } from '../functions/Utils';
import IngredientsSearchBar from '../components/IngredientsSearchBar';
import IngredientsDrinkList from '../components/IngredientsDrinkList';
import SideBar from '../components/SideBar';

const IngredientsPage = () => {
    const [drinksData, setDrinksData] = useState([]);
    const ingredients = useParams();
    const urlStats = useLocation();
    const queryList = queryString.parse(urlStats.search);
    const queryArray = Object.values(queryList).flat(1);

    useEffect(() => {
        if (Object.keys(ingredients).length !== 0) {
            if (drinksData.length === 0) {
                const getDrinks = async () => {
                    const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php', {
                        params: {
                            i: Object.values(ingredients)[0]
                        }
                    });

                    let drinkList = [];
                    let promises = [];
                    for (let i = 0; i < data.drinks.length; i++) {
                        promises.push(
                            axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php', {
                                params: {
                                    i: data.drinks[i].idDrink
                                }
                            }).then(response => {
                                drinkList.push(response.data.drinks[0]);
                            })
                        )
                    }
                    Promise.all(promises).then(() => setDrinksData(drinkList));
                }
                getDrinks();
            }
        }
        else {
            setDrinksData([]);
        }
    }, [ingredients]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 text-center" style={{ padding: '2em 2em' }}>
                    <IngredientsSearchBar />
                </div>
            </div>

            <div className="row">
                <div className="col-md-2 text-center">
                    {drinksData.length !== 0 ? <SideBar drinksData={filterByQuery(drinksData, queryArray)} unfilteredDrinksData={drinksData} /> : null}
                </div>

                <div className="col-md-10 text-center">
                    <IngredientsDrinkList drinksData={filterByQuery(drinksData, queryArray)} ingredients={ingredients} />
                </div>
            </div>

        </div>
    )
};

export default IngredientsPage;