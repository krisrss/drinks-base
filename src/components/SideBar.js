import React from 'react';
import FilterBlock from './FilterBlock';
import '../css/SideBar.css';

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
}

const SideBar = ({ drinksData, unfilteredDrinksData }) => {

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
                Refine your search: <a>clear all</a>
            </div>
            <div className='sections'>
                {filters}
            </div>
        </div>
    );

};

export default SideBar;