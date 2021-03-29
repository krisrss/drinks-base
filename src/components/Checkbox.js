import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { cleanFilterName } from '../functions/Utils';

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

    const cleanQueryAtIndex = (arr, position, amount) => {
        let array = arr.split('');
        array.splice(position, amount);
        array = array.join('');
        return array;
    };

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

    const setStars = (nr) => {
        const stars = [];
        for (var i = 0; i < nr; i++) {
            stars.push(<i key={i} className="far fa-star"></i>);
        };

        return (
            <span>
                {stars.map((item) => {
                    return (
                        item
                    )
                })}
            </span>
        )
    }

    const setFilterName = (term) => {
        if (term === 'easy') {
            return setStars(1)
        }
        else if (term === 'medium') {
            return setStars(2)
        }
        else if (term === 'hard') {
            return setStars(3)
        }
        else {
            return filterData[0]
        }
    }

    return (
        <div>
            <label>
                <input type="checkbox"
                    checked={!boxClicked}
                    value={filterData[0]}
                    onChange={setCheckboxQuery}
                    disabled={unlockCheckbox}
                />
                <span>
                    {setFilterName(filterData[0])}
                    {` ${setFilterQuantity}`}
                </span>
            </label>
        </div>
    );
};

export default Checkbox;