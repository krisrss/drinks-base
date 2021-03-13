import React from 'react';
import { Link } from 'react-router-dom';

const DrinkThumbnail = ({ drink }) => {
    return (
        <div>
            <Link to={`/details/${drink.idDrink}`}>
                <div>
                    <div>
                        <img alt='Drink' src={drink.strDrinkThumb} />
                    </div>
                    <div>
                        <span>{drink.strDrink}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DrinkThumbnail;