import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

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
    };

    return (
        <div>
            <div>
                <input value={input} onChange={(e) => onChangeHandler(e)} type='text' />
                <Link to={`${currentPath}/${input}`} onClick={onClickHandler}>
                    <button>
                        Find
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default IngredientsSearchBar;