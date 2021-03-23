export const cleanFilterName = (category) => {
    const removeSpace = category.split(' ').join('').toLowerCase();
    const filterType = removeSpace.split('/').join('');

    return filterType;
}

export const filterByQuery = (drinksData, queryArray) => {
    const drinks = [...drinksData];
    const resultArr = [];

    if (queryArray.length !== 0) {

        drinks.forEach(drink => {
            const drinkFilters = [];

            drinkFilters.push(cleanFilterName(drink.strAlcoholic));
            drinkFilters.push(cleanFilterName(drink.strCategory));
            drinkFilters.push(cleanFilterName(drink.strGlass));

            const filterApplied = queryArray.every(v => drinkFilters.includes(v));
            if (filterApplied === true) {
                resultArr.push(drink);
            }
        });

        return resultArr;
    }
    else {
        return drinks;
    }
}

export const filterByUrlTerms = (drinksData, ingredients) => {
    let tempDrinkStore = [];
    const ingrList = Object.values(ingredients);

    if (ingrList.length > 1) {
        for (let i = 0; i < drinksData.length; i++) {
            let ingList = [];

            for (let x = 1; x <= 15; x++) {
                let ing = drinksData[i]['strIngredient' + x];

                if (ing !== null && ing !== '') {
                    ingList.push(ing.toLowerCase());
                }
            }
            if (ingrList.every(elem => ingList.includes(elem))) {
                tempDrinkStore.push(drinksData[i])
            }
        };
        return tempDrinkStore;
    }
    else {
        return drinksData;
    }
};