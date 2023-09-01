
import { Axios } from "../../api/axios"
import { getRecipesAction, getWishlistAction, addToWishListAction } from "../actions/recipes.actions";
import { redux } from 'react-redux';
import { removeFromWishListAction } from './../actions/recipes.actions';
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

export const addWishlistService = (recipe) => async(dispatch, getState)=> {
    try{
        await Axios.patch(`/wishlist/${USER_ID}.json`, {
            [getState().blog.wishlist.length]: recipe.id,
        });
        dispatch(addToWishListAction(recipe));
    }catch(err){
        throw new Error(err.message);
    }
}

export const removeFromWishlistService = (recipeId) => async(dispatch, getState)=> {
    const deletedItem = getState().blog.wishlist.findIndex(recipe => recipe.id ===  recipeId)
    try{
        await Axios.delete(`/wishlist/${USER_ID}/${deletedItem}.json`);
        dispatch(removeFromWishListAction(recipeId));
    }catch(err){
        throw new Error(err.message);
    }
}
