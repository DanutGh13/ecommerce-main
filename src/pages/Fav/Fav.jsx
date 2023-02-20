import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Fav.css';
import Layout from '../../components/Layout/Layout';
import { removeFromFav } from '../../redux/fav/favAction';

function Fav(props) {
	const { products } = props;

	return (
		<Layout>
			<div className="cart-page container p-4">
				{products.length ? (
					<div className="w-100">
						<div className="d-flex justify-content-between text-center h4 text-bold">
							<p className="w-25">Produse Favorite</p>
						</div>
						{products.map((product) => {
							return (
								<div
									className="d-flex justify-content-between align-items-center text-center "
									key={product.id}
								>
									<div className="d-flex justify-content-between text-center h4 text-bold">
										<img src={product.image} alt="Produs" />
										<p>{product.name}</p>
									</div>
									<p className="w-25">
										{product.price} {product.currency}
									</p>

									<button
										className="btn btn-outline-danger"
										onClick={() => props.removeFromFav({ id: product.id })}
									>
										X
									</button>
								</div>
							);
						})}
						<div className="d-flex justify-content-end border-top" />
					</div>
				) : (
					<div className="d-flex flex-column align-items-center">
						<p className="h3">Nu ai nimic in lista de Favorite</p>
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
		products: state.fav.products
	};
}
function mapDispatchToProps(dispatch) {
	return {
		removeFromFav: (payload) => dispatch(removeFromFav(payload))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Fav);
