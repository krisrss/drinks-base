import React from 'react';
import { useHistory } from 'react-router-dom';

const SearchTermBlock = ({ searchTerm }) => {
    const history = useHistory();

    const onClickHandler = (term) => {
        const currentPath = history.location.pathname;
        const currentUrl = currentPath;
        const updatedUrl = currentUrl.replaceAll(`/${term}`, "");

        history.push(updatedUrl, { state: currentUrl });
    }

    const test = Object.values(searchTerm).map((term, index) => {
        return (
            <span key={index} onClick={() => onClickHandler(term)} style={{ border: '1px solid black', padding: '4px' }}>
                {`${term}`}
            </span>
        )
    })

    return (
        <>, with keywords {test}</>
    )
};

export default SearchTermBlock;