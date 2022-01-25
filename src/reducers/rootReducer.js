import React from "react";
import data from "../data.json";
import { calculateCartTotal } from "../helpers";

const INITIAL_STATE = {
	products  : data.products,
	cartItems : {},
	totalCost : 0
};

const rootReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "ADD_ITEM":
			// Create a copy of the cart in state to edit quantity. We do this because we don't want to manipulate state directly other than to set the final state
			let cartCopy = { ...state.cartItems };
			cartCopy[action.id] = (cartCopy[action.id] || 0) + 1;

			return {
				...state,
				cartItems : cartCopy,
				totalCost : calculateCartTotal(state.products, cartCopy)
			};
		case "REMOVE_ITEM":
			if (action.id in state.cartItems) {
				let cartCopy = { ...state.cartItems };
				cartCopy[action.id] = state.cartItems[action.id] - 1;
				if (cartCopy[action.id] === 0) {
					delete cartCopy[action.id];
				}
				return {
					...state,
					cartItems : cartCopy,
					totalCost : calculateCartTotal(state.products, cartCopy)
				};
			} else {
				console.error("The selected item does not exist in your cart.");
				return state;
			}
		default:
			return state;
	}
};

export default rootReducer;
