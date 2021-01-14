import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

//  @desc   Create new order
//  @route  POST /api/orders
//  @access Private
export const addOrderItems = asyncHandler(async (req, res) => {
	const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;
	if (orderItems.length === 0) {
		res.status(400);
		throw new Error('No Order Items');
		return;
	} else {
		const order = new Order({
			orderItems,
			user: req.user._id,
			shippingAddress,
			paymentMethod,
			itemsPrice,
			taxPrice,
			shippingPrice,
			totalPrice,
		});

		const createdOrder = await order.save();

		res.status(201).json(createdOrder);
	}
});

//  @desc   Get order by ID
//  @route  GET /api/orders/:id
//  @access Private
export const getOrderById = asyncHandler(async (req, res) => {
	// Get order along with the user associated with the order
	const order = await Order.findById(req.params.id).populate('user', 'name email');
	// console.log(order);
	if (order) {
		res.json(order);
	} else {
		res.status(404);
		throw new Error('Order Not Found');
	}
});