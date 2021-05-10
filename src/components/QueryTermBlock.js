import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { removeQueryTerm, setStars } from '../functions/Utils';
import '../css/QueryTermBlock.css';
import '../css/Tag.css';

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
            <span className='Tag' key={index} onClick={() => onClickHandler(term)}>
                {term[0] === 'makeDifficulty' ? setStars(term[1][0]) : `${term[1]}`}
            </span>
        )
    })

    return (

        <div className='QueryTermBlock'>
            <span className='title'>{queryArray.length !== 0 ? 'Sorted By:' : ''}</span>
            <span>{queryTerms}</span>
        </div>
    );
};

export default QueryTermBlock;