import React from 'react';
import FilterBlock from './FilterBlock';

const filterTypes = ['strAlcoholic', 'strCategory', 'strGlass'];

const SideBar = ({ drinksData }) => {

    let filters = filterTypes.map((type) => {
        return (
            <FilterBlock type={type} drinksData={drinksData} />
        )
    })

    return (
        <div>
            {filters}
        </div>
    );

};

export default SideBar;