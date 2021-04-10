import React, { useState } from 'react';
import Autocomplete from 'react-autocomplete';
import { Link } from 'react-router-dom';
import { ingredientsList } from '../functions/IngredientsList';

const AutocompleteBar = () => {
    const [ingredient, setIngredient] = useState('');
    const renderIngredients = (data, val) => {
        return (
            data.title.toLowerCase().indexOf(val.toLowerCase()) !== -1
        );
    };

    const setPath = () => {
        return `/ingredients/${ingredient}`;
    };

    return (
        <div>
            <div className="SearchBar">
                <Autocomplete
                    value={ingredient}
                    inputProps={{ placeholder: 'Search drinks by ONE ingredient at a time...' }}
                    items={ingredientsList()}
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
                <Link to={setPath} className='button'>
                    SEARCH
                </Link>
            </div>
        </div>
    );
};


export default AutocompleteBar;