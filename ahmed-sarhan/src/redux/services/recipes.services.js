
import { Axios } from "../../api/axios"
import { getRecipesAction } from "../actions/recipes.actions";
const getRecipesService = () => async(dispatch)=> {
    try{
        const response = await Axios.get('/recipe.json');
        console.log(response.data);
        const recipes = Object.entries(response.data).map(([id, recipe]) => {
            return { ...recipe, id }
        })
        dispatch(getRecipesAction(recipes));
    }catch(err){
        throw new Error(err);
    }

}

export default getRecipesService