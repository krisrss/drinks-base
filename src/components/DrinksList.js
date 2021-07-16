import React from 'react';
import DrinkThumbnail from './DrinkThumbnail';
import '../css/DrinksList.css';
import Pagination from '../components/Pagination';


const DrinksList = ({ resetSpinnerPag, drinksData, imageLoaded, paginate, drinksPerPage, totalDrinksData }) => {

    const drinks = drinksData.map((drink) => {
        return (
            <DrinkThumbnail
                key={drink.idDrink}
                drink={drink}
                imageLoaded={imageLoaded}
            />
        )
    });

    return (
        <div className='DrinksList'>
            {drinks}
            <Pagination resetSpinnerPag={resetSpinnerPag} paginate={paginate} drinksPerPage={drinksPerPage} totalDrinks={totalDrinksData} />
        </div>
    );
};

export default DrinksList;