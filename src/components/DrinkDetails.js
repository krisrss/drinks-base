import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Logo from '../components/Logo';
import '../css/DrinkDetails.css';

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
            setDrinkData(data.drinks[0]);
        };
        getDrink();
    }, [drinkId]);

    return (
        <div>
            <Logo />
            <div className='DrinkDetails'>

                <div className='title'>{drinkData.strDrink}</div>

                {console.log(drinkData)}

                <img alt='drink' src={drinkData.strDrinkThumb} />

            </div>
        </div>

    );
};

export default DrinkDetails;