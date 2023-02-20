import { legacy_createStore as createStore, combineReducers } from '@reduxjs/toolkit';
import favReducer from './fav/favReducer';
import cartReducer from './cart/cartReducer';

const rootReducer = combineReducers({
	cart: cartReducer,
	fav: favReducer
});
const store = createStore(rootReducer);

export default store;
