import { useEffect } from 'react';
import RecipeList from './../components/Recipes/RecipeList';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipesService } from '../redux/services/recipes.services';

const RecipesPage = () => {
    const recipes = useSelector((state) => state.blog.recipes);
    const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getRecipesService())
	}, [dispatch]);


    /* ---------------- example of calling api to fill redux store with data from the BE without thunk -------------------- */
	// // is not integrated inside redux global state
	// const fetchRecipes = async () => {
	// 	const response = await Axios.get('/recipes');
	// 	dispatch(getRecipesAction(response.data));
	// };
	// useEffect(() => {
	// 	fetchRecipes();
	// }, []);

	return (
		<div>
			<h1 style={{ textAlign: 'center', fontSize: '35px', color: '#e74c3c' }}>
				Our Blog
			</h1>
			<RecipeList recipes={recipes} />
		</div>
	);
};

export default RecipesPage;