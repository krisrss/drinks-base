import React from 'react';
import SearchTermBlock from '../components/SearchTermBlock';
import { useParams } from 'react-router-dom';

const InformationTab = ({ drinksQuantity }) => {
    const searchTerm = useParams();
    console.log(searchTerm)

    return (
        <div>
            {drinksQuantity} drinks found<SearchTermBlock searchTerm={searchTerm} />
            <br />
            <br />
            <br />
        </div>
    )
};

export default InformationTab;