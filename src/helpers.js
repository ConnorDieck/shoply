export const calculateCartTotal = (products, cart) => {
	let total = 0;

	for (let id in products) {
		const { price } = products[id];
		const quantity = cart[id] || 0;
		total += price * quantity;
	}

	return total;
};

export const calculateTotalQuantity = cart => {
	let quantity = 0;

	for (let item in cart) {
		quantity += cart[item];
	}

	return quantity;
};

// export const calculateCartTotal = cartItems => {
// 	const ids = Object.keys(cartItems);

// 	const totalCost = ids.reduce((acc, next) => {
// 		return (acc += cartItems[next].price);
// 	}, cartItems[ids[0]].price);

// 	return totalCost;
// };

// "47314fa1-ae56-4eae-80be-af6691145951": {
//     "name": "tv",
//     "price": 219.99,
//     "description": "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
//     "image_url": "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"
//   }
