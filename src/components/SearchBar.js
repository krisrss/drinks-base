import React, { useState } from 'react';

const SearchBar = ({ getInput }) => {

    const [input, setInput] = useState('');

    return (
        <div>
            <label>Enter term:</label>
            <br />
            <input value={input} onChange={(e) => setInput(e.target.value)} type='text' />
            <button onClick={() => getInput(input)}>Search</button>
        </div>
    );
};

export default SearchBar;