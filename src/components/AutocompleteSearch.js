import React, { useEffect, useRef, useState } from "react";
import '../css/SearchBar.css';
import { useHistory, useParams } from 'react-router-dom';
import InputTags from './InputTags';
import InputTag from "./InputTag";

const AutocompleteSearch = ({ ingredientsList, spinnerLoading, resetDrinkList, resetSpinner }) => {
    const [ingredient, setIngredient] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const [ingredientsArr, setIngredientsArr] = useState([]);
    const urlTerm = useParams();
    const history = useHistory();
    const urlTermsArr = Object.values(urlTerm);
    const currentPath = history.location.pathname;

    const [dropdownActive, setDropdownActive] = useState(false);
    const wrapperRef = useRef(null);
    const inputRef = useRef(null);


    useEffect(() => {
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

    const clearInput = () => {
        setSelectedItems([]);
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
                setDropdownActive(false);
                history.push(setPath());
            }
        };
    };


    const setPlaceholder = () => {
        if (currentPath === '/ingredients' && selectedItems.length === 0) {
            return 'Select an ingredient...'
        }
        else {
            return '';
        }
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
        const input = e.currentTarget.textContent;
        const filteredIngredients = ingredientsList().filter(
            ingredient =>
                ingredient.title.toLowerCase().indexOf(input.toLowerCase()) > -1
        );

        setIngredientsArr(filteredIngredients);
        setDropdownActive(true);
        setIngredient(e.currentTarget.textContent)
    };

    const onDropdownSelectHandler = (e) => {
        setDropdownActive(false);
        setIngredient('');
        const arr = [...selectedItems];
        arr.push(e.currentTarget.innerText);
        setSelectedItems(arr);

        const ingrArr = [...ingredientsArr];
        var index = ingrArr.findIndex(x => x.title === e.currentTarget.innerText);
        ingrArr.splice(index, 1);
        setIngredientsArr(ingrArr);
    };

    const onInputBarClick = () => {
        setDropdownActive(true);
        inputRef.current && inputRef.current.focus();
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

    const setTags = selectedItems.map(item => (
        <InputTag tagName={item} key={item} />
    ));

    return (
        <div className='SearchBar' onKeyPress={(e) => handleKeyPress(e)}>
            <div ref={wrapperRef} className='SearchBar-wrapper'>

                <div className='search-background' onClick={onInputBarClick}>
                    <div className='search-wrapper' >
                        <div className='search-tags'>
                            {setTags}
                            <span ref={inputRef} data-placeholder={setPlaceholder()} className='search-input' contentEditable='true'></span>
                        </div>
                    </div>
                </div>

                {renderAutocomplete()}
            </div>
            <span className='button' onClick={onButtonClickHandler}>
                SEARCH
            </span>
            {clearTextIcon()}
        </div >
    );
}
export default AutocompleteSearch;