import React from 'react';
import SearchTermBlock from '../components/SearchTermBlock';
import { useParams } from 'react-router-dom';
import '../css/InformationTab.css';

const InformationTab = ({ drinksQuantity }) => {
    const searchTerm = useParams();
    return (
        <div className='InformationTab'>
            {drinksQuantity} drinks found that match <SearchTermBlock searchTerm={searchTerm} />
        </div>
    )
};

export default InformationTab;