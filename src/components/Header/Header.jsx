import { Link } from 'react-router-dom';
import logo from '../../assets/images/danut-logo.png';
import './Header.css';
import { ReactComponent as ShoppingCart } from '../../assets/icons/shopping-cart.svg';
import { ReactComponent as Favorite } from '../../assets/icons/favorite.svg';
import React from 'react';
import { signOut } from '../../firebase-init';
import { connect } from 'react-redux';


function Header(props) {
	const { numberOfProductsInCart, numberOfProductsInFav } = props;
	return (
		<div className="header d-flex justify-content-between align-items-center container">
			<Link to="/">
				<img src={logo} alt="logo" />
			</Link>
			<div>
				{localStorage.name ? (
					<p>
						Esti logat:<b> {localStorage.name}</b>!
						<Link to="/" onClick={signOut}>
							Logout
						</Link>
					</p>
				) : (
					<Link to="/login">LogIn</Link>
				)}
			</div>
			<div></div>
	<div className="d-flex justify-content-end">
			<div className='p-2'>
				<p>Cos de cumparaturi</p>
				<Link to="/cart">
					<ShoppingCart />
				</Link>
				<p>{numberOfProductsInCart}</p>
			
				</div>

		<div className='p-2'>
	
		
		<p>Produse Favorite</p>
		<Link to="/fav">
			<Favorite />
		</Link>
		<p>{numberOfProductsInFav}</p>
		</div>

</div>
</div>
	);
}

function mapStateToProps(state) {
	return {
		numberOfProductsInCart: state.cart.products.length,
		numberOfProductsInFav: state.fav.products.length
	};
}

export default connect(mapStateToProps)(Header);
