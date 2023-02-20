import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import ProductItem from '../../components/ProductItem/ProductItem';
import products from '../../utils/products.json';

class Category extends Component {
	render() {
		const category = this.props.match.params.categoryName;
		const data = products[category];

		return (
			<Layout>
				<div className="container">
					<div className="row">
						{data.items.map((item) => <ProductItem key={item.id} product={item} category={category} />)}
					</div>
				</div>
			</Layout>
		);
	}
}

export default Category;
