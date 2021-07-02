import React from 'react';
import '../css/InputTags.css';
import '../css/Tag.css';


const InputTags = ({ inputIndent, selectedItems, deleteTags, resetTextIndent }) => {

    const onClickHandler = (item) => {
        deleteTags(item);
        resetTextIndent(item);
    };

    const tagSizeAdjust = (indent) => {
        if (indent > 500) {
            return 'smaller-tags'
        }
        else {
            return ''
        };
    };

    const setTags = selectedItems.map(item => (
        <span key={item} onClick={() => onClickHandler(item)} className='Tag'>{item}</span>
    ));
    return (
        <div className={`InputTags ${tagSizeAdjust(inputIndent)}`}>
            {setTags}
        </div>
    )
};

export default InputTags;