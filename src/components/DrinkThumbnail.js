import React from 'react';
import { Link } from 'react-router-dom';

const DrinkThumbnail = ({ drink, imageLoaded }) => {
    return (
        <div className="col-3" style={{ paddingBottom: '2em' }}>
            <div className="card" style={{ width: '13em' }}>
                <Link to={`/details/${drink.idDrink}`}>
                    <img className="card-img-top" onLoad={imageLoaded} src={`${drink.strDrinkThumb}/preview`} alt="Drink" />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{drink.strDrink}</h5>
                </div>
            </div>
        </div>


    );
};

export default DrinkThumbnail;