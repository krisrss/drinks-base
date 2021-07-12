import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';

const Pagination = ({ drinksPerPage, totalDrinks, paginate }) => {
    const pageNumbers = [];
    const urlStats = useLocation();
    const queryList = queryString.parse(urlStats.search);
    const mainPath = urlStats.pathname;
    const currentQuery = urlStats.search;
    const history = useHistory();

    for (let i = 1; i <= Math.ceil(totalDrinks.length / drinksPerPage); i++) {
        pageNumbers.push(i);
    };

    const onClickHandler = (number) => {
        paginate(number);
        let cleanedQuery = currentQuery.replace(`?page=${queryList.page}`, '');
        history.push(`${mainPath}?page=${number}${cleanedQuery}`)
    };

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map((number) => {
                    return (
                        <li key={number} className='page-item'>
                            <a onClick={() => onClickHandler(number)} href='javascript:void(0)' className='page-link'>
                                {number}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
};

export default Pagination;