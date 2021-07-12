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

    const cleanedQueryArray = (arr) => {

        let queryArr = arr;

        for (let i = 0; i < arr.length; i++) {
            if (queryArr[i][0] === 'page') {
                queryArr.splice(i, 1);
            }
        }

        return queryArr;

    }

    const onClickHandler = (term) => {
        const termToReplace = `${term[0]}=${term[1]}`;
        const fixedQuery = currentQuery.replaceAll("%20", " ");
        var queryValue = fixedQuery.replace(termToReplace, "");
        removeQueryTerm(history, queryValue, mainPath);
    };

    const setFixedValues = (value) => {
        let mainValue = value;
        const doubleSpace = mainValue.includes("  ");
        if (doubleSpace === true) {
            return mainValue.replaceAll("  ", ' / ');
        }
        else if (mainValue.includes('OtherUnknown')) {
            return 'Other/Unknown'
        }
        else if (mainValue.includes('MargaritaCoupette glass')) {
            return 'Margarita/Coupette glass'
        }
        else {
            return value;
        };
    };

    const queryTerms = cleanedQueryArray(queryArray).map((term, index) => {
        return (
            <span className='Tag' key={index} onClick={() => onClickHandler(term)}>
                {term[0] === 'makeDifficulty' ? setStars(term[1][0]) : `${setFixedValues(term[1])}`}
            </span>
        )
    })

    return (
        <div className='QueryTermBlock'>
            <span className='title'>{cleanedQueryArray(queryArray).length !== 0 ? 'Sorted By:' : ''}</span>
            <span>{queryTerms}</span>
        </div>
    );
};

export default QueryTermBlock;