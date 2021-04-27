import React from 'react';
import SearchBar from '../components/SearchBar';
import NavigationBar from '../components/NavigationBar';
import SuggestionsList from '../components/SuggestionsList';
import AutocompleteBar from '../components/AutocompleteBar';
import { useHistory } from 'react-router-dom';
import '../css/WelcomePage.css';

const WelcomePage = ({ resetDrinkList }) => {
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
            <div className='logo'>
                Drink Base Logo Place holder
            </div>
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