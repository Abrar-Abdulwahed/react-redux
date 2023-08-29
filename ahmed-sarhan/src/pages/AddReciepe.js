import data from '../data.json';
import { addRecipeToApi } from '../utils/addRecipeToApi';
const AddRecipe = () => {
	const addRecipes = () => {
		data.recipes.forEach((recipe) => {
			addRecipeToApi(recipe);
		});
	};
	return (
		<div>
			<button onClick={addRecipes}>Add Recipes</button>
		</div>
	);
};

export default AddRecipe;