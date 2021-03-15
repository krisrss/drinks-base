import React from 'react';

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

    const filters = Object.entries(countDistintByType(drinksData, type)).map((item, index) => {
        return (
            <label>
                <input type="checkbox" />
                <span>{`${item[0]} ${item[1]}`}</span>
            </label>
        )
    });

    return (
        <div>
            {filters}
        </div>
    );
};

export default FilterBlock;