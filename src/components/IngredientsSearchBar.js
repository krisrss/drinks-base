import React from 'react';

const IngredientsSearchBar = () => {

    return (
        <div className='searchbar'>
            <div className='ui left icon input'>
                <input type='text' />
                <i className='search icon'></i>
            </div>
            <button className='ui button'>
                Find
            </button>
        </div>
    );
};

export default IngredientsSearchBar;