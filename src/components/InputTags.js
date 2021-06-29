import React from 'react';
import '../css/InputTags.css';
import '../css/Tag.css';


const InputTags = ({ selectedItems, deleteTags, resetTextIndent }) => {

    const onClickHandler = (item) => {
        deleteTags(item);
        resetTextIndent(item);
    };

    const setTags = selectedItems.map(item => (
        <span key={item} onClick={() => onClickHandler(item)} className='Tag'>{item}</span>
    ));
    return (
        <div className='InputTags'>
            {setTags}
        </div>
    )
};

export default InputTags;