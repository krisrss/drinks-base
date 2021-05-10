import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/SearchTermBlock.css';
import '../css/Tag.css';


const SearchTermBlock = ({ searchTerm, resetSpinner, getClicketTerm }) => {
    const history = useHistory();

    const onClickHandler = (term) => {
        const currentPath = history.location.pathname;
        const cleanedPath = currentPath.replaceAll(`/ingredients`, "");
        const queryWords = cleanedPath.split('/');
        var index = queryWords.indexOf(term);

        if (index >= 0) {
            queryWords.splice(index, 1);
        }

        const firstPathPart = currentPath.split('/')[1] === 'ingredients' ? '/ingredients' : '/';
        const finalQuery = queryWords.join('/');

        if (currentPath.includes('ingredients')) {
            getClicketTerm(term);
        }
        resetSpinner();

        history.push(`${firstPathPart}${finalQuery}`, { state: currentPath });

    }

    const searchTerms = Object.values(searchTerm).map((term, index) => {
        return (
            <span className='Tag' key={index} onClick={() => onClickHandler(term)}>
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