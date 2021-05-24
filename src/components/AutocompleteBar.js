import React, { useEffect, useState } from 'react';
import Autocomplete from 'react-autocomplete';
import { Link, useHistory, useParams } from 'react-router-dom';
import { ingredientsList } from '../functions/IngredientsList';
import InputTags from './InputTags';

const AutocompleteBar = ({ resetDrinkList, resetSpinner }) => {
    const [ingredient, setIngredient] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [inputIndent, setInputIndent] = useState(0);
    const [ingredientsArr, setIngredientsArr] = useState([]);
    const urlTerm = useParams();
    const history = useHistory();
    const urlTermsArr = Object.values(urlTerm);

    useEffect(() => {
        const urlTerms = [...urlTermsArr];
        setSelectedItems(urlTerms);
        setIngredientsArr(cleanArrFromSelected());
    }, [urlTerm]);

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

    const resetTextIndent = (item) => {
        let getValue = inputIndent;
        const setIndentSize = 45 + (item.length * 7);
        setInputIndent(getValue + - setIndentSize);
    };

    const renderIngredients = (data, val) => {
        return (
            data.title.toLowerCase().indexOf(val.toLowerCase()) !== -1
        );
    };

    const setPath = () => {
        const constructedPath = selectedItems.join('/');
        history.push({
            pathname: `/ingredients/${constructedPath}`,
            state: { data: selectedItems }
        });
    };

    useEffect(() => {
        let initialIndent = 0;
        if (urlTermsArr.length !== 0) {
            initialIndent += urlTermsArr.join('').length * 7;
            initialIndent += urlTermsArr.length * 45;
            setInputIndent(initialIndent);
        }
    }, [])

    const setIndent = (item) => {
        let getValue = inputIndent;
        const setIndentSize = 45 + (item.length * 7);
        setInputIndent(getValue += setIndentSize);
    };

    const setPlaceholder = () => {
        if (selectedItems.length === 0 && urlTermsArr.length === 0) {
            return 'Select an ingredient from list...'
        }
        else {
            return '';
        }
    };

    const maxIngredientsWarning = () => {
        if (selectedItems.length === 3) {
            return <div className='warning-max-ing'>Note: You can select only up to 3 ingredients.</div>
        }
    }

    const onClickHandler = () => {
        resetDrinkList(urlTermsArr);
        resetSpinner(selectedItems);
        setSelectedItems([]);
        setPath();
    };

    return (
        <div>
            {maxIngredientsWarning()}
            <InputTags selectedItems={selectedItems} deleteTags={deleteTags} resetTextIndent={resetTextIndent} />
            <div className="SearchBar">
                <Autocomplete
                    value={ingredient}
                    inputProps={{ placeholder: setPlaceholder(), style: { textIndent: `${inputIndent}px` } }}
                    items={setIngredientsListEmpty()}
                    getItemValue={item => item.title}
                    shouldItemRender={renderIngredients}
                    renderMenu={item => (
                        <div className="dropdown">
                            {item}
                        </div>
                    )}
                    renderItem={(item, isHighlighted) =>
                        <div className={`item ${isHighlighted ? 'selected-item' : ''}`}>
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
                <a className='button' onClick={onClickHandler}>
                    SEARCH
                </a>
            </div>
        </div>
    );
};


export default AutocompleteBar;