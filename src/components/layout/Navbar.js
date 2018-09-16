import React from 'react';
import { NavLink } from 'react-router-dom';

import Form from './Form';


const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
			<div className="container">
				<i className="fas fa-drum text-light h2" />
				<h1 className="navbar-brand text-dark mt-2"><strong>&nbsp;Music AIO</strong></h1>
				<button 
					className="navbar-toggler" 
					type="button" 
					data-toggle="collapse" 
					data-target="#toggle-items" 
					aria-controls="toggle-items" 
					aria-expanded="false" 
					aria-label="Toggle navigation"
				>
			    <span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse ml-3" id="toggle-items">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item">
			        <NavLink className="nav-link text-center" exact to={`/`} activeStyle={{borderBottom: "1px solid #fff"}}>Tracks</NavLink>
			      </li>
			      <li className="nav-item">
			        <NavLink className="nav-link text-center" to={`/artists`} activeStyle={{borderBottom: "1px solid #fff"}}>Artists</NavLink>
			      </li>
			      <li className="nav-item">
			        <NavLink className="nav-link text-center" to={`/genres`} activeStyle={{borderBottom: "1px solid #fff"}}>Genres</NavLink>
			      </li>
			    </ul>
			    <Form />
			  </div>
			</div>
		</nav>
	);
}

export default Navbar;

