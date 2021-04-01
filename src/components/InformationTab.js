import React from 'react';
import SearchTermBlock from '../components/SearchTermBlock';
import { useParams } from 'react-router-dom';

const InformationTab = ({ drinksQuantity, resetSpinner, resetDrinkList }) => {
    const searchTerm = useParams();
    return (
        <div>
            {drinksQuantity} drinks found<SearchTermBlock searchTerm={searchTerm} resetSpinner={resetSpinner} resetDrinkList={resetDrinkList} />
            <br />
            <br />
            <br />
        </div>
    )
};

export default InformationTab;