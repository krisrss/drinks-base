import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../css/SearchBar.css';

const SearchBar = ({ resetDrinkList, resetSpinner }) => {

    const [input, setInput] = useState('');
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
        if (currentPath === '/') {
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

    return (
        <div className='SearchBar'>
            <input value={input} onChange={onChangeHandler} type='text' placeholder={setPlaceholder()} />
            <Link to={setPath} onClick={onClickHandler} className='button'>
                SEARCH
            </Link>
        </div>
    );
};

export default SearchBar;