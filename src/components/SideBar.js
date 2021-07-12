import React from 'react';
import FilterBlock from './FilterBlock';
import '../css/SideBar.css';
import { useHistory } from 'react-router';

const filterTypes = ['makeDifficulty', 'strAlcoholic', 'strCategory', 'strGlass'];

const setFilterHeader = (header) => {
    if (header === 'makeDifficulty') {
        return 'Difficulty'
    }
    else if (header === 'strAlcoholic') {
        return 'Drink Type'
    }
    else if (header === 'strCategory') {
        return 'Category'
    }
    else if (header === 'strGlass') {
        return 'Glass Type'
    }
};

const SideBar = ({ drinksData, unfilteredDrinksData }) => {
    const history = useHistory();

    const clearAllQueries = () => {
        history.push(`${history.location.pathname}?page=1`)
    };


    const displayClearButton = () => {
        const currentQuery = history.location.search;
        const pageQueryPart = currentQuery.substring(0, 7);
        let cleanedQuery = currentQuery.replace(pageQueryPart, '');

        if (cleanedQuery !== '') {
            return true
        }
        else {
            return false
        }
    }

    let filters = filterTypes.map((type, index) => {
        return (
            <div key={index}>
                <div className='header'>
                    {setFilterHeader(type)}
                </div>

                <FilterBlock type={type} drinksData={drinksData} unfilteredDrinksData={unfilteredDrinksData} />
            </div>
        )
    })

    return (
        <div className='SideBar'>
            <div className='frontText'>
                Refine your search:

                {displayClearButton() ?
                    <span onClick={clearAllQueries} className='clearAllButton'>
                        clear all
                    </span>
                    : null}

            </div>
            <div className='sections'>
                {filters}
            </div>
        </div>
    );
};

export default SideBar;