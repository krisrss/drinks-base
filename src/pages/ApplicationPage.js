import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import DrinksDisplay from '../components/DrinksDisplay';
import SearchBar from '../components/SearchBar';
import AutocompleteBar from '../components/AutocompleteBar';
import WelcomePage from './WelcomePage';

const ApplicationPage = ({ resetDrinkList, drinksData, unfilteredDrinksData, urlTerm, getClicketTerm, initialData, currentTerm }) => {
    const history = useHistory();
    const currentPath = history.location.pathname;
    const [loading, setLoading] = useState(true);
    const counter = useRef(0);

    const imageLoaded = () => {
        counter.current += 1;
        if (counter.current >= drinksData.length) {
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
    }, [currentPath]);

    useEffect(() => {
        if (drinksData.length === 0 && initialData.length !== 0) {
            setLoading(false);
        }
    });

    const resetSpinner = () => {
        setLoading(true);
    }

    const setSearchBar = () => {
        if (currentPath.includes('/ingredients')) {
            return <AutocompleteBar />
        }
        else {
            return <SearchBar resetDrinkList={resetDrinkList} resetSpinner={resetSpinner} />
        };
    };

    return (
        <>
            {Object.values(urlTerm).length !== 0 ?
                <div className='container'>
                    <div className='SearchBarWrapper' >
                        {setSearchBar()}
                    </div>

                    <NavigationBar />
                    <DrinksDisplay
                        drinksData={drinksData}
                        unfilteredDrinksData={unfilteredDrinksData}
                        getClicketTerm={getClicketTerm}
                        initialData={initialData}
                        currentTerm={currentTerm}
                        loading={loading}
                        resetSpinner={resetSpinner}
                        imageLoaded={imageLoaded}
                    />
                </div>
                : <WelcomePage resetDrinkList={resetDrinkList} resetSpinner={resetSpinner} />}
        </>
    );
};

export default ApplicationPage;