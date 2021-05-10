import React from 'react';
import SearchBar from '../components/SearchBar';
import NavigationBar from '../components/NavigationBar';
import SuggestionsList from '../components/SuggestionsList';
import AutocompleteBar from '../components/AutocompleteBar';
import { useHistory } from 'react-router-dom';
import '../css/WelcomePage.css';
import Logo from '../components/Logo';

const WelcomePage = ({resetSpinner }) => {
    const history = useHistory();
    const currentPath = history.location.pathname;

    const setSearchBar = () => {
        if (currentPath.includes('/ingredients')) {
            return <AutocompleteBar resetSpinner={resetSpinner} />
        }
        else {
            return <SearchBar resetSpinner={resetSpinner} />
        };
    };

    return (
        <>
            <div className='jumbotron'>
                <div className='WelcomePage'>
                    <div className='title'>What would you like to drink?</div>
                    <div className='SearchBarWrapper'>
                        {setSearchBar()}
                    </div>

                    <NavigationBar />
                    <SuggestionsList />
                </div>
            </div>
        </>
    );
};

export default WelcomePage;