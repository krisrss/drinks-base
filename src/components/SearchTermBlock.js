import React from 'react';
import { useHistory } from 'react-router-dom';

const SearchTermBlock = ({ searchTerm, resetSpinner, resetDrinkList }) => {
    const history = useHistory();

    const onClickHandler = (term) => {
        const currentPath = history.location.pathname;
        const cleanedPath = currentPath.replaceAll(`/ingredients`, "");
        const queryWords = cleanedPath.split('/');

        var index = queryWords.indexOf(term);
        if (index >= 0) {
            queryWords.splice(index, 1);
        }

        const finalQuery = queryWords.join('/');

        resetSpinner();
        resetDrinkList();

        history.push(`/ingredients${finalQuery}`, { state: currentPath });

    }

    const searchTerms = Object.values(searchTerm).map((term, index) => {
        return (
            <span key={index} onClick={() => onClickHandler(term)} style={{ border: '1px solid black', padding: '4px' }}>
                {`${searchTerms}`}
            </span>
        )
    })

    return (
        <>, with keywords {test}</>
    )
};

export default SearchTermBlock;