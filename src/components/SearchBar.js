import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const SearchBar = () => {

    const [input, setInput] = useState('');
    const history = useHistory();
    const currentPath = history.location.pathname;

    const onChangeHandler = (e) => {
        setInput(e.target.value);
    };

    const onClickHandler = () => {
        if (currentPath.includes('/ingredients')) {
            let verb = currentPath;
            verb += `/${input}`;
        }
    };
    const setPath = () => {
        if (currentPath.includes('/ingredients')) {
            return `${currentPath}/${input}`
        }
        else {
            return `/${input}`
        }
    }

    return (
        <div>
            <div>
                <input value={input} onChange={onChangeHandler} type='text' />
                <Link to={setPath} onClick={onClickHandler}>
                    <button >
                        Find
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SearchBar;