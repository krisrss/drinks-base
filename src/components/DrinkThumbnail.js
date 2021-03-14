import React from 'react';
import { Link } from 'react-router-dom';

const DrinkThumbnail = ({ drink }) => {
    return (
        <div class="col-3" style={{ paddingBottom: '2em' }}>
            <div class="card" style={{ width: '13em' }}>
                <Link to={`/details/${drink.idDrink}`}>
                    <img class="card-img-top" src={drink.strDrinkThumb} alt="Drink" />
                </Link>
                <div class="card-body">
                    <h5 class="card-title">{drink.strDrink}</h5>
                </div>
            </div>
        </div>


    );
};

export default DrinkThumbnail;