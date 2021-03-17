import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Checkbox = ({ filterData }) => {
    const search = useLocation();
    const history = useHistory();

    const getChckeboxValue = (event) => {
        const value = event.target.value;
        const removeSpace = value.split(' ').join('').toLowerCase();
        const filterType = removeSpace.split('/').join('');
        const mainPath = search.pathname;
        history.push(`${mainPath}?filter=${filterType}`);
    }

    return (
        <label>
            <input type="checkbox" value={filterData[0]} onClick={getChckeboxValue} />
            <span>{`${filterData[0]} ${filterData[1]}`}</span>
        </label>
    );
};

export default Checkbox;