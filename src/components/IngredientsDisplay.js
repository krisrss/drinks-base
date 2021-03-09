import React from 'react';
import './IngredientsDisplay.css';

const IngredientsDisplay = ({ ingredients }) => {

    var ingList = Object.values(ingredients).map((item, key) => {
        return (
            <React.Fragment key={key}>
                <li>{item}</li>
            </React.Fragment>
        )
    })

    return (
        <ul id='ingredientsDisplay'>
            {ingList}
        </ul>
    );
};

export default IngredientsDisplay;