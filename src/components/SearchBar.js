import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () => {

    const [input, setInput] = useState('');

    const onChangeHandler = (e) => {
        setInput(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={input} onChange={onChangeHandler} type='text' />
                <Link to={`/${input}`}>
                    <button >
                        Find
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SearchBar;