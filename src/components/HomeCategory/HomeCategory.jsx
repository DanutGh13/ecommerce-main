import React from 'react';
import { Link } from 'react-router-dom';
import './HomeCategory.css';

function HomeCategory(props) {
	const { image, title, description, routeName, name } = props;

	return (
		<div className="container_all col-6 mb-4">
			<Link to={`/category/${routeName}`}>
				<div className="image_container">
					<img src={image} alt="{name}" />
					<span className="title">{title}</span>
					<span className="title">{name}</span>
					<span className="description">{description}</span>
					<span className="line top" />
					<span className="line left" />
				</div>
			</Link>
		</div>
	);
}
export default HomeCategory;
