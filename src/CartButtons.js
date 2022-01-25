import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./actions/actions";

const CartButtons = ({ id }) => {
	const dispatch = useDispatch();

	const addToCart = evt => {
		dispatch(addItem(id));
	};

	const removeFromCart = evt => {
		dispatch(removeItem(id));
	};

	return (
		<div>
			<button className="btn btn-success" onClick={addToCart}>
				+1
			</button>
			<button className="btn btn-danger" onClick={removeFromCart}>
				-1
			</button>
		</div>
	);
};

export default CartButtons;
