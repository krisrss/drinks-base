import React from "react";
import '../css/SearchBar.css';

const AutocompleteSearch = () => {
    return (
        <div className='SearchBar' >
            <input type="text" />
            <span className='button'>
                SEARCH
            </span>
        </div >
    );
}
export default AutocompleteSearch;