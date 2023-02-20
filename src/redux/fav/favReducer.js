const initialState = {
	products: []
};

function favReducer(state = initialState, action) {
	switch (action.type) {
		case 'ADD_TO_FAV':
			let inFav = false;
			const updatedProducts = state.products.map((product) => {
				if (product.id === action.payload.product.id) {
					inFav = true;
					return {
						...product,
						quantity: product.quantity + 1
					};
				} else {
					return product;
				}
			});

			if (!inFav) {
				return Object.assign({}, state, {
					products: [
						...state.products,
						{
							...action.payload.product,
							quantity: 1
						}
					]
				});
			} else {
				return Object.assign({}, state, {
					products: updatedProducts
				});
			}

		case 'REMOVE_FROM_FAV':
			const filteredProducts = state.products.filter((product) => {
				return product.id !== action.payload.id;
			});

			return Object.assign({}, state, {
				products: filteredProducts
			});

		default:
			return state;
	}
}

export default favReducer;
