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



