import React, { useEffect, useRef, useState } from "react";
import '../css/SearchBar.css';

const AutocompleteSearch = ({ ingredientsList }) => {
    const [filteredIngredients, setFilteredIngredients] = useState(ingredientsList());
    const [dropdownActive, setDropdownActive] = useState(false);
    const [input, setInput] = useState("");
    const wrapperRef = useRef(null);

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

        setFilteredIngredients(filteredIngredients);
        setDropdownActive(true);
        setInput(e.currentTarget.value)
    };

    const onClickHandler = (e) => {
        setFilteredIngredients([]);
        setDropdownActive(false);
        setInput(e.currentTarget.innerText)
    };

    const onInputBarFocus = () => {
        setDropdownActive(true);
    };

    const renderAutocomplete = () => {
        if (dropdownActive === true) {
            return (
                <ul className="dropdown">
                    {filteredIngredients.map((ingredient) => {
                        return (
                            <li className='item' key={ingredient.title} onClick={onClickHandler}>
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
                value={input}
                onChange={onChangeHandler}
            />
            {renderAutocomplete()}
            <span className='button'>
                SEARCH
            </span>
        </div >
    );
}
export default AutocompleteSearch;