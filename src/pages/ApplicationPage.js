import React from 'react';
import { useHistory } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import DrinksDisplay from '../components/DrinksDisplay';
import SearchBar from '../components/SearchBar';
import AutocompleteBar from '../components/AutocompleteBar';
import WelcomePage from './WelcomePage';

const ApplicationPage = ({ resetDrinkList, drinksData, unfilteredDrinksData, urlTerm, getClicketTerm, initialData, currentTerm }) => {
    const history = useHistory();
    const currentPath = history.location.pathname;

    const setSearchBar = () => {
        if (currentPath.includes('/ingredients')) {
            return <AutocompleteBar />
        }
        else {
            return <SearchBar resetDrinkList={resetDrinkList} />
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
                    />
                </div>
                : <WelcomePage resetDrinkList={resetDrinkList} />}
        </>
    );
};

export default ApplicationPage;