import React from 'react';

const DrinkThumbnail = ({ drink }) => {
    return (
        <div style={{ padding: '2em' }}>
            <div className='ui card'>
                <div className='image'>
                    <img alt='Drink' src={drink.strDrinkThumb} />
                </div>
                <div className='content'>
                    <a href='/' className='header'>{drink.strDrink}</a>
                </div>
            </div>
        </div>
    );
};

export default DrinkThumbnail;