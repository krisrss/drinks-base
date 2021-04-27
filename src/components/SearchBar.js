import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../css/SearchBar.css';

const SearchBar = ({ resetDrinkList }) => {

    const [input, setInput] = useState('');
    const history = useHistory();
    const currentPath = history.location.pathname;

    const onChangeHandler = (e) => {
        setInput(e.target.value);
    };
    
    const onClickHandler = () => {
        resetDrinkList();
    };
    const setPath = () => {
        return `/${input}`;
    }

    return (
        <div className='SearchBar'>
            <input value={input} onChange={onChangeHandler} type='text' placeholder='Search drinks by keyword...' />
            <Link to={setPath} onClick={onClickHandler} className='button'>
                SEARCH
            </Link>
        </div>
    );
};

export default SearchBar;