import { add, remove } from './favConstants';
export function addToFav(payload) {
	return { type: add, payload: payload };
}

export function removeFromFav(payload) {
	return {
		type: remove,
		payload: payload
	};
}
