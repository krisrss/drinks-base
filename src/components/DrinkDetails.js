import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Logo from '../components/Logo';
import '../css/DrinkDetails.css';
import { updateDrinkDataValues, setStarsFull } from '../functions/Utils';

const DrinkDetails = () => {
    const { drinkId } = useParams();
    const [drinkData, setDrinkData] = useState({});

    useEffect(() => {
        const getDrink = async () => {
            const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php', {
                params: {
                    i: drinkId
                }
            });

            let dataUpdated = data.drinks;
            updateDrinkDataValues(dataUpdated);
            setDrinkData(dataUpdated[0]);
        };
        getDrink();
    }, [drinkId]);

    return (
        <div>
            <Logo />
            <div className='DrinkDetails'>
                <div className='tags-list'>
                    <span className='tag'>{drinkData.strCategory}</span>
                    <span className='tag'>{drinkData.strAlcoholic}</span>
                    <span className='tag'>{drinkData.strGlass}</span>
                    <span className='tag'>{setStarsFull(drinkData.makeDifficulty === undefined ? [] : drinkData.makeDifficulty[0])}</span>
                </div>

                <div className='title'>{drinkData.strDrink}</div>
                <img alt='drink' src={drinkData.strDrinkThumb} />
            </div>
        </div>

    );
};

export default DrinkDetails;