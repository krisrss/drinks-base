import React from 'react';

const DrinkThumbnail = ({ drink }) => {
    return (
        <div style={{ display: 'inline-block' }}>
            <h3>{drink.name}</h3>
            <img alt='Drink' src={drink.imgUrl} />
        </div>
    );
};

export default DrinkThumbnail;