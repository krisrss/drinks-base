import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { cleanFilterName, removeQueryTerm, setStars } from '../functions/Utils';
import '../css/CheckBox.css';

const Checkbox = ({ filterData, filterCategory, unlockCheckbox, prefilteredData }) => {
    const [boxClicked, setBoxClicked] = useState(true);

    const urlStats = useLocation();
    const history = useHistory();
    const mainPath = urlStats.pathname;
    const currentQuery = urlStats.search;
    const queryList = queryString.parse(urlStats.search);

    useEffect(() => {
        const mergeArr = Object.values(queryList).flat(1);
        const boxChecked = mergeArr.includes(cleanFilterName(filterData[0]));
        setBoxClicked(!boxChecked);
    }, [queryList]);

    const setCheckboxQuery = (event) => {
        setBoxClicked(!boxClicked);
        const value = event.target.value;

        const intitialQuery = `${mainPath}?${filterCategory}=${cleanFilterName(filterData[0])}`;
        const fullPathQuery = `${currentQuery}&${filterCategory}=${cleanFilterName(filterData[0])}`

        if (boxClicked === true) {
            if (currentQuery === "") {
                history.push(intitialQuery);
            }
            else {
                history.push(fullPathQuery);
            }
        }
        else {
            var queryValue = currentQuery.replace(`${filterCategory}=${cleanFilterName(filterData[0])}`, '');
            removeQueryTerm(history, queryValue, mainPath);
        }
    };

    const drinkQuantity = () => {
        let filterQuantity = '';
        prefilteredData.forEach(drink => {
            if (filterData[0] === drink[0]) {
                filterQuantity = drink[1]
            }
        });

        if (filterQuantity === '') {
            return ''
        }
        else {
            return `(${filterQuantity})`;
        }
    };



    const setFilterName = (term) => {
        if (term === '1-easy') {
            return setStars(1)
        }
        else if (term === '2-medium') {
            return setStars(2)
        }
        else if (term === '3-hard') {
            return setStars(3)
        }
        else {
            return filterData[0]
        }
    }

    return (
        <div className='CheckBox'>
            <input type="checkbox"
                checked={!boxClicked}
                value={filterData[0]}
                onChange={setCheckboxQuery}
                disabled={unlockCheckbox}
            />
            <span>
                {setFilterName(filterData[0])}
                {` ${drinkQuantity()}`}
            </span>
        </div>
    );
};

export default Checkbox;