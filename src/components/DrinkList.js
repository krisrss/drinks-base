import React from 'react';

const drinkData = [
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
]

const DrinkList = () => {
    const drinks = drinkData.map((drink) => {
        return (
            <div style={{ display: 'inline-block' }}>
                <h3>{drink.name}</h3>
                <img alt='Drink' src={drink.imgUrl} />
            </div>
        )
    });

    return (
        <div>
            {drinks}
        </div>
    );
};

export default DrinkList;