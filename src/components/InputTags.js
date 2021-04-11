import React from 'react';
import '../css/InputTags.css';

const InputTags = ({ selectedItems }) => {
    const setTags = selectedItems.map(item => (
        <span className='Tag'>{item}</span>
    ));
    return (
        <div className='InputTags'>
            {setTags}
        </div>
    )
};

export default InputTags;