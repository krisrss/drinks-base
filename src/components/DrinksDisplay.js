import React, { useState, useRef, useEffect } from 'react';
import SideBar from './SideBar';
import DrinksList from './DrinksList';
import Spinner from './Spinner';
import InformationTab from '../components/InformationTab';

const DrinksDisplay = ({ drinksData, unfilteredDrinksData, getClicketTerm, initialData }) => {
    const [loading, setLoading] = useState(true);
    const counter = useRef(0);

    const imageLoaded = () => {
        counter.current += 1;
        if (counter.current >= drinksData.length) {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (drinksData.length === 0 && initialData.length !== 0) {
            setLoading(false);
        }
    });

    const resetSpinner = () => {
        setLoading(true);
    }

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