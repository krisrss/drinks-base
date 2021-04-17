import React, { useEffect, useState } from 'react';
import Autocomplete from 'react-autocomplete';
import { Link, useHistory, useParams } from 'react-router-dom';
import { ingredientsList } from '../functions/IngredientsList';
import InputTags from './InputTags';

const AutocompleteBar = () => {
    const [ingredient, setIngredient] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [inputIndent, setInputIndent] = useState(0);
    const urlTerm = useParams();
    const history = useHistory();
    const currentPath = history.location.pathname;
    const urlTermsArr = Object.values(urlTerm);

    const renderIngredients = (data, val) => {
        return (
            data.title.toLowerCase().indexOf(val.toLowerCase()) !== -1
        );
    };

    const setPath = () => {
        const constructedPath = selectedItems.join('/');
        return `${currentPath}/${constructedPath}`;
    };

    useEffect(() => {
        let initialIndent = 0;
        if (urlTermsArr.length !== 0) {
            initialIndent += urlTermsArr.join('').length * 7;
            initialIndent += urlTermsArr.length * 35;
            setInputIndent(initialIndent);
        }
    }, [])

    const setIndent = (item) => {
        let getValue = inputIndent;
        const setIndentSize = 35 + (item.length * 7);
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


    return (
        <div>
            <InputTags selectedItems={selectedItems} />
            <div className="SearchBar">
                <Autocomplete
                    value={ingredient}
                    inputProps={{ placeholder: setPlaceholder(), style: { textIndent: `${inputIndent}px` } }}
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
                <Link to={setPath} className='button' onClick={() => setSelectedItems([])}>
                    SEARCH
                </Link>
            </div>
        </div>
    );
};


export default AutocompleteBar;