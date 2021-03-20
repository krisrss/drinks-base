import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';

const Checkbox = ({ filterData, filterCategory }) => {
    const [boxClicked, setBoxClicked] = useState(true);

    const urlStats = useLocation();
    const history = useHistory();
    const mainPath = urlStats.pathname;
    const currentQuery = urlStats.search;
    const queryList = queryString.parse(urlStats.search);

    const cleanQueryAtIndex = (arr, position, amount) => {
        let array = arr.split('');
        array.splice(position, amount);
        array = array.join('');
        return array;
    };

    const getChckeboxValue = (event) => {
        setBoxClicked(!boxClicked);
        const value = event.target.value;
        const removeSpace = value.split(' ').join('').toLowerCase();
        const filterType = removeSpace.split('/').join('');

        const intitialQuery = `${mainPath}?${filterCategory}=${filterType}`;
        const fullPathQuery = `${currentQuery}&${filterCategory}=${filterType}`

        if (boxClicked === true) {
            if (currentQuery == "") {
                history.push(intitialQuery);
            }
            else {
                history.push(fullPathQuery);
            }
        }
        else {
            var queryValue = currentQuery.replace(`${filterCategory}=${filterType}`, '');

            if (queryValue[1] === '&') {
                history.push(cleanQueryAtIndex(queryValue, 1, 1));
            }
            else if (queryValue[queryValue.length - 1] === '&') {
                history.push(cleanQueryAtIndex(queryValue, queryValue.length - 1, 1));
            }
            else {
                var cleanedQuery = queryValue.replace("&&", "&");
                history.push(`${mainPath}${cleanedQuery}`);
            }
        }
    }

    return (
        <label>
            <input type="checkbox" value={filterData[0]} onClick={getChckeboxValue} />
            <span>{`${filterData[0]} ${filterData[1]}`}</span>
        </label>
    );
};

export default Checkbox;