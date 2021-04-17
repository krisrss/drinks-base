import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/InputTags.css';

const InputTags = ({ selectedItems }) => {
    const urlTerm = useParams();
    const urlTermsArr = Object.values(urlTerm);

    const combinedTags = [...urlTermsArr, ...selectedItems];

    const setTags = combinedTags.map(item => (
        <span className='Tag'>{item}</span>
    ));
    return (
        <div className='InputTags'>
            {setTags}
        </div>
    )
};

export default InputTags;