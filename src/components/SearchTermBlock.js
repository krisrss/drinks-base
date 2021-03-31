import React from 'react';

const SearchTermBlock = ({ searchTerm }) => {

    const test = Object.values(searchTerm).map((term, index) => {
        return (
            <span key={index}>{`/ ${term}`}</span>
        )
    })

    return (
        <>, with keywords {test}</>
    )
};

export default SearchTermBlock;