import React from 'react';
import SearchTermBlock from '../components/SearchTermBlock';
import { useParams } from 'react-router-dom';
import '../css/InformationTab.css';

const InformationTab = ({drinksData, drinksQuantity }) => {
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
        if (drinksData.length === 0) {
            return 'InformationTab-zero';
        }
        else {
            return 'InformationTab';
        }
    }

    return (
        <div className={setTabPosition()}>
            {
                drinksData.length !== 0 ?
                    <>
                        {drinksQuantity} {setDrinksWord()} found that match <SearchTermBlock searchTerm={searchTerm} />
                    </>
                    :
                    <>
                        0 {setDrinksWord()} found that match <SearchTermBlock searchTerm={searchTerm} />
                    </>
            }
        </div>
    )
};

export default InformationTab;