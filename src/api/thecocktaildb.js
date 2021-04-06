import axios from 'axios';

export const getDrinksbyName = async (url, searchTerm) => {
    const { data } = await axios.get(url, {
        params: {
            s: searchTerm
        }
    });
    return data;
};

export const getDrinksbyIngredient = async (url, searchTerm) => {
    const { data } = await axios.get(url, {
        params: {
            i: searchTerm
        }
    });
    return data;
};

export const getRandomDrink = async () => {
    const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    return data;
};



