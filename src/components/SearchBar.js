import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../css/SearchBar.css';

const SearchBar = ({ resetDrinkList, resetSpinner }) => {

    const [input, setInput] = useState(undefined);
    const history = useHistory();
    const currentPath = history.location.pathname;

    const onChangeHandler = (e) => {
        setInput(e.target.value);
    };

    const onClickHandler = () => {
        resetDrinkList();
        resetSpinner();
    };
    const setPath = () => {
        return `/${input}`;
    }

    const setPlaceholder = () => {
        if (currentPath === '/' || input === '') {
            return 'Search drinks by keyword...';
        }
        else {
            return '';
        };
    };

    useEffect(() => {
        if (currentPath !== '/') {
            const urlTerm = currentPath.split('/')[1];
            setInput(urlTerm);
        }
    }, []);

    const clearInput = () => {
        setInput('');
    }

    return (
        <div className='SearchBar'>
            <input value={input} onChange={onChangeHandler} type='text' placeholder={setPlaceholder()} />
            <Link to={setPath} onClick={onClickHandler} className='button'>
                SEARCH
            </Link>
            <i onClick={clearInput} class="fas fa-times clear-icon"></i>
        </div>
    );
};

export default SearchBar;