import React from 'react';
import '../css/InputTag.css';

const InputTag = ({ tagName, deleteTags }) => {

    const onClickHandler = (e) => {
        e.stopPropagation();
        deleteTags(tagName);
    }

    return (
        <span key={tagName} className='InputTag' onClick={onClickHandler}>
            {tagName}
        </span>
    )
};

export default InputTag;