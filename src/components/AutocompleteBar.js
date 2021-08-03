import React, { useEffect, useState } from 'react';
import Autocomplete from 'react-autocomplete';
import { useHistory, useParams } from 'react-router-dom';
import { ingredientsList } from '../functions/IngredientsList';
import InputTags from './InputTags';
import AutocompleteSearch from './AutocompleteSearch';

const AutocompleteBar = ({ spinnerLoading, resetDrinkList, resetSpinner }) => {
    const [ingredient, setIngredient] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [inputIndent, setInputIndent] = useState(undefined);
    const [ingredientsArr, setIngredientsArr] = useState([]);
    const urlTerm = useParams();
    const history = useHistory();
    const urlTermsArr = Object.values(urlTerm);
    const currentPath = history.location.pathname;

    useEffect(() => {
        if (urlTermsArr.length === 0) {
            setInputIndent(0);
        };

        const urlTerms = [...urlTermsArr];
        setSelectedItems(urlTerms);
        setIngredientsArr(cleanArrFromSelected());
    }, [urlTerm]); //eslint-disable-line react-hooks/exhaustive-deps


    //dONE
    const setIngredientsListEmpty = () => {
        if (selectedItems.length === 3) {
            return []
        }
        else {
            return ingredientsArr;
        };
    };

    const cleanArrFromSelected = () => {
        if (urlTermsArr.length === 0) {
            return ingredientsList;
        }
        else {
            const ingrArr = [...ingredientsList()];

            urlTermsArr.forEach(ingr => {
                var index = ingrArr.findIndex(x => x.title === ingr);
                ingrArr.splice(index, 1);
            });

            return ingrArr;
        };
    };

    //dONE
    const deleteTags = (item) => {
        const tags = [...selectedItems];
        const index = tags.indexOf(item);
        tags.splice(index, 1);
        setSelectedItems(tags);

        const ingrArr = [...ingredientsArr];

        var ingrdient = {
            title: item,
        };

        ingrArr.unshift(ingrdient);
        setIngredientsArr(ingrArr);
    };

    //dONE
    const resetTextIndent = (item) => {
        let getValue = inputIndent;
        const setIndentSize = 45 + (item.length * 7);
        setInputIndent(getValue + - setIndentSize);
    };

    //dONE
    const renderIngredients = (data, val) => {
        return (
            data.title.toLowerCase().indexOf(val.toLowerCase()) !== -1
        );
    };

    //dONE
    const setPath = () => {
        if (urlTermsArr.length !== 0 || selectedItems.length !== 0) {
            const constructedPath = selectedItems.join('/');
            let pathname = `/ingredients/${constructedPath}`;

            history.push(pathname);
        };
    };

    useEffect(() => {
        let initialIndent = 0;
        if (urlTermsArr.length !== 0) {
            initialIndent += urlTermsArr.join('').length * 7;
            initialIndent += urlTermsArr.length * 45;
            setInputIndent(initialIndent);
        }
    }, [urlTerm]); //eslint-disable-line react-hooks/exhaustive-deps

    //dONE
    const setIndent = (item) => {
        let getValue = inputIndent;
        if (getValue === undefined) {
            getValue = 0;
        }
        const setIndentSize = 45 + (item.length * 7);
        setInputIndent(getValue += setIndentSize);
    };

    //dONE
    const setPlaceholder = () => {
        if ((currentPath === '/ingredients' && selectedItems.length === 0) || inputIndent === 0) {
            return 'Select an ingredient...'
        }
        else {
            return '';
        }
    };

    //dONE
    const maxIngredientsWarning = () => {
        if (selectedItems.length === 3) {
            return <div className='warning-max-ing'>Note: You can select only up to 3 ingredients.</div>
        }
    }

    const onClickHandler = () => {
        if (spinnerLoading === false || spinnerLoading === undefined) {
            resetDrinkList(selectedItems);
            resetSpinner(selectedItems);
            setSelectedItems([]);
            setPath();
        }
    };

    const clearInput = () => {
        setSelectedItems([]);
        setInputIndent(0);
        setIngredient('');
        setIngredientsArr(ingredientsList());
    }

    const clearTextIcon = () => {
        if (selectedItems.length !== 0 || ingredient !== '') {
            return <i onClick={clearInput} className="fas fa-times clear-icon"></i>
        }
        else {
            return null;
        };
    };

    const handleKeyPress = (target) => {
        if (target.charCode === 13) {
            if (spinnerLoading === false || spinnerLoading === undefined) {
                resetDrinkList(selectedItems);
                resetSpinner(selectedItems);
                setSelectedItems([]);
                history.push(setPath());
            }
        };
    };

    return (
        <div>
            <AutocompleteSearch ingredientsList={ingredientsList} spinnerLoading={spinnerLoading} resetDrinkList={resetDrinkList} resetSpinner={resetSpinner} />
            {maxIngredientsWarning()}
            <InputTags inputIndent={inputIndent} selectedItems={selectedItems} deleteTags={deleteTags} resetTextIndent={resetTextIndent} />
            <div className="SearchBar" onKeyPress={(e) => handleKeyPress(e)}>
                <Autocomplete
                    value={ingredient}
                    inputProps={{ placeholder: setPlaceholder(), style: { textIndent: `${inputIndent / 16}em` } }}
                    items={setIngredientsListEmpty()}
                    getItemValue={item => item.title}
                    shouldItemRender={renderIngredients}
                    renderMenu={item => (
                        <div className="dropdown">
                            {item}
                        </div>
                    )}
                    renderItem={(item, isHighlighted) =>
                        <div key={item.title} className={`item ${isHighlighted ? 'selected-item' : ''}`}>
                            {item.title}
                        </div>
                    }
                    onChange={(event, val) => setIngredient(val)}
                    onSelect={val => {
                        const arr = [...selectedItems];
                        arr.push(val);
                        setSelectedItems(arr);
                        setIndent(val);
                        setIngredient('');

                        const ingrArr = [...ingredientsArr];
                        var index = ingrArr.findIndex(x => x.title === val);
                        ingrArr.splice(index, 1);
                        setIngredientsArr(ingrArr);
                    }}
                />
                <span className='button' onClick={onClickHandler}>
                    SEARCH
                </span>
                {clearTextIcon()}
            </div>
        </div>
    );
};


export default AutocompleteBar;