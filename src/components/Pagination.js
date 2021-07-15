import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import '../css/Pagination.css';

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

    const onClickHandler = (e, number) => {
        e.preventDefault()
        paginate(number);
        let cleanedQuery = currentQuery.replace(`?page=${queryList.page}`, '');
        history.push(`${mainPath}?page=${number}${cleanedQuery}`)
    };

    const setActivePage = (number) => {
        if (queryList.page === undefined && number === 1) {
            return 'active-page';
        }
        else if (parseInt(queryList.page, 10) === number) {
            return 'active-page'
        }
    };

    const setPrevButton = () => {
        if (queryList.page === undefined || parseInt(queryList.page, 10) === 1) {
            return 'pagination-btn-hidden'
        }
    };

    const setNextButton = () => {
        const lastPage = Math.ceil(totalDrinks.length / drinksPerPage);
        if (parseInt(queryList.page, 10) === lastPage) {
            return 'pagination-btn-hidden'
        }
    };

    return (
        <>
            {totalDrinks.length !== 0 ?
                <div className='Pagination-wrap'>
                    <nav>
                        <ul className='pagination justify-content-center'>
                            <li className="page-item"><a className={`page-link page-nav-buttons ${setPrevButton()}`} href={void (0)}>Prev</a></li>
                            {pageNumbers.map((number) => {
                                return (
                                    <li key={number} className='page-item page-nr'>
                                        <a onClick={(e) => onClickHandler(e, number)} href={void (0)} className={`page-link ${setActivePage(number)}`}>
                                            <span>{number}</span>
                                        </a>
                                    </li>
                                )
                            })}
                            <li className="page-item"><a className={`page-link page-nav-buttons ${setNextButton()}`} href={void (0)}>Next</a></li>
                        </ul>
                    </nav>
                </div>
                : null
            }
        </>
    )
};

export default Pagination;