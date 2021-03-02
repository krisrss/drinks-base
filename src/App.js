import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import DrinkList from './components/DrinkList';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const getInput = (input) => {
        setSearchTerm(input);
    };

    return (
        <div>
            <SearchBar getInput={getInput} />
            <DrinkList searchTerm={searchTerm} />
        </div>
    );
};

export default App;