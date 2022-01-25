import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

export const addItem = id => {
	return {
		type : ADD_ITEM,
		id
	};
};

export const removeItem = id => {
	return {
		type : REMOVE_ITEM,
		id
	};
};
