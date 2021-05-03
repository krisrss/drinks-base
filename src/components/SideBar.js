import React from 'react';
import FilterBlock from './FilterBlock';
import '../css/SideBar.css';

const filterTypes = ['makeDifficulty', 'strAlcoholic', 'strCategory', 'strGlass'];

const SideBar = ({ drinksData, unfilteredDrinksData }) => {

    let filters = filterTypes.map((type, index) => {
        return (
            <div key={index}>
                ____________________________
                <FilterBlock type={type} drinksData={drinksData} unfilteredDrinksData={unfilteredDrinksData} />
            </div>
        )
    })

    return (
        <div className='SideBar'>
            <div className='frontText'>
                Refine your search:
            </div>
            <div className='sections'>
                {filters}
            </div>
        </div>
    );

};

export default SideBar;