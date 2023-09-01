import { useDispatch, useSelector } from 'react-redux';
import RecipeList from '../components/Recipes/RecipeList';
import { getWishlistService } from '../redux/services/recipes.services';
import { useEffect } from 'react';

const Wishlist = () => {
	const wishlist = useSelector((state) => state.blog.wishlist);
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(getWishlistService())
	// }, [dispatch]);

	return (
		<div>
			<h1 style={{ textAlign: 'center', fontSize: '35px', color: '#e74c3c' }}>
				Our Wishlist
			</h1>
			<RecipeList recipes={wishlist} />
		</div>
	);
};

export default Wishlist;