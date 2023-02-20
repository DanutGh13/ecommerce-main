import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
	const currentYear = new Date();
	return (
		<div className=" ">
			<div className="nav justify-content-center border-bottom pb-3  ">
				<Link className=" nav-link px-2 text-muted" to="/about">
					About
				</Link>

				<Link className="nav-link px-2 text-muted" to="/">
					Home
				</Link>
				<Link className="nav-link px-2 text-muted" to="/terms-conditions">
					Terms & Conditions
				</Link>
			</div>
			<p className="nav justify-content-center border-bottom pb-3 text-muteds">
				@ {currentYear.getFullYear()} danut Shop
			</p>
		</div>
	);
}

export default Footer;
