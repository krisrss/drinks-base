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

    const setTabPosition = () => {
        if (drinksQuantity === 0) {
            return 'InformationTab-zero';
        }
        else {
            return 'InformationTab';
        }
    }

    return (
        <>
            {
                drinksQuantity !== 0 ?
                    <div className={setTabPosition()}>
                        {drinksQuantity} {setDrinksWord()} found that match <SearchTermBlock searchTerm={searchTerm} />
                    </div>
                    : null
            }
        </>
    )
};

export default InformationTab;