import React from 'react';
import { Link } from 'react-router-dom';
import { setStarsFull } from '../functions/Utils';
import '../css/DrinkThumbnail.css';

const DrinkThumbnail = ({ drink, imageLoaded }) => {
    return (
        <div className='DrinkThumbnail'>
            <Link to={`/details/${drink.idDrink}`}>
                <div className='image-wrapper'>
                    <img onLoad={imageLoaded} src={`${drink.strDrinkThumb}/preview`} alt="Drink" />
                </div>
            </Link>

            <div className='info-wrapper'>
                <div className='title'>
                    {drink.strDrink}
                </div>

                <div className='info'>
                    <div className='ingredients-tab'>
                        <i class="fas fa-cocktail"></i>
                        {` ${drink.ingredientCount[6]}`}
                        <div className='ing-text'>ingredients</div>
                    </div>

                    <div className='stars-tab'>
                        <div className='stars'>{setStarsFull(drink.makeDifficulty[0])}</div>
                        <div className='stars-text'>difficulty</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrinkThumbnail;