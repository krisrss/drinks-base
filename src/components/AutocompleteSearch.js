import React, { useEffect, useRef, useState } from "react";
import '../css/SearchBar.css';
import { useHistory, useParams } from 'react-router-dom';
import InputTags from './InputTags';

const AutocompleteSearch = ({ ingredientsList, spinnerLoading, resetDrinkList, resetSpinner }) => {
    const [ingredient, setIngredient] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const [inputIndent, setInputIndent] = useState(undefined);
    const [ingredientsArr, setIngredientsArr] = useState([]);
    const urlTerm = useParams();
    const history = useHistory();
    const urlTermsArr = Object.values(urlTerm);
    const currentPath = history.location.pathname;

    const [dropdownActive, setDropdownActive] = useState(false);
    const wrapperRef = useRef(null);


    useEffect(() => {
        if (urlTermsArr.length === 0) {
            setInputIndent(0);
        };

        let initialIndent = 0;
        if (urlTermsArr.length !== 0) {
            initialIndent += urlTermsArr.join('').length * 7;
            initialIndent += urlTermsArr.length * 45;
            setInputIndent(initialIndent);
        }
        const urlTerms = [...urlTermsArr];
        setSelectedItems(urlTerms);
        setIngredientsArr(cleanedIngredientsArr());
    }, [urlTerm]); //eslint-disable-line react-hooks/exhaustive-deps

    const limitedIngredientsArr = () => {
        if (selectedItems.length === 3) {
            return []
        }
        else {
            return ingredientsArr;
        };
    };

    const setIndent = (item) => {
        let getValue = inputIndent;
        if (getValue === undefined) {
            getValue = 0;
        }
        const setIndentSize = 45 + (item.length * 7);
        setInputIndent(getValue += setIndentSize);
    };

    const cleanedIngredientsArr = () => {
        if (urlTermsArr.length === 0) {
            return ingredientsList();
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

    const setPath = () => {
        if (urlTermsArr.length !== 0 || selectedItems.length !== 0) {
            const constructedPath = selectedItems.join('/');
            let pathname = `/ingredients/${constructedPath}`;

            history.push(pathname);
        };
    };

    const onButtonClickHandler = () => {
        if (spinnerLoading === false || spinnerLoading === undefined) {
            resetDrinkList(selectedItems);
            resetSpinner(selectedItems);
            setSelectedItems([]);
            setPath();
        }
    };

    const setPlaceholder = () => {
        if ((currentPath === '/ingredients' && selectedItems.length === 0) || inputIndent === 0) {
            return 'Select an ingredient...'
        }
        else {
            return '';
        }
    };

    const maxIngredientsWarning = () => {
        if (selectedItems.length === 3) {
            return <div className='warning-max-ing'>Note: You can select only up to 3 ingredients.</div>
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

    //--------------------------------------------------------------

    useEffect(() => {
        document.addEventListener('mousedown', outsideClickHandler);
        return () => {
            document.removeEventListener('mousedown', outsideClickHandler);
        };
    }, []);

    const outsideClickHandler = (e) => {
        const { current: contentWrap } = wrapperRef;
        if (contentWrap && !contentWrap.contains(e.target)) {
            setDropdownActive(false);
        };
    };

    const onChangeHandler = (e) => {
        const input = e.currentTarget.value;
        const filteredIngredients = ingredientsList().filter(
            ingredient =>
                ingredient.title.toLowerCase().indexOf(input.toLowerCase()) > -1
        );

        setIngredientsArr(filteredIngredients);
        setDropdownActive(true);
        setIngredient(e.currentTarget.value)
    };

    const onDropdownSelectHandler = (e) => {
        //setIngredientsArr([]);
        setDropdownActive(false);
        setIngredient('');
        setIndent(e.currentTarget.innerText);
        const arr = [...selectedItems];
        arr.push(e.currentTarget.innerText);
        setSelectedItems(arr);

        const ingrArr = [...ingredientsArr];
        var index = ingrArr.findIndex(x => x.title === e.currentTarget.innerText);
        ingrArr.splice(index, 1);
        setIngredientsArr(ingrArr);
    };

    const onInputBarFocus = () => {
        setDropdownActive(true);
    };

    const renderAutocomplete = () => {
        if (dropdownActive === true) {
            return (
                <ul className="dropdown">
                    {limitedIngredientsArr().map((ingredient) => {
                        return (
                            <li className='item' key={ingredient.title} onClick={onDropdownSelectHandler}>
                                {ingredient.title}
                            </li>
                        );
                    })}
                </ul>
            )
        };
    };

    return (
        <div className='SearchBar' >
            <div ref={wrapperRef} className='SearchBar-wrapper'>
                {maxIngredientsWarning()}
                <input
                    type="text"
                    onFocus={onInputBarFocus}
                    value={ingredient}
                    onChange={onChangeHandler}
                    style={{ textIndent: `${inputIndent / 16}em` }}
                    placeholder={setPlaceholder()}
                />
                {renderAutocomplete()}
            </div>
            <span className='button' onClick={onButtonClickHandler}>
                SEARCH
            </span>
            {clearTextIcon()}
            <InputTags inputIndent={inputIndent} selectedItems={selectedItems} deleteTags={deleteTags} resetTextIndent={resetTextIndent} />
        </div >
    );
}
export default AutocompleteSearch;