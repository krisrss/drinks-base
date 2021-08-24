import React, { useEffect, useRef, useState } from "react";
import '../css/SearchBar.css';
import { useHistory, useParams } from 'react-router-dom';
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

    const [placeholderTxt, setPlaceholderTxt] = useState('');

    useEffect(() => {
        setPlaceholder();
    }, [ingredient, selectedItems]); //eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const urlTerms = [...urlTermsArr];
        setPlaceholderTxt('');
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

    const clearInputArea = () => {
        if (inputRef.current) {
            inputRef.current.innerText = '';
        };
    }

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

        inputRef.current && inputRef.current.focus();
    };

    const setPath = () => {
        if (selectedItems.length === 0) {
            history.push('/ingredients');
        }
        else if (urlTermsArr.length !== 0 || selectedItems.length !== 0) {
            const constructedPath = selectedItems.join('/');
            let pathname = `/ingredients/${constructedPath}`;

            history.push(pathname);
        }
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
        clearInputArea();
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

    const lockInputEnter = (e) => {
        if (e.charCode === 13) {
            e.preventDefault();
        };
    };

    const setPlaceholder = () => {
        if (ingredient === '' && selectedItems.length === 0) {
            setPlaceholderTxt('Select an ingredient...')
        }
        else {
            setPlaceholderTxt('');
        }
    };

    const tagBackspaceDelete = (e) => {
        if (ingredient === '') {
            if (e.keyCode === 8) {
                if (selectedItems.length > 0) {
                    var lastElement = selectedItems[selectedItems.length - 1];
                    deleteTags(lastElement)
                }
            }
        }
    }

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
            clearInputArea();
            setIngredient('');
        };
    };

    const onChangeHandler = (e) => {
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
        clearInputArea();

        if (selectedItems.length < 2) {
            inputRef.current && inputRef.current.focus();
        }
    };

    const onInputBarClick = () => {
        if (dropdownActive === false) {
            setDropdownActive(true);
        }
        else {
            setDropdownActive(false);
        };

        inputRef.current && inputRef.current.focus();
    };

    const renderAutocomplete = () => {
        if (dropdownActive === true) {

            const input = ingredient;
            const filteredIngredients = limitedIngredientsArr().filter(
                ingredient =>
                    ingredient.title.toLowerCase().indexOf(input.toLowerCase()) > -1
            );

            if (filteredIngredients.length) {
                return (
                    <ul className="dropdown">
                        {filteredIngredients.map((ingredient) => {
                            return (
                                <li className='item' key={ingredient.title} onClick={onDropdownSelectHandler}>
                                    {ingredient.title}
                                </li>
                            );
                        })}
                    </ul>
                )
            }
            else {
                return (

                    <div className="no-autocomplete">
                        {
                            selectedItems.length < 3 ?
                                <span>No options</span>
                                : <span>Too many selected</span>
                        }
                    </div>
                );
            }
        };
    };

    const setTags = selectedItems.map(item => (
        <InputTag tagName={item} key={item} deleteTags={deleteTags} />
    ));

    return (
        <div className='SearchBar' onKeyDown={tagBackspaceDelete} onKeyPress={(e) => handleKeyPress(e)}>
            <div ref={wrapperRef} className='SearchBar-wrapper'>

                <div className='search-background' onClick={onInputBarClick}>
                    <div className='search-wrapper' >
                        <div className='search-tags'>
                            {setTags}
                            <span
                                onKeyPress={(e) => lockInputEnter(e)}
                                onInput={e => onChangeHandler(e)}
                                ref={inputRef}
                                data-placeholder={placeholderTxt}
                                className='search-input'
                                contentEditable='true'>
                            </span>
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