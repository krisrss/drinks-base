import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';

const Checkbox = ({ filterData, filterCategory, unlockCheckbox, prefilteredData }) => {
    const [boxClicked, setBoxClicked] = useState(true);

    const urlStats = useLocation();
    const history = useHistory();
    const mainPath = urlStats.pathname;
    const currentQuery = urlStats.search;
    const queryList = queryString.parse(urlStats.search);

    useEffect(() => {
        const mergeArr = Object.values(queryList).flat(1);
        const boxChecked = mergeArr.includes(cleanCategoryName(filterData[0]));
        setBoxClicked(!boxChecked);
    }, [queryList]);

    const cleanCategoryName = () => {
        const removeSpace = filterData[0].split(' ').join('').toLowerCase();
        const filterType = removeSpace.split('/').join('');

        return filterType;
    }

    const cleanQueryAtIndex = (arr, position, amount) => {
        let array = arr.split('');
        array.splice(position, amount);
        array = array.join('');
        return array;
    };

    const getCheckboxQuery = (event) => {
        setBoxClicked(!boxClicked);
        const value = event.target.value;

        const intitialQuery = `${mainPath}?${filterCategory}=${cleanCategoryName()}`;
        const fullPathQuery = `${currentQuery}&${filterCategory}=${cleanCategoryName()}`

        if (boxClicked === true) {
            if (currentQuery === "") {
                history.push(intitialQuery);
            }
            else {
                history.push(fullPathQuery);
            }
        }
        else {
            var queryValue = currentQuery.replace(`${filterCategory}=${cleanCategoryName()}`, '');

            if (queryValue[1] === '&') {
                history.push(cleanQueryAtIndex(queryValue, 1, 1));
            }
            else if (queryValue[queryValue.length - 1] === '&') {
                history.push(cleanQueryAtIndex(queryValue, queryValue.length - 1, 1));
            }
            else {
                var cleanedQuery = queryValue.replace("&&", "&");
                history.push(`${mainPath}${cleanedQuery}`);
            }
        }
    };

    let setFilterQuantity = '';
    prefilteredData.forEach(drink => {
        if (filterData[0] === drink[0]) {
            setFilterQuantity = drink[1]
        }
    });

    return (
        <div>
            <label>
                <input type="checkbox" checked={!boxClicked} value={filterData[0]} onChange={getCheckboxQuery} disabled={unlockCheckbox} />
                <span>{`${filterData[0]} ${setFilterQuantity}`}</span>
            </label>
        </div>
    );
};

export default Checkbox;