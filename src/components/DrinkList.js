import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DrinkThumbnail from './DrinkThumbnail';

const DrinkList = () => {
    const { urlTerm } = useParams();
    const [drinksData, setDrinksData] = useState([]);

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

    let drinks = null;

    if (urlTerm) {
        drinks = drinksData.map((drink) => {
            return (
                <DrinkThumbnail key={drink.idDrink} drink={drink} />
            )
        });
    }

    return (
        <div className='row'>
            <div className='card-deck'>
                {drinks}
            </div>
        </div>

    );
};

export default DrinkList;