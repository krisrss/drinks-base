import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import IngredientsSearchBar from '../components/IngredientsSearchBar';
import IngredientsDrinkList from '../components/IngredientsDrinkList';

const IngredientsPage = () => {
    const [drinksData, setDrinksData] = useState([]);
    const ingredients = useParams();

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
                    Side Bar
                </div>

                <div className="col-md-10 text-center">
                    <IngredientsDrinkList drinksData={drinksData} ingredients={ingredients} />
                </div>
            </div>

        </div>
    )
};

export default IngredientsPage;