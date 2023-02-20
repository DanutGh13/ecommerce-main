import React from 'react';
import Layout from '../../components/Layout/Layout';
import HomeCategory from '../../components/HomeCategory/HomeCategory';
import products from '../../utils/products.json';

function Home() {
	const categories = Object.values(products);
	const categoryNames = Object.keys(products);

	return (
		<div>
			<Layout>
				<div className="container">
					<div className="row">
						{categories.map((category, index) => {
							return (
								<HomeCategory
									key={index}
									image={category.image}
									title={category.name}
									description={category.description}
									routeName={categoryNames[index]}
								/>
							);
						})}
					</div>
				</div>
			</Layout>
		</div>
	);
}

export default Home;
