import React from "react";
import { useSelector } from "react-redux";
import CartButtons from "./CartButtons";
import "./Cart.css";

const Cart = () => {
	const cartItems = useSelector(store => store.cartItems);
	const products = useSelector(store => store.products);
	console.log(products);

	const cartProducts = Object.keys(cartItems).map(id => {
		return { ...products[id], quantity: cartItems[id], id: id };
	});
	console.log(cartProducts);

	const tableCells = cartProducts.map(product => {
		return (
			<tr>
				<td>{product.name}</td>
				<td>{product.quantity}</td>
				<td>
					({product.quantity} * {product.price})
				</td>
				<td>
					<CartButtons id={product.id} />
				</td>
			</tr>
		);
	});

	return (
		<div>
			<h3 className="cart-title">Here's what's in your cart:</h3>
			<table className="table cart-table">
				<thead>
					<tr>
						<th scope="col">Item</th>
						<th scope="col">Qty</th>
						<th scope="col">Cost</th>
					</tr>
				</thead>
				<tbody>{tableCells}</tbody>
			</table>
		</div>
	);
};

export default Cart;
