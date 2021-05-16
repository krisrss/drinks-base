import React from 'react';
import SideBar from './SideBar';
import DrinksList from './DrinksList';
import Spinner from './Spinner';
import InformationTab from '../components/InformationTab';
import '../css/DrinksDisplay.css';
import QueryTermBlock from '../components/QueryTermBlock';


const DrinksDisplay = ({ imageLoaded, loading, drinksData, unfilteredDrinksData }) => {

    return (
        <div className='DrinksDisplay'>
            <div style={{ display: loading ? "block" : "none" }}>
                <Spinner />
            </div>

            <div style={{ display: loading ? "none" : "block" }}>
                <QueryTermBlock />
                <InformationTab drinksQuantity={drinksData.length} />

                <div style={{ display: 'flex' }}>
                    {drinksData.length !== 0 ?
                        <SideBar drinksData={drinksData} unfilteredDrinksData={unfilteredDrinksData} />
                        : null
                    }
                    <DrinksList drinksData={drinksData} imageLoaded={imageLoaded} />
                </div>
            </div>
        </div>

    );
};

export default DrinksDisplay;