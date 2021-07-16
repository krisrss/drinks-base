export const cleanFilterName = (category) => {
    //const removeSpace = category.split(' ').join('').toLowerCase();
    const filterType = category.split('/').join('');

    return filterType;
}

export const filterByQuery = (drinksData, queryArray) => {
    let drinks = [];

    if (drinksData !== undefined) {
        drinks = [...drinksData];
    }

    const resultArr = [];
    drinks.forEach(drink => {
        const drinkFilters = [];

        drinkFilters.push(cleanFilterName(drink.strAlcoholic));
        drinkFilters.push(cleanFilterName(drink.strCategory));
        drinkFilters.push(cleanFilterName(drink.strGlass));
        drinkFilters.push(cleanFilterName(drink.makeDifficulty));

        const filterApplied = queryArray.filter(k => !isNaN(k) === false).every(v => drinkFilters.includes(v));
        if (filterApplied === true) {
            resultArr.push(drink);
        }
    });

    return resultArr;

};

export const ingredientCount = (data, drinkIndex) => {
    let ingList = [];

    for (let x = 1; x <= 15; x++) {
        let ing = data[drinkIndex]['strIngredient' + x];

        if (ing !== null && ing !== '') {
            ingList.push(ing.toLowerCase());
        }
    }

    return ingList;
};

export const filterByUrlTerms = (drinksData, ingredients) => {
    let tempDrinkStore = [];
    const ingrList = Object.values(ingredients);
    const ingrListLowerCase = ingrList.map(v => v.toLowerCase());

    for (let i = 0; i < drinksData.length; i++) {
        if (ingrListLowerCase.every(elem => ingredientCount(drinksData, i).includes(elem))) {
            tempDrinkStore.push(drinksData[i])
        }
    };
    return tempDrinkStore;
};



export const updateDrinkDataValues = (dataSource) => {
    let dataSourceStore = [];

    if(dataSource !== undefined){
        dataSourceStore = dataSource;
    };

    Object.keys(dataSourceStore).forEach(function (index) {

        const ingredientQuantity = ingredientCount(dataSourceStore, index).length;
        dataSourceStore[index].ingredientCount = `items-${ingredientQuantity}`;

        let difficulty = null;

        if (ingredientQuantity <= 3) {
            difficulty = '1-easy';
        }
        else if (ingredientQuantity <= 6) {
            difficulty = '2-medium';
        }
        else {
            difficulty = '3-hard';
        }

        dataSourceStore[index].makeDifficulty = difficulty;

        const secondGlassWord = dataSourceStore[index].strGlass.split(' ')[1];

        if (secondGlassWord !== undefined) {
            const lowerCaseWord = secondGlassWord.toLowerCase();
            let glassArray = dataSourceStore[index].strGlass.split(' ');
            glassArray[1] = lowerCaseWord;
            const fixedGlassText = glassArray.join(' ')
            dataSourceStore[index].strGlass = fixedGlassText;
        }

    });
};

export const cleanQueryAtIndex = (arr, position, amount) => {
    let array = arr.split('');
    array.splice(position, amount);
    array = array.join('');
    return array;
};

export const removeQueryTerm = (history, queryValue, mainPath) => {
    if (queryValue[1] === '&') {
        history.push(cleanQueryAtIndex(queryValue, 1, 1));
    }
    else if (queryValue[queryValue.length - 1] === '&') {
        history.push(cleanQueryAtIndex(queryValue, queryValue.length - 1, 1));
    }
    else {
        var cleanedQuery = queryValue.replace("&&", "&");
        history.push(`${mainPath}${cleanedQuery}`);
    }
};

export const setStars = (nr) => {
    const stars = [];
    for (var i = 0; i < nr; i++) {
        stars.push(<i key={i} style={{ color: '#F9E990', textShadow: '0 0 0.06em #000' }} className="fas fa-star"></i>);
    };

    return (
        <span>
            {stars.map((item) => {
                return (
                    item
                )
            })}
        </span>
    )
};

export const setStarsFull = (nr) => {
    const stars = [];
    const maxStars = 3;
    for (var i = 0; i < nr; i++) {
        stars.push(<i key={`first${i}`} style={{ color: '#F9E990', textShadow: '-0.06em 0 #000, 0 0.06em #000, 0.06em 0 #000, 0 -0.06em #000' }} className="fas fa-star"></i>);
    };

    for (var x = 0; x < maxStars - nr; x++) {
        stars.push(<i key={`second${x}`} style={{ color: '#fff', textShadow: '-0.06em 0 #000, 0 0.06em #000, 0.06em 0 #000, 0 -0.06em #000' }} className="fas fa-star"></i>);
    }

    return (
        <span>
            {stars.map((item) => {
                return (
                    item
                )
            })}
        </span>
    )
};