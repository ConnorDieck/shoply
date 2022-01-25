import rootReducer from "./rootReducer";
import data from "../data.json";
import { ADD_ITEM, REMOVE_ITEM } from "../actions/actionTypes";

const INITIAL_STATE = {
	products  : data.products,
	cartItems : {},
	totalCost : 0
};

test("should return to the initial state", () => {
	expect(rootReducer(undefined, {})).toEqual({
		products  : data.products,
		cartItems : {},
		totalCost : 0
	});
});

test("should add an item to the cart and update total cost", () => {
	expect(
		rootReducer(INITIAL_STATE, {
			type : ADD_ITEM,
			id   : "47314fa1-ae56-4eae-80be-af6691145951"
		})
	).toEqual({
		products  : data.products,
		cartItems : { "47314fa1-ae56-4eae-80be-af6691145951": 1 },
		totalCost : 219.99
	});
});

test("should remove an item from the cart and update total cost", () => {
	expect(
		rootReducer(
			{
				products  : data.products,
				cartItems : { "47314fa1-ae56-4eae-80be-af6691145951": 1 },
				totalCost : 219.99
			},
			{
				type : REMOVE_ITEM,
				id   : "47314fa1-ae56-4eae-80be-af6691145951"
			}
		)
	).toEqual(INITIAL_STATE);
});

test("should return original state if removed item does not exist in cart", () => {
	expect(
		rootReducer(INITIAL_STATE, {
			type : REMOVE_ITEM,
			id   : "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9"
		})
	).toEqual(INITIAL_STATE);
});
