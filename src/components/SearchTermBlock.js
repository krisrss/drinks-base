import React from 'react';
import '../css/SearchTermBlock.css';
import '../css/Tag.css';

const SearchTermBlock = ({ searchTerm }) => {
    const termQuantity = (Object.values(searchTerm).length);

    const setSearchTerm = (term, index, termQuantity) => {
        if (termQuantity === 1) {
            return (
                <span key={index}>
                    <span className='termBold'>{term}</span>
                </span>
            )
        }
        else if (termQuantity === 2) {
            if (index === 0) {
                return (
                    <span key={index}>
                        <span className='termBold'>{term}</span>
                    </span>
                )
            }
            else if (index === 1) {
                return (
                    <span key={index}>
                        <span> and </span> <span className='termBold'>{term}</span>
                    </span>
                )
            }
        }
        else if (termQuantity === 3) {
            if (index === 0) {
                return (
                    <span key={index}>
                        <span className='termBold'>{term}</span>
                    </span>
                )
            }
            else if (index === 1) {
                return (
                    <span key={index}>
                        <span>, </span> <span className='termBold'>{term}</span>
                    </span>
                )
            }
            else if (index === 2) {
                return (
                    <span key={index}>
                        <span> and </span><span className='termBold'>{term}</span>
                    </span>
                )
            }
        };
    };

    const searchTerms = Object.values(searchTerm).map((term, index) => {
        return (
            <span key={term}>
                {setSearchTerm(term, index, termQuantity)}
            </span>
        )
    });

    return (
        <div className='SearchTermBlock'>
            {searchTerms}
        </div>
    )
};

export default SearchTermBlock;