import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DrinkThumbnail from './DrinkThumbnail';

const DrinkList = ({ drinksData, getSearchTerm }) => {
    const { urlTerm } = useParams();

    useEffect(() => {
        getSearchTerm(urlTerm);
    }, [urlTerm, getSearchTerm]);

    let drinks = null;

    if (urlTerm) {
        drinks = drinksData.map((drink) => {
            return (
                <DrinkThumbnail key={drink.idDrink} drink={drink} />
            )
        });
    }

    return (
        <div className='row'>
            <div className='card-deck'>
                {drinks}
            </div>
        </div>

    );
};

export default DrinkList;