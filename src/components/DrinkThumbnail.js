import React from 'react';
import { Link } from 'react-router-dom';
import { setStars } from '../functions/Utils';
import '../css/DrinkThumbnail.css';

const DrinkThumbnail = ({ drink, imageLoaded }) => {
    return (
        <div className='DrinkThumbnail'>
            <div className="card" style={{ width: '13em' }}>
                <Link to={`/details/${drink.idDrink}`}>
                    <img className="card-img-top" onLoad={imageLoaded} src={`${drink.strDrinkThumb}/preview`} alt="Drink" />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{drink.strDrink}</h5>
                </div>
                <div className='container'>
                    <span className="float-left">
                        Ingredients : {drink.ingredientCount[6]}
                    </span>
                    <span className="float-right">
                        {setStars(drink.makeDifficulty[0])}
                    </span>
                </div>
                <br />
            </div>
        </div>


    );
};

export default DrinkThumbnail;