import React, { useState, useRef } from 'react';
import SideBar from './SideBar';
import DrinksList from './DrinksList';
import Spinner from './Spinner';


const DrinksDisplay = ({ drinksData, unfilteredDrinksData }) => {
    const [loading, setLoading] = useState(true);
    const counter = useRef(0);

    const imageLoaded = () => {
        counter.current += 1;
        if (counter.current >= drinksData.length) {
            setLoading(false);
        }
    }

    return (
        <>
            <div style={{ display: loading ? "block" : "none" }}>
                <Spinner />
            </div>

            <div style={{ display: loading ? "none" : "block" }}>
                <div className="row">
                    <div className="col-md-2 text-center">
                        {drinksData.length !== 0 ?
                            <SideBar drinksData={drinksData} unfilteredDrinksData={unfilteredDrinksData} />
                            : null
                        }
                    </div>

                    <div className="col-md-10 text-center">
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