import React from 'react';

const IngredientsDisplay = ({ ingredients }) => {

    var ingList = Object.values(ingredients).map((item, key) => {
        return (
            <React.Fragment key={key}>
                <li style={{ display: 'inline-block', paddingLeft: '20px', fontSize: '20px' }}>
                    {item}
                </li>
            </React.Fragment>
        )
    })

    return (
        <ul>
            {ingList}
        </ul>
    );
};

export default IngredientsDisplay;