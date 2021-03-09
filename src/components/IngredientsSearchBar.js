import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const IngredientsSearchBar = () => {

    const [input, setInput] = useState('');
    const [path, setPath] = useState('/ingredients');

    const onChangeHandler = (e) => {
        setInput(e.target.value);
    };

    const onClickHandler = () => {
        let verb = path;
        setPath(verb += `/${input}`);
    };

    return (
        <div className='searchbar'>
            <div className='ui left icon input'>
                <input value={input} onChange={(e) => onChangeHandler(e)} type='text' />
                <i className='search icon'></i>
            </div>
            <Link to={`${path}/${input}`} onClick={onClickHandler}>
                <button className='ui button'>
                    Find
                </button>
            </Link>
        </div>
    );
};

export default IngredientsSearchBar;