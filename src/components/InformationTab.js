import React from 'react';
import SearchTermBlock from '../components/SearchTermBlock';
import { useParams } from 'react-router-dom';
import '../css/InformationTab.css';

const InformationTab = ({ drinksQuantity }) => {
    const searchTerm = useParams();

    const setDrinksWord = () => {
        if (drinksQuantity === 1) {
            return 'drink'
        }
        else {
            return 'drinks'
        }
    };

    return (
        <div className='InformationTab'>
            {drinksQuantity} {setDrinksWord()} found that match <SearchTermBlock searchTerm={searchTerm} />
        </div>
    )
};

export default InformationTab;