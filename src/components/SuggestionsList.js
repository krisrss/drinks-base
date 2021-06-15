import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../css/SuggestionsList.css';

const SuggestionsConfig = {
    byName: ['Martini', 'Punch', 'Margarita', 'Tea', 'Mojito', 'Daiquiri'],
    byIngredients: ['Cider', 'Coffee', 'Beer and 7-up', 'Rum, Vodka and Tequila', 'Mint',]
}

const SuggestionsList = ({ resetDrinkList }) => {
    const history = useHistory();
    const termPresent = history.location.pathname.includes("ingredients");

    const setSuggestions = (termCheck) => {
        if (termCheck === false) {
            return SuggestionsConfig.byName;
        }
        else {
            return SuggestionsConfig.byIngredients;
        };
    };

    const setPath = (termCheck, suggestion) => {
        if (termCheck === false) {
            return `${history.location.pathname}${suggestion}`
        }
        else {
            const removeSpaces = suggestion.replaceAll(' ', '');
            const removeAnds = removeSpaces.replaceAll('and', '/');
            const removeComma = removeAnds.replaceAll(',', '/');
            const strPath = removeComma;

            return `${history.location.pathname}/${strPath}`
        };
    }

    const suggestions = setSuggestions(termPresent).map((suggestion) => {
        return (
            <Link onClick={resetDrinkList} to={setPath(termPresent, suggestion)} className='suggestion'>
                {suggestion}
            </Link>
        )
    });

    return (
        <div className='SuggestionsList'>
            <div className='suggestions-title'>Suggestions</div>
            <div>{suggestions}</div>
        </div>

    );
};

export default SuggestionsList;