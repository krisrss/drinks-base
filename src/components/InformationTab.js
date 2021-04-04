import React from 'react';
import SearchTermBlock from '../components/SearchTermBlock';
import { useParams } from 'react-router-dom';

const InformationTab = ({ drinksQuantity, resetSpinner, getClicketTerm }) => {
    const searchTerm = useParams();
    return (
        <div>
            {drinksQuantity} drinks found<SearchTermBlock searchTerm={searchTerm} resetSpinner={resetSpinner} getClicketTerm={getClicketTerm} />
            <br />
            <br />
            <br />
        </div>
    )
};

export default InformationTab;