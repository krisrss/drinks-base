import React, { useEffect, useRef, useState } from "react";
import '../css/SearchBar.css';
import { useParams } from 'react-router-dom';
import InputTags from './InputTags';

const AutocompleteSearch = ({ ingredientsList }) => {
    const [ingredient, setIngredient] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const [inputIndent, setInputIndent] = useState(undefined);
    const [ingredientsArr, setIngredientsArr] = useState([]);
    const urlTerm = useParams();

    const [dropdownActive, setDropdownActive] = useState(false);
    const wrapperRef = useRef(null);


    useEffect(() => {
        setIngredientsArr(ingredientsList());
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
        <div ref={wrapperRef} className='SearchBar' >
            <input
                type="text"
                onFocus={onInputBarFocus}
                value={ingredient}
                onChange={onChangeHandler}
                style={{ textIndent: `${inputIndent / 16}em` }}
            />
            {renderAutocomplete()}
            <span className='button'>
                SEARCH
            </span>
            <InputTags inputIndent={inputIndent} selectedItems={selectedItems} deleteTags={deleteTags} resetTextIndent={resetTextIndent} />
        </div >
    );
}
export default AutocompleteSearch;