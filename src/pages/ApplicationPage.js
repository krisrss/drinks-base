import React, { useState, useRef, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import DrinksDisplay from '../components/DrinksDisplay';
import SearchBar from '../components/SearchBar';
import AutocompleteBar from '../components/AutocompleteBar';
import WelcomePage from './WelcomePage';
import Logo from '../components/Logo';
import queryString from 'query-string';
import '../css/ApplicationPage.css';

const ApplicationPage = ({ dataLoaded, resetDrinkList, drinksData, unfilteredDrinksData, urlTerm, initialData, currentTerm }) => {
    const history = useHistory();
    const currentPath = history.location.pathname;
    const [loading, setLoading] = useState(true);
    const counter = useRef(0);
    const urlStats = useLocation();
    const queryList = queryString.parse(urlStats.search);

    const [currentPage, setCurrentPage] = useState(1);
    const [drinksPerPage] = useState(12);
    const indexOfLastDrink = currentPage * drinksPerPage;
    const indexOfFirstDrink = indexOfLastDrink - drinksPerPage;
    const currentDrinks = drinksData.slice(indexOfFirstDrink, indexOfLastDrink);

    const imageLoaded = () => {
        counter.current += 1;
        if (counter.current >= currentDrinks.length) {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (queryList.page === undefined) {
            setCurrentPage(1)
        }
        else {
            setCurrentPage(queryList.page)
        }
    }, [queryList.page])

    useEffect(() => {
        if (Object.keys(urlTerm).length <= 1 || currentTerm !== urlTerm.ing1) {
            setLoading(true);
        }
    }, [currentPath]); //eslint-disable-line react-hooks/exhaustive-deps

    const resetSpinner = (selectedItems) => {
        if (selectedItems === undefined || selectedItems.length <= 1) {
            setLoading(true);
        }
        else {
            setLoading(false);
        }
    };

    const resetSpinnerPag = () => {
        setLoading(true);
    }


    useEffect(() => {
        if (dataLoaded === false) {
            setLoading(false);
        }
        else if (dataLoaded === true && currentDrinks.length === 0) {
            setLoading(false);
        }
    }, [dataLoaded]); //eslint-disable-line react-hooks/exhaustive-deps

    const setSearchBar = () => {
        if (currentPath.includes('/ingredients')) {
            return <AutocompleteBar spinnerLoading={loading} resetDrinkList={resetDrinkList} resetSpinner={resetSpinner} />
        }
        else {
            return <SearchBar resetDrinkList={resetDrinkList} resetSpinner={resetSpinner} />
        };
    };

    const setBackground = () => {
        if (currentDrinks.length !== 0 && loading === false) {
            return 'main-content';
        }
        else {
            return '';
        };
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='ApplicationPage'>
            {Object.values(urlTerm).length !== 0 ?
                <>
                    <Logo />
                    <div className='SearchBarWrapper' >
                        {setSearchBar()}
                    </div>

                    <NavigationBar />

                    <div className='whitespace'></div>

                    <div className={setBackground()}>
                        <DrinksDisplay
                            drinksData={currentDrinks}
                            totalDrinksData={drinksData}
                            unfilteredDrinksData={unfilteredDrinksData}
                            initialData={initialData}
                            currentTerm={currentTerm}
                            loading={loading}
                            imageLoaded={imageLoaded}
                            paginate={paginate}
                            drinksPerPage={drinksPerPage}
                            totalDrinks={drinksData}
                            resetSpinnerPag={resetSpinnerPag}
                        />
                    </div>
                </>
                : <WelcomePage resetDrinkList={resetDrinkList} resetSpinner={resetSpinner} />}
        </div>
    );
};

export default ApplicationPage;