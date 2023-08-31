import { Axios } from "../api/axios";

export const addRecipeToApi = async(recipe) => {
    const response = await Axios.post(`/recipe.json`, recipe);
}