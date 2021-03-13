import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const IngredientsSearchBar = () => {

    const [input, setInput] = useState('');
    const [path, setPath] = useState(window.location.pathname);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
    };

    const onClickHandler = () => {
        let verb = path;
        setPath(verb += `/${input}`);
    };

    return (
        <div>
            <div>
                <input value={input} onChange={(e) => onChangeHandler(e)} type='text' />
                <Link to={`${path}/${input}`} onClick={onClickHandler}>
                    <button>
                        Find
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default IngredientsSearchBar;