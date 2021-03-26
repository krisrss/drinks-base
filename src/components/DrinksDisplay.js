import React from 'react';
import SideBar from './SideBar';
import DrinksList from './DrinksList';
const DrinksDisplay = ({ drinksData, unfilteredDrinksData }) => {
    return (
        <>
            <div className="col-md-2 text-center">
                {drinksData.length !== 0 ?
                    <SideBar drinksData={drinksData} unfilteredDrinksData={unfilteredDrinksData} />
                    : null
                }
            </div>

            <div className="col-md-10 text-center">
                <div className='card-deck'>
                    <DrinksList drinksData={drinksData} />
                </div>
            </div>
        </>

    );
};

export default DrinksDisplay;