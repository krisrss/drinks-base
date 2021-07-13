import React from 'react';
import SideBar from './SideBar';
import DrinksList from './DrinksList';
import Spinner from './Spinner';
import InformationTab from '../components/InformationTab';
import '../css/DrinksDisplay.css';
import QueryTermBlock from '../components/QueryTermBlock';


const DrinksDisplay = ({ paginate, drinksPerPage, totalDrinksData, imageLoaded, loading, drinksData, unfilteredDrinksData }) => {
    return (
        <div className='DrinksDisplay'>
            <div style={{ display: loading ? "block" : "none" }}>
                <Spinner />
            </div>

            <div style={{ display: loading ? "none" : "block" }}>

                {
                    drinksData.length !== 0 ?
                        <QueryTermBlock />
                        : null
                }

                <InformationTab drinksData={drinksData} drinksQuantity={totalDrinksData.length} />

                <div style={{ display: 'flex' }}>
                    {drinksData.length !== 0 ?
                        <SideBar drinksData={totalDrinksData} unfilteredDrinksData={unfilteredDrinksData} />
                        : null
                    }
                    <DrinksList paginate={paginate} drinksPerPage={drinksPerPage} totalDrinksData={totalDrinksData} drinksData={drinksData} imageLoaded={imageLoaded} />
                </div>
            </div>
        </div>

    );
};

export default DrinksDisplay;