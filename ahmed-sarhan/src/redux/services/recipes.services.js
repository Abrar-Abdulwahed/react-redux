
import { Axios } from "../../api/axios"
import { getRecipesAction, getWishlistAction } from "../actions/recipes.actions";
import { redux } from 'react-redux';
// const { v4: uuid } = require('uuid');
// const id = uuid();
const USER_ID = 'd36ebd93-29f5-4ba6-b3f8-328c50c8c46e';
// console.log(user_id);

// thunk action create
export const getRecipesService = () => async(dispatch)=> {
    try{
        const response = await Axios.get('/recipe.json');
        const recipes = Object.entries(response.data).map(([id, recipe]) => {
            return { ...recipe, id }
        })
        dispatch(getRecipesAction(recipes));
    }catch(err){
        throw new Error(err.message);
    }
}

export const getWishlistService = () => async(dispatch, getState)=> {
    try{
        const response = await Axios.get(`/wishlist/${USER_ID}.json`);
        const wishlistWithDetails = getState().blog.recipes.filter((recipe) => {
            return  response.data.find((id) => recipe.id === id);
          });
        dispatch(getWishlistAction(wishlistWithDetails));
    }catch(err){
        throw new Error(err.message);
    }
}
