import React from 'react';
import SearchBar from '../components/SearchBar';
import NavigationBar from '../components/NavigationBar';
import SuggestionsList from '../components/SuggestionsList';
import '../css/WelcomePage.css';
import AutocompleteBar from '../components/AutocompleteBar';


const WelcomePage = () => {
    return (
        <>
            <div className='logo'>
                Drink Base Logo Place holder
            </div>
            <div className='jumbotron'>
                <div className='title'>What would you like to drink?</div>
                <AutocompleteBar />
                <NavigationBar />
                <SuggestionsList />
            </div>
        </>
    );
};

export default WelcomePage;