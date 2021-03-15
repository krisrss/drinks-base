import React from 'react';

const SideBar = ({ drinksData }) => {

    const countDistintByType = (searchType) => {
        let alcoholList = [];
        const counts = {};

        for (var i = 0; i < drinksData.length; i++) {
            alcoholList.push(drinksData[i][searchType])
        }

        for (var x = 0; x < alcoholList.length; x++) {
            counts[alcoholList[x]] = 1 + (counts[alcoholList[x]] || 0);
        };
        return counts;
    };

    return (
        <div>
            {console.log(countDistintByType('strAlcoholic'))}
            {console.log(countDistintByType('strCategory'))}
            {console.log(countDistintByType('strGlass'))}

            <h1>{drinksData.length}</h1>
            <h1>Side Bar</h1>
        </div>
    );
};

export default SideBar;