import React from 'react';

const Checkbox = ({ filterData }) => {
    return (
        <label>
            <input type="checkbox" />
            <span>{`${filterData[0]} ${filterData[1]}`}</span>
        </label>
    );
};

export default Checkbox;