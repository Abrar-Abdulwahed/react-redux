export const RECIPES_ACTION_TYPES = {
	GET_RECIPES: 'GET_RECIPES',
	ADD_TO_WISHLIST: 'ADD_TO_WISHLIST',
	REMOVE_FROM_WISHLIST: 'REMOVE_FROM_WISHLIST',
};

export const getRecipesAction = (recipes) => {
	return {
		type: RECIPES_ACTION_TYPES.GET_RECIPES,
		payload: recipes,
	}
}

export const addToWishListAction = (recipe) => {
	return {
		type: RECIPES_ACTION_TYPES.ADD_TO_WISHLIST,
		payload: recipe,
	};
};

export const removeFromWishListAction = (recipeId) => {
	return {
		type: RECIPES_ACTION_TYPES.REMOVE_FROM_WISHLIST,
		payload: recipeId,
	};
};