import React, { useState } from 'react';
import Autocomplete from 'react-autocomplete';

const AutocompleteBar = () => {
    const [ingredient, setIngredient] = useState('');

    const renderIngredients = (data, val) => {
        return (
            data.title.toLowerCase().indexOf(val.toLowerCase()) !== -1
        );
    };

    const tempData = () => {
        return [
            { "title": "Ingredient 1" },
            { "title": "Ingredient 2" },
            { "title": "Ingredient 3" },
            { "title": "Ingredient 4" }
        ];
    };

    return (
        <div>
            <div className="SearchBar">
                <Autocomplete
                    value={ingredient}
                    inputProps={{ placeholder: 'Search drinks by ONE ingredient at a time...' }}
                    items={tempData()}
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
                    onSelect={val => setIngredient(val)}
                />
                <a className='button'>SEARCH</a>
            </div>
        </div>
    );
};


export default AutocompleteBar;