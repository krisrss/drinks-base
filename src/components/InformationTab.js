import React from 'react';
import SearchTermBlock from '../components/SearchTermBlock';
import { useParams } from 'react-router-dom';
import '../css/InformationTab.css';

const InformationTab = ({ drinksQuantity, resetSpinner, getClicketTerm }) => {
    const searchTerm = useParams();
    return (
        <div className='InformationTab'>
            {drinksQuantity} drinks found that match <SearchTermBlock searchTerm={searchTerm} resetSpinner={resetSpinner} getClicketTerm={getClicketTerm} />
        </div>
    )
};

export default InformationTab;