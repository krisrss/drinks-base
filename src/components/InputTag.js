import React from 'react';
import '../css/InputTag.css';

const InputTag = ({ tagName }) => {
    return (
        <>
            <span key={tagName} suppressContentEditableWarning={true} className='InputTag' contentEditable="false">
                {tagName}
            </span>
            <i></i>
        </>
    )
};

export default InputTag;