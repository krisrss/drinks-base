import React, { useState } from 'react';
import './SearchBar.css';
import { Link } from 'react-router-dom';

const SearchBar = () => {

    const [input, setInput] = useState('');

    return (
        <div className='searchbar'>
            <div className='ui left icon input'>
                <input value={input} onChange={(e) => setInput(e.target.value)} type='text' />
                <i className='search icon'></i>
            </div>
            <Link to={`/${input}`}>
                <button className='ui button'>
                    Find
            </button>
            </Link>
        </div>
    );
};

export default SearchBar;