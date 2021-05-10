import React from 'react';
import '../css/SearchTermBlock.css';
import '../css/Tag.css';


const SearchTermBlock = ({ searchTerm }) => {
    const searchTerms = Object.values(searchTerm).map((term, index) => {
        if (index === 0) {
            return (
                <span key={index}>
                    {`${term}`}
                </span>
            )
        }
        else if (index === 1) {
            return (
                <span key={index}>
                    {`, ${term}`}
                </span>
            )
        }
        else if (index === 2) {
            return (
                <span key={index}>
                    {` and ${term}`}
                </span>
            )
        }
    })

    return (
        <div className='SearchTermBlock'>
            {searchTerms}
        </div>
    )
};

export default SearchTermBlock;