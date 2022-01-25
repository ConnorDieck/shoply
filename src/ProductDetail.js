import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CartButtons from "./CartButtons";
// import "./ProductDetails.css";

const ProductDetail = () => {
	const { id } = useParams();
	const product = useSelector(store => store.products[id]);
	return (
		<div className="col-md-3 mt-3">
			<div className="card">
				<div className="card-body">
					<h2 className="card-title text-center">{product.name}</h2>
					<h3 className="card-subtitle text-center mb-2 text-muted">${product.price}</h3>
					<p className="card-text text-center ">{product.description}</p>
				</div>
				<CartButtons id={id} />
			</div>
		</div>
	);
};

export default ProductDetail;
