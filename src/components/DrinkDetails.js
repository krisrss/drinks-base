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
    }, []);



    const ingredientsList = (data) => {

        let ingredientsData = [];

        for (let i = 1; i <= 15; i++) {
            let ingr = data['strIngredient' + i];
            let amount = data['strMeasure' + i];

            if (ingr !== null && ingr !== undefined && ingr !== '') {
                let ignWrap = [];
                ignWrap.push(ingr)
                ignWrap.push(amount)
                ingredientsData.push(ignWrap)
            }

        }

        return (ingredientsData);
    };

    const displayIngredients = ingredientsList(drinkData).map((ingredient) => {
        return (
            <li className='ingr-item'><span className='ingr-text'>{ingredient[0]} - {ingredient[1]}</span></li>
        )
    });


    const instructionSteps = () => {

        if (drinkData.strInstructions !== undefined) {
            let steps = drinkData.strInstructions.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");

            const stepsDisplay = steps.map((item) => {
                return (
                    <li className='step-item'><span>{item}</span></li>
                )
            })

            return stepsDisplay;
        }
    }


    return (
        <div>
            <Logo />
            {Object.entries(drinkData).length !== 0 ?
                <div className='DrinkDetails'>
                    <div className='tags-list'>
                        <span className='tag'>{drinkData.strCategory}</span>
                        <span className='tag'>{drinkData.strAlcoholic}</span>
                        <span className='tag'>{drinkData.strGlass}</span>
                        <span className='tag'>{setStarsFull(drinkData.makeDifficulty === undefined ? [] : drinkData.makeDifficulty[0])}</span>
                    </div>

                    <div className='title'>{drinkData.strDrink}</div>

                    <div className='content'>
                        <div className='main-image'><img alt='drink' src={drinkData.strDrinkThumb} /></div>



                        <div className='main-text'>

                            <div className='ingredients-title'>Ingredients:</div>

                            <ul className='ingr-list'>
                                {displayIngredients}
                            </ul>

                            <div className='ingredients-title'>Instructions:</div>

                            <ul className='step-list'>{instructionSteps()}</ul>



                        </div>



                    </div>

                </div>
                : null
            }
        </div>

    );
};

export default DrinkDetails;