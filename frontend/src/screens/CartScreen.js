import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const CartScreen = ({ match, location }) => {
	const productId = match.params.id;

	const qty = location.search ? Number(location.search.split('=')[1]) : 1;

	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	console.log(productId);

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, qty));
		}
	}, [dispatch, productId, qty]);

	return (
		<div>
			Cart
			{console.log(cartItems)}
		</div>
	);
};

export default CartScreen;
