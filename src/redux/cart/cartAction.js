import { add, remove } from './cartConstants';
export function addToCart(payload) {
	return { type: add, payload: payload };
}

export function removeFromCart(payload) {
	return {
		type: remove,
		payload: payload
	};
}
