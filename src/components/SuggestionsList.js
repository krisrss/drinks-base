import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../css/SuggestionsList.css';

const SuggestionsConfig = {
    byName: ['Martini', 'Punch', 'Margarita', 'Tea', 'Mojito', 'Daiquiri'],
    byIngredients: ['Rum', 'Coffee', 'Lemon', 'Tequila', 'Ice', 'Amaretto']
}

const SuggestionsList = () => {
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
            return `${history.location.pathname}/${suggestion}`
        };
    }

    const suggestions = setSuggestions(termPresent).map((suggestion) => {
        return (
            <Link to={setPath(termPresent, suggestion)} className='suggestion'>
                {suggestion}
            </Link>
        )
    });

    return (
        <div className='SuggestionsList'>
            <div>{suggestions}</div>
        </div>

    );
};

export default SuggestionsList;