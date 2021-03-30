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

        const sortedArray = Object.entries(counts).sort(function (a, b) {
            return b[1] - a[1];
        });

        if (type === 'makeDifficulty') {
            const countCopy = { ...counts };

            const sortedStars = Object.entries(countCopy).sort(function (a, b) {
                return b[0][0] - a[0][0];
            });

            return sortedStars;
        }
        else {
            return sortedArray;
        }
    };

    const prefilteredData = countDistintByType(drinksData, type);
    const unFilteredDataList = countDistintByType(unfilteredDrinksData, type);

    const filters = unFilteredDataList.map((filterData, index) => {
        const unlockCheckbox = !prefilteredData.flat().includes(filterData[0]);
        return (
            <Checkbox
                key={index}
                filterData={filterData}
                filterCategory={type}
                unlockCheckbox={unlockCheckbox}
                prefilteredData={prefilteredData}
            />
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