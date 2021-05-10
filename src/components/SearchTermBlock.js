import React from 'react';
import '../css/SearchTermBlock.css';
import '../css/Tag.css';


const SearchTermBlock = ({ searchTerm }) => {
    const searchTerms = Object.values(searchTerm).map((term, index) => {
        return (
            <span key={index}>
                {`${term}`}
            </span>
        )
    })

    return (
        <div className='SearchTermBlock'>
            {searchTerms}
        </div>
    )
};

export default SearchTermBlock;