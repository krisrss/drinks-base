import React from 'react';
import { useParams } from 'react-router-dom';

const drinkData = {
    drinks: [
        {
            name: 'Drink 1',
            imgUrl: 'https://www.jocooks.com/wp-content/uploads/2020/03/manhattan-drink-1-200x200.jpg'
        },
        {
            name: 'Drink 2',
            imgUrl: 'https://www.jocooks.com/wp-content/uploads/2020/03/manhattan-drink-1-200x200.jpg'
        },
        {
            name: 'Drink 3',
            imgUrl: 'https://www.jocooks.com/wp-content/uploads/2020/03/manhattan-drink-1-200x200.jpg'
        }
    ],
    cocktails: [
        {
            name: 'Cocktail 1',
            imgUrl: 'https://www.mom4real.com/wp-content/uploads/2018/04/belmont-jewel-drink-1-200x200.jpg'
        },
        {
            name: 'Cocktail 2',
            imgUrl: 'https://www.mom4real.com/wp-content/uploads/2018/04/belmont-jewel-drink-1-200x200.jpg'
        },
        {
            name: 'Cocktail 3',
            imgUrl: 'https://www.mom4real.com/wp-content/uploads/2018/04/belmont-jewel-drink-1-200x200.jpg'
        }
    ]
};

const DrinkList = ({ searchTerm }) => {

    let drinks = null;

    if (searchTerm) {
        drinks = drinkData[searchTerm].map((drink) => {
            return (
                <div key={drink.name} style={{ display: 'inline-block' }}>
                    <h3>{drink.name}</h3>
                    <img alt='Drink' src={drink.imgUrl} />
                </div>
            )
        });
    }

    return (
        <div>
            {drinks}
        </div>
    );
};

export default DrinkList;