import { RECIPES_ACTION_TYPES } from '../actions/recipes.actions';

const INITIAL_STATE = {
	wishlist: [],
	recipes: [],
};

const recipesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
        case RECIPES_ACTION_TYPES.GET_RECIPES: {
			return {
				...state,
				recipes: [...action.payload],
			};
		}
		case RECIPES_ACTION_TYPES.GET_WISHLIST: {
			return {
				...state,
				wishlist: [...action.payload],
			};
		}
		case RECIPES_ACTION_TYPES.ADD_TO_WISHLIST: {
			return {
				...state,
				wishlist: state.wishlist.concat(action.payload),
			};
		}
		case RECIPES_ACTION_TYPES.REMOVE_FROM_WISHLIST: {
			const newWishList = [...state.wishlist].filter(
				(recipe) => recipe.id !== action.payload
			);
			return {
				...state,
				wishlist: newWishList,
			};
		}
		default:
			return state;
	}
};

export default recipesReducer;