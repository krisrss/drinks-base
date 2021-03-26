import React from 'react';
import DrinkThumbnail from './DrinkThumbnail';
import SideBar from '../components/SideBar';

const DrinkList = ({ drinksData, urlParams, unfilteredDrinksData }) => {

    let drinks = null;

    if (urlParams) {
        drinks = drinksData.map((drink) => {
            return (
                <DrinkThumbnail key={drink.idDrink} drink={drink} />
            )
        });
    }

    return (
        <>
            <div className="col-md-2 text-center">
                {drinksData.length !== 0 ? <SideBar drinksData={drinksData} unfilteredDrinksData={unfilteredDrinksData} /> : null}
            </div>

            <div className="col-md-10 text-center">
                <div className='card-deck'>
                    {drinks}
                </div>
            </div>

        </>

    );
};

export default DrinkList;