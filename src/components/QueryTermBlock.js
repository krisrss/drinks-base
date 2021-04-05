import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { removeQueryTerm } from '../functions/Utils';

const QueryTermBlock = () => {
    const history = useHistory();
    const urlStats = useLocation();
    const mainPath = urlStats.pathname;
    const currentQuery = urlStats.search;
    const queryList = queryString.parse(urlStats.search);
    const queryArray = Object.entries(queryList);

    const onClickHandler = (term) => {
        var queryValue = currentQuery.replace(`${term[0]}=${term[1]}`, '');
        removeQueryTerm(history, queryValue, mainPath);
    };

    const queryTerms = queryArray.map((term, index) => {
        return (
            <span key={index} onClick={() => onClickHandler(term)} style={{ border: '1px solid black', padding: '4px' }}>
                {` ${term[1]} `}
            </span>
        )
    })

    return (
        <span>Filtered by: {queryTerms}</span>
    );
};

export default QueryTermBlock;