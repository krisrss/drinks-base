import React, { useState } from 'react';
import Checkbox from './Checkbox';

const FilterBlock = ({ type, drinksData, unfilteredDrinksData }) => {
    const [filterStatus, setFilterStatus] = useState(true);

    const countDistintByType = (arr, searchType) => {
        let alcoholList = [];
        const counts = {};

        for (var i = 0; i < arr.length; i++) {
            alcoholList.push(arr[i][searchType])
        }

        for (var x = 0; x < alcoholList.length; x++) {
            counts[alcoholList[x]] = 1 + (counts[alcoholList[x]] || 0);
        };
        return counts;
    };

    const prefilteredData = Object.entries(countDistintByType(drinksData, type));

    const filters = Object.entries(countDistintByType(unfilteredDrinksData, type)).map((filterData, index) => {
        const unlockCheckbox = !prefilteredData.flat().includes(filterData[0]);
        return (
            <Checkbox key={index} filterData={filterData} filterCategory={type} unlockCheckbox={unlockCheckbox} prefilteredData={prefilteredData} />
        )
    });

    let buttonName = null;
    const setFilter = () => {
        if (filterStatus === false) {
            buttonName = 'Hide';
            return filters;
        }
        else {
            buttonName = 'Show';
            return filters.slice(0, 3);
        };
    };

    const setButton = () => {
        if (filters.length > 3) {
            return <button onClick={() => setFilterStatus(!filterStatus)}>{buttonName}</button>
        }
        else {
            return null;
        };
    };

    return (
        <div>
            {setFilter()}
            {setButton()}
        </div>
    );
};

export default FilterBlock;