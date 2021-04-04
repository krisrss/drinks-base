import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';


const QueryTermBlock = () => {
    const urlStats = useLocation();
    const queryList = queryString.parse(urlStats.search);

    const queryArray = Object.values(queryList);
    
    const queryTerms = queryArray.map((term, index) => {
        return (
            <span key={index} style={{ border: '1px solid black', padding: '4px' }}>
                {` ${term} `}
            </span>
        )
    })

    return (
        <span>Filtered by: {queryTerms}</span>
    );
};

export default QueryTermBlock;