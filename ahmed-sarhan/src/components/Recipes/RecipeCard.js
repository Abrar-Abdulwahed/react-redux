import { useDispatch, useSelector, redux } from 'react-redux';
import { ImStopwatch } from 'react-icons/im';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import styles from './recipes.module.scss';
import { addWishlistService, removeFromWishlistService } from '../../redux/services/recipes.services';

const RecipeCard = ({ recipe }) => {
	const dispatch = useDispatch();
	const isWishListed = useSelector(
		(state) => state.blog.wishlist.findIndex((rec) => rec.id === recipe.id) >= 0
	);

	const addToWishList = () => {
		dispatch(addWishlistService(recipe));
	};
	const removeFromWishList = () => {
		dispatch(removeFromWishlistService(recipe.id));
	};
	return (
		<div className={styles['recipe-card']}>
			{isWishListed ? (
				<button className={styles['wishlist-btn']} onClick={removeFromWishList}>
					<BsHeartFill />
				</button>
			) : (
				<button className={styles['wishlist-btn']} onClick={addToWishList}>
					<BsHeart />
				</button>
			)}

			<img src={recipe.image} alt={recipe.title} />
			<div className={styles['recipe-details']}>
				<h6>{recipe.category}</h6>
				<h2>{recipe.title}</h2>
				{recipe.duration && (
					<div className={styles['recipe-footer']}>
						{/* 🚀 add the increment and decrement functions to the buttons on click  */}
						<ImStopwatch />
						<span>{recipe.duration}</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default RecipeCard;