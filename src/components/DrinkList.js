import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DrinkThumbnail from './DrinkThumbnail';

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

const DrinkList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { urlTerm } = useParams();

    useEffect(() => {
        setSearchTerm(urlTerm);
    }, [urlTerm]);

    let drinks = null;

    if (searchTerm) {
        drinks = drinkData[searchTerm].map((drink) => {
            return (
                <DrinkThumbnail key={drink.name} drink={drink} />
            )
        });
    }

    return (
        <div>
            <div className='ui centered cards'>
                {drinks}
            </div>
        </div>
    );
};

export default DrinkList;