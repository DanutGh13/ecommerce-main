import React from 'react';
import Layout from '../../components/Layout/Layout';
import products from '../../utils/products.json';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/cartAction';
import { addToFav } from '../../redux/fav/favAction';
import './Product.css';

function Product(props) {
	const productId = props.match.params.productId;
	const category = props.match.params.categoryName;
	const items = products[category].items;
	const product = items.find((p) => p.id === +productId);

	return (
		<Layout>
			<div className="container mb-5">
				<h1 className="my-5 h2">{product.name}</h1>
				<div className="product-info d-flex">
					<div>
						<img src={product.image} alt="" />
					</div>
					<div className="container-fluid p-5">
						<p className="h3">
							{product.price} {product.currency}
						</p>
						<div>
							<div>
								<p>
									<b>Color</b>: {product.colour}
								</p>
							</div>
							<div>
								<p>
									<b>Material</b>: {product.material}
								</p>
							</div>
							<div>
								<p>
									<b>Brand</b>: {product.brand}
								</p>
							</div>
							<p className="font-weight-bold mb-1">
								<b>Descriere:</b>
							</p>
							<p className="text-wrap">{product.description}</p>
						</div>
						<button
							className="btn btn-dark mb-4 w-75 font-weight-bold "
							onClick={() => {
								props.addToCart({
									product: {
										id: productId,
										name: product.name,
										price: product.price,
										currency: product.currency,
										image: product.image,
										quantity: product.quantity
									}
								});
							}}
						>
							Adauga in cos
						</button>
						<button
							className="btn btn-secondary mb-4 w-75 font-weight-bold "
							onClick={() => {
								props.addToFav({
									product: {
										id: productId,
										name: product.name,
										price: product.price,
										currency: product.currency,
										image: product.image,
										quantity: product.quantity
									}
								});
							}}
						>
							Adauga la Favorite
						</button>
					</div>
				</div>
			</div>
		</Layout>
	);
}

function mapDispatchToProps(dispatch) {
	return {
		addToCart: (payload) => dispatch(addToCart(payload)),
		addToFav: (payload) => dispatch(addToFav(payload))
	};
}

export default connect(null, mapDispatchToProps)(Product);
