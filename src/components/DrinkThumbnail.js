import React from 'react';
import { Link } from 'react-router-dom';
import { setStarsFull } from '../functions/Utils';
import '../css/DrinkThumbnail.css';

const DrinkThumbnail = ({ drink, imageLoaded }) => {

    const ingredientCount = (term) => {
        let ingrQuantity = term.replace('items-', '')
        return ingrQuantity;
    }

    return (
        <Link to={
            {
                pathname: `/details/${drink.idDrink}`,
                state: { drink }
            }
        }>
            <div className='DrinkThumbnail'>
                <div className='image-wrapper'>
                    <img onLoad={imageLoaded} src={`${drink.strDrinkThumb}/preview`} alt="Drink" />
                </div>

                <div className='info-wrapper'>
                    <div className='title'>
                        {drink.strDrink}
                    </div>

                    <div className='info'>
                        <div className='ingredients-tab'>
                            <i className="fas fa-cocktail"></i>
                            {` ${ingredientCount(drink.ingredientCount)}`}
                            <div className='ing-text'>ingredients</div>
                        </div>

                        <div className='stars-tab'>
                            <div className='stars'>{setStarsFull(drink.makeDifficulty[0])}</div>
                            <div className='stars-text'>difficulty</div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default DrinkThumbnail;