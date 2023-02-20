import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Page404 from './pages/Page404/Page404';
import Category from './pages/Category/Category';
import Product from './pages/Product/Product';
import { Component } from 'react';
import TermsAndCond from './pages/TermsAndCond/TermsAndCond';
import Cart from './pages/Cart/Cart';
import Fav from './pages/Fav/Fav';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/about" component={About} />
					<Route path="/login" component={Login} />
					<Route path="/terms-conditions" component={TermsAndCond} />
					<Route path="/category/:categoryName" component={Category} />
					<Route path="/products/:categoryName/:productId" component={Product} />
					<Route path="/cart" component={Cart} />
					<Route path="/fav" component={Fav} />
					<Route component={Page404} />
				</Switch>
			</div>
		);
	}
}
export default App;
