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

    const suggestions = setSuggestions(termPresent).map((suggestion) => {
        return (
            <Link to={`${history.location.pathname}/${suggestion}`} className='suggestion'>
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