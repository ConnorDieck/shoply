import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Link } from "react-router-dom";
import CartButtons from "./CartButtons";

import "./ProductList.css";

const ProductList = () => {
	const products = useSelector(store => store.products, shallowEqual);

	// console.log(products);

	const productCards = Object.keys(products).map(id => (
		<div className="col-md-3 mt-3" key={id} id={id}>
			<div className="card">
				<div className="card-body">
					<h2 className="card-title text-center">
						<Link to={`/products/${id}`}>{products[id].name}</Link>
					</h2>
				</div>
				<CartButtons id={id} />
			</div>
		</div>
	));

	return (
		<div>
			<h4>Take a look at our products!</h4>
			<div className="row">{productCards}</div>
		</div>
	);
};

export default ProductList;
