import React from 'react';
import Checkbox from './Checkbox';

const FilterBlock = ({ type, drinksData, unfilteredDrinksData }) => {

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

    return (
        <div>
            {filters}
        </div>
    );
};

export default FilterBlock;