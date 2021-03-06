import React from 'react';
import { Link } from 'react-router-dom';

const DrinkThumbnail = ({ drink }) => {
    return (
        <div style={{ padding: '2em' }}>
            <Link to={`details/${drink.idDrink}`}>
                <div className='ui card'>
                    <div className='image'>
                        <img alt='Drink' src={drink.strDrinkThumb} />
                    </div>
                    <div className='content'>
                        <span className='header'>{drink.strDrink}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DrinkThumbnail;