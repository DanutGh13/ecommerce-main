import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/cartAction';
import { addToFav } from '../../redux/fav/favAction';
import './ProductItem.css';

function ProductItem({ product, category, addToCartInjected, addToFavInjected }) {
	let name = product.name;
	let price = product.price;
	let currency = product.currency;
	let image = product.image;
	let quantity = product.quantity;
	let id = product.id;
	return (
		<div className="col-4 d-flex flex-column align-items-center mt-5">
			<Link to={`/products/${category}/${product.id}`}>
				<img className="imageProduct" src={image} alt="" />
			</Link>
			<h3 className="text-center">{name}</h3>
			<h4 className="text-center">
				{price} {currency}
			</h4>
			<button
				className="btn btn-dark mb-4 w-75 font-weight-bold"
				onClick={() => {
					addToCartInjected({ product: { name, price, currency, image, quantity, id } });
				}}
			>
				Adauga in cos
			</button>
			<button
				className="btn btn-secondary mb-4 w-75 font-weight-bold"
				onClick={() => {
					addToFavInjected({ product: { name, price, currency, image, quantity, id } });
				}}
			>
				Adauga la Favorite
			</button>
		</div>
	);
}

function mapDispatchToProps(dispatch) {
	return {
		addToCartInjected: (payload) => dispatch(addToCart(payload)),
		addToFavInjected: (payload) => dispatch(addToFav(payload))
	};
}

export default connect(null, mapDispatchToProps)(ProductItem);
