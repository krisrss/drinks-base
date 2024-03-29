import React from 'react';
import SearchBar from '../components/SearchBar';
import NavigationBar from '../components/NavigationBar';
import SuggestionsList from '../components/SuggestionsList';
import AutocompleteBar from '../components/AutocompleteBar';
import { useHistory } from 'react-router-dom';
import '../css/WelcomePage.css';
import Logo from '../components/Logo';

const WelcomePage = ({ resetDrinkList, resetSpinner }) => {
    const history = useHistory();
    const currentPath = history.location.pathname;

    const setSearchBar = () => {
        if (currentPath.includes('/ingredients')) {
            return <AutocompleteBar resetDrinkList={resetDrinkList} resetSpinner={resetSpinner} />
        }
        else {
            return <SearchBar resetDrinkList={resetDrinkList} resetSpinner={resetSpinner} />
        };
    };

    return (
        <>
            <Logo />
            <div className='WelcomePage-wrapper'>
                <div className='WelcomePage'>
                    <div className='title'>What would you like to drink?</div>
                    <div className='SearchBarWrapper'>
                        {setSearchBar()}
                    </div>

                    <NavigationBar />
                    <SuggestionsList resetDrinkList={resetDrinkList} />
                </div>
            </div>
        </>
    );
};

export default WelcomePage;