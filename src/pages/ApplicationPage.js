import React from 'react';
import NavigationBar from '../components/NavigationBar';
import DrinksDisplay from '../components/DrinksDisplay';
import SearchBar from '../components/SearchBar';
import WelcomePage from './WelcomePage';

const ApplicationPage = ({ drinksData, unfilteredDrinksData, urlTerm, getClicketTerm, initialData }) => {
    return (
        <>
            {Object.values(urlTerm).length !== 0 ?
                <div className='container'>
                    <div style={{ margin: '1em' }} >
                        <SearchBar />
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