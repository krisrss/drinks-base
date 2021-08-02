import React, { useState } from "react";
import '../css/SearchBar.css';

const AutocompleteSearch = ({ ingredientsList }) => {
    const [filteredIngredients, setFilteredIngredients] = useState(ingredientsList());
    const [dropdownActive, setDropdownActive] = useState(false);
    const [input, setInput] = useState("");

    const onChangeHandler = (e) => {
        setInput(e.currentTarget.value)
    }

    const onInputBarFocus = () => {
        setDropdownActive(true);
    };

    const renderAutocomplete = () => {
        if (dropdownActive === true) {
            return (
                <ul className="dropdown">
                    {filteredIngredients.map((ingredient) => {
                        return (
                            <li className='item' key={ingredient.title}>
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