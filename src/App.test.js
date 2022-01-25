import React from "react";
import { Provider } from "react-redux";
// import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";

import App from "./App";
import data from "./data.json";

const mockStore = configureStore([]);

describe("My Connected React-Redux App", () => {
	let store;
	let component;

	beforeEach(() => {
		store = mockStore({
			products  : data.products,
			cartItems : {},
			totalCost : 0
		});

		component = renderer.create(
			<Provider store={store}>
				<App />
			</Provider>
		);
	});

	it("should render with given state from Redux store", () => {
		expect(component.toJSON()).toMatchSnapshot();
	});
});
