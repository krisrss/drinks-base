import React from 'react';
import SearchTermBlock from '../components/SearchTermBlock';
import QueryTermBlock from '../components/QueryTermBlock';
import { useParams } from 'react-router-dom';
import '../css/InformationTab.css';

const InformationTab = ({ drinksQuantity, resetSpinner, getClicketTerm }) => {
    const searchTerm = useParams();
    return (
        <div className='InformationTab'>
            {drinksQuantity} drinks found<SearchTermBlock searchTerm={searchTerm} resetSpinner={resetSpinner} getClicketTerm={getClicketTerm} /> / <QueryTermBlock />
        </div>
    )
};

export default InformationTab;