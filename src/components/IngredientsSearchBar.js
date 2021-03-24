import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const IngredientsSearchBar = () => {
    const [input, setInput] = useState('');
    const history = useHistory();
    const currentPath = history.location.pathname;

    const onChangeHandler = (e) => {
        setInput(e.target.value);
    };

    const onClickHandler = () => {
        let verb = currentPath;
        verb += `/${input}`;
        history.push(`${currentPath}/${input}`);
    };

    return (
        <div>
            <div>
                <input value={input} onChange={(e) => onChangeHandler(e)} type='text' />
                <button onClick={onClickHandler}>
                    Find
                </button>
            </div>
        </div>
    );
};

export default IngredientsSearchBar;