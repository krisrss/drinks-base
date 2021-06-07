import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import DrinksDisplay from '../components/DrinksDisplay';
import SearchBar from '../components/SearchBar';
import AutocompleteBar from '../components/AutocompleteBar';
import WelcomePage from './WelcomePage';
import Logo from '../components/Logo';
import '../css/ApplicationPage.css';

const ApplicationPage = ({ resetDrinkList, drinksData, unfilteredDrinksData, urlTerm, initialData, currentTerm }) => {
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
        if (Object.keys(urlTerm).length <= 1 || currentTerm !== urlTerm.ing1) {
            setLoading(true);
        }
    }, [currentPath]);

    useEffect(() => {
        if (drinksData.length === 0) {
            setLoading(true);
        }
    });

    const resetSpinner = (selectedItems) => {
        if (selectedItems === undefined || selectedItems.length <= 1) {
            setLoading(true);
        }
        else {
            setLoading(false);
        }
    };

    const setSearchBar = () => {
        if (currentPath.includes('/ingredients')) {
            return <AutocompleteBar resetDrinkList={resetDrinkList} resetSpinner={resetSpinner} />
        }
        else {
            return <SearchBar resetDrinkList={resetDrinkList} resetSpinner={resetSpinner} />
        };
    };

    const setBackground = () => {
        if (drinksData.length !== 0 && loading === false) {
            return 'main-content';
        }
        else {
            return '';
        };
    };

    return (
        <div className='ApplicationPage'>
            <Logo />
            {Object.values(urlTerm).length !== 0 ?
                <>
                    <div className='SearchBarWrapper' >
                        {setSearchBar()}
                    </div>

                    <NavigationBar />

                    <div className='whitespace'></div>

                    <div className={setBackground()}>
                        <DrinksDisplay
                            drinksData={drinksData}
                            unfilteredDrinksData={unfilteredDrinksData}
                            initialData={initialData}
                            currentTerm={currentTerm}
                            loading={loading}
                            imageLoaded={imageLoaded}
                        />
                    </div>
                </>
                : <WelcomePage resetDrinkList={resetDrinkList} resetSpinner={resetSpinner} />}
        </div>
    );
};

export default ApplicationPage;