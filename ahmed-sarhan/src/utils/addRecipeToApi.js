import axios from 'axios';

const FIREBASE_API = 'https://redux-83bc9-default-rtdb.firebaseio.com'; //process.env.REACT_APP_FIREBASE_API;
export const addRecipeToApi = async(recipe) => {
    const response = await axios.post(`${FIREBASE_API}/recipe.json`, recipe);
}