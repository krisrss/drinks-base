import React from 'react';
import { useHistory } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import DrinksDisplay from '../components/DrinksDisplay';
import SearchBar from '../components/SearchBar';
import AutocompleteBar from '../components/AutocompleteBar';
import WelcomePage from './WelcomePage';

const ApplicationPage = ({ drinksData, unfilteredDrinksData, urlTerm, getClicketTerm, initialData }) => {
    const history = useHistory();
    const currentPath = history.location.pathname;

    const setSearchBar = () => {
        if (currentPath.includes('/ingredients')) {
            return <AutocompleteBar />
        }
        else {
            return <SearchBar />
        };
    };

    return (
        <>
            {Object.values(urlTerm).length !== 0 ?
                <div className='container'>
                    <div style={{ margin: '1em' }} >
                        {setSearchBar()}
                    </div>

                    <NavigationBar />
                    <DrinksDisplay
                        drinksData={drinksData}
                        unfilteredDrinksData={unfilteredDrinksData}
                        getClicketTerm={getClicketTerm}
                        initialData={initialData}
                    />
                </div>
                : <WelcomePage />}
        </>
    );
};

export default ApplicationPage;