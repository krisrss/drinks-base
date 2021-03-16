import React from 'react';
import Checkbox from './Checkbox';

const FilterBlock = ({ type, drinksData }) => {

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

    const filters = Object.entries(countDistintByType(drinksData, type)).map((filterData, index) => {
        return (
            <Checkbox filterData={filterData} />
        )
    });

    return (
        <div>
            {filters}
        </div>
    );
};

export default FilterBlock;