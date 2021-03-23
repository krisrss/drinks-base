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