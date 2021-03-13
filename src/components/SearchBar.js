import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () => {

    const [input, setInput] = useState('');

    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} type='text' />
            <Link to={`/${input}`}>
                <button >
                    Find
            </button>
            </Link>

        </div>
    );
};

export default SearchBar;