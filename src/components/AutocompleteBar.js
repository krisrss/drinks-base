import React, { useState } from 'react';
import Autocomplete from 'react-autocomplete';
import { Link, useHistory } from 'react-router-dom';
import { ingredientsList } from '../functions/IngredientsList';
import InputTags from './InputTags';

const AutocompleteBar = () => {
    const [ingredient, setIngredient] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [inputIndent, setInputIndent] = useState(0.5);

    const history = useHistory();
    const currentPath = history.location.pathname;

    const renderIngredients = (data, val) => {
        return (
            data.title.toLowerCase().indexOf(val.toLowerCase()) !== -1
        );
    };

    const setPath = () => {
        return `${currentPath}/${ingredient}`;
    };


    const setIndent = (item) => {
        let getValue = inputIndent;
        const setIndentSize = item.length * 0.6;
        setInputIndent(getValue += setIndentSize);
    }

    return (
        <div>
            <InputTags selectedItems={selectedItems} />
            <div className="SearchBar">
                <Autocomplete
                    value={ingredient}
                    inputProps={{ placeholder: '', style: { textIndent: `${inputIndent}em` } }}
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
                    onSelect={val => {
                        const arr = [...selectedItems];
                        arr.push(val);
                        setSelectedItems(arr);
                        setIndent(val);
                        setIngredient('');
                    }}
                />
                <Link to={setPath} className='button'>
                    SEARCH
                </Link>
            </div>
        </div>
    );
};


export default AutocompleteBar;