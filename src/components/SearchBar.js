import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../css/SearchBar.css';

const SearchBar = ({ resetDrinkList, resetSpinner }) => {

    const [input, setInput] = useState('');
    const history = useHistory();
    const currentPath = history.location.pathname;
    const [placeholderTxt, setPlaceholderTxt] = useState('');

    const onChangeHandler = (e) => {
        setInput(e.target.value);
    };

    const onClickHandler = () => {
        resetDrinkList();
        resetSpinner();
    };

    const setPath = () => {
        if (input === '') {
            return `/`;
        }
        else if (input.includes('/') || input.includes('?') || input.includes('#') || input.includes('%')) {
            setInput('')
            return `/`;
        }
        else {
            return `/${input}`;
        };
    };

    useEffect(() => {
        if (input === '') {
            setPlaceholderTxt('Enter a name of a drink...')
        }
    },[input]);

    useEffect(() => {
        if (currentPath !== '/') {
            const urlTerm = currentPath.split('/')[1];
            setInput(urlTerm);
        }
    }, []); //eslint-disable-line react-hooks/exhaustive-deps

    const clearInput = () => {
        setInput('');
    }

    const clearTextIcon = () => {
        if (input === "" || input === undefined) {
            return null;
        }
        else {
            return <i onClick={clearInput} className="fas fa-times clear-icon"></i>
        };
    };

    const handleKeyPress = (target) => {
        if (target.charCode === 13) {
            resetDrinkList();
            resetSpinner();
            history.push(setPath());
        }
    };

    return (
        <div className='SearchBar'>
            <input onKeyPress={(e) => handleKeyPress(e)} value={input} onChange={onChangeHandler} type='text' placeholder={placeholderTxt} />
            <Link to={setPath} onClick={onClickHandler} className='button'>
                SEARCH
            </Link>
            {clearTextIcon()}
        </div>
    );
};

export default SearchBar;