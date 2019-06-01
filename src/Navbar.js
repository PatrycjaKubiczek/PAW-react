import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css';

function Navbar (){
	return (
		<ul className="Navbar">
			<li className="Navbar-item">
				<Link to="/" href="/">Główna</Link>
			</li>
			<li className="Navbar-item">
				<Link to="/students" href="/students">Studenci</Link>
			</li>
			<li className="Navbar-item">
				<Link to="/contact" href="/contact">Kontact</Link>
			</li>

		</ul>
	);
}

export default Navbar;