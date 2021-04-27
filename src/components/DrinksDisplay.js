import React from 'react';
import SideBar from './SideBar';
import DrinksList from './DrinksList';
import Spinner from './Spinner';
import InformationTab from '../components/InformationTab';

const DrinksDisplay = ({ imageLoaded, loading, resetSpinner, drinksData, unfilteredDrinksData, getClicketTerm }) => {

    return (
        <>
            <div style={{ display: loading ? "block" : "none" }}>
                <Spinner />
            </div>

            <div style={{ display: loading ? "none" : "block" }}>
                <div className='text-center'>
                    <InformationTab drinksQuantity={drinksData.length} resetSpinner={resetSpinner} getClicketTerm={getClicketTerm} />
                </div>

                <div className="row">
                    <div className="col-md-2 text-center">
                        {drinksData.length !== 0 ?
                            <SideBar drinksData={drinksData} unfilteredDrinksData={unfilteredDrinksData} />
                            : null
                        }
                    </div>

                    <div className="col-md-10">
                        <div className='card-deck'>
                            <DrinksList drinksData={drinksData} imageLoaded={imageLoaded} />
                        </div>
                    </div>
                </div>

            </div>

        </>

    );
};

export default DrinksDisplay;