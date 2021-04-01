import React from 'react';
import NavigationBar from '../components/NavigationBar';
import DrinksDisplay from '../components/DrinksDisplay';
import SearchBar from '../components/SearchBar';

const ApplicationPage = ({ drinksData, unfilteredDrinksData, urlTerm, resetDrinkList }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 text-center" style={{ padding: '2em 2em' }}>
                    <SearchBar />
                </div>
            </div>

            <div className='text-center' style={{ paddingBottom: '40px' }}>
                <NavigationBar />
            </div>

            {Object.values(urlTerm).length !== 0 ?
                <DrinksDisplay
                    drinksData={drinksData}
                    unfilteredDrinksData={unfilteredDrinksData}
                    resetDrinkList={resetDrinkList}
                />
                : null}
        </div>
    );
};

export default ApplicationPage;