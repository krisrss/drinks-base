import React from 'react';
import '../css/InputTag.css';

const InputTag = ({ tagName, deleteTags }) => {
    return (
        <span key={tagName} className='InputTag' onClick={() => deleteTags(tagName)}>
            {tagName}
        </span>
    )
};

export default InputTag;