import './App.css';
import Header from './components/Navigation/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import { Provider } from 'react-redux';
import { store } from './redux';
import RecipesPage from './pages/Recipes';
import Wishlist from './pages/Wishlist';
import { getRecipesService, getWishlistService } from './redux/services/recipes.services';
import { useEffect } from 'react';
function App() {
	useEffect(() => {
		store.dispatch(getRecipesService());
		store.dispatch(getWishlistService());
	}, []);
	return (
		<div>
			<Provider store={store}>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route element={<Cart />} path="/cart" exact />
						{/* <Route element={<AddRecipe />} path="/add-recipes" exact /> */}
						<Route element={<RecipesPage />} path="/recipes" exact />
						<Route element={<Wishlist />} path="/wishlist" exact />
						<Route element={<Menu />} path="/" exact />
					</Routes>
				</BrowserRouter>
			</Provider>
		</div>
	);
}

export default App;
