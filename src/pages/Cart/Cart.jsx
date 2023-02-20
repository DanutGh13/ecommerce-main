import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './cart.css';
import Layout from '../../components/Layout/Layout';
import { removeFromCart } from '../../redux/cart/cartAction';

function Cart(props) {
	const { products } = props;
	const totalSum = (products) => {
		return products.reduce((acc, product) => {
			return acc + product.quantity * product.price;
		}, 0);
	};

	return (
		<Layout>
			<div className="cart-page container p-4 ">
				{products.length ? (
					<div className="w-100 ">
						<div className=" d-flex justify-content-between  h4 text-bold">
							<p className="w-25">Produse</p>
							<p className="w-25">Pret</p>
							<p className="w-25">Cantitate</p>
							<p className="w-25 ">Total</p>
						</div>
						{products.map((product) => {
							return (
								<div
									className=" d-flex justify-content align-items-center text-center  "
									key={product.id}
								>
									<div className="w-25  d-flex flex-column justify-content-center ">
										<img src={product.image} alt="Produs" />
										<p>{product.name}</p>
									</div>
									<div className="w-25  d-flex flex-column justify-content-center ">
										<p>
											{product.price} {product.currency}
										</p>
									</div>
									<div className="w-25  d-flex flex-column justify-content-center ">
										<p>{product.quantity}</p>
									</div>
									<div className="w-25  d-flex flex-column justify-content-center ">
										<p>
											{product.price * product.quantity} {product.currency}
										</p>
									</div>
									<button
										className="btn btn-outline-danger"
										onClick={() => props.removeFromCart({ id: product.id })}
									>
										X
									</button>
								</div>
							);
						})}
						<div className="d-flex justify-content-end border-top">
							<div className="w-25 d-flex align-items-center justify-content-center">
								<p className="my-4 text-center font-weight-bold">Total </p>
							</div>

							<div className="w-25">
								<p className="my-4 text-center">
									{totalSum(products)} {products[0].currency}
								</p>
							</div>
						</div>
					</div>
				) : (
					<div className="d-flex flex-column align-items-center">
						<p className="h3">Cosul de cumparaturi este gol</p>
						<Link to="/">
							<button className="btn btn-outline-dark">Home</button>
						</Link>
					</div>
				)}
			</div>
		</Layout>
	);
}

function mapStateToProps(state) {
	return {
		products: state.cart.products
	};
}
function mapDispatchToProps(dispatch) {
	return {
		removeFromCart: (payload) => dispatch(removeFromCart(payload))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
