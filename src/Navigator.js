import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";

const Navigator = () => {
	return (
		<Routes>
			<Route path="/" element={<ProductList />} />
			<Route path="/products/:id" element={<ProductDetail />} />
			<Route path="/cart" element={<Cart />} />
		</Routes>
	);
};

export default Navigator;
