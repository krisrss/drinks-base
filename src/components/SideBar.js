import React from 'react';
import FilterBlock from './FilterBlock';

const filterTypes = ['strAlcoholic', 'strCategory', 'strGlass'];

const SideBar = ({ drinksData }) => {

    let filters = filterTypes.map((type, index) => {
        return (
            <div key={index}>
                ============
                <FilterBlock type={type} drinksData={drinksData} />
            </div>
        )
    })

    return (
        <div>
            {filters}
        </div>
    );

};

export default SideBar;