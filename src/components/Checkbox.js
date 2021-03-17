import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';

const Checkbox = ({ filterData }) => {
    const urlStats = useLocation();
    const history = useHistory();
    const queryList = queryString.parse(urlStats.search);

    const getChckeboxValue = (event) => {
        const value = event.target.value;
        const removeSpace = value.split(' ').join('').toLowerCase();
        const filterType = removeSpace.split('/').join('');
        const mainPath = urlStats.pathname;
        const currentQuery = urlStats.search;

        if (urlStats.search == "") {
            history.push(`${mainPath}?filter=${filterType}`);
        }
        else {
            history.push(`${currentQuery}&filter=${filterType}`);
        }

        console.log(queryList.filter);
    }

    return (
        <label>
            <input type="checkbox" value={filterData[0]} onClick={getChckeboxValue} />
            <span>{`${filterData[0]} ${filterData[1]}`}</span>
        </label>
    );
};

export default Checkbox;