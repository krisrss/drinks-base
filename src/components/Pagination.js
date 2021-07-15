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

    const pageQuery = '?page=';
    const pageQueryFull = currentQuery.substring(0, 7);
    let cleanedQuery = currentQuery.replace(pageQueryFull, '');
    let currentPageNumber = currentQuery[6];
    let pageNr = parseInt(currentPageNumber, 10);
    const totalPageNr = Math.ceil(totalDrinks.length / drinksPerPage);

    for (let i = 1; i <= totalPageNr; i++) {
        pageNumbers.push(i);
    };

    const onClickHandler = (e, number) => {
        e.preventDefault()
        paginate(number);
        let cleanedQuery = currentQuery.replace(`?page=${queryList.page}`, '');
        history.push(`${mainPath}?page=${number}${cleanedQuery}`);
        window.scrollTo(0, 0);
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
        const lastPage = totalPageNr;
        if (parseInt(queryList.page, 10) === lastPage) {
            return 'pagination-btn-hidden'
        }
    };

    const nextButtonClickHandler = () => {
        if (currentPageNumber === undefined) {
            history.push(`${pageQuery}2${cleanedQuery}`)
        }
        else {
            history.push(`${pageQuery}${pageNr + 1}${cleanedQuery}`)
        }
        window.scrollTo(0, 0);
    };

    const prevButtonClickHandler = () => {
        history.push(`${pageQuery}${pageNr - 1}${cleanedQuery}`)
        window.scrollTo(0, 0);
    };

    return (
        <>
            {totalPageNr > 1 ?
                <div className='Pagination-wrap'>
                    <nav>
                        <ul className='pagination justify-content-center'>
                            <li onClick={prevButtonClickHandler} className="page-item"><a className={`page-link page-nav-buttons ${setPrevButton()}`} href={void (0)}>Prev</a></li>
                            {pageNumbers.map((number) => {
                                return (
                                    <li key={number} className='page-item page-nr'>
                                        <a onClick={(e) => onClickHandler(e, number)} href={void (0)} className={`page-link ${setActivePage(number)}`}>
                                            <span>{number}</span>
                                        </a>
                                    </li>
                                )
                            })}
                            <li onClick={nextButtonClickHandler} className="page-item"><a className={`page-link page-nav-buttons ${setNextButton()}`} href={void (0)}>Next</a></li>
                        </ul>
                    </nav>
                </div>
                : null
            }
        </>
    )
};

export default Pagination;