import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calculateTotalQuantity } from "./helpers";

const Navbar = () => {
	const itemCount = useSelector(store => calculateTotalQuantity(store.cartItems));
	const totalCost = useSelector(store => store.totalCost);
	const itemPlural = itemCount === 1 ? "item" : "items";

	return (
		<nav className="navbar navbar-light">
			<Link to="/" className="navbar-brand text-dark">
				SHOPLY
			</Link>
			<ul className="navbar-nav flex-row">
				<li className="nav-item">
					<span className="navbar-text text-dark">
						{itemCount} {itemPlural} (${totalCost})
					</span>
				</li>
				<li className="nav-item">
					<Link to="/cart" className="navbar-text text-dark">
						Cart
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
