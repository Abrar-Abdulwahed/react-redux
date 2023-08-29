import React from 'react';
import { useSelector } from 'react-redux';
import ProductsList from './../components/Products/ProductsList';
const Cart = () => {
	const { cart: cartProds,  cartTotal: total} = useSelector(state => state);
	// const total = cartProds.reduce((acc, curr) => acc + curr.price, 0);
	return (
		<div>
			<h1 style={{ textAlign: 'center', fontSize: '35px', color: '#e74c3c' }}>
				Cart
			</h1>
			<h4
				style={{
					textAlign: 'center',
					fontSize: '25px',
					color: '#60a5fa',
					margin: 0,
				}}
			>
				total: {total}
			</h4>
			<ProductsList products={cartProds} />
		</div>
	);
};

export default Cart;
